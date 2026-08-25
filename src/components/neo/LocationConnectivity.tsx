'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useNeoModal } from './context/NeoModalContext'
import { Navigation, MapPin, ExternalLink, Car } from 'lucide-react'

export default function LocationConnectivity() {
  const { openEnquiry } = useNeoModal()
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const landmarks = [
    { name: 'Neopolis SEZ & Trump Tower', time: 'Immediate (2 Mins)', category: 'Commercial Hub' },
    { name: 'Outer Ring Road (ORR Exit 1)', time: '3 Mins Direct Access', category: 'Expressway' },
    { name: 'Financial District / Waverock', time: '7 Mins', category: 'Tech District' },
    { name: 'Kokapet SEZ & Golden Mile', time: '5 Mins', category: 'Commercial' },
    { name: 'Osman Sagar Lake & Gandipet', time: '4 Mins', category: 'Nature & Leisure' },
    { name: 'Gachibowli Junction', time: '12 Mins', category: 'Urban Corridor' },
    { name: 'Rajiv Gandhi Int’l Airport (RGIA)', time: '20 Mins via ORR', category: 'Transit' },
  ]

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F3ECE2] text-[#10141E] overflow-hidden border-t border-[#A85D45]/15">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A85D45] font-semibold block">
              Strategic Masterplan
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#10141E] leading-tight">
              Connected to <br />
              <span className="text-[#A85D45] font-normal">everything that matters</span>
            </h2>
          </div>

          <button
            onClick={() => openEnquiry('Location Site Visit')}
            className="px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-white border border-[#A85D45] text-[#A85D45] hover:bg-[#A85D45] hover:text-white transition-all duration-300 self-start md:self-auto flex items-center gap-2 shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            Explore Location
          </button>
        </div>

        {/* Map & Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Map Preview Container */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-[#A85D45]/25 shadow-xl bg-white group">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/neo-assets/home/map.png"
                alt="Neo Towers Location Connectivity Map"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Overlay Neo Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#A85D45] opacity-75" />
                <div className="w-5 h-5 rounded-full bg-[#A85D45] border-2 border-white shadow-xl flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
              <div className="mt-2 px-3 py-1 rounded-md bg-white/95 border border-[#A85D45]/50 text-[11px] font-serif text-[#10141E] font-medium tracking-wide shadow-md">
                n·eo Towers
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-2.5 sm:p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#A85D45]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs shadow-lg">
              <div className="flex items-center gap-2 text-[#10141E]">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A85D45] shrink-0" />
                <span className="font-medium truncate">Plot No. 11, Neopolis, Kokapet, Hyderabad</span>
              </div>
              <a
                href="https://maps.google.com/?q=Neopolis+Kokapet+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#A85D45] hover:underline flex items-center gap-1 font-semibold self-end sm:self-auto shrink-0"
              >
                Open Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Distance Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#A85D45] font-semibold mb-3">
              Commute & Distance Matrix
            </div>

            <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
              {landmarks.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`p-3.5 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-between shadow-sm ${
                    activeCard === idx
                      ? 'bg-white border border-[#A85D45] shadow-md translate-x-1'
                      : 'bg-white/80 border border-[#A85D45]/15 hover:border-[#A85D45]/50'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#A85D45] font-mono font-semibold block">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-serif text-[#10141E] font-medium">
                      {item.name}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F5EBE6] text-[#A85D45] text-xs font-mono font-semibold shrink-0">
                    <Car className="w-3.5 h-3.5 text-[#A85D45]" />
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
