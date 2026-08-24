'use client'
import { useState } from 'react'
import { useEnquiry } from './EnquiryPopup'

const LORA = "'Lora', Georgia, serif"
const PHONE = 'tel:+91-22-42972335'

export default function MobileBottomBar() {
  const { open } = useEnquiry()
  const [callHov, setCallHov] = useState(false)
  const [enquireHov, setEnquireHov] = useState(false)

  return (
    <>
      <div className="mobile-bottom-bar-spacer" />
      <div className="mobile-bottom-bar" role="navigation" aria-label="Quick contact">
        <a href={PHONE} onMouseEnter={() => setCallHov(true)} onMouseLeave={() => setCallHov(false)}
          style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.95rem 0', background: callHov ? '#C8A14A' : '#2B2725', color: callHov ? '#2B2725' : '#F2EDE4', fontFamily: LORA, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' as const, textDecoration: 'none', borderRight: '1px solid rgba(200,161,74,0.25)', transition: 'background 0.25s ease, color 0.25s ease' }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2.5 1.5C2.5 1.5 1 1.5 1 3C1 7.5 5.5 12 10 12C11.5 12 11.5 10.5 11.5 10.5L9.5 8.5C9.5 8.5 8.5 9 8 8.5C7 7.5 5.5 6 4.5 5C4 4.5 4.5 3.5 4.5 3.5L2.5 1.5Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Call
        </a>
        <button type="button" onClick={open} onMouseEnter={() => setEnquireHov(true)} onMouseLeave={() => setEnquireHov(false)}
          style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.95rem 0', background: enquireHov ? '#2B2725' : '#C8A14A', color: enquireHov ? '#F2EDE4' : '#2B2725', fontFamily: LORA, fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' as const, border: 'none', cursor: 'pointer', transition: 'background 0.25s ease, color 0.25s ease' }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <rect x="1" y="2.5" width="11" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
            <path d="M1 4l5.5 3.5L12 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          Enquire Now
        </button>
      </div>
    </>
  )
}
