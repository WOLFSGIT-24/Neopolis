'use client'
import React from 'react'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

export default function StatisticsSection() {
  const majorStats = [
    { value: '4.36', unit: 'Acres', label: 'Sprawling Integrated Masterplan' },
    { value: '2', unit: 'Towers', label: 'Iconic Architectural Monuments' },
    { value: '57', unit: 'Stories', label: 'Sky-Piercing Elevated Floors' },
    { value: '711', unit: 'Residences', label: 'Exclusive Ultra-Luxury Homes' },
    { value: '3 & 4', unit: 'BHK Homes', label: 'Palatial Sky Suites' },
    { value: '2,253 – 4,505', unit: 'Sq. Ft.', label: 'Expansive Living Footprints' },
  ]

  const highlights = [
    { title: '104,000 sq. ft.', desc: 'Curated world-class indoor & outdoor amenities' },
    { title: '17 High-Speed Elevators', desc: 'Seamless, frictionless vertical movement' },
    { title: 'Vehicle-Free Podium', desc: '100% pedestrianized safe ground & landscape zones' },
    { title: '3.3m Floor-to-Floor Height', desc: 'Grand European ceiling heights & expansive volume' },
    { title: 'Sky Offices — Levels 48 & 49', desc: 'Work with panoramic cloudscape vistas' },
    { title: 'Skydeck — Levels 58 & 59', desc: 'The pinnacle of rooftop leisure & astronomy decks' },
  ]

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#0B0E14] text-neo-ivory overflow-hidden border-y border-[#C98D78]/20">
      {/* Background Architectural Watermark Render */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <Image
          src="/neo-assets/home/building/transparent-building.png"
          alt="Neo Towers Blueprint"
          width={1200}
          height={1400}
          className="object-contain max-h-[120%] w-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-transparent to-[#0B0E14]" />
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C98D78] font-medium block">
            Project Overview by the Numbers
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
            Monumental <span className="italic text-neo-peach font-normal">Scale.</span>
          </h2>
          <p className="text-xs sm:text-sm text-neo-muted max-w-lg mx-auto">
            Engineered with uncompromising precision to create Hyderabad&apos;s most prestigious residential benchmark.
          </p>
        </div>

        {/* 6 Balanced Typography Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-14">
          {majorStats.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#121722]/85 border border-[#C98D78]/20 hover:border-[#C98D78]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-[#C98D78]/10"
            >
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white group-hover:text-neo-peach transition-colors block tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C98D78] font-semibold block mt-2 font-mono">
                  {item.unit}
                </span>
              </div>
              <p className="text-[11px] text-neo-muted mt-4 pt-3 border-t border-white/5 line-clamp-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Project Highlights Breakdown List */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#151C28]/85 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#C98D78]" />
            <h3 className="text-xs uppercase tracking-[0.25em] text-white font-medium">
              Architectural Highlights & Engineering Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {highlights.map((h, idx) => (
              <div key={idx} className="space-y-1 border-l-2 border-[#C98D78] pl-3.5">
                <h4 className="text-sm sm:text-base font-serif text-white font-normal">
                  {h.title}
                </h4>
                <p className="text-xs text-neo-muted leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
