'use client'
import React from 'react'
import Image from 'next/image'
import { useNeoModal } from './context/NeoModalContext'
import { Download, PhoneCall, Calendar, ShieldCheck, Sparkles } from 'lucide-react'

export default function FinalCTA() {
  const { openEnquiry, openBrochure } = useNeoModal()

  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#FAF7F2] text-[#10141E] overflow-hidden border-t border-[#A85D45]/15">
      {/* Background Architectural Render with reduced overlay so image is vividly visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/neo-assets/lifeatneo/banner/desktop.jpg"
          alt="Neo Towers Skyline"
          fill
          className="object-cover object-center"
        />
        {/* Soft edge blend and subtle scrim for perfect text contrast without washing out the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/75 via-[#FAF7F2]/35 to-[#FAF7F2]/85" />
        <div className="absolute inset-0 bg-radial from-white/40 via-transparent to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#A85D45]/30 shadow-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#A85D45]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#A85D45] font-semibold">
            An Unrepeatable Legacy
          </span>
        </div>

        {/* Grand Headline */}
        <div className="max-w-4xl space-y-4 mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-[#10141E] leading-[1.05] drop-shadow-sm">
            Your next address <br />
            <span className="text-[#A85D45] font-normal">is already above you</span>
          </h2>
          <p className="text-lg sm:text-2xl font-serif text-[#10141E]/90 font-medium pt-2 drop-shadow-sm">
            Discover Neo Towers • Neopolis Kokapet Hyderabad
          </p>
        </div>

        {/* Triple Luxury Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-3xl mb-12">
          <button
            onClick={() => openEnquiry('Book A Site Visit')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white hover:shadow-xl hover:shadow-[#A85D45]/30 active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Book A Site Visit</span>
          </button>

          <button
            onClick={() => openEnquiry('Request Call Back')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-[#10141E] bg-white/95 backdrop-blur-md border border-[#A85D45]/40 hover:border-[#A85D45] hover:bg-[#F5EBE6] shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4 text-[#A85D45] shrink-0" />
            <span>Request A Call Back</span>
          </button>

          <button
            onClick={openBrochure}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-[#A85D45] bg-white/95 backdrop-blur-md border border-[#A85D45]/40 hover:border-[#A85D45] hover:bg-[#F5EBE6] shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-[#A85D45] shrink-0" />
            <span>Download Brochure</span>
          </button>
        </div>

        {/* Official TG RERA Verification Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#A85D45]/25 text-xs text-[#5A6474] shadow-md">
          <ShieldCheck className="w-4 h-4 text-[#A85D45]" />
          <span>TG RERA Registration No:</span>
          <span className="font-mono text-[#10141E] font-bold">P02400010006</span>
        </div>
      </div>
    </section>
  )
}
