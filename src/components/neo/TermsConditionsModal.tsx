'use client'
import React from 'react'
import { useNeoModal } from './context/NeoModalContext'
import { X, ShieldCheck, AlertCircle, FileText } from 'lucide-react'

export default function TermsConditionsModal() {
  const { isTermsOpen, closeTerms } = useNeoModal()

  if (!isTermsOpen) return null

  const clauses = [
    {
      title: 'TDS Responsibility',
      content:
        'As per Section 194-IA of the Income Tax Act, 1961, the purchaser is legally responsible for deducting 1% TDS on all property milestone payments and remitting the same to the government, providing Form 16B to the developer.',
    },
    {
      title: 'Applicable GST',
      content:
        'Goods and Services Tax (GST) is applicable at prevailing statutory rates (currently 5% without ITC for residential units) on all milestone demands and must be paid along with respective installments.',
    },
    {
      title: 'Corpus Fund & Advance Maintenance',
      content:
        'A one-time sinking/corpus fund and advance maintenance charges for 24 months are payable prior to registration/possession towards the upkeep of common amenities, high-speed elevators, and landscaped facilities.',
    },
    {
      title: 'Legal & Documentation Charges',
      content:
        'Legal charges towards drafting the Agreement of Sale, construction agreement, and execution coordination will be charged at actuals/prescribed fixed rates during agreement execution.',
    },
    {
      title: 'Refundable Caution Deposit & Debris Removal',
      content:
        'A refundable fit-out caution deposit and standardized debris removal charges are payable at the time of handing over the unit for interior fit-outs.',
    },
    {
      title: 'Stamp Duty & Registration',
      content:
        'Stamp duty, registration charges, transfer duty, and mutation fees are payable directly to the Registration & Stamps Department, Government of Telangana, at the prevailing rates at the time of execution.',
    },
    {
      title: 'Price-Change Disclaimer',
      content:
        'Prices, unit availability, and promotional offers are subject to change without prior notice at the sole discretion of Yula Globus Developers LLP. Price lock is applicable strictly upon receipt of booking advance and realization of booking payment.',
    },
    {
      title: 'Statutory Bank Collection Account',
      content:
        'All booking amounts and milestone payments must strictly be made via crossed cheque / RTGS / NEFT in favor of the designated TG-RERA project master escrow account. Cash transactions are strictly not permitted.',
    },
  ]

  return (
    <div className="fixed inset-0 z-[105] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden rounded-2xl bg-[#121722] border border-[#C98D78]/30 shadow-2xl text-neo-ivory"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#18243A]/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C98D78]/20 flex items-center justify-center text-[#C98D78]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-white">Price Details & Statutory Terms</h3>
              <p className="text-xs text-neo-muted">Project RERA: P02400010006</p>
            </div>
          </div>
          <button
            onClick={closeTerms}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neo-muted hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs text-neo-ivory/80 leading-relaxed">
          <div className="p-3.5 rounded-lg bg-[#C98D78]/10 border border-[#C98D78]/20 flex items-start gap-3 text-neo-peach text-xs">
            <AlertCircle className="w-4 h-4 text-[#C98D78] shrink-0 mt-0.5" />
            <p>
              Please read these statutory project purchase guidelines carefully. All financial schedules adhere to the Telangana Real Estate Regulatory Authority (TG RERA) framework.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {clauses.map((clause, idx) => (
              <div key={idx} className="border-b border-white/5 pb-3">
                <h4 className="font-semibold text-white text-sm mb-1 flex items-center gap-2">
                  <span className="text-[#C98D78] text-xs font-mono">{String(idx + 1).padStart(2, '0')}.</span>
                  {clause.title}
                </h4>
                <p className="text-neo-muted pl-6">{clause.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#18243A]/50">
          <div className="flex items-center gap-2 text-[11px] text-neo-muted">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>TG RERA Registered Project</span>
          </div>
          <button
            onClick={closeTerms}
            className="px-5 py-2 rounded-lg bg-[#C98D78] text-[#10131A] font-semibold text-xs uppercase tracking-wider hover:bg-[#E8C5B8] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  )
}
