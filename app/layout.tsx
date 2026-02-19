import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/components/boty/cart-context'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600']
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kelinlikka-tayyorlash.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  title: 'Kelinlikka tayyorlash | Kelinlik kursi',
  description: 'Kelinlikka ma\'naviy va amaliy tayyorgarlik kursi. 9 yo\'nalish, 56 ta video, 1,5 oy. Psixologiya, oshxona, kosmetologiya, AI va boshqalar.',
  keywords: ['kelinlikka tayyorlash', 'kelinlik kursi', 'turmushga tayyorgarlik', 'kelinlik saboqlari', 'psixologiya', 'oshxona san\'ati', 'O\'zbekiston'],
  openGraph: {
    title: 'Kelinlikka tayyorlash | Kelinlik kursi',
    description: 'Kelinlikka ma\'naviy va amaliy tayyorgarlik kursi. 9 yo\'nalish, 56 ta video, 1,5 oy.',
    url: siteUrl,
    siteName: 'Kelinlikka tayyorlash',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Kelinlikka tayyorlash' }],
    locale: 'uz_UZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelinlikka tayyorlash | Kelinlik kursi',
    description: 'Kelinlikka ma\'naviy va amaliy tayyorgarlik. 9 yo\'nalish, 56 ta video.',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#F7F4EF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
