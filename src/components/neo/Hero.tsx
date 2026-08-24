'use client'
import React from 'react'
import Image from 'next/image'
import { useNeoModal } from './context/NeoModalContext'
import { Download, ChevronDown } from 'lucide-react'

export default function Hero() {
  const { openBrochure } = useNeoModal()

  const stats = [
    { label: 'Acres of Splendor', value: '4.36' },
    { label: 'Iconic Towers', value: '2' },
    { label: 'Storeys High', value: '57' },
    { label: 'Exclusive Residences', value: '711' },
  ]

  return (
    <section
      id="overview"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden text-white pt-28 pb-10 sm:pb-14"
    >
      {/* Background Architectural Render with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/neo-assets/lifeatneo/banner/desktop.jpg"
          alt="Neo Towers Hyderabad"
          fill
          priority
          className="object-cover object-center scale-[1.02]"
        />
        {/* Cinematic gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-radial from-black/60 via-black/30 to-transparent" />
        {/* Soft bottom blend to transition smoothly into the light ivory section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="max-w-[1600px] h-full mx-auto border-x border-white/20 flex justify-between">
          <div className="w-[1px] h-full bg-white/15 hidden lg:block" />
          <div className="w-[1px] h-full bg-white/15 hidden lg:block" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto text-center flex flex-col items-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md mb-6 sm:mb-8 animate-fadeIn shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8C5B8] animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E8C5B8] font-mono font-medium">
            Neopolis • Kokapet • Hyderabad
          </span>
        </div>

        {/* Hero Typography */}
        <div className="max-w-4xl space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.4em] text-[#E8C5B8] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            An Address Above All
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight text-white leading-[0.95] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            Neo Towers
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-serif text-[#F3ECE2] font-normal max-w-2xl mx-auto pt-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Where life rises above the ordinary
          </p>
        </div>

        {/* Dual Luxury CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-xl justify-center">
          <a
            href="#experience"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] bg-gradient-to-r from-[#E8C5B8] via-[#C98D78] to-[#A86D58] text-[#10131A] hover:shadow-2xl hover:shadow-[#C98D78]/40 hover:scale-105 active:scale-95 transition-all text-center whitespace-nowrap shadow-xl"
          >
            Explore Neo
          </a>
          <button
            onClick={openBrochure}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-white border border-white/40 hover:border-white hover:bg-white/15 bg-black/40 backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
          >
            <Download className="w-3.5 h-3.5 text-[#E8C5B8] shrink-0" />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>

      {/* Information Strip & Scroll Indicator */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full mt-10">
        {/* Info Strip */}
        <div className="rounded-2xl p-4 sm:p-6 mb-6 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-x-0 sm:divide-x divide-white/10 bg-black/60 border border-white/20 shadow-2xl backdrop-blur-xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-normal drop-shadow-sm">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#E8C5B8] mt-1 font-mono font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href="#experience"
            className="group flex flex-col items-center gap-2 text-white/80 hover:text-[#E8C5B8] transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium drop-shadow-sm">
              Scroll to discover
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#E8C5B8]" />
          </a>
        </div>
      </div>
    </section>
  )
}
