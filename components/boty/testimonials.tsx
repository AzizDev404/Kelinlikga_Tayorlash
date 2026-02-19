"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Dilnoza R.",
    location: "Toshkent",
    rating: 5,
    text: "psixologiya bo'limi menga kk bo'ldi valla. kelishuvdan oldin o'qib chiqsam edi, juda ko'p narsa tushundim",
    product: "Psixologiya"
  },
  {
    id: 2,
    name: "Madina K.",
    location: "Samarqand",
    rating: 5,
    text: "oshxona qismini tugatdim, ertaga to'y. karving sinab ko'rdim — qanday chiqdi ko'rasizmi. nervlarim qotdi lekin",
    product: "Oshxona san'ati"
  },
  {
    id: 3,
    name: "Sevinch T.",
    location: "Buxoro",
    rating: 5,
    text: "ishlab o'qidim, kechqurun videolar ko'rdim. 2 oy bo'ldi tugatganimga. sertifikat kelib qoldi pochtada",
    product: "Kurs"
  },
  {
    id: 4,
    name: "Nilufar A.",
    location: "Farg'ona",
    rating: 5,
    text: "massajni o'zimga qildim bugun. yoqdi. endi har kuni 10-15 minut vaqt topishga harakat qilaman",
    product: "Kosmetologiya"
  },
  {
    id: 5,
    name: "Zuhra M.",
    location: "Andijon",
    rating: 5,
    text: "bitta savolim bor edi adminlarga yozdim — 20 daqiqada javob keldi. buni yoqdi, boshqa kurslarda kunlar kutish kerak edi",
    product: "Qo'llab-quvvatlash"
  },
  {
    id: 6,
    name: "Gulnora S.",
    location: "Qarshi",
    rating: 5,
    text: "dastlab shubham bor edi nozik mavzular bo'yicha. lekin yaxshi tushuntirib berishgan, xijolat qilish shart emasligini tushundim",
    product: "Go'zallik saboqlari"
  },
  {
    id: 7,
    name: "Dilobar H.",
    location: "Namangan",
    rating: 5,
    text: "ai bo'limiga kirmadim dastlab, keyin ko'zdan kechirdim — vay. prompt nima ekanligini bilmasdim. endi chatgptdan yaxshiroq foydalana olaman",
    product: "Sun'iy intellekt"
  },
  {
    id: 8,
    name: "Shahlo J.",
    location: "Nukus",
    rating: 5,
    text: "stilistika qismi menga kk edi. endi nimani qachon kiyishni bilaman, ranglar qaysilari mos kelishini ham. oilam ham farq qildi",
    product: "Imidj & stilistika"
  },
  {
    id: 9,
    name: "Feruza O.",
    location: "Urganch",
    rating: 5,
    text: "do'stlarim ham so'rayapti qayerda o'qiganman. aytdim. 4 oylik kirish bor ekan, keyinroq qayta ko'rib chiqaman balki",
    product: "Kurs"
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[number] }) => {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toLowerCase()
  const username = testimonial.name.toLowerCase().replace(/\./g, "").replace(/\s/g, "_")
  return (
    <div className="flex gap-3 py-4 px-4 shrink-0 bg-white rounded-2xl mb-3 border border-black/6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
      {/* Avatar — Instagram style */}
      <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-[#e0e0e0] to-[#c0c0c0] flex items-center justify-center text-xs font-semibold text-[#262626]">
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[14px] leading-[1.45] text-[#262626]">
          <span className="font-semibold text-[#262626]">{username}</span>
          {" "}
          <span className="font-normal">{testimonial.text}</span>
        </p>
        <p className="text-[12px] text-[#8e8e8e] mt-1.5">
          {testimonial.location} · {testimonial.product}
        </p>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  
  const column1 = [testimonials[0], testimonials[3], testimonials[6]]
  const column2 = [testimonials[1], testimonials[4], testimonials[7]]
  const column3 = [testimonials[2], testimonials[5], testimonials[8]]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-24 overflow-hidden pb-24 pt-12" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            Fikr-mulohazalar
          </span>
          <h2 className={`font-serif text-4xl leading-tight text-foreground text-balance md:text-7xl ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            Kursimiz haqida nima deyishadi
          </h2>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#fafafa] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none" />
          
          {/* Mobile - Single Column */}
          <div className="md:hidden h-[600px]">
            <div className="relative overflow-hidden h-full">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard key={`mobile-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop - Three Columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 h-[600px]">
            {/* Column 1 - Scrolling Down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column1, ...column1].map((testimonial, index) => (
                  <TestimonialCard key={`col1-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Column 2 - Scrolling Up */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-up hover:animate-scroll-up-slow">
                {[...column2, ...column2].map((testimonial, index) => (
                  <TestimonialCard key={`col2-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Column 3 - Scrolling Down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column3, ...column3].map((testimonial, index) => (
                  <TestimonialCard key={`col3-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .animate-scroll-down-slow {
          animation: scroll-down 60s linear infinite;
        }

        .animate-scroll-up-slow {
          animation: scroll-up 60s linear infinite;
        }
      `}</style>
    </section>
  )
}
