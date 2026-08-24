'use client'
import { motion, useInView } from 'framer-motion'
import React, { useRef, useState } from 'react'

const DISCLAIMER_TEXT = `Disclaimer: The images and other details herein are only indicative. The Promoter reserves the right to change any or all of these in the interest of the development, as per provision of law. Artist's impressions are used to illustrate amenities, specifications, images, and other details. Tolerance of +/- 3% is possible in the unit areas on account of design and construction variances. All brands stated are subject to final decision of the project architect. This electronic / printed material does not constitute an offer and/or contract of any type between the Promoter and the recipient. No booking or allotment shall be deemed to have been made on the basis of this electronic / printed material. Any Purchaser / Lessee of this development shall be governed by the terms and conditions of the agreement for sale / lease entered into between the parties, and no details mentioned in this electronic / printed material shall in any way govern such transactions unless as may be otherwise expressly provided in the agreement for sale/lease by the Promoter. The Promoter does not warrant or assume any liability or responsibility for the accuracy or completeness of any information contained herein. This electronic / printed material has been created keeping in mind the provisions of the Real Estate (Regulation and Development) Act, 2016 (RERA) applicable for projects in Maharashtra. You are required to verify all the details, including area, amenities, services, terms of sales and payments and other relevant terms independently with the Promoter's sales team only, by physically visiting the project site and the authorized website of RERA. You are requested NOT to visit any unauthorized or unverified website/broker (Online / Offline) to receive any information about any projects of the Promoter and/or its sister concerns. Aethon Developers Private Limited have mortgaged Runwal Raaya project to Beacon Trusteeship Limited. NOC to be taken from Beacon Trusteeship Limited before any registration of flat in Runwal Raaya (Towers T1 & T2).`

export default function Disclaimer() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.section ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: 'linear-gradient(160deg, #3A3530 0%, #2B2725 100%)', position: 'relative', overflow: 'hidden' }}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity: 0.012 }} preserveAspectRatio="xMidYMid slice">
        <defs><pattern id="disclaimerGrid" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse"><path d="M72 0 L0 0 0 72" fill="none" stroke="#C8A14A" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#disclaimerGrid)"/>
      </svg>
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 py-8 lg:py-10">
        <div style={{ border: '1px solid rgba(200,161,74,0.25)', background: 'rgba(43,39,37,0.4)', borderRadius: '4px', overflow: 'hidden' }}>
          <button onClick={() => setIsOpen(!isOpen)}
            style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,161,74,0.05)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', fontWeight: 600, color: '#C8A14A', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0, textAlign: 'left' }}>
              Important Disclaimer
            </h3>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: '#C8A14A', transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0, marginLeft: '1rem' }}>
              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <motion.div initial={{ height: 0, opacity: 0 }} animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', borderTop: isOpen ? '1px solid rgba(200,161,74,0.15)' : 'none' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(43,39,37,0.2)' }}>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.75rem', fontWeight: 300, color: 'rgba(242,237,228,0.85)', lineHeight: 1.8, letterSpacing: '0.02em', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {DISCLAIMER_TEXT}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
