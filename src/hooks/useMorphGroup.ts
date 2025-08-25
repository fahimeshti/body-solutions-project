import { useEffect, useRef, useCallback } from "react";
import {
  motionValue,
  animate,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { interpolate as flubberInterpolate } from "flubber";

const OUTER_ONLY = (d: string) => {
  const i = d.toUpperCase().indexOf("Z");
  return i >= 0 ? d.slice(0, i + 1) : d;
};

type UseMorphGroupOpts = {
  holdMs?: number;
  spring?: Parameters<typeof animate>[2];
  outerOnly?: boolean;
};

type Item = {
  mv: MotionValue<string>;
  interp: (t: number) => string;
};

export function useMorphGroup({
  holdMs = 100,
  spring = {
    type: "spring",
    stiffness: 150,
    damping: 3,
    mass: 0.5,
    bounce: 0.5,
    restDelta: 0.01,
    restSpeed: 0.1,
  },
  outerOnly = true,
}: UseMorphGroupOpts = {}) {
  const prefersReducedMotion = useReducedMotion();

  // group-level progress (not a hook-based MV)
  const progress = useRef(motionValue(0));

  // items registered to this group
  const itemsRef = useRef<Item[]>([]);
  // avoid duplicate registrations across renders
  const cacheRef = useRef<Map<string, MotionValue<string>>>(new Map());

  const register = useCallback(
    (from: string, to: string) => {
      const start = outerOnly ? OUTER_ONLY(from) : from;
      const end = outerOnly ? OUTER_ONLY(to) : to;
      const key = `${start}→${end}`;

      const cached = cacheRef.current.get(key);
      if (cached) return cached;

      const mv = motionValue(start);
      const interp = flubberInterpolate(start, end, { maxSegmentLength: 2 });

      itemsRef.current.push({ mv, interp });
      cacheRef.current.set(key, mv);

      return mv;
    },
    [outerOnly]
  );

  useEffect(() => {
    // update all items whenever progress changes
    const unsub = progress.current.on("change", (t) => {
      const tt = Math.max(0, Math.min(1, Number(t)));
      for (const { mv, interp } of itemsRef.current) {
        mv.set(interp(tt));
      }
    });

    if (prefersReducedMotion) {
      progress.current.set(1);
      // snap everything to end state once
      for (const { mv, interp } of itemsRef.current) mv.set(interp(1));
      return () => unsub();
    }

    let active = true;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const run = async () => {
      while (active) {
        // @ts-ignore animate typings are fine here
        await animate(progress.current, 1, spring).finished;
        if (!active) break;
        await sleep(holdMs);
        // @ts-ignore
        await animate(progress.current, 0, spring).finished;
        if (!active) break;
        await sleep(holdMs);
      }
    };
    run();

    return () => {
      active = false;
      unsub();
      // optional: clear registries if you expect keys to change across mounts
      // itemsRef.current = [];
      // cacheRef.current.clear();
    };
  }, [prefersReducedMotion, spring, holdMs]);

  return register;
}
