'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useNeoModal } from './context/NeoModalContext'
import { Menu, X, Download, PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openEnquiry, openBrochure } = useNeoModal()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Location', href: '#location' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Club Neo', href: '#club-neo' },
    { label: 'Skydeck', href: '#skydeck' },
    { label: 'Residences', href: '#residences' },
    { label: 'Price', href: '#price' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#10131A]/92 backdrop-blur-xl border-b border-[#C98D78]/20 py-3 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-[#10131A]/90 via-[#10131A]/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-105">
            <Image
              src="/neo-assets/logo.svg"
              alt="n·eo Towers"
              width={110}
              height={45}
              className="h-9 sm:h-11 w-auto object-contain brightness-105"
              priority
            />
          </Link>

          {/* Desktop Nav Links - In exact chronological section order */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] uppercase tracking-[0.18em] font-light text-neo-ivory/90">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#C98D78] transition-colors duration-300 group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#C98D78] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => openBrochure()}
              className="hidden xl:flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium text-neo-peach border border-[#C98D78]/30 hover:border-[#C98D78] hover:bg-[#C98D78]/10 transition-all whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Brochure</span>
            </button>

            <button
              onClick={() => openEnquiry('Navbar Enquire')}
              className="relative px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[12px] uppercase tracking-[0.2em] font-medium text-[#10131A] bg-gradient-to-r from-[#E8C5B8] via-[#C98D78] to-[#A86D58] hover:opacity-95 hover:shadow-lg hover:shadow-[#C98D78]/25 active:scale-95 transition-all duration-300 whitespace-nowrap"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openEnquiry('Mobile Header Enquire')}
              className="px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold text-[#10131A] bg-[#C98D78]"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#10131A]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-8 lg:hidden animate-fadeIn">
          <div className="flex flex-col gap-4 pt-2 overflow-y-auto max-h-[60vh]">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C98D78] font-medium">Navigation</span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif text-white hover:text-[#C98D78] transition-colors py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openBrochure()
              }}
              className="w-full py-3 rounded-xl border border-[#C98D78]/40 text-neo-peach text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openEnquiry('Mobile Menu Drawer')
              }}
              className="w-full py-3.5 rounded-xl bg-[#C98D78] text-[#10131A] text-xs uppercase tracking-[0.2em] font-semibold"
            >
              Book A Site Visit
            </button>
            <div className="text-center pt-1 text-[11px] text-neo-muted">
              Direct Line: <a href="tel:+919996999720" className="text-[#C98D78]">+91 9996 999 720</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
