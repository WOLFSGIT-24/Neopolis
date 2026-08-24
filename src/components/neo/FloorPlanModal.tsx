'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useNeoModal } from './context/NeoModalContext'
import { X, ZoomIn, ZoomOut, Download, Compass, Maximize2 } from 'lucide-react'

export default function FloorPlanModal() {
  const { selectedFloorPlan, closeFloorPlan, openEnquiry } = useNeoModal()
  const [zoom, setZoom] = useState(1)

  if (!selectedFloorPlan) return null

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 2.5))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.8))
  const handleResetZoom = () => setZoom(1)

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-lg">
      <div
        className="relative w-full max-w-5xl h-[90vh] max-h-[850px] flex flex-col overflow-hidden rounded-2xl bg-[#10131A] border border-[#C98D78]/30 shadow-2xl text-neo-ivory"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#18243A]/50">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C98D78] font-medium">
              {selectedFloorPlan.tower} • {selectedFloorPlan.unit}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-white">
              {selectedFloorPlan.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors text-xs font-mono"
            >
              1:1
            </button>
            <button
              onClick={closeFloorPlan}
              title="Close"
              className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-white hover:text-red-400 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Specs Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-6 py-3 bg-[#121722] border-b border-white/5 text-xs">
          <div>
            <span className="text-neo-muted block text-[10px] uppercase">Configuration</span>
            <span className="text-white font-medium">{selectedFloorPlan.type}</span>
          </div>
          <div>
            <span className="text-neo-muted block text-[10px] uppercase">Super Built-up Area</span>
            <span className="text-[#C98D78] font-medium">{selectedFloorPlan.sba}</span>
          </div>
          <div>
            <span className="text-neo-muted block text-[10px] uppercase">Carpet Area</span>
            <span className="text-white font-medium">{selectedFloorPlan.carpet}</span>
          </div>
          <div>
            <span className="text-neo-muted block text-[10px] uppercase">Facing</span>
            <span className="text-[#E8C5B8] font-medium flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" />
              {selectedFloorPlan.facing}
            </span>
          </div>
        </div>

        {/* Image Canvas with Zoom */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-[#0A0D12] relative cursor-grab active:cursor-grabbing">
          <div
            className="transition-transform duration-200 ease-out origin-center"
            style={{ transform: `scale(${zoom})` }}
          >
            <Image
              src={selectedFloorPlan.image}
              alt={selectedFloorPlan.title}
              width={1200}
              height={900}
              className="max-h-[65vh] w-auto object-contain rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-[#18243A]/50">
          <span className="text-[11px] text-neo-muted hidden sm:inline">
            Floor plan layout is representative and subject to architectural revisions.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                closeFloorPlan()
                openEnquiry(`Pricing for ${selectedFloorPlan.tower} - ${selectedFloorPlan.unit}`)
              }}
              className="px-5 py-2 rounded-lg bg-[#C98D78] text-[#10131A] font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#E8C5B8] transition-colors"
            >
              Enquire Unit Price
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
