import { useEffect } from "react";
import { useMotionValue, animate, useReducedMotion } from "framer-motion";
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
  const progress = useMotionValue(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      progress.set(1);
      return;
    }

    let active = true;
    const run = async () => {
      while (active) {
        // @ts-ignore
        await animate(progress, 1, spring).finished;
        if (!active) break;
        await new Promise((r) => setTimeout(r, holdMs));
        // @ts-ignore
        await animate(progress, 0, spring).finished;
        if (!active) break;
        await new Promise((r) => setTimeout(r, holdMs));
      }
    };
    run();
    return () => {
      active = false;
    };
  }, [prefersReducedMotion, spring, holdMs, progress]);

  function register(from: string, to: string) {
    const start = outerOnly ? OUTER_ONLY(from) : from;
    const end = outerOnly ? OUTER_ONLY(to) : to;
    const d = useMotionValue(start);

    useEffect(() => {
      const interp = flubberInterpolate(start, end, { maxSegmentLength: 2 });
      const unsub = progress.on("change", (t) => {
        const tt = Math.max(0, Math.min(1, t));
        d.set(interp(tt));
      });
      return unsub;
    }, [start, end, progress, d]);

    return d;
  }

  return register;
}
