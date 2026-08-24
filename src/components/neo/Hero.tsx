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
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF7F2] text-[#10141E] pt-28 pb-12 sm:pb-16"
    >
      {/* Background Architectural Render */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/neo-assets/lifeatneo/banner/desktop.jpg"
          alt="Neo Towers Hyderabad"
          fill
          priority
          className="object-cover object-center scale-[1.01]"
        />
        {/* Soft top and bottom vignetting for smooth transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-15">
        <div className="max-w-[1600px] h-full mx-auto border-x border-[#A85D45]/20 flex justify-between">
          <div className="w-[1px] h-full bg-[#A85D45]/20 hidden lg:block" />
          <div className="w-[1px] h-full bg-[#A85D45]/20 hidden lg:block" />
        </div>
      </div>

      {/* Main Content Area with Frosted Glass Container for 100% Readability */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto text-center flex flex-col items-center">
        <div className="max-w-3xl w-full mx-auto p-6 sm:p-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/60 shadow-2xl shadow-black/10 flex flex-col items-center">
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EBE6] border border-[#A85D45]/30 mb-4 sm:mb-6 animate-fadeIn shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A85D45] animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#A85D45] font-semibold">
              Neopolis • Kokapet • Hyderabad
            </span>
          </div>

          {/* Hero Typography with high contrast */}
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-[#A85D45] font-semibold">
              An Address Above All
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-[#10141E] leading-[0.98]">
              Neo Towers
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-serif italic text-[#A85D45] font-normal max-w-xl mx-auto pt-1">
              Where life rises above the ordinary.
            </p>
          </div>

          {/* Dual Luxury CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 w-full max-w-md justify-center">
            <a
              href="#experience"
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white hover:shadow-xl hover:shadow-[#A85D45]/30 active:scale-95 transition-all text-center whitespace-nowrap shadow-md"
            >
              Explore Neo
            </a>
            <button
              onClick={openBrochure}
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-[#10141E] border border-[#A85D45]/40 hover:border-[#A85D45] hover:bg-[#A85D45]/10 bg-white transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#A85D45] shrink-0" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </div>

      {/* Information Strip & Scroll Indicator */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full mt-8">
        {/* Info Strip */}
        <div className="rounded-2xl p-4 sm:p-6 mb-6 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-x-0 sm:divide-x divide-[#A85D45]/15 bg-white/95 border border-[#A85D45]/20 shadow-lg backdrop-blur-md">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#10141E] font-medium">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#5A6474] mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href="#experience"
            className="group flex flex-col items-center gap-2 text-[#5A6474] hover:text-[#A85D45] transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium">
              Scroll to discover
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#A85D45]" />
          </a>
        </div>
      </div>
    </section>
  )
}
