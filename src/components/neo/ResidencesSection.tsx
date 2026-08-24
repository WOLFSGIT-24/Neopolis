'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useNeoModal } from './context/NeoModalContext'
import { Maximize2, Compass, Layers, Check, Download, Eye, Sparkles } from 'lucide-react'

export default function ResidencesSection() {
  const [selectedTower, setSelectedTower] = useState<'Tower A' | 'Tower B'>('Tower A')
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0)
  const { openFloorPlan, openEnquiry } = useNeoModal()

  const towerAPlans = [
    {
      unit: 'Unit 01',
      title: 'Tower A — Unit 1 (East Facing)',
      type: '3 BHK + Home Office',
      sba: '2,485 Sq. Ft.',
      carpet: '1,720 Sq. Ft.',
      facing: 'East Facing (Lake View)',
      balcony: '8 ft. Panoramic Sit-out',
      image: '/neo-assets/floorImages/floor-plans/Unit-1_Tower-A_NEO.jpg',
      highlights: ['Master suite with walk-in closet', 'Separate utility & wet kitchen', 'Lake Osman Sagar facing'],
    },
    {
      unit: 'Unit 02',
      title: 'Tower A — Unit 2 (North Facing)',
      type: '3 BHK Luxury',
      sba: '2,253 Sq. Ft.',
      carpet: '1,560 Sq. Ft.',
      facing: 'North Facing (City Skyline)',
      balcony: 'Deep Double-Height Terrace',
      image: '/neo-assets/floorImages/floor-plans/Unit-2_Tower-A.jpg',
      highlights: ['Vastu compliant entry foyer', 'Spacious dining salon', 'Cross-ventilation layout'],
    },
    {
      unit: 'Unit 03',
      title: 'Tower A — Unit 3 (Corner Sky Suite)',
      type: '4 BHK Grand Residence',
      sba: '3,220 Sq. Ft.',
      carpet: '2,280 Sq. Ft.',
      facing: 'North-East Corner',
      balcony: 'Wraparound Glass Balcony',
      image: '/neo-assets/floorImages/floor-plans/Unit-3_Tower-A_NEO.jpg',
      highlights: ['Corner 270-degree view horizon', 'All ensuite bedrooms', "Maid's room with private bath"],
    },
    {
      unit: 'Unit 04',
      title: 'Tower A — Unit 4 (East Facing)',
      type: '3 BHK + Study',
      sba: '2,735 Sq. Ft.',
      carpet: '1,910 Sq. Ft.',
      facing: 'East Facing',
      balcony: 'Expansive Garden Deck',
      image: '/neo-assets/floorImages/floor-plans/Unit-4_Tower-A.jpg',
      highlights: ['Family lounge & formal drawing room', 'Powder room for guests', 'High ceiling volume'],
    },
    {
      unit: 'Unit 05',
      title: 'Tower A — Unit 5 (West Facing)',
      type: '3 BHK Premium',
      sba: '2,360 Sq. Ft.',
      carpet: '1,640 Sq. Ft.',
      facing: 'West Facing (Sunset Vista)',
      balcony: 'Twilight Sit-out Balcony',
      image: '/neo-assets/floorImages/floor-plans/Unit-5_Tower-A.jpg',
      highlights: ['L-shaped living & dining layout', 'Spacious kitchen counter', 'Natural thermal insulation'],
    },
    {
      unit: 'Unit 06',
      title: 'Tower A — Unit 6 (Palatial Suite)',
      type: '4 BHK Ultra Luxury',
      sba: '4,100 Sq. Ft.',
      carpet: '2,920 Sq. Ft.',
      facing: 'East-South Corner',
      balcony: 'Double Deck Sky Terrace',
      image: '/neo-assets/floorImages/floor-plans/Unit-6_Tower-A_NEO.jpg',
      highlights: ['Private elevator lobby access', 'Grand master bedroom suite', 'Chef kitchen & pantry'],
    },
    {
      unit: 'Unit 07',
      title: 'Tower A — Unit 7 (Lake View Sky Villa)',
      type: '4 BHK Presidential',
      sba: '4,505 Sq. Ft.',
      carpet: '3,210 Sq. Ft.',
      facing: 'East Facing (Unblocked Lake)',
      balcony: 'Presidential Sundeck',
      image: '/neo-assets/floorImages/floor-plans/Unit-7_Tower-A_NEO.jpg',
      highlights: ['Supreme living room length (32 ft)', 'Customizable bar counter zone', 'Double walk-in dressers'],
    },
    {
      unit: 'Unit 08',
      title: 'Tower A — Unit 8 (North Facing)',
      type: '3 BHK Executive',
      sba: '2,510 Sq. Ft.',
      carpet: '1,750 Sq. Ft.',
      facing: 'North Facing',
      balcony: 'Deck with Planter Niche',
      image: '/neo-assets/floorImages/floor-plans/Unit-8_Tower-A_NEO.jpg',
      highlights: ['Separate foyer entry zone', 'Dedicated pooja room space', 'Large floor-to-ceiling windows'],
    },
    {
      unit: 'Lobby',
      title: 'Tower A — High-Speed Lift Lobby',
      type: 'Core Infrastructure',
      sba: 'Central Core',
      carpet: 'Commercial Grade',
      facing: 'Internal Access',
      balcony: '8 High-Speed Elevators',
      image: '/neo-assets/floorImages/floor-plans/LIFT LOBBY TOWER A NEO.jpg',
      highlights: ['Destination control vertical transit', 'Service & stretcher lift', 'Designer marble wall paneling'],
    },
  ]

  const towerBPlans = [
    {
      unit: 'Unit 01',
      title: 'Tower B — Unit 1 (East Lake View)',
      type: '4 BHK Grand Suite',
      sba: '3,850 Sq. Ft.',
      carpet: '2,740 Sq. Ft.',
      facing: 'East Facing (Lake View)',
      balcony: 'Wraparound Sky Deck',
      image: '/neo-assets/floorImages/floor-plans/Unit-1_Tower-B_NEO.jpg',
      highlights: ['Panoramic view from all bedrooms', 'Pooja room & utility balcony', 'Private foyer drop-off'],
    },
    {
      unit: 'Unit 02',
      title: 'Tower B — Unit 2 (North Facing)',
      type: '3 BHK + Lounge',
      sba: '2,640 Sq. Ft.',
      carpet: '1,850 Sq. Ft.',
      facing: 'North Facing',
      balcony: 'Expansive Sit-out',
      image: '/neo-assets/floorImages/floor-plans/Unit-2_Tower-B_NEO.jpg',
      highlights: ['Optimal cross breeze design', 'Smart home automation hub', 'Spacious master bathroom'],
    },
    {
      unit: 'Unit 03',
      title: 'Tower B — Unit 3 (Grand Corner Residence)',
      type: '4 BHK Luxury',
      sba: '4,250 Sq. Ft.',
      carpet: '3,050 Sq. Ft.',
      facing: 'North-East Corner',
      balcony: 'Grand Balcony Terrace',
      image: '/neo-assets/floorImages/floor-plans/Unit-3_Tower-B_NEO.jpg',
      highlights: ['Double master suites', 'Separate domestic helper quarters', 'Soundproof double-glazed glass'],
    },
    {
      unit: 'Unit 04',
      title: 'Tower B — Unit 4 (Sunset View)',
      type: '3 BHK Executive',
      sba: '2,420 Sq. Ft.',
      carpet: '1,690 Sq. Ft.',
      facing: 'West Facing',
      balcony: 'Deep Evening Deck',
      image: '/neo-assets/floorImages/floor-plans/Unit-4_Tower-B_NEO.jpg',
      highlights: ['Contemporary linear layout', 'Minimal corridor wastage', 'Dedicated pooja alcove'],
    },
    {
      unit: 'Unit 05',
      title: 'Tower B — Unit 5 (Sky Villa Residence)',
      type: '4 BHK Presidential',
      sba: '4,505 Sq. Ft.',
      carpet: '3,210 Sq. Ft.',
      facing: 'East Facing',
      balcony: 'Grand Panoramic Deck',
      image: '/neo-assets/floorImages/floor-plans/Unit-5_Tower-B_NEO.jpg',
      highlights: ['Palatial living & dining expanses', 'Private service corridor', 'Ultra-premium bath fittings'],
    },
    {
      unit: 'Lobby',
      title: 'Tower B — High-Speed Lift Lobby',
      type: 'Core Infrastructure',
      sba: 'Central Core',
      carpet: 'Commercial Grade',
      facing: 'Internal Access',
      balcony: '9 High-Speed Elevators',
      image: '/neo-assets/floorImages/floor-plans/LIFT LOBBY TOWER B NEO.jpg',
      highlights: ['Touchless elevator call panels', 'Dedicated fire & service elevators', 'Air-conditioned transit lobby'],
    },
  ]

  const currentList = selectedTower === 'Tower A' ? towerAPlans : towerBPlans
  const currentPlan = currentList[selectedUnitIdx] || currentList[0]

  return (
    <section id="residences" className="relative w-full py-28 sm:py-36 bg-[#0E121B] text-neo-ivory overflow-hidden border-t border-[#C98D78]/20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#C98D78] font-medium block">
              08 • Palatial Living
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif font-light text-white leading-[1.05]">
              RESIDENCES <br />
              <span className="italic text-neo-peach font-normal">Homes designed to fit your life.</span>
            </h2>
            <p className="text-xs sm:text-sm text-neo-muted pt-1 sm:pt-2 leading-relaxed max-w-2xl">
              Thoughtfully configured 3 & 4 BHK luxury residences characterized by soaring 3.3m floor-to-floor heights, zero wasted circulation, cross-ventilated living spaces, and expansive viewing decks.
            </p>
          </div>

          {/* Quick Summary Badges - Responsive Grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center sm:gap-4 shrink-0">
            <div className="p-3 sm:p-4 rounded-xl bg-[#141822] border border-[#C98D78]/30 text-center">
              <span className="text-[10px] sm:text-xs font-mono uppercase text-[#C98D78] block">3 BHK Homes</span>
              <span className="text-base sm:text-xl font-serif text-white font-normal">2,253 – 2,735+ sq.ft.</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#141822] border border-[#C98D78]/30 text-center">
              <span className="text-[10px] sm:text-xs font-mono uppercase text-[#C98D78] block">4 BHK Homes</span>
              <span className="text-base sm:text-xl font-serif text-white font-normal">3,220 – 4,505+ sq.ft.</span>
            </div>
          </div>
        </div>

        {/* Interactive Floor Plan Viewer Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#121620] border border-[#C98D78]/30 p-4 sm:p-8 lg:p-10 shadow-2xl space-y-6 sm:space-y-8">
          {/* Tower Switcher & Unit Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-white/10">
            {/* Tower Toggle Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 bg-[#0B0D14] p-1 sm:p-1.5 rounded-full border border-white/10 self-start">
              {(['Tower A', 'Tower B'] as const).map((tower) => (
                <button
                  key={tower}
                  onClick={() => {
                    setSelectedTower(tower)
                    setSelectedUnitIdx(0)
                  }}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold transition-all ${
                    selectedTower === tower
                      ? 'bg-[#C98D78] text-[#10131A] shadow-md'
                      : 'text-neo-muted hover:text-white'
                  }`}
                >
                  {tower}
                </button>
              ))}
            </div>

            {/* Unit Tabs Selector */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
              {currentList.map((plan, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedUnitIdx(idx)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-mono tracking-wider transition-all whitespace-nowrap border shrink-0 ${
                    selectedUnitIdx === idx
                      ? 'bg-[#18243A] text-[#E8C5B8] border-[#C98D78] shadow-md font-bold'
                      : 'bg-white/5 text-neo-muted border-white/5 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {plan.unit}
                </button>
              ))}
            </div>
          </div>

          {/* Floor Plan Display Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Blueprint Image with Lightbox Zoom Trigger */}
            <div className="lg:col-span-7 relative group">
              <div
                onClick={() =>
                  openFloorPlan({
                    title: currentPlan.title,
                    tower: selectedTower,
                    unit: currentPlan.unit,
                    type: currentPlan.type,
                    sba: currentPlan.sba,
                    carpet: currentPlan.carpet,
                    facing: currentPlan.facing,
                    image: currentPlan.image,
                  })
                }
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0A0D12] border border-[#C98D78]/30 shadow-2xl p-4 flex items-center justify-center cursor-zoom-in group-hover:border-[#C98D78] transition-colors"
              >
                <Image
                  src={currentPlan.image}
                  alt={currentPlan.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono uppercase tracking-widest backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4 text-[#C98D78]" />
                  <span>Click to Zoom & View High-Res Plan</span>
                </div>

                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-[#C98D78] border border-white/10">
                  {selectedTower} • {currentPlan.unit}
                </div>
              </div>
            </div>

            {/* Right Specs & Plan Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C98D78] font-medium block mb-1">
                  {selectedTower} Configuration
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                  {currentPlan.title}
                </h3>
                <p className="text-sm font-serif italic text-neo-peach mt-1">
                  {currentPlan.type}
                </p>
              </div>

              {/* Area Specification Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#141822] border border-white/10">
                <div>
                  <span className="text-[10px] uppercase text-neo-muted block font-mono">Super Built-up Area</span>
                  <span className="text-lg font-serif text-white font-normal">{currentPlan.sba}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neo-muted block font-mono">RERA Carpet Area</span>
                  <span className="text-lg font-serif text-white font-normal">{currentPlan.carpet}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neo-muted block font-mono">Unit Facing</span>
                  <span className="text-sm font-serif text-[#E8C5B8] flex items-center gap-1 mt-0.5">
                    <Compass className="w-3.5 h-3.5 text-[#C98D78]" />
                    {currentPlan.facing}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neo-muted block font-mono">Balcony / Deck</span>
                  <span className="text-sm font-serif text-neo-ivory mt-0.5">{currentPlan.balcony}</span>
                </div>
              </div>

              {/* Layout Inclusions */}
              <div className="space-y-2 pt-1">
                <span className="text-xs uppercase tracking-wider text-[#C98D78] font-medium block">
                  Layout Highlights
                </span>
                {currentPlan.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neo-muted">
                    <Check className="w-3.5 h-3.5 text-[#C98D78] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() =>
                    openFloorPlan({
                      title: currentPlan.title,
                      tower: selectedTower,
                      unit: currentPlan.unit,
                      type: currentPlan.type,
                      sba: currentPlan.sba,
                      carpet: currentPlan.carpet,
                      facing: currentPlan.facing,
                      image: currentPlan.image,
                    })
                  }
                  className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#C98D78]" />
                  Enlarge Plan
                </button>
                <button
                  onClick={() => openEnquiry(`Floor Plan Enquiry for ${selectedTower} - ${currentPlan.unit}`)}
                  className="flex-1 py-3 rounded-xl bg-[#C98D78] text-[#10131A] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#E8C5B8] transition-colors"
                >
                  Request Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
