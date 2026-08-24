'use client'
import React from 'react'
import Image from 'next/image'
import { Sparkles, Film, Heart, BookOpen, Waves, Dumbbell } from 'lucide-react'

export default function ClubExperience() {
  const experiences = [
    {
      title: 'Preview Theatre',
      tagline: 'Blockbuster experiences, at home.',
      image: '/neo-assets/clubneo/thetre980.webp',
      desc: 'Private cinematic acoustic salon for movie nights, sports screenings and family celebrations.',
      icon: Film,
    },
    {
      title: 'Senior Citizens Lounge',
      tagline: 'Live young. Everyday.',
      image: '/neo-assets/clubneo/senior_citizen.webp',
      desc: 'Serene, light-filled relaxation room with ergonomic loungers, tea bar and quiet reading zones.',
      icon: Heart,
    },
    {
      title: 'Learning Centre',
      tagline: 'Focus. Reflect. Rise.',
      image: '/neo-assets/clubneo/e-learing.webp',
      desc: 'Modern digital study pods and high-speed co-learning spaces for scholars and professionals.',
      icon: BookOpen,
    },
    {
      title: 'Infinity Pool',
      tagline: 'Float above the world.',
      image: '/neo-assets/clubneo/infinity-pool.png',
      desc: 'Suspended temperature-controlled infinity edge merging seamlessly with the Hyderabad sky.',
      icon: Waves,
    },
    {
      title: 'Fitness Sanctuary',
      tagline: 'Train beyond limits.',
      image: '/neo-assets/clubneo/gym.jpg',
      desc: 'Precision fitness floor equipped with world-class resistance machines and personal coaching bays.',
      icon: Dumbbell,
    },
  ]

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#121620] text-neo-ivory overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C98D78] font-medium block">
              Immersive Spaces
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white leading-tight">
              Curated club <br />
              <span className="italic text-neo-peach font-normal">experiences.</span>
            </h2>
          </div>
          <p className="text-sm text-neo-muted max-w-md">
            Every square foot is engineered for meaningful memories, effortless relaxation, and vibrant community connection.
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-[#10131A] border border-[#C98D78]/20 hover:border-[#C98D78]/60 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C98D78]/10"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10131A] via-transparent to-black/30" />
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-[#C98D78] border border-white/10">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-serif text-white group-hover:text-neo-peach transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs italic font-serif text-[#C98D78] mt-1">
                      &ldquo;{exp.tagline}&rdquo;
                    </p>
                  </div>
                  <p className="text-xs text-neo-muted leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
