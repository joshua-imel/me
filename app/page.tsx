import type { Metadata } from "next"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import CaseStudies from "@/components/CaseStudies"
import Contact from "@/components/Contact"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Eliza Labs - Product Management Consultant | Startup Product Strategy",
  description:
    "Helping startups launch world-class products. Expert product management consultant specializing in product strategy, design, and MVP development for early-stage companies.",
  keywords:
    "product management consultant, startup consultant, product strategy, MVP development, product design, UI/UX design",
  authors: [{ name: "Joshua Imel" }],
  openGraph: {
    title: "Eliza Labs - Product Management Consultant",
    description: "Helping startups launch world-class products through expert product management consulting.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Imel - Product Management Consultant",
    description: "Helping startups launch world-class products through expert product management consulting.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joshua Imel",
    jobTitle: "Product Management Consultant",
    description: "Product management consultant helping startups launch world-class products",
    url: "https://elizalabs.com",
    sameAs: ["https://linkedin.com/in/jimel", "https://x.com/joshuaimel"],
    knowsAbout: [
      "Product Strategy",
      "Product Design",
      "UI/UX Design",
      "Design Sprints",
      "MVP Development",
      "AI Rapid Prototyping",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Independent Consultant",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <About />
          <CaseStudies />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
