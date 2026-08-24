'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useNeoModal } from './context/NeoModalContext'
import { MapPin, Phone, Mail, ShieldCheck, ArrowUp } from 'lucide-react'

export default function Footer() {
  const { openTerms, openBrochure, openEnquiry } = useNeoModal()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Location', href: '#location' },
    { label: 'Residences', href: '#residences' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Club Neo', href: '#club-neo' },
    { label: 'Sky Office', href: '#sky-office' },
    { label: 'Skydeck', href: '#skydeck' },
    { label: 'Price', href: '#price' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative w-full bg-[#080A0E] text-neo-ivory border-t border-[#C98D78]/25 pt-20 pb-28 sm:pb-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/neo-assets/logo.svg"
                alt="n·eo Towers"
                width={130}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain brightness-110"
              />
            </Link>

            <p className="text-sm text-neo-muted leading-relaxed max-w-sm">
              An iconic 57-storey twin-tower residential monument rising above Neopolis Kokapet, delivering an unparalleled standard of elevated luxury living.
            </p>

            {/* Address */}
            <div className="space-y-2 text-xs text-neo-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C98D78] shrink-0 mt-0.5" />
                <span>Plot No. 11, Neopolis, Kokapet, Gandipet, Telangana – 500075</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C98D78] shrink-0" />
                <a href="tel:+919996999720" className="hover:text-white transition-colors font-mono">
                  +91 9996 999 720
                </a>
              </div>
            </div>

            {/* Developer Partner Logos */}
            <div className="pt-4 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-neo-peach font-mono block">
                Developed by Yula Globus Developers LLP
              </span>
              <div className="flex items-center gap-6 pt-1 opacity-90">
                <Image
                  src="/neo-assets/contactimages/yula.png"
                  alt="Yula"
                  width={90}
                  height={35}
                  className="h-7 w-auto object-contain brightness-95"
                />
                <Image
                  src="/neo-assets/contactimages/globus.png"
                  alt="Globus"
                  width={90}
                  height={35}
                  className="h-7 w-auto object-contain brightness-95"
                />
                <Image
                  src="/neo-assets/contactimages/meeka.png"
                  alt="Meeka"
                  width={90}
                  height={35}
                  className="h-7 w-auto object-contain brightness-95"
                />
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C98D78] font-semibold">
              Explore Project
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neo-muted hover:text-white hover:translate-x-1 transition-all block py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* RERA & Downloads */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C98D78] font-semibold">
              Regulatory Compliance
            </h4>
            <div className="p-4 rounded-xl bg-[#121620] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>RERA Registered</span>
              </div>
              <p className="text-xs font-mono text-white font-semibold">
                TG RERA No. P02400010006
              </p>
              <p className="text-[11px] text-neo-muted">
                Government of Telangana Real Estate Regulatory Authority
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={openBrochure}
                className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-[#C98D78] hover:text-[#10131A] text-xs uppercase tracking-wider text-neo-peach font-medium border border-white/10 transition-colors"
              >
                Download E-Brochure
              </button>
              <button
                onClick={openTerms}
                className="w-full py-2.5 text-xs text-neo-muted hover:text-white transition-colors text-center block"
              >
                View Statutory Disclaimer & Terms
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neo-muted">
          <p>
            © {new Date().getFullYear()} Neo Towers • Yula Globus Developers LLP. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#C98D78] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
