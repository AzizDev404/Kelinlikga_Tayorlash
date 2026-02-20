"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md rounded-lg py-0 my-0 animate-scale-fade-in bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.32)]" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}>
        <div className="relative flex items-center justify-between gap-4 min-h-[56px] sm:min-h-[68px]">
          {/* Left: Mobile menu / Desktop nav */}
          <div className="flex items-center shrink-0 min-w-[44px] lg:min-w-0 z-10">
            <button
              type="button"
              className="lg:hidden p-2 -m-2 text-foreground/80 hover:text-foreground boty-transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/#kurs" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition">Kurs haqida</Link>
              <Link href="/#yonalishlar" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition">Yo'nalishlar</Link>
              <Link href="/#nimalar" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition">Nimalar kiradi</Link>
            </div>
          </div>

          {/* Logo — doim markazda */}
          <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center z-10">
            <Image
              src="/logo.png"
              alt="Kelinlikka tayyorlash"
              width={180}
              height={66}
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              priority
              sizes="(max-width: 640px) 140px, 180px"
            />
          </Link>

          {/* Right: CTA faqat desktopda; mobil da bo'sh joy */}
          <div className="flex items-center shrink-0 min-w-[44px] lg:min-w-0 justify-end z-10">
            <Link
              href="/#kurs"
              className="hidden lg:inline-flex group items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-primary/90 boty-transition whitespace-nowrap"
            >
              Kursga yozilish
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 boty-transition shrink-0" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden boty-transition ${
            isMenuOpen ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
            <Link
              href="/#kurs"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition"
            >
              Kurs haqida
            </Link>
            <Link
              href="/#yonalishlar"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition"
            >
              Yo'nalishlar
            </Link>
            <Link
              href="/#nimalar"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition"
            >
              Nimalar kiradi
            </Link>
            <Link
              href="/#kurs"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium hover:bg-primary/90 boty-transition mt-2"
            >
              Kursga yozilish
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 boty-transition shrink-0" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
