"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Send } from "lucide-react"

const footerLinks = [
  { name: "Kurs haqida", href: "/#kurs" },
  { name: "Yo'nalishlar", href: "/#yonalishlar" },
  { name: "Nimalar kiradi?", href: "/#nimalar" },
]

export function Footer() {
  return (
    <footer className="bg-card pt-20 pb-10 relative overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="font-serif text-[200px] sm:text-[200px] md:text-[400px] lg:text-[400px] xl:text-[400px] font-bold text-white/20 whitespace-nowrap leading-none">
          Kurs
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Kelinlikka tayyorlash"
                width={180}
                height={66}
                className="h-16 w-auto object-contain"
                sizes="180px"
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Kelinlikka ma'naviy va amaliy tayyorgarlik kursi. 9 yo'nalish, 56 ta video, 1,5 oy.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/kelinlikka_tayyorlash/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-10 h-10 rounded-full bg-background items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/kelinlikka_tayyorlash_admin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-10 h-10 rounded-full bg-background items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="Telegram"
                title="Kurs bo'yicha ma'lumot"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Kurs links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Kurs</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground boty-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kelinlikka tayyorlash. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground boty-transition">
                Maxfiylik siyosati
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground boty-transition">
                Foydalanish shartlari
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
