'use client'
import React from 'react'
import { useNeoModal } from './context/NeoModalContext'
import { Download, FileText } from 'lucide-react'

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
    <section id="price" className="relative w-full py-20 sm:py-24 bg-[#F3ECE2] text-[#10141E] overflow-hidden border-t border-[#A85D45]/15">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Simple & Elegant Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A85D45] font-semibold block">
            Payment Plan
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#10141E] leading-tight">
            Simple, milestone-based <br />
            <span className="italic text-[#A85D45] font-normal">payment.</span>
          </h2>
          <div className="pt-2 inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white border border-[#A85D45]/30 text-xs font-mono text-[#A85D45] shadow-sm">
            <span>Base Price:</span>
            <span className="text-[#10141E] font-bold">₹10,900</span>
            <span>/ sq. ft.</span>
          </div>
        </div>

        {/* 4 Simple Milestone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {paymentSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#A85D45]/20 hover:border-[#A85D45]/60 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl hover:shadow-[#A85D45]/10 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#A85D45] font-semibold">
                    Phase {item.step}
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#10141E] group-hover:text-[#A85D45] transition-colors">
                    {item.percentage}
                  </span>
                </div>

                <h3 className="text-base font-serif text-[#10141E] font-medium mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5A6474] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-black/5 flex items-center gap-1.5 text-[10px] font-mono text-[#A85D45] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A85D45]" />
                <span>Construction Linked</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Luxury Action Strip */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#A85D45]/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-serif text-[#10141E] font-semibold">
              Looking for full pricing breakdown & unit plans?
            </h4>
            <p className="text-xs text-[#5A6474]">
              Download the official price docket or view statutory purchase terms.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <button
              onClick={openTerms}
              className="px-4 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EBE6] text-xs text-[#A85D45] border border-[#A85D45]/20 transition-colors flex items-center gap-1.5 font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-[#A85D45]" />
              Pricing Terms & Taxes
            </button>

            <button
              onClick={openBrochure}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#A85D45] hover:text-white text-xs uppercase tracking-wider text-[#A85D45] border border-[#A85D45]/30 transition-all flex items-center gap-1.5 font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              Download Price Sheet
            </button>

            <button
              onClick={() => openEnquiry('Price Section Consultation')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white text-xs uppercase tracking-wider font-semibold hover:opacity-95 transition-colors shadow-md"
            >
              Enquire Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
