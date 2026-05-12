import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          AeroNode <span className="text-emerald-400">IoT</span>
        </Link>

        <div className="flex items-center gap-1 text-sm text-zinc-400">
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
            href="/#iletisim"
            className="ml-2 px-4 py-2 rounded-xl border border-white/20 hover:text-white hover:bg-white/5 transition"
          >
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}
