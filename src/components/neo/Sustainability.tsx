'use client'
import React from 'react'
import Image from 'next/image'
import {
  Sun,
  Droplets,
  Recycle,
  Leaf,
  ShieldCheck,
  Zap,
  Building,
  CheckCircle2,
} from 'lucide-react'

export default function Sustainability() {
  const ecoFeatures = [
    {
      icon: ShieldCheck,
      title: 'IGBC Pre Certified Platinum',
      desc: 'Formally rated and audited for supreme environmental sustainability standards.',
      badge: 'Certified',
    },
    {
      icon: Sun,
      title: 'Solar Powered Utilities',
      desc: 'Grid tied rooftop solar photovoltaics powering common lighting and water circulation.',
      badge: 'Renewable',
    },
    {
      icon: Zap,
      title: 'Energy Efficient Spaces',
      desc: 'Low energy LED architectural luminaires and smart occupancy sensor controls throughout.',
      badge: 'Efficiency',
    },
    {
      icon: Droplets,
      title: 'Rainwater Harvesting',
      desc: 'Deep groundwater recharge percolation pits capturing 100% of seasonal runoff.',
      badge: 'Conservation',
    },
    {
      icon: Recycle,
      title: 'Water Recycling (STP)',
      desc: 'Dual plumbing infrastructure utilizing advanced tertiary treated water for landscape and flushing.',
      badge: 'Zero Discharge',
    },
    {
      icon: Building,
      title: 'Low Impact Construction',
      desc: 'Optimized structural curing techniques reducing embodied carbon footprints significantly.',
      badge: 'Responsible',
    },
    {
      icon: Leaf,
      title: 'Responsible Materials',
      desc: 'Locally procured high albedo roof pavers, AAC blocks and fly ash based cement mixes.',
      badge: 'Eco-Sourced',
    },
    {
      icon: CheckCircle2,
      title: 'Low VOC & Eco Safe Finishes',
      desc: 'Non toxic, low volatile organic compound paints, sealants and eco safe adhesives for cleaner indoor air.',
      badge: 'Clean Air',
    },
  ]

  return (
    <section id="sustainability" className="relative w-full py-28 sm:py-36 bg-[#F3ECE2] text-[#10141E] overflow-hidden border-t border-[#A85D45]/15">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Top Editorial Row with IGBC Seal */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.35em] text-[#A85D45] font-semibold block">
              06 • Conscious Architecture
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#10141E] leading-[1.05]">
              Engineered <br />
              <span className="text-[#A85D45] font-normal">with the environment in mind</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5A6474] pt-2 leading-relaxed max-w-2xl">
              Sustainable luxury is not a compromise, it is an elevation of living standards. Neo Towers integrates state of the art ecological intelligence from ground podium to the highest crown.
            </p>
          </div>

          {/* IGBC Seal Card */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#A85D45]/25 shrink-0 shadow-md">
            <div className="w-14 h-14 relative flex items-center justify-center p-2 rounded-xl bg-[#F5EBE6]">
              <Image
                src="/neo-assets/lifeatneo/igbc-logo.svg"
                alt="IGBC Pre-Certified"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A85D45] font-mono block font-semibold">
                Green Building Council
              </span>
              <h4 className="text-base font-serif text-[#10141E] font-medium">
                IGBC Pre-Certified
              </h4>
              <p className="text-[11px] text-[#5A6474]">
                Gold/Platinum Standard Ratings
              </p>
            </div>
          </div>
        </div>

        {/* 8 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecoFeatures.map((f, idx) => {
            const Icon = f.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#A85D45]/15 hover:border-[#A85D45]/60 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5EBE6] group-hover:bg-[#A85D45] group-hover:text-white flex items-center justify-center text-[#A85D45] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200">
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif text-[#10141E] font-medium mb-1.5 group-hover:text-[#A85D45] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[#5A6474] leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-black/5 flex items-center gap-1.5 text-[11px] text-[#A85D45] font-mono font-semibold">
                  <span className="w-1 h-1 rounded-full bg-[#A85D45]" />
                  <span>Eco Standard</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
