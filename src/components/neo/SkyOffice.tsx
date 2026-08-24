'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Briefcase, Users, Video, Wifi, Monitor } from 'lucide-react'

export default function SkyOffice() {
  const [activeImage, setActiveImage] = useState(0)

  const renders = [
    {
      title: 'Panoramic High Rise Interior',
      image: '/neo-assets/lifeatneo/sky-office/skyoffice_inside.jpg',
      tag: 'Interior Panorama',
    },
    {
      title: 'Cloudscape Floor to Ceiling Horizon',
      image: '/neo-assets/lifeatneo/sky-office/skyoffice_outsideview.jpg',
      tag: 'Lake & City Vista',
    },
    {
      title: 'Executive Boardroom & Pods',
      image: '/neo-assets/lifeatneo/sky-office/skyoffice_rightview.jpg',
      tag: 'Executive Suites',
    },
  ]

  const features = [
    {
      icon: Briefcase,
      title: 'Executive Office Suites',
      desc: 'Private sound insulated private cabins with commanding corner vistas for focused leadership.',
    },
    {
      icon: Users,
      title: 'Open Sky Co working Lounges',
      desc: 'Collaborative hot desks and designer breakout tables illuminated by natural daylight.',
    },
    {
      icon: Video,
      title: 'High Tech Boardrooms',
      desc: 'Equipped with 4K interactive presentation displays and hybrid video conferencing hardware.',
    },
    {
      icon: Monitor,
      title: 'Plug & Play Workstations',
      desc: 'Ergonomic Herman Miller seating with high speed dual redundant fiber connections.',
    },
    {
      icon: Wifi,
      title: 'Acoustic Meeting Pods',
      desc: 'Zero distraction private phone booths and client briefing pods on Levels 48 & 49.',
    },
  ]

  return (
    <section id="sky-office" className="relative w-full py-28 sm:py-36 bg-[#FAF7F2] text-[#10141E] overflow-hidden border-t border-[#A85D45]/15">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs uppercase tracking-[0.35em] text-[#A85D45] font-semibold block">
              07 • Levels 48 & 49
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#10141E] leading-[1.05]">
              SKY OFFICE <br />
              <span className="text-[#A85D45] font-normal">Work above the ordinary</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pl-8 lg:border-l border-black/10 space-y-4">
            <p className="text-base sm:text-lg text-[#10141E]/90 font-serif leading-relaxed">
              A workspace designed to change your perspective, elevated, connected and surrounded by expansive views. Why commute across town when your global executive suite is right an elevator ride away?
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#A85D45] font-mono font-semibold">
              <span>Levels 48 & 49</span> • <span>Exclusive Residents Workspace</span>
            </div>
          </div>
        </div>

        {/* Gallery & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Visual Display */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#A85D45]/25 shadow-xl bg-white group">
              <Image
                src={renders[activeImage].image}
                alt={renders[activeImage].title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 p-3 rounded-lg bg-white/95 backdrop-blur-md border border-[#A85D45]/20 flex items-center justify-between shadow-md">
                <span className="text-xs font-serif text-[#10141E] font-medium">{renders[activeImage].title}</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A85D45] font-semibold">{renders[activeImage].tag}</span>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-3 gap-3">
              {renders.map((r, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[16/9] rounded-xl overflow-hidden border transition-all ${
                    activeImage === idx
                      ? 'border-[#A85D45] ring-2 ring-[#A85D45]/40 shadow-md'
                      : 'border-[#A85D45]/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={r.image} alt={r.title} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#A85D45] font-semibold mb-3">
              Executive Amenities
            </div>

            <div className="space-y-3">
              {features.map((feat, idx) => {
                const Icon = feat.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#A85D45]/15 hover:border-[#A85D45]/60 transition-all flex items-start gap-4 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F5EBE6] flex items-center justify-center text-[#A85D45] shrink-0 mt-0.5 font-bold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif text-[#10141E] font-semibold">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-[#5A6474] leading-relaxed mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
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
