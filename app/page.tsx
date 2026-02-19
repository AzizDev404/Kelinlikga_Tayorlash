import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { FeatureSection } from "@/components/boty/feature-section"
import { Testimonials } from "@/components/boty/testimonials"
import { Newsletter } from "@/components/boty/newsletter"
import { Footer } from "@/components/boty/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <FeatureSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
