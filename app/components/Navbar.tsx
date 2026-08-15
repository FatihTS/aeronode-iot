"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { href: "/#urunler", label: "Ürünler" },
  { href: "/teknoloji", label: "Teknoloji" },
  { href: "/projeler", label: "Uygulamalar" },
  { href: "/muhendislik", label: "Mühendislik" },
  { href: "/hakkimizda", label: "Kurumsal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-square.png"
            alt="Kargu amblemi"
            width={36}
            height={36}
            className="rounded-md"
            priority
          />
          Kargu
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 text-sm text-fg-muted">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-xl hover:text-fg hover:bg-white/5 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            className="ml-2 px-4 py-2 rounded-xl border border-line hover:text-fg hover:bg-white/5 transition"
          >
            İletişim
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-fg-muted hover:bg-white/5 transition shrink-0"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} weight="bold" aria-hidden="true" /> : <List size={22} weight="bold" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96 border-t border-line" : "max-h-0"
        }`}
      >
        <div className="px-6 py-3 flex flex-col gap-1 text-sm text-fg bg-ink/95">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2.5 rounded-xl hover:text-fg hover:bg-white/5 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            className="mt-1 px-3 py-2.5 rounded-xl border border-line text-center hover:text-fg hover:bg-white/5 transition"
            onClick={() => setOpen(false)}
          >
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}
