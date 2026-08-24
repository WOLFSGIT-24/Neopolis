'use client'
import React, { useState, useEffect, useCallback, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BROCHURE_URL = 'https://cef78c45-cb7c-493a-bb0d-466802e011fc.usrfiles.com/ugd/cef78c_e2918df63b764fc7b6473c87b34dcbcb.pdf'
const LOGO = 'https://static.wixstatic.com/shapes/cef78c_6ad46e6e70f644f6bd16353cdb1ccea4.svg'

const GT = "'GT Ultra Fine', Georgia, serif"
const GAM = "'Lora', Georgia, serif"

export function downloadBrochure() {
  try {
    const a = document.createElement('a')
    a.href = BROCHURE_URL
    a.download = 'Runwal-Raaya-Brochure.pdf'
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  } catch {
    window.open(BROCHURE_URL, '_blank', 'noopener,noreferrer')
  }
}

type PopupCtx = { open: () => void; openForBrochure: () => void }
const EnquiryCtx = createContext<PopupCtx>({ open: () => {}, openForBrochure: () => {} })
export const useEnquiry = () => useContext(EnquiryCtx)

function Field({ label, name, type = 'text', placeholder, value, onChange, required, error }: {
  label: string; name: string; type?: string; placeholder: string
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; error?: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label style={{
        fontFamily: GT, fontSize: '0.52rem', fontWeight: 400,
        letterSpacing: '0.22em', textTransform: 'uppercase' as const,
        color: focused ? '#C8A14A' : 'rgba(51,43,38,0.4)',
        display: 'block', marginBottom: '0.4rem', transition: 'color 0.25s',
      }}>
        {label} {required && <span style={{ color: '#ff6b6b' }}>*</span>}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required}
        placeholder={placeholder}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', background: 'transparent', border: 'none',
          borderBottom: `1px solid ${error ? '#ff6b6b' : focused ? '#C8A14A' : 'rgba(176,140,75,0.2)'}`,
          padding: '0.55rem 0', fontFamily: GAM,
          fontSize: '0.85rem', fontWeight: 300, color: '#2B2725',
          outline: 'none', transition: 'border-color 0.25s',
        }}
      />
      {error && (
        <p style={{ fontFamily: GT, fontSize: '0.45rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#ff6b6b', marginTop: '0.25rem' }}>
          {error}
        </p>
      )}
    </div>
  )
}

function PopupInner({ onClose, isBrochureFlow }: { onClose: () => void; isBrochureFlow?: boolean }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [btnHovered, setBtnHovered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '' }
    if (!form.name.trim()) newErrors.name = 'Full Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone Number is required'
    setErrors(newErrors)
    return !newErrors.name && !newErrors.email && !newErrors.phone
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: form.name, emailAddress: form.email, phoneNumber: form.phone }),
      })
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '' })
      downloadBrochure()
      setTimeout(() => { window.location.href = '/thank-you' }, 700)
    } catch (error) {
      console.error('Failed to submit enquiry:', error)
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative', width: '100%', maxWidth: '420px',
        margin: '0 auto', background: '#F2EDE4',
        boxShadow: '0 24px 60px rgba(27,22,19,0.45), 0 4px 16px rgba(27,22,19,0.2)',
        overflow: 'hidden',
      }}
      className="popup-inner"
      onClick={e => e.stopPropagation()}
    >
      <div style={{ position: 'absolute', top: 12, left: 12, width: 22, height: 22, borderTop: '1px solid #C8A14A', borderLeft: '1px solid #C8A14A', pointerEvents: 'none', zIndex: 10 }} />
      <div style={{ position: 'absolute', bottom: 12, right: 12, width: 22, height: 22, borderBottom: '1px solid #C8A14A', borderRight: '1px solid #C8A14A', pointerEvents: 'none', zIndex: 10 }} />

      <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14, zIndex: 20, background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px', opacity: 0.4, transition: 'opacity 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.4')}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <line x1="1" y1="1" x2="13" y2="13" stroke="#2B2725" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="13" y1="1" x2="1" y2="13" stroke="#2B2725" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </button>

      <div style={{ background: '#2B2725', padding: '1.5rem 2rem 1.25rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none' }} viewBox="0 0 520 140" preserveAspectRatio="xMidYMid slice">
          {[0,1,2].map(i => <ellipse key={i} cx="260" cy="70" rx={120+i*80} ry={40+i*30} stroke="#C8A14A" strokeWidth="0.5" fill="none"/>)}
        </svg>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="Runwal Raaya" style={{ height: '52px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9, display: 'block', margin: '0 auto 1rem' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
          <div style={{ height: '1px', width: '20px', background: '#C8A14A', opacity: 0.6 }} />
          <span style={{ fontFamily: GT, fontSize: '0.48rem', fontWeight: 300, letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'rgba(200,161,74,0.7)' }}>Private Viewing</span>
          <div style={{ height: '1px', width: '20px', background: '#C8A14A', opacity: 0.6 }} />
        </div>
        <h2 style={{ fontFamily: GT, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, lineHeight: 1.1, color: '#F2EDE4', letterSpacing: '-0.01em', margin: 0 }}>
          Book a <em style={{ fontStyle: 'italic', color: '#C8A14A' }}>Private Tour</em>
        </h2>
      </div>

      <div style={{ padding: '1.5rem 2rem 1.75rem' }}>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C8A14A 40%, transparent)', marginBottom: '1.5rem' }} />

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.75rem 0' }}>
            <div style={{ width: '28px', height: '1px', background: '#C8A14A', margin: '0 auto 1.1rem' }} />
            <h3 style={{ fontFamily: GT, fontSize: '1.7rem', fontWeight: 300, color: '#2B2725', marginBottom: '0.65rem' }}>Thank you.</h3>
            <p style={{ fontFamily: GAM, fontSize: '0.78rem', fontWeight: 300, color: 'rgba(51,43,38,0.55)', lineHeight: 1.75, maxWidth: '300px', margin: '0 auto' }}>
              Our team will connect with you shortly. Your brochure download will begin now.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1rem' }} className="popup-grid-2col">
              <Field label="Full Name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required error={errors.name} />
              <Field label="Email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required error={errors.email} />
            </div>
            <Field label="Phone" name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} required error={errors.phone} />
            <button type="submit" onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)} disabled={isSubmitting}
              style={{
                width: '100%', padding: '0.9rem', background: btnHovered ? '#3a3330' : '#2B2725', color: '#F2EDE4',
                fontFamily: GT, fontSize: '0.58rem', fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase' as const,
                border: `1px solid ${btnHovered ? '#C8A14A' : 'rgba(200,161,74,0.18)'}`, cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease', marginTop: '0.1rem', opacity: isSubmitting ? 0.6 : 1,
              }}>
              {isSubmitting ? 'Submitting…' : 'Submit Enquiry'}
            </button>
          </form>
        )}

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C8A14A 40%, transparent)', marginTop: '1.25rem' }} />
      </div>
    </motion.div>
  )
}

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isBrochureFlow, setIsBrochureFlow] = useState(false)

  const open = useCallback(() => { setIsBrochureFlow(false); setIsOpen(true) }, [])
  const openForBrochure = useCallback(() => { setIsBrochureFlow(true); setIsOpen(true) }, [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const seen = sessionStorage.getItem('raaya_popup_shown')
    if (seen) return
    const t = setTimeout(() => {
      setIsOpen(true)
      sessionStorage.setItem('raaya_popup_shown', '1')
    }, 5000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [close])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <EnquiryCtx.Provider value={{ open, openForBrochure }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div key="enquiry-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            onClick={close} className="popup-overlay"
            style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', background: 'rgba(20,15,12,0.72)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }}>
            <PopupInner onClose={close} isBrochureFlow={isBrochureFlow} />
          </motion.div>
        )}
      </AnimatePresence>
    </EnquiryCtx.Provider>
  )
}
