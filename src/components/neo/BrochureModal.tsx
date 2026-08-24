'use client'
import React, { useState } from 'react'
import { useNeoModal } from './context/NeoModalContext'
import { X, CheckCircle2, Download, FileText, Lock } from 'lucide-react'

export default function BrochureModal() {
  const { isBrochureOpen, closeBrochure } = useNeoModal()
  const [downloaded, setDownloaded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  if (!isBrochureOpen) return null

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault()
    setDownloaded(true)
  }

  const handleReset = () => {
    setDownloaded(false)
    setFormData({ name: '', phone: '', email: '' })
    closeBrochure()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-all duration-300">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white border border-[#A85D45]/30 shadow-2xl p-6 sm:p-8 text-[#10141E]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeBrochure}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-[#5A6474] hover:text-[#10141E] p-2 rounded-full hover:bg-black/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#F5EBE6] flex items-center justify-center text-[#A85D45]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#10141E] font-medium">E-Brochure Ready</h3>
            <p className="text-[#5A6474] text-xs leading-relaxed max-w-xs mx-auto">
              Thank you, <span className="text-[#A85D45] font-semibold">{formData.name}</span>. The Neo Towers architectural docket and master plans have been unlocked.
            </p>
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="#residences"
                onClick={handleReset}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:opacity-90 transition-colors shadow-md"
              >
                <FileText className="w-4 h-4" />
                View Floor Plans Online
              </a>
              <button
                onClick={handleReset}
                className="w-full py-2.5 text-xs text-[#5A6474] hover:text-[#10141E] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#A85D45] block mb-1 font-semibold">
                Official Project Document
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#10141E] font-medium">
                Download Neo Brochure
              </h3>
              <p className="text-xs text-[#5A6474] mt-1 max-w-sm mx-auto">
                Access comprehensive architectural elevations, Club Neo specifications, Skydeck details & unit layouts.
              </p>
            </div>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#5A6474] mb-1.5 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-lg px-4 py-2.5 text-sm text-[#10141E] placeholder-gray-400 focus:outline-none focus:border-[#A85D45] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#5A6474] mb-1.5 font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99969 99720"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-lg px-4 py-2.5 text-sm text-[#10141E] placeholder-gray-400 focus:outline-none focus:border-[#A85D45] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#5A6474] mb-1.5 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-lg px-4 py-2.5 text-sm text-[#10141E] placeholder-gray-400 focus:outline-none focus:border-[#A85D45] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#A85D45]/20"
                >
                  <Download className="w-4 h-4" />
                  Instant Download PDF
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C97A7] pt-1">
                <Lock className="w-3 h-3" />
                <span>Your information is confidential. No spam guaranteed.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
