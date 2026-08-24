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
      title: 'Price Change Disclaimer',
      content:
        'Prices, unit availability, and promotional offers are subject to change without prior notice at the sole discretion of Yula Globus Developers LLP. Price lock is applicable strictly upon receipt of booking advance and realization of booking payment.',
    },
    {
      title: 'Statutory Bank Collection Account',
      content:
        'All booking amounts and milestone payments must strictly be made via crossed cheque / RTGS / NEFT in favor of the designated TG RERA project master escrow account. Cash transactions are strictly not permitted.',
    },
  ]

  return (
    <div className="fixed inset-0 z-[105] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden rounded-2xl bg-white border border-[#A85D45]/30 shadow-2xl text-[#10141E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#A85D45]/15 bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#F5EBE6] flex items-center justify-center text-[#A85D45]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-[#10141E] font-medium">Price Details & Statutory Terms</h3>
              <p className="text-xs text-[#5A6474]">Project RERA: P02400010006</p>
            </div>
          </div>
          <button
            onClick={closeTerms}
            className="p-2 rounded-lg bg-white hover:bg-black/5 text-[#5A6474] hover:text-[#10141E] transition-colors border border-[#A85D45]/15"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs text-[#10141E]/90 leading-relaxed">
          <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#A85D45]/20 flex items-start gap-3 text-[#A85D45] text-xs font-medium">
            <AlertCircle className="w-4 h-4 text-[#A85D45] shrink-0 mt-0.5" />
            <p>
              Please read these statutory project purchase guidelines carefully. All financial schedules adhere to the Telangana Real Estate Regulatory Authority (TG RERA) framework.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {clauses.map((clause, idx) => (
              <div key={idx} className="border-b border-black/5 pb-3">
                <h4 className="font-semibold text-[#10141E] text-sm mb-1 flex items-center gap-2">
                  <span className="text-[#A85D45] text-xs font-mono">{String(idx + 1).padStart(2, '0')}</span>
                  {clause.title}
                </h4>
                <p className="text-[#5A6474] pl-6">{clause.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#A85D45]/15 bg-[#FAF7F2]">
          <div className="flex items-center gap-2 text-[11px] text-[#5A6474]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>TG RERA Registered Project</span>
          </div>
          <button
            onClick={closeTerms}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-colors shadow-md"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  )
}
