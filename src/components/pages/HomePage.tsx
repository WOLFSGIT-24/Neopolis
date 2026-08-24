'use client'
import { EnquiryProvider } from '../raaya/EnquiryPopup'
import Navbar from '../raaya/Navbar'
import Hero from '../raaya/Hero'
import HeroIntro from '../raaya/HeroIntro'
import ProjectHighlights from '../raaya/ProjectHighlights'
import Lifestyle from '../raaya/Lifestyle'
import DesignSection from '../raaya/DesignSection'
import SignatureStatement from '../raaya/SignatureStatement'
import Location from '../raaya/Location'
import LocationMap from '../raaya/LocationMap'
import ClosingCTA from '../raaya/ClosingCTA'
import Disclaimer from '../raaya/Disclaimer'
import Footer from '../raaya/Footer'
import MobileBottomBar from '../raaya/MobileBottomBar'

// Exact section order matching the original Raaya site (src/components/pages/HomePage.tsx)
export default function HomePage() {
  return (
    <EnquiryProvider>
      <div className="w-full" style={{ background: '#F2EDE4' }}>
        <Navbar />
        <Hero />
        <HeroIntro />
        <ProjectHighlights />
        <Lifestyle />
        <DesignSection />
        <SignatureStatement />
        <Location />
        <LocationMap />
        <ClosingCTA />
        <Disclaimer />
        <Footer />
        <MobileBottomBar />
        {/* EnquireTab is rendered inside Hero.tsx as a page-level fixed element */}
      </div>
    </EnquiryProvider>
  )
}
