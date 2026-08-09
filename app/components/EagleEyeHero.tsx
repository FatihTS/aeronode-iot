"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getReducedMotionServerSnapshot() {
  return false;
}

// /public/hero-eagle-zoom.mp4 is a pre-authored cinematic dolly-zoom from
// the full Kargu emblem down into the eagle's eye, ending on a lens-flare
// glow. It just autoplays once on load — no scroll-scrubbing. Tying video
// currentTime to scroll position looked connected in principle, but real
// seek latency (the browser has to decode forward from the nearest
// keyframe on every scroll tick) made it stutter. Letting the browser's
// native playback pipeline run the video is what's actually smooth.
export default function EagleEyeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const [videoEnded, setVideoEnded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 40) setScrolled(true);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const revealed = reduceMotion || videoEnded;
  const cueHidden = revealed || scrolled;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {reduceMotion ? (
        <Image
          src="/hero-poster.png"
          alt="Kargu Teknoloji — çift başlı kartal amblemi"
          fill
          priority
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
          aria-label="Kargu Teknoloji — çift başlı kartal amblemi, gözüne yakınlaşan sinematik geçiş"
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

      {/* Settles the composition once the video has played through, so the
          CTA row reads as an arrival rather than popping over a bright
          frame mid-flare. No hard cut. */}
      <div
        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-1000 ease-out"
        style={{ opacity: revealed ? 0.55 : 0 }}
      />

      {/* Bottom scrim — the video's own baked-in icon row sits low in
          frame; this keeps the CTA row (and the icon row behind it)
          legible instead of the two fighting for contrast, especially on
          narrow/tall mobile crops where object-cover keeps more of the
          bottom of the frame in view. */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 sm:h-64 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"
      />

      <div
        className="absolute inset-x-0 bottom-8 sm:bottom-32 flex flex-wrap gap-3 sm:gap-4 justify-center px-6 transition-all duration-700 ease-out"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(18px)",
          pointerEvents: revealed ? "auto" : "none",
        }}
      >
        <a
          href="#nasil-calisir"
          className="rounded-2xl bg-amber-400 px-6 py-3 text-black font-semibold hover:bg-amber-300 transition"
        >
          Nasıl Çalışır?
        </a>
        <a
          href="#iletisim"
          className="rounded-2xl border border-white/20 px-6 py-3 text-white hover:bg-white/5 transition"
        >
          Fiyat & Teklif Al
        </a>
      </div>

      {/* No fade here on purpose — it disappears the instant the CTA row
          starts revealing, so the two never share the same moment and
          fight for the same strip of space at the bottom of the frame. */}
      <div
        className="absolute bottom-6 inset-x-0 flex justify-center text-zinc-500 text-xs tracking-widest animate-bounce pointer-events-none"
        style={{ opacity: cueHidden ? 0 : 1 }}
      >
        AŞAĞI KAYDIR
      </div>
    </section>
  );
}
