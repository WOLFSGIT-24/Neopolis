'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Compass, ArrowRight } from 'lucide-react'

export default function Skydeck() {
  const [activeItem, setActiveItem] = useState(0)

  const skyFeatures = [
    {
      title: 'Sky Amphitheatre',
      tagline: 'High Altitude Starlight Concerts',
      image: '/neo-assets/lifeatneo/skydeck/sky_amphithetre.jpg',
      desc: 'Terraced open sky auditorium located on Level 59, featuring bespoke acoustic enclosures for intimate musical performances and sunset screenings.',
    },
    {
      title: 'Surya Namaskar Lawn',
      tagline: 'Dawn Yoga at 200 Metres',
      image: '/neo-assets/lifeatneo/skydeck/suryanamaskar_lawn.jpg',
      desc: 'Lush natural turf rooftop meditation deck facing east, greeting the morning sunrise over Hyderabad’s tranquil lakes.',
    },
    {
      title: 'The Sky Trail & Promenade',
      tagline: 'Cloud Level Jogging Circuit',
      image: '/neo-assets/lifeatneo/skydeck/skydeck.jpg',
      desc: 'A continuous glass balustraded jogging track tracing the perimeter of both towers with thrilling 360 degree horizon vistas.',
    },
    {
      title: 'Star Map & Astronomy Deck',
      tagline: 'Gaze into the Cosmos',
      image: '/neo-assets/home/skydeck.jpg',
      desc: 'Deep observation deck equipped with high powered astronomical telescopes and celestial constellation guides away from ground light pollution.',
    },
    {
      title: 'Sky Café & High Tea Bar',
      tagline: 'Bespoke Brews with Cloud Views',
      image: '/neo-assets/lifeatneo/carousel-images/riseabove.jpg',
      desc: 'Artisanal roastery and open air rooftop bar serving hand crafted mocktails and continental appetizers at twilight.',
    },
    {
      title: 'Rooftop Infinity Edge',
      tagline: 'Swimming in the Stratosphere',
      image: '/neo-assets/clubneo/infinity-pool.png',
      desc: 'An architectural marvel where zero edge crystal waters visually blend with the vast Telangana sky.',
    },
  ]

  return (
    <section id="skydeck" className="relative w-full py-28 sm:py-36 bg-[#F3ECE2] text-[#10141E] overflow-hidden border-t border-[#A85D45]/15">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#A85D45]/30 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#A85D45]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#A85D45] font-semibold">
              Levels 58 & 59 • The Stratosphere Layer
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#10141E] leading-[1.05]">
            SKYDECK <br />
            <span className="text-[#A85D45] font-normal">Life between the clouds</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5A6474] max-w-xl mx-auto">
            Perched 57 stories above the earth, the Skydeck is an extraordinary rooftop realm where everyday boundaries dissolve into boundless horizons.
          </p>
        </div>

        {/* Featured Showcase & Interactive Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Main Visual Display */}
          <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#A85D45]/25 shadow-xl bg-white group">
            <Image
              src={skyFeatures[activeItem].image}
              alt={skyFeatures[activeItem].title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#A85D45]/20 text-xs text-[#A85D45] font-mono font-semibold shadow-md">
              0{activeItem + 1} / 0{skyFeatures.length} • Skydeck Sanctuary
            </div>

            <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E8C5B8] font-mono font-semibold">
                {skyFeatures[activeItem].tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-medium">
                {skyFeatures[activeItem].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed pt-1">
                {skyFeatures[activeItem].desc}
              </p>
            </div>
          </div>

          {/* Interactive Navigation List */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#A85D45] font-semibold mb-3">
              Skydeck Attractions
            </div>

            <div className="space-y-2">
              {skyFeatures.map((item, idx) => {
                const isActive = activeItem === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveItem(idx)}
                    className={`w-full p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between border shadow-sm ${
                      isActive
                        ? 'bg-white border-[#A85D45] shadow-md ring-1 ring-[#A85D45] translate-x-1'
                        : 'bg-white/80 border-[#A85D45]/15 hover:border-[#A85D45]/50 text-[#5A6474] hover:text-[#10141E]'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono text-[#A85D45] font-bold block">
                        0{idx + 1}
                      </span>
                      <h4 className={`text-sm sm:text-base font-serif ${isActive ? 'text-[#10141E] font-semibold' : 'text-[#5A6474]'}`}>
                        {item.title}
                      </h4>
                    </div>

                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isActive ? 'text-[#A85D45] translate-x-1' : 'text-[#8C97A7]'
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
