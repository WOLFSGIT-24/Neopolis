'use client'
import React, { useEffect } from 'react'
import { NeoModalProvider, useNeoModal } from '../neo/context/NeoModalContext'
import Navbar from '../neo/Navbar'
import Hero from '../neo/Hero'
import ExperienceIntro from '../neo/ExperienceIntro'
import LocationSection from '../neo/LocationSection'
import LocationConnectivity from '../neo/LocationConnectivity'
import StatisticsSection from '../neo/StatisticsSection'
import LifeAtNeo from '../neo/LifeAtNeo'
import AmenitiesInteractive from '../neo/AmenitiesInteractive'
import ClubNeo from '../neo/ClubNeo'
import ClubExperience from '../neo/ClubExperience'
import SmartHomes from '../neo/SmartHomes'
import Sustainability from '../neo/Sustainability'
import SkyOffice from '../neo/SkyOffice'
import Skydeck from '../neo/Skydeck'
import ResidencesSection from '../neo/ResidencesSection'
import PriceSection from '../neo/PriceSection'
import FinalCTA from '../neo/FinalCTA'
import LeadFormSection from '../neo/LeadFormSection'
import Footer from '../neo/Footer'
import EnquiryModal from '../neo/EnquiryModal'
import BrochureModal from '../neo/BrochureModal'
import FloorPlanModal from '../neo/FloorPlanModal'
import TermsConditionsModal from '../neo/TermsConditionsModal'
import MobileBottomBar from '../neo/MobileBottomBar'
import FloatingWhatsApp from '../neo/FloatingWhatsApp'

function NeoPageContent() {
  const { openEnquiry } = useNeoModal()

  useEffect(() => {
    // Automatically trigger Enquiry Modal 3.5 seconds after page load
    const timer = setTimeout(() => {
      try {
        const hasShown = sessionStorage.getItem('neo_auto_popup')
        if (!hasShown) {
          openEnquiry('Exclusive Launch Enquiry')
          sessionStorage.setItem('neo_auto_popup', 'true')
        }
      } catch {
        openEnquiry('Exclusive Launch Enquiry')
      }
    }, 3500)

    return () => clearTimeout(timer)
  }, [openEnquiry])

  return (
    <div className="w-full min-h-screen bg-[#FAF7F2] text-[#10141E] selection:bg-[#A85D45] selection:text-white relative">
      {/* Section 1: Top Navigation */}
      <Navbar />

      {/* Section 1: Hero — Full-screen cinematic opening */}
      <Hero />

      {/* Section 2: Introduction — “The Experience” */}
      <ExperienceIntro />

      {/* Section 3: Location — “Nature is your neighbour” */}
      <LocationSection />

      {/* Section 4: Location Connectivity */}
      <LocationConnectivity />

      {/* Section 5: The Neo Statistics Section */}
      <StatisticsSection />

      {/* Section 6: Life at Neo (Ground Level) */}
      <LifeAtNeo />

      {/* Section 7: Amenities — Interactive “Explore Neo” */}
      <AmenitiesInteractive />

      {/* Section 8: Club Neo — Suspended between sky & water */}
      <ClubNeo />

      {/* Section 9: Club Neo Experience */}
      <ClubExperience />

      {/* Section 10: Smart Homes */}
      <SmartHomes />

      {/* Section 11: Sustainability */}
      <Sustainability />

      {/* Section 12: Sky Office */}
      <SkyOffice />

      {/* Section 13: Skydeck */}
      <Skydeck />

      {/* Section 14: Residences */}
      <ResidencesSection />

      {/* Section 15 & 16: Price Section & Payment Schedule */}
      <PriceSection />

      {/* Section 17: Final CTA */}
      <FinalCTA />

      {/* Section 18: Lead Form */}
      <LeadFormSection />

      {/* Section 19: Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <EnquiryModal />
      <BrochureModal />
      <FloorPlanModal />
      <TermsConditionsModal />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bar */}
      <MobileBottomBar />
    </div>
  )
}

export default function NeoHomePage() {
  return (
    <NeoModalProvider>
      <NeoPageContent />
    </NeoModalProvider>
  )
}
