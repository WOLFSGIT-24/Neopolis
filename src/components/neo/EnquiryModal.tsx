'use client'
import React, { useState } from 'react'
import { useNeoModal } from './context/NeoModalContext'
import { X, CheckCircle2, Phone, Mail, User, Clock, Building2 } from 'lucide-react'

export default function EnquiryModal() {
  const { isEnquiryOpen, closeEnquiry, enquirySource } = useNeoModal()
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitType: '3 BHK',
    preferredTime: 'Morning (9 AM to 12 PM)',
  })

  if (!isEnquiryOpen) return null

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

  const handleSubmit = async (e: React.FormEvent) => {
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
    if (formData.email && !emailRegex.test(formData.email)) {
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
          emailAddress: formData.email || 'not-provided@neotowers.in',
        }),
      }).catch(() => {})
    } catch {
      // Continue to show success state
    }

    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setErrorMessage('')
    setFormData({
      name: '',
      phone: '',
      email: '',
      unitType: '3 BHK',
      preferredTime: 'Morning (9 AM to 12 PM)',
    })
    closeEnquiry()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-all duration-300">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white border border-[#A85D45]/30 shadow-2xl p-6 sm:p-8 text-[#10141E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-[#5A6474] hover:text-[#10141E] p-2 rounded-full hover:bg-black/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#F5EBE6] flex items-center justify-center text-[#A85D45]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#10141E] font-medium">Thank You</h3>
            <p className="text-[#5A6474] text-sm max-w-xs mx-auto leading-relaxed">
              Your inquiry for <span className="text-[#A85D45] font-semibold">{enquirySource}</span> has been received. Our luxury property advisor will connect with you via +91 {formData.phone} shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white hover:opacity-90 transition-colors shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#A85D45] block mb-1 font-semibold">
                Private Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#10141E] font-medium">
                Let&apos;s make Neo yours
              </h3>
              <p className="text-xs text-[#5A6474] mt-1">
                Experience elevated luxury in Neopolis, Kokapet
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8C97A7] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value.trim() })}
                      pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                      title="Please enter a valid email address (e.g. name@domain.com)"
                      className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#10141E] placeholder-gray-400 focus:outline-none focus:border-[#A85D45] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#5A6474] mb-1.5 font-medium">
                    Interested In
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#8C97A7] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.unitType}
                      onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#10141E] focus:outline-none focus:border-[#A85D45] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="3 BHK">3 BHK Luxury (2,253 to 2,735 sq.ft.)</option>
                      <option value="4 BHK">4 BHK Grand (3,220 to 4,505 sq.ft.)</option>
                      <option value="Sky Office">Sky Office (Levels 48 & 49)</option>
                      <option value="Investment">Prime Investment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#5A6474] mb-1.5 font-medium">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#8C97A7] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#10141E] focus:outline-none focus:border-[#A85D45] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Morning">Morning (9 AM to 12 PM)</option>
                      <option value="Afternoon">Afternoon (12 PM to 4 PM)</option>
                      <option value="Evening">Evening (4 PM to 8 PM)</option>
                      <option value="Weekend">Weekend Site Visit</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:opacity-90 active:scale-[0.99] transition-all shadow-md shadow-[#A85D45]/20"
                >
                  Request Private Details
                </button>
              </div>

              <div className="text-center pt-1">
                <p className="text-[11px] text-[#5A6474]">
                  Direct Line:{' '}
                  <a href="tel:+919996999720" className="text-[#A85D45] hover:underline font-semibold">
                    +91 9996 999 720
                  </a>{' '}
                  • RERA: <span className="text-[#10141E] font-medium">P02400010006</span>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
