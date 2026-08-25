'use client'
import React, { useState, useRef } from 'react'
import {
  TabletSmartphone,
  SlidersHorizontal,
  Mic,
  Clock,
  SunMedium,
  Network,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

function GlobeMobileSyncIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Globe Top-Left */}
      <circle cx="7" cy="7" r="4.8" />
      <line x1="2.2" y1="7" x2="11.8" y2="7" />
      <path d="M7 2.2C5.5 3.8 4.8 5.4 4.8 7s.7 3.2 2.2 4.8" />
      <path d="M7 2.2C8.5 3.8 9.2 5.4 9.2 7s-.7 3.2-2.2 4.8" />

      {/* Phone Bottom-Right */}
      <rect x="13.5" y="11" width="7.5" height="11" rx="1.5" />
      <line x1="13.5" y1="13" x2="21" y2="13" />
      <line x1="13.5" y1="19.5" x2="21" y2="19.5" />
      <circle cx="17.25" cy="20.5" r="0.4" fill="currentColor" />
      {/* Screen diagonal glint */}
      <line x1="15.5" y1="15" x2="19" y2="18.5" strokeWidth="1.4" />

      {/* Arrow from Globe to Phone (Top-Right) */}
      <path d="M12.5 6.2h2a2.8 2.8 0 0 1 2.8 2.8v1.5" />
      <polyline points="15.5 9 17.3 10.8 19.1 9" />

      {/* Arrow from Phone to Globe (Bottom-Left) */}
      <path d="M12 18.5h-2a2.8 2.8 0 0 1-2.8-2.8v-1.5" />
      <polyline points="8.8 15.7 7.2 13.9 5.4 15.7" />
    </svg>
  )
}

export default function SmartHomes() {
  const [activeFeature, setActiveFeature] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: TabletSmartphone,
      title: 'Smart Control',
      desc: 'Control lighting channels, ceiling fans, motorized drapery and climate scenes remotely with zero latency.',
      status: 'App Synced',
    },
    {
      icon: SlidersHorizontal,
      title: 'One Touch Scenes',
      desc: 'Create and activate custom ambience presets (Cinema, Dinner, Morning Wake up, Away) with a single tap.',
      status: 'Custom Presets',
    },
    {
      icon: Mic,
      title: 'Voice Ready',
      desc: 'Native zero friction compatibility with Amazon Alexa, Apple HomeKit and Google Home assistant ecosystems.',
      status: 'Voice Activated',
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      desc: 'Automate morning geothermal geysers, evening balcony ambient glows and automated climate control cycles.',
      status: 'Auto Scheduled',
    },
    {
      icon: SunMedium,
      title: 'Adaptive Comfort',
      desc: 'Tunable circadian lighting and automated climate sensors that harmonize interior brightness with natural sunlight.',
      status: 'Circadian AI',
    },
    {
      icon: Network,
      title: 'Future Ready Architecture',
      desc: 'Built on modular IoT protocols, fiber to the home backbone, and structured cabling prepared for future updates.',
      status: 'Modular Bus',
    },
    {
      icon: GlobeMobileSyncIcon,
      title: 'Global Remote Access',
      desc: 'Monitor door locks, security cameras, access authorizations and power consumption from anywhere across the globe.',
      status: '256 Bit Encrypted',
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 380
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="smart-homes" className="relative w-full py-24 sm:py-32 bg-[#FAF7F2] text-[#10141E] overflow-hidden border-t border-[#A85D45]/15">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.35em] text-[#A85D45] font-semibold block">
              05 • Intelligent Automation
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-[#10141E] leading-[1.05]">
              Your world <br />
              <span className="text-[#A85D45] font-normal">At your fingertips</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6474] pt-2 leading-relaxed">
              Every residence at Neo Towers is engineered as a cognitive living environment. Seamlessly orchestrate comfort, security, and climate with whisper quiet sophistication.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-4 self-start lg:self-end">
            <div className="flex items-center gap-2 text-xs text-[#A85D45] font-mono mr-2 hidden sm:flex font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#A85D45]" />
              <span>Full IoT Standard</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous smart feature"
                className="p-3 rounded-full bg-white hover:bg-[#A85D45] hover:text-white text-[#10141E] border border-[#A85D45]/20 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next smart feature"
                className="p-3 rounded-full bg-white hover:bg-[#A85D45] hover:text-white text-[#10141E] border border-[#A85D45]/20 transition-colors shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={carouselRef}
          className="flex items-stretch gap-5 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {features.map((feat, idx) => {
            const Icon = feat.icon
            const isHovered = activeFeature === idx
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveFeature(idx)}
                className={`w-[290px] sm:w-[330px] md:w-[350px] shrink-0 p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between snap-start shadow-sm ${
                  isHovered
                    ? 'bg-white border-[#A85D45] shadow-xl shadow-[#A85D45]/10'
                    : 'bg-white/90 border-[#A85D45]/15 hover:border-[#A85D45]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isHovered
                          ? 'bg-[#A85D45] text-white'
                          : 'bg-[#F5EBE6] text-[#A85D45]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#A85D45] px-2.5 py-0.5 rounded-full bg-[#F5EBE6] border border-[#A85D45]/20 font-semibold">
                      {feat.status}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif text-[#10141E] font-medium mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#5A6474] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveFeature(idx)
                if (carouselRef.current) {
                  carouselRef.current.scrollTo({
                    left: idx * 350,
                    behavior: 'smooth',
                  })
                }
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeFeature === idx ? 'w-8 bg-[#A85D45]' : 'w-2 bg-[#D9CEC1] hover:bg-[#A85D45]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
