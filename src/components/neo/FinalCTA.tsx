'use client'
import React from 'react'
import Image from 'next/image'
import { useNeoModal } from './context/NeoModalContext'
import { Download, PhoneCall, Calendar, ShieldCheck, Sparkles } from 'lucide-react'

export default function FinalCTA() {
  const { openEnquiry, openBrochure } = useNeoModal()

  return (
    <section className="relative w-full py-28 sm:py-36 overflow-hidden text-white border-t border-black/10">
      {/* Background Architectural Render with Cinematic Scrim matching Hero section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/neo-assets/lifeatneo/banner/desktop.jpg"
          alt="Neo Towers Skyline"
          fill
          priority
          className="object-cover object-center scale-[1.02]"
        />
        {/* Cinematic gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/65" />
        <div className="absolute inset-0 bg-radial from-black/60 via-black/30 to-transparent" />
        {/* Soft edge transitions into light theme */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="max-w-[1600px] h-full mx-auto border-x border-white/20 flex justify-between">
          <div className="w-[1px] h-full bg-white/15 hidden lg:block" />
          <div className="w-[1px] h-full bg-white/15 hidden lg:block" />
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md mb-8 animate-fadeIn shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#E8C5B8]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E8C5B8] font-mono font-medium">
            An Unrepeatable Legacy
          </span>
        </div>

        {/* Grand Headline */}
        <div className="max-w-4xl space-y-4 mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            Your next address <br />
            <span className="text-[#E8C5B8] font-normal">is already above you</span>
          </h2>
          <p className="text-lg sm:text-2xl md:text-3xl font-serif text-[#F3ECE2] font-normal max-w-2xl mx-auto pt-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Discover Neo Towers • Neopolis Kokapet Hyderabad
          </p>
        </div>

        {/* Triple Luxury Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-3xl mb-12">
          <button
            onClick={() => openEnquiry('Book A Site Visit')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] bg-gradient-to-r from-[#E8C5B8] via-[#C98D78] to-[#A86D58] text-[#10131A] hover:shadow-2xl hover:shadow-[#C98D78]/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-xl"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Book A Site Visit</span>
          </button>

          <button
            onClick={() => openEnquiry('Request Call Back')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-white border border-white/40 hover:border-white hover:bg-white/15 bg-black/40 backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
          >
            <PhoneCall className="w-4 h-4 text-[#E8C5B8] shrink-0" />
            <span>Request A Call Back</span>
          </button>

          <button
            onClick={openBrochure}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-white border border-white/40 hover:border-white hover:bg-white/15 bg-black/40 backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
          >
            <Download className="w-4 h-4 text-[#E8C5B8] shrink-0" />
            <span>Download Brochure</span>
          </button>
        </div>

        {/* Official TG RERA Verification Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/60 border border-white/20 text-xs text-[#E8C5B8] shadow-2xl backdrop-blur-xl">
          <ShieldCheck className="w-4 h-4 text-[#E8C5B8]" />
          <span className="text-white/80">TG RERA Registration No:</span>
          <span className="font-mono text-white font-bold">P02400010006</span>
        </div>
      </div>
    </section>
  )
}
