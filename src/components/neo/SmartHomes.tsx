'use client'
import React, { useState, useRef } from 'react'
import {
  Smartphone,
  Sliders,
  Mic,
  Calendar,
  SunMedium,
  Cpu,
  Wifi,
  Sparkles,
  ToggleRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

export default function SmartHomes() {
  const [activeFeature, setActiveFeature] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: Smartphone,
      title: 'Smart Control',
      desc: 'Control lighting channels, ceiling fans, motorized drapery and climate scenes remotely with zero latency.',
      status: 'App Synced',
    },
    {
      icon: Sliders,
      title: 'One-Touch Scenes',
      desc: 'Create and activate custom ambience presets (Cinema, Dinner, Morning Wake-up, Away) with a single tap.',
      status: 'Custom Presets',
    },
    {
      icon: Mic,
      title: 'Voice Ready',
      desc: 'Native zero-friction compatibility with Amazon Alexa, Apple HomeKit and Google Home assistant ecosystems.',
      status: 'Voice Activated',
    },
    {
      icon: Calendar,
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
      icon: Cpu,
      title: 'Future Ready Architecture',
      desc: 'Built on modular IoT protocols, fiber-to-the-home backbone, and structured cabling prepared for future updates.',
      status: 'Modular Bus',
    },
    {
      icon: Wifi,
      title: 'Global Remote Access',
      desc: 'Monitor door locks, security cameras, access authorizations and power consumption from anywhere across the globe.',
      status: '256-Bit Encrypted',
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
    <section className="relative w-full py-24 sm:py-32 bg-[#0E121A] text-neo-ivory overflow-hidden border-t border-white/5">
      {/* Subtle circuit line aesthetic */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="max-w-[1600px] h-full mx-auto border-x border-[#C98D78]/20 flex justify-around">
          <div className="w-[1px] h-full bg-[#C98D78]/20" />
          <div className="w-[1px] h-full bg-[#C98D78]/20" />
          <div className="w-[1px] h-full bg-[#C98D78]/20" />
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C98D78] font-medium block">
              05 • Intelligent Automation
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-white leading-[1.05]">
              Your world. <br />
              <span className="italic text-neo-peach font-normal">At your fingertips.</span>
            </h2>
            <p className="text-xs sm:text-sm text-neo-muted pt-2 leading-relaxed">
              Every residence at Neo Towers is engineered as a cognitive living environment. Seamlessly orchestrate comfort, security, and climate with whisper-quiet sophistication.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-4 self-start lg:self-end">
            <div className="flex items-center gap-2 text-xs text-[#E8C5B8] font-mono mr-2 hidden sm:flex">
              <ShieldCheck className="w-4 h-4 text-[#C98D78]" />
              <span>Full IoT Standard</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous smart feature"
                className="p-3 rounded-full bg-[#18243A] hover:bg-[#C98D78] hover:text-[#10131A] text-white border border-white/10 transition-colors shadow-md"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next smart feature"
                className="p-3 rounded-full bg-[#18243A] hover:bg-[#C98D78] hover:text-[#10131A] text-white border border-white/10 transition-colors shadow-md"
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
                className={`w-[290px] sm:w-[330px] md:w-[350px] shrink-0 p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between snap-start ${
                  isHovered
                    ? 'bg-[#151C28] border-[#C98D78]/70 shadow-xl shadow-[#C98D78]/10'
                    : 'bg-[#121620]/85 border-white/10 hover:border-[#C98D78]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isHovered
                          ? 'bg-[#C98D78] text-[#10131A]'
                          : 'bg-white/5 text-[#C98D78]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-neo-peach/80 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                      {feat.status}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif text-white font-normal mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neo-muted leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-[#C98D78]">
                  <span>Active Module</span>
                  <ToggleRight className="w-4 h-4 text-[#C98D78]" />
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
                activeFeature === idx ? 'w-8 bg-[#C98D78]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
