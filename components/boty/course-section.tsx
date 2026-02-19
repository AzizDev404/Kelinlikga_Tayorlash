"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  Heart,
  UtensilsCrossed,
  Hand,
  Sparkles,
  Palette,
  BookOpen,
  Carrot,
  Shirt,
  Cpu,
  Video,
  MessageCircle,
  Clock,
  Award,
  Users,
  HelpCircle,
  ArrowRight,
  Check,
} from "lucide-react"

const modules = [
  { icon: Heart, title: "Psixologiya", desc: "Er-xotin munosabatlari, xarakter tipajlari, erkak va ayol psixologiyasini chuqur tushunish." },
  { icon: UtensilsCrossed, title: "Oshxona san'ati", desc: "Mazali va foydali taomlar tayyorlash sirlari, oilaviy dasturxon madaniyati." },
  { icon: Hand, title: "Massaj texnikalari", desc: "Uy sharoitida bajariladigan foydali muolajalar." },
  { icon: Sparkles, title: "Kosmetologiya", desc: "Teri parvarishi, kundalik va haftalik go'zallik rutinalari." },
  { icon: Palette, title: "Go'zallik saboqlari", desc: "Tabiiy va bayramona bo'yanish usullari." },
  { icon: BookOpen, title: "Nozik masalalar", desc: "Ayollar salomatligi, gigiyena, homiladorlikka tayyorgarlik va sog'lom hayot tarzi." },
  { icon: Carrot, title: "Karving san'ati", desc: "Sabzavot va mevalardan estetik bezaklar yaratish." },
  { icon: Shirt, title: "Imidj & stilistika", desc: "Zamonaviy kiyinish madaniyati va o'zingizga mos uslub yaratish." },
  { icon: Cpu, title: "Sun'iy intellekt (AI)", desc: "Qo'shimcha daromad uchun: prompt injiniring, rasm va video animatsiya asoslari." },
]

const includes = [
  { icon: Video, text: "56 ta to'liq video darslik — bosqichma-bosqich, qayta-qayta ko'rish mumkin." },
  { icon: MessageCircle, text: "Maxsus Telegram guruh — barcha videolar va materiallar tartibli joylashtirilgan." },
  { icon: Clock, text: "Istalgan vaqtda, istalgan joyda o'qish imkoniyati." },
  { icon: Award, text: "Kurs yakunida sertifikat — rasmiy tasdiqlovchi hujjat." },
  { icon: Users, text: "4 oylik to'liq kirish — barcha darslarni qayta ko'rib bilimlarni mustahkamlash." },
  { icon: MessageCircle, text: "Har hafta ustozlar bilan jonli video chatlar." },
  { icon: HelpCircle, text: "Adminlar tomonidan tezkor yordam." },
]

export function CourseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Kurs
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-2 mb-6">
            Kelinlikka tayyorlash
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kelajakdagi oilaviy hayotga faqat tayyor emas, balki ongli, ishonchli va zamonaviy ayol sifatida qadam qo'yishni istaysizmi? Ushbu kurs — qizlarni turmushga har tomonlama tayyorlash uchun mutaxassislar tomonidan yaratilgan kompleks ta'lim dasturidir. Siz bu yerda nafaqat nazariya, balki kundalik hayotda kerak bo'ladigan amaliy bilim va ko'nikmalarni ham egallaysiz.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <strong className="text-foreground">Davomiyligi:</strong> 1,5 oy
            </span>
            <span className="inline-flex items-center gap-2">
              <Video className="w-5 h-5 text-primary" />
              <strong className="text-foreground">56 ta</strong> maxsus video darslik
            </span>
          </div>
        </div>

        {/* 9 modules */}
        <div
          className={`mb-20 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-10">
            Kursning 9 ta asosiy yo'nalishi
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => {
              const Icon = m.icon
              return (
                <div
                  key={m.title}
                  className="rounded-2xl bg-card border border-border p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {i + 1}. {m.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* What's included */}
        <div
          className={`rounded-3xl bg-card border border-border p-8 md:p-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-10">
            Kursga nimalar kiradi?
          </h3>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {includes.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.text} className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground pt-1.5">{item.text}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Closing CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Bu kurs sizga faqat nazariy bilim emas, balki kundalik hayotda qo'llanadigan amaliy ko'nikmalarni ham beradi. Har bir dars kelajakdagi oilaviy hayotda o'zingizni erkin, ishonchli va tayyor his qilishingiz uchun ishlab chiqilgan. Kurs davomida siz nafaqat yangi bilimlarga ega bo'lasiz, balki o'zingizga bo'lgan ishonchni oshirib, zamonaviy va ongli ayol sifatida rivojlanish yo'lida katta qadam tashlaysiz.
          </p>
          <Link
            href="/#kurs"
            className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
          >
            Kursga yozilish
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
