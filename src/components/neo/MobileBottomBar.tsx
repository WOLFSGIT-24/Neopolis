'use client'
import React from 'react'
import { useNeoModal } from './context/NeoModalContext'
import { PhoneCall, Sparkles } from 'lucide-react'

export default function MobileBottomBar() {
  const { openEnquiry } = useNeoModal()

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-[#FAF7F2]/95 backdrop-blur-xl border-t border-[#A85D45]/20 px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-3 sm:hidden shadow-2xl">
      {/* Call Button */}
      <a
        href="tel:+919996999720"
        className="flex-1 py-3 rounded-xl bg-white border border-[#A85D45]/30 text-[#10141E] text-xs font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
      >
        <PhoneCall className="w-4 h-4 text-[#A85D45]" />
        <span>Call</span>
      </a>

      {/* Enquire Button */}
      <button
        onClick={() => openEnquiry('Mobile Sticky Bar')}
        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-lg shadow-[#A85D45]/25"
      >
        <Sparkles className="w-4 h-4" />
        <span>Enquire</span>
      </button>
    </div>
  )
}
