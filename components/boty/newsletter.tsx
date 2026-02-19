"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const TO_EMAIL = "mashriqmashali2026@gmail.com"

/** +998 dan keyingi 9 ta raqamni (XX) XXX-XX-XX qilib formatlash; 1 ta raqamda qavs yo‘q (backspace uchun) */
function formatAfter998(digits: string): string {
  const d = digits.slice(0, 9)
  if (d.length === 0) return ""
  if (d.length === 1) return d
  if (d.length <= 2) return `(${d})`
  if (d.length <= 5) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2, 5)}-${d.slice(5)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 5)}-${d.slice(5, 7)}-${d.slice(7, 9)}`
}

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [phoneDigits, setPhoneDigits] = useState("")
  const [phoneFocused, setPhoneFocused] = useState(false)

  const phoneDisplay =
    phoneDigits.length > 0
      ? `+998 ${formatAfter998(phoneDigits)}`
      : phoneFocused
        ? "+998 "
        : ""

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const allDigits = raw.replace(/\D/g, "")
    const after998 = allDigits.startsWith("998") ? allDigits.slice(3) : allDigits
    setPhoneDigits(after998.slice(0, 9))
  }

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Backspace") return
    if (phoneDigits.length > 0) {
      setPhoneDigits((prev) => prev.slice(0, -1))
      e.preventDefault()
    } else if (phoneFocused) {
      setPhoneFocused(false)
      e.preventDefault()
    }
  }

  const handlePhoneFocus = () => {
    setPhoneFocused(true)
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = "Kursga yozilish — yangi ariza"
    const body = [
      "Yangi ariza (Kelinlikka tayyorlash)",
      "",
      `Email: ${email.trim()}`,
      `Telefon: ${phoneDisplay.trim() || "—"}`,
      "",
      "Sayt orqali yuborilgan.",
    ].join("\n")
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TO_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Image
            src="/logo.png"
            alt="Kelinlikka tayyorlash"
            width={160}
            height={58}
            className="h-14 w-auto object-contain mx-auto mb-6 brightness-0 invert opacity-90"
            sizes="160px"
            loading="lazy"
          />
          <h2 className="font-serif text-4xl leading-tight text-primary-foreground mb-4 text-balance md:text-7xl">
            Kursga yozilish
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Email va telefon raqamingizni qoldiring — siz bilan bog'lanamiz va kurs haqida batafsil aytamiz.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 boty-transition"
              required
            />
            <input
              type="tel"
              value={phoneDisplay}
              onChange={handlePhoneChange}
              onKeyDown={handlePhoneKeyDown}
              onFocus={handlePhoneFocus}
              placeholder="+998 (90) 123-45-67"
              className="w-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 boty-transition"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-primary-foreground/90"
            >
              Jo'natish
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
            </button>
          </form>
          <p className="text-sm text-primary-foreground/60 mt-4">
            Jo'natish tugmasini bosganda Gmail ochiladi — xat mashriqmashali2026@gmail.com ga yuboriladi.
          </p>

          <p className="text-sm text-primary-foreground/70 mt-6">
            <span className="font-medium">To'liq kurs bo'yicha ma'lumot olish uchun</span> — Telegram orqali yozing:{" "}
            <a
              href="https://t.me/kelinlikka_tayyorlash_admin"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline font-medium"
            >
              @kelinlikka_tayyorlash_admin
            </a>
          </p>

          <p className="text-sm text-primary-foreground/60 mt-4">
            Ma'lumotlaringiz faqat siz bilan bog'lanish uchun ishlatiladi.
          </p>
        </div>
      </div>
    </section>
  )
}
