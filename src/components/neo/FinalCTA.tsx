'use client'
import React from 'react'
import Image from 'next/image'
import { useNeoModal } from './context/NeoModalContext'
import { Download, PhoneCall, Calendar, ShieldCheck, Sparkles } from 'lucide-react'

export default function FinalCTA() {
  const { openEnquiry, openBrochure } = useNeoModal()

  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#080B10] text-neo-ivory overflow-hidden border-t border-[#C98D78]/25">
      {/* Background Cinematic Night Render */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/neo-assets/lifeatneo/banner/desktop.jpg"
          alt="Neo Towers Night Skyline"
          fill
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/80 to-[#080B10]/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#080B10]/40 to-[#080B10]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18243A]/80 border border-[#C98D78]/40 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#C98D78]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#E8C5B8] font-light">
            An Unrepeatable Legacy
          </span>
        </div>

        {/* Grand Headline */}
        <div className="max-w-4xl space-y-4 mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.05]">
            Your next address <br />
            <span className="italic text-neo-peach font-normal">is already above you.</span>
          </h2>
          <p className="text-lg sm:text-2xl font-serif italic text-neo-ivory/80 font-light pt-2">
            Discover Neo Towers • Neopolis Kokapet Hyderabad
          </p>
        </div>

        {/* Triple Luxury Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-3xl mb-12">
          <button
            onClick={() => openEnquiry('Book A Site Visit')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-gradient-to-r from-[#E8C5B8] via-[#C98D78] to-[#A86D58] text-[#10131A] hover:shadow-xl hover:shadow-[#C98D78]/30 active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Book A Site Visit</span>
          </button>

          <button
            onClick={() => openEnquiry('Request Call Back')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.18em] text-white bg-[#18243A]/80 border border-[#C98D78]/40 hover:border-[#C98D78] hover:bg-[#18243A] backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4 text-[#C98D78] shrink-0" />
            <span>Request A Call Back</span>
          </button>

          <button
            onClick={openBrochure}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.18em] text-neo-peach border border-white/15 hover:border-[#C98D78] hover:bg-white/5 backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-[#C98D78] shrink-0" />
            <span>Download Brochure</span>
          </button>
        </div>

        {/* Official TG RERA Verification Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#121620]/90 border border-white/10 text-xs text-neo-muted">
          <ShieldCheck className="w-4 h-4 text-[#C98D78]" />
          <span>TG RERA Registration No:</span>
          <span className="font-mono text-white font-semibold">P02400010006</span>
        </div>
      </div>
    </section>
  )
}
