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
            ? 'bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#A85D45]/20 py-3 shadow-md'
            : 'bg-gradient-to-b from-[#FAF7F2]/95 via-[#FAF7F2]/60 to-transparent py-5 sm:py-6'
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
              className="h-9 sm:h-11 w-auto object-contain brightness-90 contrast-125"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] uppercase tracking-[0.18em] font-medium text-[#10141E]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#A85D45] transition-colors duration-300 group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#A85D45] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => openBrochure()}
              className="hidden xl:flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A85D45] border border-[#A85D45]/30 hover:border-[#A85D45] hover:bg-[#A85D45]/10 transition-all whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Brochure</span>
            </button>

            <button
              onClick={() => openEnquiry('Navbar Enquire')}
              className="relative px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[12px] uppercase tracking-[0.2em] font-semibold text-white bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] hover:opacity-95 hover:shadow-lg hover:shadow-[#A85D45]/25 active:scale-95 transition-all duration-300 whitespace-nowrap shadow-sm"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openEnquiry('Mobile Header Enquire')}
              className="px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold text-white bg-[#A85D45]"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-[#10141E] hover:bg-black/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF7F2]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-8 lg:hidden animate-fadeIn text-[#10141E]">
          <div className="flex flex-col gap-4 pt-2 overflow-y-auto max-h-[60vh]">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#A85D45] font-medium">Navigation</span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif text-[#10141E] hover:text-[#A85D45] transition-colors py-1 border-b border-black/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-black/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openBrochure()
              }}
              className="w-full py-3 rounded-xl border border-[#A85D45]/40 text-[#A85D45] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openEnquiry('Mobile Menu Drawer')
              }}
              className="w-full py-3.5 rounded-xl bg-[#A85D45] text-white text-xs uppercase tracking-[0.2em] font-semibold"
            >
              Book A Site Visit
            </button>
            <div className="text-center pt-1 text-[11px] text-[#5A6474]">
              Direct Line: <a href="tel:+919996999720" className="text-[#A85D45] font-semibold">+91 9996 999 720</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
