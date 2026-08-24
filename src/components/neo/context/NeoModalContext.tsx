'use client'
import React, { createContext, useContext, useState } from 'react'

interface FloorPlanData {
  title: string
  tower: 'Tower A' | 'Tower B'
  unit: string
  type: string
  sba: string
  carpet: string
  facing: string
  image: string
}

interface ModalContextType {
  isEnquiryOpen: boolean
  openEnquiry: (source?: string) => void
  closeEnquiry: () => void
  enquirySource: string

  isBrochureOpen: boolean
  openBrochure: () => void
  closeBrochure: () => void

  selectedFloorPlan: FloorPlanData | null
  openFloorPlan: (plan: FloorPlanData) => void
  closeFloorPlan: () => void

  isTermsOpen: boolean
  openTerms: () => void
  closeTerms: () => void
}

const NeoModalContext = createContext<ModalContextType | undefined>(undefined)

export function NeoModalProvider({ children }: { children: React.ReactNode }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [enquirySource, setEnquirySource] = useState('General Enquiry')
  const [isBrochureOpen, setIsBrochureOpen] = useState(false)
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<FloorPlanData | null>(null)
  const [isTermsOpen, setIsTermsOpen] = useState(false)

  const openEnquiry = (source: string = 'General Enquiry') => {
    setEnquirySource(source)
    setIsEnquiryOpen(true)
  }

  const closeEnquiry = () => setIsEnquiryOpen(false)

  const openBrochure = () => setIsBrochureOpen(true)
  const closeBrochure = () => setIsBrochureOpen(false)

  const openFloorPlan = (plan: FloorPlanData) => setSelectedFloorPlan(plan)
  const closeFloorPlan = () => setSelectedFloorPlan(null)

  const openTerms = () => setIsTermsOpen(true)
  const closeTerms = () => setIsTermsOpen(false)

  return (
    <NeoModalContext.Provider
      value={{
        isEnquiryOpen,
        openEnquiry,
        closeEnquiry,
        enquirySource,
        isBrochureOpen,
        openBrochure,
        closeBrochure,
        selectedFloorPlan,
        openFloorPlan,
        closeFloorPlan,
        isTermsOpen,
        openTerms,
        closeTerms,
      }}
    >
      {children}
    </NeoModalContext.Provider>
  )
}

export function useNeoModal() {
  const context = useContext(NeoModalContext)
  if (!context) {
    throw new Error('useNeoModal must be used within a NeoModalProvider')
  }
  return context
}
