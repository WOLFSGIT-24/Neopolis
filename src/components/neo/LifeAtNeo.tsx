'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

export default function LifeAtNeo() {
  const [activeIdx, setActiveIdx] = useState(0)

  const groundSpaces = [
    {
      title: 'Grand Entrance Fountain',
      subtitle: 'A Majestic Sense of Arrival',
      image: '/neo-assets/lifeatneo/features/entrance_fountain.jpg',
      desc: 'Cascading water installations set amid sculpted greenery, creating an awe-inspiring first impression for residents and guests.',
    },
    {
      title: 'Open-Air Amphitheatre',
      subtitle: 'Culture Under the Stars',
      image: '/neo-assets/lifeatneo/features/amphitheater.jpg',
      desc: 'Tiered acoustic amphitheatre designed for musical evenings, community performances, and cinema screenings.',
    },
    {
      title: 'Kids Play Haven',
      subtitle: 'Safe, Wonder-Filled Discovery',
      image: '/neo-assets/lifeatneo/features/play_park.jpg',
      desc: 'Zero-vehicle secured terrain with rubberized flooring, adventure trails, and sensory interactive play equipment.',
    },
    {
      title: 'Dedicated Pet Park',
      subtitle: 'Freedom for Four-Legged Family',
      image: '/neo-assets/lifeatneo/features/pet_park.jpg',
      desc: 'Specially fenced obstacle zones, agility tracks, and sanitization stations designed specifically for companion pets.',
    },
    {
      title: 'Grand Reception Lobby',
      subtitle: 'Double-Height Architectural Welcome',
      image: '/neo-assets/lifeatneo/features/reception.png',
      desc: 'Curated Italian marble lobbies with 5-star concierge desks, private waiting lounges, and high-speed elevator access.',
    },
  ]

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? groundSpaces.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIdx((prev) => (prev === groundSpaces.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="life-at-neo" className="relative w-full py-24 sm:py-32 bg-[#10131A] text-neo-ivory overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C98D78] font-medium block">
              02 • Lifestyle Architecture
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white leading-[1.05]">
              Life, <br />
              <span className="italic text-neo-peach font-normal">elevated.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:pl-8 lg:border-l border-white/10">
            <p className="text-base sm:text-lg text-neo-ivory/90 font-serif leading-relaxed">
              Every layer of Neo is designed to make everyday living feel extraordinary — from landscaped gardens at ground level to private experiences high above the city.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C98D78] font-medium">
                Ground Level: Shaped by what you love
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Showcase with Carousel Controls */}
        <div className="relative">
          {/* Main Featured Showcase Card */}
          <div className="relative rounded-2xl overflow-hidden border border-[#C98D78]/25 shadow-2xl bg-[#18243A]">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
              {/* Image side */}
              <div className="lg:col-span-8 relative min-h-[320px] sm:min-h-[420px] overflow-hidden">
                <Image
                  src={groundSpaces[activeIdx].image}
                  alt={groundSpaces[activeIdx].title}
                  fill
                  className="object-cover object-center transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
              </div>

              {/* Text info side */}
              <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-[#141A26] border-t lg:border-t-0 lg:border-l border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#C98D78]">
                      0{activeIdx + 1} / 0{groundSpaces.length}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 text-neo-peach border border-white/10">
                      Podium Landscape
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                    {groundSpaces[activeIdx].title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#C98D78] font-medium">
                    {groundSpaces[activeIdx].subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-neo-muted leading-relaxed pt-2">
                    {groundSpaces[activeIdx].desc}
                  </p>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-3 pt-8">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous space"
                    className="p-3 rounded-full bg-white/5 hover:bg-[#C98D78] hover:text-[#10131A] text-white border border-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next space"
                    className="p-3 rounded-full bg-white/5 hover:bg-[#C98D78] hover:text-[#10131A] text-white border border-white/10 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-4">
            {groundSpaces.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`p-2.5 rounded-xl text-left transition-all duration-300 border ${
                  activeIdx === idx
                    ? 'bg-[#18243A] border-[#C98D78] shadow-lg'
                    : 'bg-[#121722]/60 border-white/5 hover:border-white/20'
                }`}
              >
                <span className="text-[10px] font-mono text-[#C98D78] block">0{idx + 1}</span>
                <span className="text-xs font-serif text-white line-clamp-1 mt-0.5">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
