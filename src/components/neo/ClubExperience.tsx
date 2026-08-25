'use client'
import React from 'react'
import Image from 'next/image'

export default function ClubExperience() {
  const experiences = [
    {
      title: 'Preview Theatre',
      tagline: 'Blockbuster experiences, at home',
      image: '/neo-assets/clubneo/thetre980.webp',
      desc: 'Private cinematic acoustic salon for movie nights, sports screenings and family celebrations.',
    },
    {
      title: 'Senior Citizens Lounge',
      tagline: 'Live young, everyday',
      image: '/neo-assets/clubneo/senior_citizen.webp',
      desc: 'Serene, light filled relaxation room with ergonomic loungers, tea bar and quiet reading zones.',
    },
    {
      title: 'Learning Centre',
      tagline: 'Focus, reflect, rise',
      image: '/neo-assets/clubneo/e-learing.webp',
      desc: 'Modern digital study pods and high speed co learning spaces for scholars and professionals.',
    },
    {
      title: 'Infinity Pool',
      tagline: 'Float above the world',
      image: '/neo-assets/clubneo/infinity-pool.png',
      desc: 'Suspended temperature controlled infinity edge merging seamlessly with the Hyderabad sky.',
    },
    {
      title: 'Fitness Sanctuary',
      tagline: 'Train beyond limits',
      image: '/neo-assets/clubneo/gym.jpg',
      desc: 'Precision fitness floor equipped with world class resistance machines and personal coaching bays.',
    },
  ]

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F3ECE2] text-[#10141E] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A85D45] font-semibold block">
              Immersive Spaces
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#10141E] leading-tight">
              Curated club <br />
              <span className="text-[#A85D45] font-normal">experiences</span>
            </h2>
          </div>
          <p className="text-sm text-[#5A6474] max-w-md">
            Every square foot is engineered for meaningful memories, effortless relaxation, and vibrant community connection.
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#A85D45]/20 hover:border-[#A85D45] transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:shadow-[#A85D45]/10 shadow-sm"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div>
                  <h3 className="text-lg font-serif text-[#10141E] group-hover:text-[#A85D45] transition-colors font-medium">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-serif text-[#A85D45] mt-1 font-medium">
                    &ldquo;{exp.tagline}&rdquo;
                  </p>
                </div>
                <p className="text-xs text-[#5A6474] leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
