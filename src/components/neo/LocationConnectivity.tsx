'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useNeoModal } from './context/NeoModalContext'
import { Navigation, MapPin, ExternalLink, Clock, Car } from 'lucide-react'

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
    <section className="relative w-full py-24 sm:py-32 bg-[#121620] text-neo-ivory overflow-hidden border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C98D78] font-medium block">
              Strategic Masterplan
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white leading-tight">
              Connected to <br />
              <span className="italic text-neo-peach font-normal">everything that matters.</span>
            </h2>
          </div>

          <button
            onClick={() => openEnquiry('Location Site Visit')}
            className="px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-transparent border border-[#C98D78] text-[#E8C5B8] hover:bg-[#C98D78] hover:text-[#10131A] transition-all duration-300 self-start md:self-auto flex items-center gap-2"
          >
            <Navigation className="w-3.5 h-3.5" />
            Explore Location
          </button>
        </div>

        {/* Map & Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Map Preview Container */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-[#C98D78]/25 shadow-2xl bg-[#10131A] group">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/neo-assets/home/map.png"
                alt="Neo Towers Location Connectivity Map"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10131A] via-transparent to-black/30" />
            </div>

            {/* Overlay Neo Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#C98D78] opacity-75" />
                <div className="w-5 h-5 rounded-full bg-[#C98D78] border-2 border-white shadow-xl flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#10131A]" />
                </div>
              </div>
              <div className="mt-2 px-3 py-1 rounded-md bg-[#10131A]/90 border border-[#C98D78]/50 text-[11px] font-serif text-white tracking-wide">
                n·eo Towers
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#10131A]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-neo-peach">
                <MapPin className="w-4 h-4 text-[#C98D78]" />
                <span>Plot No. 11, Neopolis, Kokapet, Hyderabad</span>
              </div>
              <a
                href="https://maps.google.com/?q=Neopolis+Kokapet+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#C98D78] hover:underline flex items-center gap-1 font-medium"
              >
                Open Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Floating Distance Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C98D78] font-medium mb-3">
              Commute & Distance Matrix
            </div>

            <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
              {landmarks.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`p-3.5 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    activeCard === idx
                      ? 'bg-[#18243A] border border-[#C98D78]/60 shadow-lg translate-x-1'
                      : 'bg-[#18243A]/30 border border-white/5 hover:border-[#C98D78]/30'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#C98D78] font-mono block">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-serif text-white">
                      {item.name}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 text-[#E8C5B8] text-xs font-mono shrink-0">
                    <Car className="w-3.5 h-3.5 text-[#C98D78]" />
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
