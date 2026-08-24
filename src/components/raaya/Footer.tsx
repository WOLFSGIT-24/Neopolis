'use client'
import { motion, useInView } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { useEnquiry } from './EnquiryPopup'

const LOGO       = 'https://static.wixstatic.com/shapes/cef78c_6ad46e6e70f644f6bd16353cdb1ccea4.svg'
const QR_LOC     = 'https://static.wixstatic.com/media/cef78c_74459b46b251465b9b9891950696a869~mv2.png'
const QR_RERA    = 'https://static.wixstatic.com/media/cef78c_705d904bc4ff479faabf5448bbef38c2~mv2.png'

const navLinks = [
  { label: 'Overview',   href: '#overview'   },
  { label: 'Location',   href: '#location'   },
  { label: 'Residences', href: '#residences' },
  { label: 'Lifestyle',  href: '#lifestyle'  },
  { label: 'Design',     href: '#design'     },
  { label: 'Enquire',    href: '#enquire'    },
]

function NavLink({ label, href, go }: { label: string; href: string; go: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href} onClick={e => go(e, href)}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Lora', Georgia, serif", fontSize: '0.78rem', fontWeight: 300,
        color: hovered ? '#C8A14A' : 'rgba(242,237,228,0.5)', textDecoration: 'none',
        letterSpacing: '0.04em', transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        transition: 'all 0.25s ease', display: 'inline-block',
      }}
    >
      {label}
    </a>
  )
}

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [btnHovered, setBtnHovered] = useState(false)
  const { open: openEnquiry } = useEnquiry()

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: 'linear-gradient(160deg, #2B2725 0%, #3A2E27 100%)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Faint texture */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity: 0.018 }} preserveAspectRatio="xMidYMid slice">
        <defs><pattern id="footerGrid" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse"><path d="M72 0 L0 0 0 72" fill="none" stroke="#C8A14A" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#footerGrid)"/>
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 pt-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="Runwal Raaya"
              style={{ height: '64px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9, marginBottom: '1rem', display: 'block' }} />
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.75rem', fontWeight: 300, color: '#BFAF9F', lineHeight: 1.7, letterSpacing: '0.03em' }}>
              Runwal Raaya, Opposite Bharat Mill Mhada, Ganapatrao Kadam,<br />
              Marg, Worli Naka, Siddharth Nagar, Mumbai,<br />
              Maharashtra 400013, India
            </p>
            <p style={{ fontFamily: "'GT Ultra Fine', Georgia, serif", fontStyle: 'italic', fontSize: '0.78rem', color: 'rgba(200,161,74,0.35)', letterSpacing: '0.08em', marginTop: '0.75rem' }}>
              Rooted in convenience. Blossoming in value.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col items-start">
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase' as const, color: '#C8A14A', marginBottom: '1rem' }}>
              Navigate
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(link => <NavLink key={link.label} label={link.label} href={link.href} go={go} />)}
            </div>
          </div>

          {/* Col 3 — CTA */}
          <div className="flex flex-col items-start">
            <p style={{ fontFamily: "'GT Ultra Fine', Georgia, serif", fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', fontWeight: 300, color: '#F2EDE4', lineHeight: 1.4, marginBottom: '0.25rem' }}>
              Begin your journey to
            </p>
            <p style={{ fontFamily: "'GT Ultra Fine', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', fontWeight: 300, color: '#C8A14A', lineHeight: 1.4, marginBottom: '1.5rem' }}>
              uncompromised living.
            </p>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase' as const, color: '#C8A14A', marginBottom: '0.6rem' }}>
              Contact
            </p>
            <a href="tel:+91-22-42972335"
              style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.78rem', fontWeight: 300, color: 'rgba(242,237,228,0.75)', textDecoration: 'none', letterSpacing: '0.04em', marginBottom: '1.5rem', display: 'inline-block', transition: 'all 0.25s ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8A14A')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(242,237,228,0.75)')}>
              022 42972335
            </a>
            <button
              onClick={openEnquiry}
              onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '0.85rem 2rem',
                background: btnHovered ? '#C8A14A' : 'transparent',
                color: btnHovered ? '#2B2725' : '#F2EDE4',
                fontFamily: "'Lora', Georgia, serif", fontSize: '0.62rem', fontWeight: 600,
                letterSpacing: '0.2em', textTransform: 'uppercase' as const,
                border: '1px solid #C8A14A', cursor: 'pointer', transition: 'all 0.3s ease', alignSelf: 'flex-start',
              }}
            >
              Book a Private Tour
            </button>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(200,161,74,0.3) 20%, rgba(200,161,74,0.3) 80%, transparent)', marginBottom: '1rem' }} />

        {/* RERA + QR + copyright */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

          {/* RERA + copyright */}
          <div className="flex flex-col gap-1.5">
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8A14A', marginBottom: '0.25rem' }}>
              Compliance &amp; RERA
            </p>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.6rem', color: 'rgba(242,237,228,0.35)', letterSpacing: '0.04em', lineHeight: 1.7 }}>
              MahaRERA Registration No(s): P51900080218 , P51900080252 are available at website{' '}
              <a href="http://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(200,161,74,0.55)', textDecoration: 'none' }}>
                http://maharera.mahaonline.gov.in
              </a>
            </p>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.58rem', color: 'rgba(242,237,228,0.2)', marginTop: '0.25rem' }}>
              © {new Date().getFullYear()} Runwal Realty. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
              <a href="/privacy-policy" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.58rem', color: 'rgba(200,161,74,0.55)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C8A14A')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,161,74,0.55)')}>
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.58rem', color: 'rgba(200,161,74,0.55)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C8A14A')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,161,74,0.55)')}>
                Terms &amp; Conditions
              </a>
            </div>
            <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(200,161,74,0.1)' }}>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#C8A14A', marginBottom: '0.35rem' }}>
                Authorized Sales Partner
              </p>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.56rem', color: 'rgba(242,237,228,0.35)', lineHeight: 1.7, letterSpacing: '0.03em' }}>
                Wolf Media
              </p>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.52rem', color: 'rgba(242,237,228,0.22)', lineHeight: 1.7, marginTop: '0.35rem', fontStyle: 'italic' }}>
                This website is operated by an authorized marketing partner for Runwal Realty.
              </p>
            </div>
          </div>

          {/* QR codes */}
          <div className="flex items-start gap-6">
            {[{ label: 'Location QR', src: QR_LOC }, { label: 'RERA QR', src: QR_RERA }].map(qr => (
              <div key={qr.label} className="flex flex-col items-center footer-qr-item">
                <div className="footer-qr-box" style={{ width: '64px', height: '64px', border: '1px solid rgba(200,161,74,0.2)', overflow: 'hidden', background: '#fff' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qr.src} alt={qr.label} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
