"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "../lib/useReducedMotion";

// /public/hero-eagle-zoom.mp4 is a pre-authored cinematic dolly-zoom from
// the full Kargu emblem down into the eagle's eye, ending on a lens-flare
// glow. It just autoplays once on load — no scroll-scrubbing. Tying video
// currentTime to scroll position looked connected in principle, but real
// seek latency (the browser has to decode forward from the nearest
// keyframe on every scroll tick) made it stutter. Letting the browser's
// native playback pipeline run the video is what's actually smooth.
//
// This is no longer the homepage's opening/dominant section — that role
// now belongs to the technical-illustration Hero. The eagle emblem is the
// company's symbol and still gets its own cinematic moment, just further
// down the homepage narrative, at a reduced (not full-viewport) scale.
export default function EagleEyeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const onEnded = () => setVideoEnded(true);
    video.addEventListener("ended", onEnded);
    video.muted = true;
    video.playsInline = true;
    video.play().catch(() => setVideoEnded(true));

    return () => video.removeEventListener("ended", onEnded);
  }, [reduceMotion]);

  const revealed = reduceMotion || videoEnded;

  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-ink">
      {reduceMotion ? (
        <Image
          src="/hero-poster.png"
          alt="Kargu — çift başlı kartal amblemi"
          fill
          unoptimized
          className="object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-eagle-zoom.mp4"
          poster="/hero-poster.png"
          muted
          playsInline
          preload="auto"
          aria-label="Kargu — çift başlı kartal amblemi, gözüne yakınlaşan sinematik geçiş"
        />
      )}

      {/* Permanent, mild cinematic vignette. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 45%, transparent 60%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div
        className="absolute inset-0 bg-ink pointer-events-none transition-opacity duration-1000 ease-out"
        style={{ opacity: revealed ? 0.55 : 0 }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-ink via-ink/40 to-transparent pointer-events-none"
      />

      <div
        className="absolute inset-x-0 bottom-8 sm:bottom-14 flex flex-wrap gap-3 sm:gap-4 justify-center px-6 transition-all duration-700 ease-out"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(18px)",
          pointerEvents: revealed ? "auto" : "none",
        }}
      >
        <Link
          href="/hakkimizda"
          className="rounded-2xl bg-accent px-6 py-3 text-white font-semibold hover:bg-accent-hover transition"
        >
          Kargu Hakkında
        </Link>
        <Link
          href="/iletisim"
          className="rounded-2xl border border-white/20 px-6 py-3 text-white hover:bg-white/5 transition"
        >
          Teklif Al
        </Link>
      </div>
    </section>
  );
}
