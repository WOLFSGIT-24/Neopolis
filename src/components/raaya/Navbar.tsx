'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEnquiry } from './EnquiryPopup'

const GT = "'GT Ultra Fine', Georgia, serif"
const GAM = "'Lora', Georgia, serif"
const NAV_BG = '#2B2725'
const NAV_TEXT = '#F2EDE4'
const GOLD = '#C8A14A'

const NAVBAR_LOGO = 'https://static.wixstatic.com/media/cef78c_ca01bad133204f72be09cf2dfb20dda9~mv2.png'
const LOGO_SVG = 'https://static.wixstatic.com/shapes/cef78c_6ad46e6e70f644f6bd16353cdb1ccea4.svg'

const navLinks = [
  { label: 'Project', href: '#project' },
  { label: 'Amenities', href: '#lifestyle' },
  { label: 'Design', href: '#residences' },
  { label: 'Raaya', href: '#meaning' },
  { label: 'Location', href: '#location' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#enquire' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [btnHov, setBtnHov] = useState(false)
  const { open: openEnquiry } = useEnquiry()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 lg:py-2' : 'py-2.5 lg:py-2.5'}`}
        style={{ background: NAV_BG }}
      >
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex items-center" style={{ flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={NAVBAR_LOGO} alt="Runwal Raaya" className="navbar-logo" style={{ height: '64px', width: 'auto', display: 'block', transition: 'all 0.3s ease' }} />
          </a>

          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-8" style={{ flex: 1, padding: '0 20px' }}>
            {navLinks.map(link => (
              <a key={link.label} href={link.href} onClick={e => handleAnchor(e, link.href)}
                style={{ color: NAV_TEXT, fontFamily: GT, fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'capitalize', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = GOLD}
                onMouseLeave={e => e.currentTarget.style.color = NAV_TEXT}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6" style={{ flexShrink: 0, paddingRight: '12px' }}>
            <button onClick={openEnquiry} onMouseEnter={() => setBtnHov(true)} onMouseLeave={() => setBtnHov(false)}
              style={{ display: 'inline-flex', alignItems: 'center', padding: '0.6rem 1.4rem', background: btnHov ? GOLD : 'transparent', color: btnHov ? '#2B2725' : NAV_TEXT, fontFamily: GT, fontSize: '0.55rem', fontWeight: 300, letterSpacing: '0.18em', textTransform: 'uppercase', border: `1px solid ${GOLD}`, cursor: 'pointer', transition: 'all 0.25s ease', whiteSpace: 'nowrap' }}>
              Book a Private Tour
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_SVG} alt="Runwal Raaya" style={{ height: '80px', width: 'auto', display: 'block', flexShrink: 0, transition: 'all 0.3s ease', marginRight: '16px', filter: 'brightness(0) invert(1)', opacity: 1 }} />
          </div>

          <div className="lg:hidden flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_SVG} alt="Runwal Realty" style={{ height: '36px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            <button className="flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span className="block w-6 h-px transition-all duration-300" style={{ background: NAV_TEXT, transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span className="block w-4 h-px transition-all duration-300" style={{ background: NAV_TEXT, opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-6 h-px transition-all duration-300" style={{ background: NAV_TEXT, transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col justify-center items-center" style={{ background: '#2F241E' }}>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a key={link.label} href={link.href} onClick={e => handleAnchor(e, link.href)}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                  style={{ fontFamily: GT, fontSize: '2rem', fontWeight: 300, color: '#F2EDE4', letterSpacing: '0.1em', textDecoration: 'none' }}>
                  {link.label}
                </motion.a>
              ))}
              <motion.button onClick={() => { setMenuOpen(false); openEnquiry() }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{ marginTop: '1rem', padding: '0.85rem 2.5rem', background: 'transparent', color: '#F2EDE4', fontFamily: GAM, fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase' as const, border: `1px solid ${GOLD}`, cursor: 'pointer' }}>
                Book a Private Tour
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
