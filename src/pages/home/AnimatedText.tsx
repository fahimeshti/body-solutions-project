import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function CoverRevealCursorFM({
  text = "Tristique.",
  initialDelay = 1.5,
  revealDuration = 0.8,
  coverDuration = 0.4,
  endDelay = 0.5,
  cursorWidth = 7,
  cursorHeightEm = 1.25,
  className = "",
}: {
  text?: string;
  initialDelay?: number;
  revealDuration?: number;
  coverDuration?: number;
  endDelay?: number;
  cursorWidth?: number;
  cursorHeightEm?: number;
  className?: string;
}) {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      setWidth(rect.width);
      const current = x.get();
      if (current > rect.width) x.set(rect.width);
      if (current < 0) x.set(0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (textRef.current) ro.observe(textRef.current);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [text, x]);

  useEffect(() => {
    if (width <= 0) return;
    let cancelled = false;

    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

    (async () => {
      while (!cancelled) {
        x.set(0);
        await wait(initialDelay * 1000);

        // Reveal (left to right)
        await animate(x, width, { duration: revealDuration, ease: "linear" })
          .finished;
        if (cancelled) break;

        // pause at right edge
        x.set(width);
        await wait(endDelay * 1000);
        if (cancelled) break;

        // Cover (right to left)
        await animate(x, 0, { duration: coverDuration, ease: "linear" })
          .finished;
        if (cancelled) break;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [width, x, initialDelay, revealDuration, coverDuration, endDelay]);

  const sharedDimentions = { height: `${cursorHeightEm}em` } as const;

  return (
    <div
      className={
        "relative inline-flex items-center justify-center px-1 " +
        (className || "")
      }
    >
      <span
        ref={textRef}
        className="relative z-0 leading-[36px] lg:leading-[5.6rem] text-secondary block pr-1"
      >
        {text}
      </span>

      <motion.div
        className="pointer-events-none absolute inset-y-1/2 z-10 -translate-y-1/2 bg-page"
        style={{ left: x, right: 0, ...sharedDimentions }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute inset-y-1/2 z-20 -translate-y-1/2 bg-secondary animation-blink"
        style={{ left: x, width: `${cursorWidth}px`, ...sharedDimentions }}
        aria-hidden
      />
    </div>
  );
}
