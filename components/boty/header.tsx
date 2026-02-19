"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 backdrop-blur-md rounded-lg py-0 my-0 animate-scale-fade-in bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.32)]" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}>
        <div className="flex items-center justify-between h-[68px]">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground boty-transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        {/* Desktop Navigation - Left (Landing sections) */}
        <div className="hidden lg:flex items-center gap-8">
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
        </div>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <Image
              src="/logo.png"
              alt="Kelinlikka tayyorlash"
              width={160}
              height={58}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Right: CTA (landing) */}
          <div className="flex items-center">
            <Link
              href="/#kurs"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-primary/90 boty-transition"
            >
              Kursga yozilish
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 boty-transition" />
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
              className="text-sm tracking-wide text-primary font-medium hover:text-primary/80 boty-transition"
            >
              Kursga yozilish
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
