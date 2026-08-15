"use client";

import { useEffect, useRef } from "react";

const MAX_SHIFT_VW = 30;

export default function SplitEagleBackground() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let ticking = false;
    const updateScroll = () => {
      ticking = false;
      const vh = window.innerHeight || 1;
      const progress = Math.min(Math.max(window.scrollY / vh, 0), 1);
      const shift = progress * MAX_SHIFT_VW;
      if (leftRef.current) leftRef.current.style.transform = `translateX(-${shift}vw)`;
      if (rightRef.current) rightRef.current.style.transform = `translateX(${shift}vw)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Both halves are the same full-viewport box (same background-size/position
  // computed from identical dimensions) and only differ by clip-path — this
  // guarantees the seam lines up exactly, instead of relying on two
  // independently-widthed elements whose 50% layouts can round to different
  // pixel widths and throw the seam off by a subpixel.
  const shared = {
    backgroundImage: "url(/bg-eagle-wireframe.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(1.6) contrast(1.15)",
  } as const;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        ref={leftRef}
        className="absolute inset-0 will-change-transform"
        style={{ ...shared, clipPath: "inset(0 50% 0 0)" }}
      />
      <div
        ref={rightRef}
        className="absolute inset-0 will-change-transform"
        style={{ ...shared, clipPath: "inset(0 0 0 50%)" }}
      />
    </div>
  );
}
