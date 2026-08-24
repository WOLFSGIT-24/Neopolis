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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#121722] border border-[#C98D78]/30 shadow-2xl p-6 sm:p-8 text-neo-ivory"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeBrochure}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-neo-muted hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C98D78]/20 flex items-center justify-center text-[#C98D78]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">E-Brochure Ready</h3>
            <p className="text-neo-muted text-xs leading-relaxed max-w-xs mx-auto">
              Thank you, <span className="text-[#C98D78] font-medium">{formData.name}</span>. The Neo Towers architectural docket and master plans have been unlocked.
            </p>
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="#residences"
                onClick={handleReset}
                className="w-full py-3 rounded-lg bg-[#C98D78] text-[#10131A] font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#E8C5B8] transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Floor Plans Online
              </a>
              <button
                onClick={handleReset}
                className="w-full py-2.5 text-xs text-neo-muted hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C98D78] block mb-1">
                Official Project Document
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                Download Neo Brochure
              </h3>
              <p className="text-xs text-neo-muted mt-1 max-w-sm mx-auto">
                Access comprehensive architectural elevations, Club Neo specifications, Skydeck details & unit layouts.
              </p>
            </div>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neo-muted mb-1.5 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#18243A]/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C98D78] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neo-muted mb-1.5 font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99969 99720"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#18243A]/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C98D78] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neo-muted mb-1.5 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#18243A]/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C98D78] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#C98D78] to-[#A86D58] text-[#10131A] font-semibold text-xs uppercase tracking-[0.2em] hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C98D78]/10"
                >
                  <Download className="w-4 h-4" />
                  Instant Download PDF
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neo-muted/70 pt-1">
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
