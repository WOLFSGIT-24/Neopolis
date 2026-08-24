'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Activity, Trophy, Heart, Coffee, Users, Check } from 'lucide-react'

export default function AmenitiesInteractive() {
  const categories = [
    {
      id: 'wellness',
      name: 'Wellness',
      icon: Activity,
      headline: 'Holistic rejuvenation in high altitude serenity',
      image: '/neo-assets/clubneo/gym.jpg',
      items: [
        { name: 'State of the Art Gym', detail: 'Equipped with Technogym biometric apparatus & cardio suites' },
        { name: 'Fitness Strip & Reflexology Track', detail: 'Outdoor shaded jogging and acupressure pathways' },
        { name: 'Surya Namaskar Lawn', detail: 'Sun salutation elevated yoga deck facing dawn horizons' },
        { name: 'Sky Gym at Level 58', detail: 'Aerobic fitness overlooking the Osman Sagar lake' },
      ],
    },
    {
      id: 'recreation',
      name: 'Recreation',
      icon: Trophy,
      headline: 'Competitive courts & multi sport arenas',
      image: '/neo-assets/clubneo/clubneo_LARGE.jpeg',
      items: [
        { name: 'Full Size Basketball Court', detail: 'Professional FIBA spec outdoor surface' },
        { name: 'Tennis & Squash Courts', detail: 'Acoustic squash arenas and synthetic tennis turf' },
        { name: 'Indoor Badminton Arena', detail: 'Multi court air conditioned wooden flooring' },
        { name: 'Pickleball & Box Cricket', detail: 'Floodlit evening sports cages for fast paced action' },
      ],
    },
    {
      id: 'family',
      name: 'Family',
      icon: Heart,
      headline: 'Safe nurturing spaces for every generation',
      image: '/neo-assets/lifeatneo/features/play_park.jpg',
      items: [
        { name: 'Kids Themed Adventure Park', detail: 'Zero traffic play zones with soft rubber shock pads' },
        { name: 'Dedicated Crèche & Daycare', detail: 'Trained staff supervised activity zone for toddlers' },
        { name: 'Pet Agility Park', detail: 'Enclosed freedom zone with water fountains for dogs' },
      ],
    },
    {
      id: 'leisure',
      name: 'Leisure',
      icon: Coffee,
      headline: 'Cinematic moments and suspended waters',
      image: '/neo-assets/clubneo/infinity-pool.png',
      items: [
        { name: 'Rooftop Infinity Lap Pool', detail: 'Temperature controlled horizon swimming deck' },
        { name: 'Sky Café & Juice Bar', detail: 'Artisanal coffee and healthy refreshments at cloud height' },
        { name: 'Private Preview Theatre', detail: '4K laser projection with Dolby Atmos acoustic acoustics' },
        { name: 'Sunset Amphitheatre', detail: 'Terraced social seating overlooking city lights' },
      ],
    },
    {
      id: 'community',
      name: 'Community',
      icon: Users,
      headline: 'Intellectual and cultural congregation',
      image: '/neo-assets/clubneo/senior_citizen.webp',
      items: [
        { name: 'Senior Citizens Lounge', detail: 'Quiet, serene gathering spaces with ambient seating' },
        { name: 'Art Gallery & Exhibition Foyer', detail: 'Curated cultural displays and sculpture niches' },
        { name: 'Learning Centre & E-Library', detail: 'High speed quiet study carrels and digital libraries' },
        { name: 'Community Banquets & Lounge', detail: 'Lavish hosting spaces for family celebrations' },
      ],
    },
  ]

  const [activeTab, setActiveTab] = useState(0)
  const current = categories[activeTab]

  return (
    <section id="amenities" className="relative w-full py-24 sm:py-32 bg-[#F3ECE2] text-[#10141E] overflow-hidden border-t border-[#A85D45]/15">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#A85D45] font-semibold block">
            03 • Curated Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-[#10141E] leading-tight">
            Designed around <br />
            <span className="text-[#A85D45] font-normal">the way you live</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6474] max-w-xl mx-auto">
            104,000 square feet of curated leisure and wellness spaces segregated into five intuitive life domains.
          </p>
        </div>

        {/* Category Pill Selectors with Mobile Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center mb-8 sm:mb-12 pb-1">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            const isActive = activeTab === idx
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] font-semibold transition-all duration-300 flex items-center gap-1.5 shrink-0 shadow-sm ${
                  isActive
                    ? 'bg-[#A85D45] text-white shadow-md shadow-[#A85D45]/20'
                    : 'bg-white text-[#5A6474] border border-[#A85D45]/20 hover:border-[#A85D45] hover:text-[#10141E]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            )
          })}
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center rounded-2xl bg-white border border-[#A85D45]/20 p-4 sm:p-8 lg:p-10 shadow-xl">
          {/* Left Dynamic Image */}
          <div className="lg:col-span-6 relative aspect-[16/11] rounded-xl overflow-hidden border border-[#A85D45]/20 group shadow-md">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 p-3 rounded-lg bg-white/95 backdrop-blur-md border border-[#A85D45]/20 shadow-md">
              <span className="text-[10px] uppercase tracking-widest text-[#A85D45] block font-mono font-semibold">
                {current.name} Experience
              </span>
              <p className="text-xs text-[#10141E] font-serif font-medium">
                {current.headline}
              </p>
            </div>
          </div>

          {/* Right Category Items */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#A85D45] font-semibold block mb-1">
                {current.name} Facilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#10141E] font-medium">
                {current.headline}
              </h3>
            </div>

            <div className="space-y-4 pt-2">
              {current.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#A85D45]/15 hover:border-[#A85D45]/40 transition-all flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F5EBE6] flex items-center justify-center text-[#A85D45] shrink-0 mt-0.5 font-bold">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif text-[#10141E] font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#5A6474] mt-0.5 leading-relaxed">
                      {item.detail}
                    </p>
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
