'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function ExperienceIntro() {
  const navRibbon = [
    { num: '01', title: 'Location', desc: '111 GO Greens & Osman Sagar', href: '#location' },
    { num: '02', title: 'Life at Neo', desc: 'Elevated Everyday Living', href: '#life-at-neo' },
    { num: '03', title: 'Ground Level', desc: 'Landscaped Sanctuaries', href: '#amenities' },
    { num: '04', title: 'Club Neo', desc: 'Suspended Leisure Landmark', href: '#club-neo' },
    { num: '05', title: 'Sky Office', desc: 'Levels 48 & 49 Workspaces', href: '#sky-office' },
    { num: '06', title: 'Skydeck', desc: 'Levels 58 & 59 Cloud Living', href: '#skydeck' },
    { num: '07', title: 'Residences', desc: '3 & 4 BHK Crafted Homes', href: '#residences' },
  ]

  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 bg-[#F3ECE2] overflow-hidden text-[#10141E] border-y border-[#A85D45]/15">
      {/* Subtle ambient backdrop */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A85D45]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Heading & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12 sm:mb-20">
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#A85D45] font-semibold">
              <span className="w-6 sm:w-8 h-[1px] bg-[#A85D45]" />
              The Neo Experience
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif font-light text-[#10141E] leading-[1.05]">
              Experience <br />
              <span className="font-normal text-[#A85D45]">life above</span> <br />
              everything
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 sm:space-y-6 lg:pl-8 lg:border-l border-black/10">
            <p className="text-base sm:text-xl text-[#10141E]/90 font-serif leading-relaxed">
              Neo isn’t simply a residence. It’s an elevated way of living, where nature, architecture, wellness, work and leisure come together in one extraordinary address.
            </p>
            <p className="text-xs sm:text-sm text-[#5A6474] leading-relaxed">
              Rising 57 storeys above Neopolis Kokapet, Neo Towers redefines high-rise luxury through seamless layers of private, community, and sky-level sanctuaries crafted for discerning families.
            </p>
          </div>
        </div>

        {/* Horizontal Editorial Navigation Ribbon */}
        <div className="pt-6 sm:pt-8 border-t border-[#A85D45]/20">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A85D45] font-semibold">
              Architectural Layers
            </span>
          </div>

          {/* Ribbon items with smooth horizontal scroll on mobile */}
          <div className="flex lg:grid lg:grid-cols-7 gap-3 sm:gap-4 overflow-x-auto hide-scrollbar pb-2 snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
            {navRibbon.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="group p-3.5 sm:p-4 rounded-xl bg-white border border-[#A85D45]/15 hover:border-[#A85D45] hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[120px] sm:min-h-[140px] w-[140px] sm:w-[170px] lg:w-auto shrink-0 snap-start shadow-sm"
              >
                <div>
                  <span className="text-xs font-mono text-[#A85D45] font-bold group-hover:text-[#10141E] transition-colors">
                    {item.num}
                  </span>
                  <h3 className="text-sm sm:text-base font-serif text-[#10141E] group-hover:text-[#A85D45] transition-colors mt-1 sm:mt-2 font-medium">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between pt-3 mt-auto">
                  <span className="text-[10px] sm:text-[11px] text-[#5A6474] line-clamp-1">
                    {item.desc}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A85D45] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
