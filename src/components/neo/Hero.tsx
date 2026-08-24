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
      {/* Background Architectural Render with Luxury Light Overlays */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/neo-assets/lifeatneo/banner/desktop.jpg"
          alt="Neo Towers Hyderabad"
          fill
          priority
          className="object-cover object-center scale-[1.02]"
        />
        {/* Light Editorial Gradients & Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/60 to-[#FAF7F2]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/90 via-transparent to-[#FAF7F2]/90" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-25">
        <div className="max-w-[1600px] h-full mx-auto border-x border-[#A85D45]/20 flex justify-between">
          <div className="w-[1px] h-full bg-[#A85D45]/20 hidden lg:block" />
          <div className="w-[1px] h-full bg-[#A85D45]/20 hidden lg:block" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto text-center flex flex-col items-center">
        {/* Subtle Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EBE6] border border-[#A85D45]/30 backdrop-blur-md mb-6 sm:mb-8 animate-fadeIn">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A85D45] animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#A85D45] font-semibold">
            Neopolis • Kokapet • Hyderabad
          </span>
        </div>

        {/* Hero Typography */}
        <div className="max-w-4xl space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.35em] text-[#A85D45] font-medium">
            An Address Above All
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight text-[#10141E] leading-[0.95]">
            Neo Towers
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-serif italic text-[#A85D45] font-light max-w-2xl mx-auto pt-2">
            Where life rises above the ordinary.
          </p>
        </div>

        {/* Dual Luxury CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-xl justify-center">
          <a
            href="#experience"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white hover:shadow-xl hover:shadow-[#A85D45]/30 active:scale-95 transition-all text-center whitespace-nowrap shadow-md"
          >
            Explore Neo
          </a>
          <button
            onClick={openBrochure}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-[#10141E] border border-[#A85D45]/40 hover:border-[#A85D45] hover:bg-[#A85D45]/10 bg-white/80 backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#A85D45] shrink-0" />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>

      {/* Information Strip & Scroll Indicator */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full mt-12">
        {/* Info Strip */}
        <div className="rounded-2xl p-4 sm:p-6 mb-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-x-0 sm:divide-x divide-[#A85D45]/15 bg-white/90 border border-[#A85D45]/20 shadow-lg backdrop-blur-md">
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
