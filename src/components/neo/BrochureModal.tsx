'use client'
import React, { useState } from 'react'
import { useNeoModal } from './context/NeoModalContext'
import { X, CheckCircle2, Download, FileText, Lock, User, Phone, Mail, ArrowDownToLine } from 'lucide-react'

export default function BrochureModal() {
  const { isBrochureOpen, closeBrochure } = useNeoModal()
  const [downloaded, setDownloaded] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  if (!isBrochureOpen) return null

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedSpecialKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End']
    if (allowedSpecialKeys.includes(e.key) || e.ctrlKey || e.metaKey) return
    if (!/^[a-zA-Z\s]$/.test(e.key)) {
      e.preventDefault()
    }
  }

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedSpecialKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End']
    if (allowedSpecialKeys.includes(e.key) || e.ctrlKey || e.metaKey) return
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault()
    }
  }

  const triggerFileDownload = () => {
    const link = document.createElement('a')
    link.href = '/Neo%20Main%20Brochure.pdf'
    link.download = 'Neo Main Brochure.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    // Strict validation
    if (formData.name.trim().length < 2) {
      setErrorMessage('Please enter a valid name (at least 2 letters, no numbers).')
      return
    }

    if (formData.phone.length !== 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.')
      return
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          phoneNumber: formData.phone,
          emailAddress: formData.email,
        }),
      }).catch(() => {})
    } catch {
      // Continue to show success state
    }

    // Trigger instant automatic download of brochure
    triggerFileDownload()
    setDownloaded(true)
  }

  const handleReset = () => {
    setDownloaded(false)
    setErrorMessage('')
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
          onClick={handleReset}
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
            <h3 className="text-2xl font-serif text-[#10141E] font-medium">Brochure Download Started</h3>
            <p className="text-[#5A6474] text-xs leading-relaxed max-w-xs mx-auto">
              Thank you, <span className="text-[#A85D45] font-semibold">{formData.name}</span>. Your download has started automatically.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="/Neo%20Main%20Brochure.pdf"
                download="Neo Main Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-[#FAF7F2] hover:bg-[#F5EBE6] text-[#A85D45] border border-[#A85D45]/25 font-semibold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowDownToLine className="w-4 h-4" />
                Click Here If Download Didn&apos;t Start
              </a>
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
                className="w-full py-2 text-xs text-[#5A6474] hover:text-[#10141E] transition-colors"
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
                Access comprehensive architectural elevations, Club Neo specifications, Skydeck details & unit layouts
              </p>
            </div>

            <form onSubmit={handleDownload} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#5A6474] mb-1.5 font-medium">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8C97A7] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onKeyDown={handleNameKeyDown}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value.replace(/[^a-zA-Z\s]/g, ''),
                      })
                    }
                    pattern="^[A-Za-z\s]{2,50}$"
                    title="Please enter only letters and spaces (min 2 characters)"
                    className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#10141E] placeholder-gray-400 focus:outline-none focus:border-[#A85D45] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#5A6474] mb-1.5 font-medium">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8C97A7] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    inputMode="numeric"
                    required
                    maxLength={10}
                    placeholder="XXXXX XXXXX"
                    value={formData.phone}
                    onKeyDown={handlePhoneKeyDown}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value.replace(/\D/g, '').slice(0, 10),
                      })
                    }
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#10141E] placeholder-gray-400 focus:outline-none focus:border-[#A85D45] transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#5A6474] mb-1.5 font-medium">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8C97A7] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value.trim() })}
                    pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address (e.g. name@domain.com)"
                    className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#10141E] placeholder-gray-400 focus:outline-none focus:border-[#A85D45] transition-colors"
                  />
                </div>
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
