'use client'
import { useEffect, useState } from 'react'

const GT = "'GT Ultra Fine', Georgia, serif"
const LORA = "'Lora', Georgia, serif"
const BROCHURE_URL = 'https://cef78c45-cb7c-493a-bb0d-466802e011fc.usrfiles.com/ugd/cef78c_e2918df63b764fc7b6473c87b34dcbcb.pdf'
const REDIRECT_DELAY = 5

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(REDIRECT_DELAY)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) { clearInterval(interval); window.location.href = '/'; return 0 }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#2B2725', padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.02, pointerEvents: 'none' }} preserveAspectRatio="xMidYMid slice">
        <defs><pattern id="tyGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M80 0 L0 0 0 80" fill="none" stroke="#C8A14A" strokeWidth="0.5" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#tyGrid)" />
      </svg>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '520px' }}>
        <div style={{ width: '48px', height: '1px', background: '#C8A14A', margin: '0 auto 2rem' }} />
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid rgba(200,161,74,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 14l6 6 10-12" stroke="#C8A14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h1 style={{ fontFamily: GT, fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: '#F2EDE4', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>
          Thank You for{' '}<em style={{ fontStyle: 'italic', color: '#C8A14A', fontWeight: 300 }}>Your Interest</em>
        </h1>
        <p style={{ fontFamily: LORA, fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', fontWeight: 300, lineHeight: 1.8, color: 'rgba(242,237,228,0.65)', margin: '0 0 2.5rem', letterSpacing: '0.02em' }}>
          Our team will contact you shortly.<br />Your brochure download has started.
        </p>
        <p style={{ fontFamily: GT, fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'rgba(200,161,74,0.6)', margin: '0 0 1.5rem' }}>
          Redirecting in {countdown}s
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          <a href={BROCHURE_URL} target="_blank" rel="noopener noreferrer" download="Runwal-Raaya-Brochure.pdf"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', background: '#C8A14A', color: '#2B2725', fontFamily: LORA, fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, textDecoration: 'none', border: '1px solid #C8A14A', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C8A14A' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#C8A14A'; e.currentTarget.style.color = '#2B2725' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1v9M4 7l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Download Brochure
          </a>
          <a href="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', background: 'transparent', color: '#F2EDE4', fontFamily: LORA, fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, textDecoration: 'none', border: '1px solid rgba(200,161,74,0.4)', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8A14A'; e.currentTarget.style.color = '#C8A14A' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,161,74,0.4)'; e.currentTarget.style.color = '#F2EDE4' }}>
            Return to Website
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
        <div style={{ width: '48px', height: '1px', background: 'rgba(200,161,74,0.3)', margin: '2.5rem auto 0' }} />
      </div>
    </div>
  )
}
