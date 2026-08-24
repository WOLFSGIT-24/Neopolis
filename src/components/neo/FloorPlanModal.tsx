'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useNeoModal } from './context/NeoModalContext'
import { X, ZoomIn, ZoomOut, Compass } from 'lucide-react'

export default function FloorPlanModal() {
  const { selectedFloorPlan, closeFloorPlan, openEnquiry } = useNeoModal()
  const [zoom, setZoom] = useState(1)

  if (!selectedFloorPlan) return null

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 2.5))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.8))
  const handleResetZoom = () => setZoom(1)

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-6 bg-black/75 backdrop-blur-lg">
      <div
        className="relative w-full max-w-5xl h-[90vh] max-h-[850px] flex flex-col overflow-hidden rounded-2xl bg-white border border-[#A85D45]/30 shadow-2xl text-[#10141E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#A85D45]/15 bg-[#FAF7F2]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A85D45] font-semibold">
              {selectedFloorPlan.tower} • {selectedFloorPlan.unit}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#10141E] font-medium">
              {selectedFloorPlan.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              className="p-2 rounded-lg bg-white hover:bg-[#F5EBE6] text-[#10141E] border border-[#A85D45]/20 transition-colors shadow-sm"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              className="p-2 rounded-lg bg-white hover:bg-[#F5EBE6] text-[#10141E] border border-[#A85D45]/20 transition-colors shadow-sm"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              className="p-2 rounded-lg bg-white hover:bg-[#F5EBE6] text-[#10141E] border border-[#A85D45]/20 transition-colors text-xs font-mono shadow-sm font-semibold"
            >
              1:1
            </button>
            <button
              onClick={closeFloorPlan}
              title="Close"
              className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-red-50 text-[#5A6474] hover:text-red-500 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Specs Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-6 py-3 bg-[#F3ECE2] border-b border-[#A85D45]/15 text-xs">
          <div>
            <span className="text-[#5A6474] block text-[10px] uppercase font-mono">Configuration</span>
            <span className="text-[#10141E] font-medium">{selectedFloorPlan.type}</span>
          </div>
          <div>
            <span className="text-[#5A6474] block text-[10px] uppercase font-mono">Super Built up Area</span>
            <span className="text-[#A85D45] font-semibold">{selectedFloorPlan.sba}</span>
          </div>
          <div>
            <span className="text-[#5A6474] block text-[10px] uppercase font-mono">Carpet Area</span>
            <span className="text-[#10141E] font-medium">{selectedFloorPlan.carpet}</span>
          </div>
          <div>
            <span className="text-[#5A6474] block text-[10px] uppercase font-mono">Facing</span>
            <span className="text-[#10141E] font-medium flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-[#A85D45]" />
              {selectedFloorPlan.facing}
            </span>
          </div>
        </div>

        {/* Image Canvas with Zoom */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-[#FAF7F2] relative cursor-grab active:cursor-grabbing">
          <div
            className="transition-transform duration-200 ease-out origin-center"
            style={{ transform: `scale(${zoom})` }}
          >
            <Image
              src={selectedFloorPlan.image}
              alt={selectedFloorPlan.title}
              width={1200}
              height={900}
              className="max-h-[65vh] w-auto object-contain rounded-lg shadow-md"
              priority
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-[#A85D45]/15 bg-[#FAF7F2]">
          <span className="text-[11px] text-[#5A6474] hidden sm:inline">
            Floor plan layout is representative and subject to architectural revisions.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                closeFloorPlan()
                openEnquiry(`Pricing for ${selectedFloorPlan.tower} ${selectedFloorPlan.unit}`)
              }}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white font-semibold text-xs uppercase tracking-[0.15em] hover:opacity-90 transition-colors shadow-md"
            >
              Enquire Unit Price
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
