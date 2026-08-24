'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Layers, ArrowUpRight } from 'lucide-react'

export default function ClubNeo() {
  const [activeFloor, setActiveFloor] = useState('GROUND')

  const floors = [
    {
      id: 'GROUND',
      name: 'Ground Level',
      tagline: 'Grand Portico & Double Height Atrium',
      image: '/neo-assets/clubneo/clubneo-hero.jpg',
      facilities: [
        'Grand Welcome Lobby & 24/7 Concierge Desk',
        'Valet Drop off Zone & Foyer Water Feature',
        'Private Residents Reception Lounge',
        'Secure Package Locker & Logistics Zone',
      ],
    },
    {
      id: '1ST',
      name: '1st Level',
      tagline: 'Indoor Sports & Badminton Arena',
      image: '/neo-assets/clubneo/clubneo_LARGE.jpeg',
      facilities: [
        'Dual Double Height Badminton Courts with Teakwood Floors',
        'Squash Court with Viewing Gallery',
        'Table Tennis & Billiards Parlour',
        'Board Games & Chess Pavilion',
      ],
    },
    {
      id: '2ND',
      name: '2nd Level',
      tagline: 'Cardio & Strength Conditioning Hub',
      image: '/neo-assets/clubneo/gym.jpg',
      facilities: [
        'Technogym Equipped Advanced Fitness Center',
        'Dedicated Spinning & HIIT Studio',
        'Personal Trainer Consultation Suites',
        'Post Workout Hydrotherapy & Steam Rooms',
      ],
    },
    {
      id: '3RD',
      name: '3rd Level',
      tagline: 'Mindfulness & Holistic Spa',
      image: '/neo-assets/clubneo/senior_citizen.webp',
      facilities: [
        'Yoga & Aerobics Studio with Bamboo Acoustic Panels',
        'Ayurvedic Massage Therapy Suites',
        'Meditation Pods with Ambient Lighting',
        'Senior Citizens Serenity Lounge',
      ],
    },
    {
      id: '4TH',
      name: '4th Level',
      tagline: 'Cinema & Cultural Pavilion',
      image: '/neo-assets/clubneo/thetre980.webp',
      facilities: [
        '40 Seat Private Dolby Atmos Preview Theatre',
        'Acoustically Treated Audio Visual Screening Room',
        'Art Gallery & Fine Arts Exhibition Foyer',
        'VIP Green Room & Dressing Suites',
      ],
    },
    {
      id: '5TH',
      name: '5th Level',
      tagline: 'Co-Working & Knowledge Center',
      image: '/neo-assets/clubneo/e-learing.webp',
      facilities: [
        'High Speed Plug & Play Smart Workstations',
        'Executive Conference Room with Video Conferencing',
        'E-Library & Digital Research Carrels',
        'Espresso & High Tea Coffee Bar',
      ],
    },
    {
      id: '6TH',
      name: '6th Level',
      tagline: 'Grand Banquets & Social Ballroom',
      image: '/neo-assets/clubneo/skyway.webp',
      facilities: [
        'Double Height Grand Banquet Hall (Capacity 250+)',
        'Pre Function Lounge & Spillover Terrace',
        'Full Commercial Catering Kitchen',
        'Bridal Suite & Private Dressing Room',
      ],
    },
    {
      id: 'TERRACE',
      name: 'Terrace Level',
      tagline: 'Infinity Pool & Sky Sundeck',
      image: '/neo-assets/clubneo/infinity-pool.png',
      facilities: [
        'Temperature Controlled Horizon Infinity Pool',
        'Kids Shallow Splash Pool with Fountain Jets',
        'Poolside Cabanas & Sun Loungers',
        'Open Air Starlight BBQ & Bar Lounge',
      ],
    },
  ]

  const current = floors.find((f) => f.id === activeFloor) || floors[0]

  return (
    <section id="club-neo" className="relative w-full py-28 sm:py-36 bg-[#FAF7F2] text-[#10141E] overflow-hidden border-y border-[#A85D45]/15">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#A85D45]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#A85D45] font-semibold block">
            04 • The Crown Jewel
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif font-light text-[#10141E] leading-[1.05]">
            CLUB NEO <br />
            <span className="text-[#A85D45] font-normal">Suspended between sky & water</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6474] max-w-xl mx-auto pt-1 sm:pt-2">
            A landmark of leisure designed for experiences that go beyond the everyday. Spanning multiple dedicated levels of unprecedented luxury.
          </p>
        </div>

        {/* Interactive Floor Selector & Visual Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Vertical Floor Selector Navigation */}
          <div className="lg:col-span-4 space-y-2 order-2 lg:order-1">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A85D45] font-semibold mb-2.5 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Select Club Level</span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-1 gap-1.5 sm:gap-2">
              {floors.map((floor) => {
                const isActive = activeFloor === floor.id
                return (
                  <button
                    key={floor.id}
                    onClick={() => setActiveFloor(floor.id)}
                    className={`p-2 sm:p-3.5 rounded-xl text-left transition-all duration-300 flex items-center justify-between border shadow-sm ${
                      isActive
                        ? 'bg-white border-[#A85D45] shadow-md ring-1 ring-[#A85D45]'
                        : 'bg-white/80 border-[#A85D45]/15 hover:border-[#A85D45]/50 text-[#5A6474] hover:text-[#10141E]'
                    }`}
                  >
                    <div>
                      <span
                        className={`text-[10px] sm:text-xs font-mono block ${
                          isActive ? 'text-[#A85D45] font-bold' : 'text-[#8C97A7]'
                        }`}
                      >
                        {floor.id}
                      </span>
                      <h4
                        className={`text-xs sm:text-sm font-serif truncate ${
                          isActive ? 'text-[#10141E] font-semibold' : 'text-[#5A6474]'
                        }`}
                      >
                        {floor.name}
                      </h4>
                    </div>

                    <ArrowUpRight
                      className={`w-3.5 h-3.5 transition-transform hidden lg:block ${
                        isActive ? 'text-[#A85D45] rotate-45' : 'text-[#8C97A7]'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Floor Render & Facilities Preview */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#A85D45]/25 shadow-xl bg-white group">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Tag on top */}
              <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#A85D45]/20 text-[10px] sm:text-xs text-[#A85D45] font-mono font-semibold shadow-md">
                Level: {current.id}
              </div>

              {/* Bottom text inside frame */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 space-y-0.5 sm:space-y-1">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#E8C5B8] font-mono font-semibold">
                  {current.name} Experience
                </span>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-serif text-white">
                  {current.tagline}
                </h3>
              </div>
            </div>

            {/* Floor Facilities Grid */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-white border border-[#A85D45]/20 shadow-md">
              <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A85D45] font-semibold mb-4 text-center">
                Level Inclusions & Amenities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5">
                {current.facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#10141E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A85D45] shrink-0 mt-1.5" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
