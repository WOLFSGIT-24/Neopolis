'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Sparkles, Moon, Sun, Wind, Eye, Coffee, Waves, ArrowRight } from 'lucide-react'

export default function Skydeck() {
  const [activeItem, setActiveItem] = useState(0)

  const skyFeatures = [
    {
      title: 'Sky Amphitheatre',
      tagline: 'High-Altitude Starlight Concerts',
      image: '/neo-assets/lifeatneo/skydeck/sky_amphithetre.jpg',
      desc: 'Terraced open-sky auditorium located on Level 59, featuring bespoke acoustic enclosures for intimate musical performances and sunset screenings.',
      icon: Moon,
    },
    {
      title: 'Surya Namaskar Lawn',
      tagline: 'Dawn Yoga at 200 Metres',
      image: '/neo-assets/lifeatneo/skydeck/suryanamaskar_lawn.jpg',
      desc: 'Lush natural-turf rooftop meditation deck facing east, greeting the morning sunrise over Hyderabad’s tranquil lakes.',
      icon: Sun,
    },
    {
      title: 'The Sky Trail & Promenade',
      tagline: 'Cloud-Level Jogging Circuit',
      image: '/neo-assets/lifeatneo/skydeck/skydeck.jpg',
      desc: 'A continuous glass-balustraded jogging track tracing the perimeter of both towers with thrilling 360-degree horizon vistas.',
      icon: Wind,
    },
    {
      title: 'Star Map & Astronomy Deck',
      tagline: 'Gaze into the Cosmos',
      image: '/neo-assets/home/skydeck.jpg',
      desc: 'Deep observation deck equipped with high-powered astronomical telescopes and celestial constellation guides away from ground light pollution.',
      icon: Eye,
    },
    {
      title: 'Sky Café & High Tea Bar',
      tagline: 'Bespoke Brews with Cloud Views',
      image: '/neo-assets/lifeatneo/carousel-images/riseabove.jpg',
      desc: 'Artisanal roastery and open-air rooftop bar serving hand-crafted mocktails and continental appetizers at twilight.',
      icon: Coffee,
    },
    {
      title: 'Rooftop Infinity Edge',
      tagline: 'Swimming in the Stratosphere',
      image: '/neo-assets/clubneo/infinity-pool.png',
      desc: 'An architectural marvel where zero-edge crystal waters visually blend with the vast Telangana sky.',
      icon: Waves,
    },
  ]

  return (
    <section id="skydeck" className="relative w-full py-28 sm:py-36 bg-[#080B10] text-neo-ivory overflow-hidden border-t border-[#C98D78]/25">
      {/* Background Starry Glow & Horizon Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-[#18243A]/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18243A]/60 border border-[#C98D78]/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C98D78]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E8C5B8] font-light">
              Levels 58 & 59 • The Stratosphere Layer
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white leading-[1.05]">
            SKYDECK <br />
            <span className="italic text-neo-peach font-normal">Life between the clouds.</span>
          </h2>

          <p className="text-sm sm:text-base text-neo-muted max-w-xl mx-auto">
            Perched 57 stories above the earth, the Skydeck is an extraordinary rooftop realm where everyday boundaries dissolve into boundless horizons.
          </p>
        </div>

        {/* Featured Showcase & Interactive Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Main Visual Display */}
          <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#C98D78]/40 shadow-2xl bg-[#10131A] group">
            <Image
              src={skyFeatures[activeItem].image}
              alt={skyFeatures[activeItem].title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-[#C98D78] font-mono">
              0{activeItem + 1} / 0{skyFeatures.length} • Skydeck Sanctuary
            </div>

            <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C98D78] font-mono">
                {skyFeatures[activeItem].tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
                {skyFeatures[activeItem].title}
              </h3>
              <p className="text-xs sm:text-sm text-neo-muted max-w-2xl leading-relaxed pt-1">
                {skyFeatures[activeItem].desc}
              </p>
            </div>
          </div>

          {/* Interactive Navigation List */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C98D78] font-medium mb-3">
              Skydeck Attractions
            </div>

            <div className="space-y-2">
              {skyFeatures.map((item, idx) => {
                const Icon = item.icon
                const isActive = activeItem === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveItem(idx)}
                    className={`w-full p-3.5 rounded-xl text-left transition-all duration-300 flex items-center justify-between border ${
                      isActive
                        ? 'bg-[#18243A] border-[#C98D78] shadow-lg shadow-[#C98D78]/15 translate-x-1'
                        : 'bg-[#121620]/60 border-white/5 hover:border-white/20 text-neo-muted hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isActive ? 'bg-[#C98D78] text-[#10131A]' : 'bg-white/5 text-[#C98D78]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#C98D78] block">
                          0{idx + 1}
                        </span>
                        <h4 className={`text-sm font-serif ${isActive ? 'text-white font-medium' : 'text-neo-muted'}`}>
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isActive ? 'text-[#C98D78] translate-x-1' : 'text-white/20'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
