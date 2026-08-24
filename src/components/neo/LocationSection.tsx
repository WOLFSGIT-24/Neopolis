'use client'
import React from 'react'
import Image from 'next/image'
import { Trees, Waves, Building } from 'lucide-react'

export default function LocationSection() {
  const highlights = [
    {
      icon: Trees,
      stat: '1,00,000+',
      unit: 'Acres',
      label: '111 GO Protected Greens',
      desc: 'Uninterrupted pristine green canopy ensuring perpetual fresh air and ecological peace.',
    },
    {
      icon: Waves,
      stat: 'Osman Sagar',
      unit: 'Lake Vista',
      label: 'Panoramic Water Views',
      desc: 'Mesmerizing sunset horizons reflecting over the tranquil waters of Osman Sagar.',
    },
    {
      icon: Building,
      stat: 'Financial District',
      unit: 'Skyline',
      label: 'High-Growth Tech Corridor',
      desc: 'A futuristic city skyline glowing in the evening, just minutes from your front door.',
    },
  ]

  return (
    <section id="location" className="relative w-full py-24 sm:py-32 bg-[#FAF7F2] text-[#10141E] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Visual Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#A85D45]/25 shadow-xl group bg-white">
              <Image
                src="/neo-assets/lifeatneo/carousel-images/osmansagarview.jpg"
                alt="Osman Sagar Lake and 111 GO Greens around Neo Towers"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10141E]/80 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#A85D45]/20 flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#A85D45] block font-semibold">
                    Permanent View Corridors
                  </span>
                  <p className="text-sm font-serif text-[#10141E] font-medium">
                    Adjoining 1,00,000+ Acres of Protected Biosphere
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#F5EBE6] flex items-center justify-center text-[#A85D45]">
                  <Trees className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Secondary Accent Render */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-44 h-32 rounded-xl overflow-hidden border border-[#A85D45]/30 shadow-xl z-10 bg-white">
              <Image
                src="/neo-assets/lifeatneo/carousel-images/111go.jpg"
                alt="Green Canopy"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Editorial Typography & Statistics */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A85D45] font-semibold block">
                01 • The Setting
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#10141E] leading-tight">
                Nature is <br />
                <span className="italic text-[#A85D45] font-normal">your neighbour.</span>
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-[#A85D45] pt-1">
                A vista of blues & greens that extends beyond the horizon.
              </p>
            </div>

            <p className="text-sm text-[#5A6474] leading-relaxed max-w-xl">
              Nestled at the threshold of the 111 GO conservation belt, Neo Towers provides an eternal sanctuary of unpolluted greenery and shimmering lake vistas that will never be obstructed by future development.
            </p>

            {/* 3 Large Stat Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#A85D45]/15 hover:border-[#A85D45]/50 transition-all space-y-2 shadow-sm hover:shadow-md"
                  >
                    <IconComponent className="w-5 h-5 text-[#A85D45]" />
                    <div>
                      <div className="text-2xl font-serif text-[#10141E] font-medium leading-none">
                        {item.stat}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-[#A85D45] mt-1 font-semibold">
                        {item.unit}
                      </div>
                    </div>
                    <p className="text-xs text-[#5A6474] line-clamp-2">
                      {item.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
