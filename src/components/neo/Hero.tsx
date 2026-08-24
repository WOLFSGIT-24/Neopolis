"use client";
import React from "react";
import Image from "next/image";
import { useNeoModal } from "./context/NeoModalContext";
import { ArrowDown, Download, Sparkles, ChevronDown } from "lucide-react";

export default function Hero() {
  const { openEnquiry, openBrochure } = useNeoModal();

  const stats = [
    { label: "Acres of Splendor", value: "4.36" },
    { label: "Iconic Towers", value: "2" },
    { label: "Storeys High", value: "57" },
    { label: "Exclusive Residences", value: "711" },
  ];

  return (
    <section
      id="overview"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#10131A] text-white pt-28 pb-12 sm:pb-16"
    >
      {/* Background Architectural Render with Luxury Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/neo-assets/lifeatneo/banner/desktop.jpg"
          alt="Neo Towers Hyderabad"
          fill
          priority
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients & Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10131A] via-[#10131A]/55 to-[#10131A]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#10131A]/30 to-[#10131A]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10131A]/80 via-transparent to-[#10131A]/70" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="max-w-[1600px] h-full mx-auto border-x border-[#C98D78]/30 flex justify-between">
          <div className="w-[1px] h-full bg-[#C98D78]/20 hidden lg:block" />
          <div className="w-[1px] h-full bg-[#C98D78]/20 hidden lg:block" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto text-center flex flex-col items-center">
        {/* Subtle Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18243A]/80 border border-[#C98D78]/30 backdrop-blur-md mb-6 sm:mb-8 animate-fadeIn">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C98D78] animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E8C5B8] font-light">
            Neopolis • Kokapet • Hyderabad
          </span>
        </div>

        {/* Hero Typography */}
        <div className="max-w-4xl space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.35em] text-[#C98D78] font-light">
            An Address Above All
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight text-white leading-[0.95]">
            Neo Towers
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-serif italic text-neo-peach/90 font-light max-w-2xl mx-auto pt-2">
            Where life rises above the ordinary.
          </p>
        </div>

        {/* Dual Luxury CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-xl justify-center">
          <a
            href="#experience"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-gradient-to-r from-[#E8C5B8] via-[#C98D78] to-[#A86D58] text-[#10131A] hover:shadow-xl hover:shadow-[#C98D78]/30 active:scale-95 transition-all text-center whitespace-nowrap"
          >
            Explore Neo
          </a>
          <button
            onClick={openBrochure}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.18em] text-neo-ivory border border-[#C98D78]/40 hover:border-[#C98D78] hover:bg-[#C98D78]/10 backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 text-[#C98D78] shrink-0" />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>

      {/* Information Strip & Scroll Indicator */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full mt-12">
        {/* Info Strip */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 mb-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-x-0 sm:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-normal">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neo-muted mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href="#experience"
            className="group flex flex-col items-center gap-2 text-neo-muted hover:text-[#C98D78] transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-light">
              Scroll to discover
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C98D78]" />
          </a>
        </div>
      </div>
    </section>
  );
}
