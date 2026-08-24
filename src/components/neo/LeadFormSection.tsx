'use client'
import React, { useState } from 'react'
import { Phone, Mail, User, Clock, Building2, CheckCircle2, Shield, PhoneCall } from 'lucide-react'

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interestedIn: '3 BHK',
    preferredTime: 'Morning (9 AM to 12 PM)',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 bg-[#FAF7F2] text-[#10141E] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#A85D45]/20 shadow-2xl p-5 sm:p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column Statement */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#A85D45] font-semibold block">
                  Private Enquiries
                </span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-[#10141E] leading-tight">
                  Let&apos;s make <br />
                  <span className="text-[#A85D45] font-normal">Neo yours</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#5A6474] leading-relaxed pt-1 sm:pt-2">
                  Connect with our dedicated private client team for bespoke floor plan walkthroughs, pricing breakdowns, and VIP site visit reservations.
                </p>
              </div>

              {/* Contact direct dial info */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#A85D45]/15 space-y-1.5 sm:space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#A85D45] font-mono font-semibold block">
                  Direct Concierge Line
                </span>
                <a
                  href="tel:+919996999720"
                  className="text-lg sm:text-2xl font-mono text-[#10141E] hover:text-[#A85D45] transition-colors flex items-center gap-2 font-medium"
                >
                  <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-[#A85D45] shrink-0" />
                  <span>+91 9996 999 720</span>
                </a>
                <p className="text-[10px] sm:text-[11px] text-[#5A6474]">
                  Available Mon to Sun, 9:00 AM to 8:00 PM IST
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#5A6474]">
                <Shield className="w-4 h-4 text-[#A85D45]" />
                <span>Strict privacy assured. Zero third-party sharing.</span>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#A85D45]/40 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#F5EBE6] flex items-center justify-center text-[#A85D45]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#10141E] font-medium">Inquiry Received</h3>
                  <p className="text-xs sm:text-sm text-[#5A6474] max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="text-[#10141E] font-semibold">{formData.name}</span>. A senior Neo property advisor has been notified and will connect with you via {formData.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        interestedIn: '3 BHK',
                        preferredTime: 'Morning (9 AM to 12 PM)',
                      })
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#A85D45] text-white hover:opacity-90 transition-colors shadow-md"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-xl pl-10 pr-4 py-3 text-sm text-[#10141E] placeholder-gray-400 focus:outline-none focus:border-[#A85D45] transition-colors"
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
                          required
                          placeholder="+91 99969 99720"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-xl pl-10 pr-4 py-3 text-sm text-[#10141E] placeholder-gray-400 focus:outline-none focus:border-[#A85D45] transition-colors"
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
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-xl pl-10 pr-4 py-3 text-sm text-[#10141E] placeholder-gray-400 focus:outline-none focus:border-[#A85D45] transition-colors"
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
                          value={formData.interestedIn}
                          onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                          className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-xl pl-10 pr-4 py-3 text-sm text-[#10141E] focus:outline-none focus:border-[#A85D45] appearance-none cursor-pointer"
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
                          className="w-full bg-[#FAF7F2] border border-[#A85D45]/20 rounded-xl pl-10 pr-4 py-3 text-sm text-[#10141E] focus:outline-none focus:border-[#A85D45] appearance-none cursor-pointer"
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
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#C98D78] via-[#B8735C] to-[#A85D45] text-white font-bold text-xs uppercase tracking-[0.2em] hover:opacity-95 active:scale-[0.99] transition-all shadow-lg shadow-[#A85D45]/25"
                    >
                      Request Details
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
