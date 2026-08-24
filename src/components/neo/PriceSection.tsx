'use client'
import React from 'react'
import { useNeoModal } from './context/NeoModalContext'
import { Download, FileText, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export default function PriceSection() {
  const { openEnquiry, openTerms, openBrochure } = useNeoModal()

  const paymentSteps = [
    {
      step: '01',
      percentage: '20%',
      title: 'Booking & Agreement',
      desc: '10% on booking token + 10% on execution of Agreement of Sale (AOS).',
    },
    {
      step: '02',
      percentage: '20%',
      title: 'Foundation & Podium',
      desc: '10% on completion of raft footings + 10% on completion of podium slab.',
    },
    {
      step: '03',
      percentage: '45%',
      title: 'Superstructure Progress',
      desc: 'Linked milestone disbursements across 57 high-rise floor slabs.',
    },
    {
      step: '04',
      percentage: '15%',
      title: 'Finishing & Handover',
      desc: '5% on painting + 5% on flooring + 5% upon possession / registration.',
    },
  ]

  return (
    <section id="price" className="relative w-full py-20 sm:py-24 bg-[#10131A] text-neo-ivory overflow-hidden border-t border-[#C98D78]/20">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#18243A]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Simple & Elegant Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C98D78] font-medium block">
            Payment Plan
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
            Simple, milestone-based <br />
            <span className="italic text-neo-peach font-normal">payment.</span>
          </h2>
          <div className="pt-2 inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#18243A] border border-[#C98D78]/30 text-xs font-mono text-[#E8C5B8]">
            <span>Base Price:</span>
            <span className="text-white font-bold">₹10,900</span>
            <span>/ sq. ft.</span>
          </div>
        </div>

        {/* 4 Simple Milestone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {paymentSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141822] border border-[#C98D78]/25 hover:border-[#C98D78]/60 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-[#C98D78]/10 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#C98D78]">
                    Phase {item.step}
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[#E8C5B8] transition-colors">
                    {item.percentage}
                  </span>
                </div>

                <h3 className="text-base font-serif text-white font-medium mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-neo-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-1 text-[10px] font-mono text-[#C98D78]/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C98D78]" />
                <span>Construction Linked</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Luxury Action Strip */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#121620] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-serif text-white font-medium">
              Looking for full pricing breakdown & unit plans?
            </h4>
            <p className="text-xs text-neo-muted">
              Download the official price docket or view statutory purchase terms.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <button
              onClick={openTerms}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-neo-peach border border-white/10 transition-colors flex items-center gap-1.5 font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-[#C98D78]" />
              Pricing Terms & Taxes
            </button>

            <button
              onClick={openBrochure}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-[#C98D78] hover:text-[#10131A] text-xs uppercase tracking-wider text-neo-peach border border-[#C98D78]/30 transition-all flex items-center gap-1.5 font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              Download Price Sheet
            </button>

            <button
              onClick={() => openEnquiry('Price Section Consultation')}
              className="px-6 py-2.5 rounded-xl bg-[#C98D78] text-[#10131A] text-xs uppercase tracking-wider font-semibold hover:bg-[#E8C5B8] transition-colors"
            >
              Enquire Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
