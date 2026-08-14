"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-square.png"
            alt="Kargu Teknoloji amblemi"
            width={36}
            height={36}
            className="rounded-md"
            priority
          />
          Kargu <span className="text-amber-400">Teknoloji</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 text-sm text-zinc-400">
          <Link
            href="/#nasil-calisir"
            className="px-3 py-2 rounded-xl hover:text-white hover:bg-white/5 transition"
          >
            Nasıl Çalışır
          </Link>
          <Link
            href="/projeler"
            className="px-3 py-2 rounded-xl hover:text-white hover:bg-white/5 transition"
          >
            Projeler
          </Link>
          <Link
            href="/hakkimizda"
            className="px-3 py-2 rounded-xl hover:text-white hover:bg-white/5 transition"
          >
            Hakkımızda
          </Link>
          <Link
            href="/iletisim"
            className="ml-2 px-4 py-2 rounded-xl border border-white/20 hover:text-white hover:bg-white/5 transition"
          >
            İletişim
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-zinc-300 hover:bg-white/5 transition shrink-0"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-60 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="px-6 py-3 flex flex-col gap-1 text-sm text-zinc-300 bg-black/95">
          <Link
            href="/#nasil-calisir"
            className="px-3 py-2.5 rounded-xl hover:text-white hover:bg-white/5 transition"
            onClick={() => setOpen(false)}
          >
            Nasıl Çalışır
          </Link>
          <Link
            href="/projeler"
            className="px-3 py-2.5 rounded-xl hover:text-white hover:bg-white/5 transition"
            onClick={() => setOpen(false)}
          >
            Projeler
          </Link>
          <Link
            href="/hakkimizda"
            className="px-3 py-2.5 rounded-xl hover:text-white hover:bg-white/5 transition"
            onClick={() => setOpen(false)}
          >
            Hakkımızda
          </Link>
          <Link
            href="/iletisim"
            className="mt-1 px-3 py-2.5 rounded-xl border border-white/20 text-center hover:text-white hover:bg-white/5 transition"
            onClick={() => setOpen(false)}
          >
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}
