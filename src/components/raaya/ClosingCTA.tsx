'use client'
import React, { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { downloadBrochure } from './EnquiryPopup'

const BG_IMAGE = 'https://static.wixstatic.com/media/cef78c_765644a7757c4906a3be3b8e4eb6d55b~mv2.jpg'
const GT  = "'GT Ultra Fine', Georgia, serif"
const GAM = "'Lora', 'GT Ultra Fine', Georgia, serif"

function InputField({ label, name, type = 'text', placeholder, value, onChange, required, error }: {
  label: string; name: string; type?: string; placeholder: string
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; error?: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label style={{
        fontFamily: GT, fontSize: '0.52rem', fontWeight: 300,
        letterSpacing: '0.22em', textTransform: 'uppercase' as const,
        color: focused ? '#C8A14A' : 'rgba(244,239,232,0.75)',
        display: 'block', marginBottom: '0.45rem', transition: 'color 0.25s',
      }}>
        {label} {required && <span style={{ color: '#ff6b6b' }}>*</span>}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required}
        placeholder={placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', background: 'transparent', border: 'none',
          borderBottom: `1px solid ${error ? '#ff6b6b' : focused ? '#C8A14A' : 'rgba(255,255,255,0.45)'}`,
          padding: '0.6rem 0', fontFamily: GAM,
          fontSize: '0.85rem', fontWeight: 300, color: '#ffffff',
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

export default function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '' }
    if (!form.name.trim())  newErrors.name  = 'Full Name is required'
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
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: form.name, emailAddress: form.email, phoneNumber: form.phone }),
      })
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '' })
      downloadBrochure()
      setTimeout(() => { window.location.href = '/thank-you' }, 700)
    } catch (err) {
      console.error(err)
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="enquire" ref={ref} className="relative overflow-hidden">

      {/* Background parallax */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: imgY }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BG_IMAGE} alt="Runwal Raaya" className="w-full h-full object-cover"
          style={{ transform: 'scale(1.06)', objectPosition: 'center top' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(27,22,18,0.88) 0%, rgba(27,22,18,0.65) 45%, rgba(27,22,18,0.22) 100%)' }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 py-16 lg:py-20 closing-cta-content">
        <div className="closing-grid grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0 items-start">

          {/* LEFT */}
          <div className="pr-0 lg:pr-16 pb-12 lg:pb-0">

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }} className="flex items-center gap-3 mb-6"
            >
              <div style={{ height: '1px', width: '32px', background: '#C8A14A', opacity: 0.7 }} />
              <span style={{ fontFamily: GT, fontStyle: 'italic', fontSize: '0.82rem', letterSpacing: '0.12em', color: 'rgba(200,168,107,0.8)' }}>
                Runwal Raaya
              </span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: '80%', opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span style={{ display: 'block', fontFamily: GT, fontSize: 'clamp(2rem, 3.8vw, 3.4rem)', fontWeight: 400, lineHeight: 1.1, color: '#F4EFE8', letterSpacing: '-0.01em' }}>
                  Your Home.<br />Your Space.
                </span>
                <em style={{ display: 'block', fontFamily: GT, fontStyle: 'italic', fontSize: 'clamp(2rem, 3.8vw, 3.4rem)', fontWeight: 300, lineHeight: 1.1, color: '#C8A14A', letterSpacing: '-0.01em' }}>
                  Your Luxury.
                </em>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ fontFamily: GAM, fontSize: '0.85rem', fontWeight: 300, lineHeight: 2, color: 'rgba(242,237,228,0.88)', maxWidth: '380px', marginBottom: '2.5rem' }}
            >
              Living without compromise takes on a new meaning at Runwal Raaya. Discover an address shaped by privacy, prestige, and enduring luxury — built on nearly five decades of trust.
            </motion.p>
          </div>

          {/* VERTICAL DIVIDER */}
          <motion.div
            initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="closing-divider hidden lg:block"
            style={{ width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(200,161,74,0.25) 20%, rgba(200,161,74,0.25) 80%, transparent)', transformOrigin: 'top', alignSelf: 'stretch' }}
          />

          {/* RIGHT: FORM */}
          <motion.div
            id="enquire-form"
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="pl-0 lg:pl-16 pt-12 lg:pt-0"
          >
            <div style={{
              background: 'rgba(20,15,12,0.55)', backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(200,161,74,0.18)', padding: '2rem',
            }}>
              <div style={{ height: '1px', background: 'linear-gradient(90deg, #C8A14A, transparent)', marginBottom: '1.75rem' }} />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div style={{ width: '36px', height: '1px', background: '#C8A14A', marginBottom: '1.5rem' }} />
                  <h3 style={{ fontFamily: GT, fontSize: '2rem', fontWeight: 300, color: '#F2EDE4', marginBottom: '0.75rem' }}>Thank you.</h3>
                  <p style={{ fontFamily: GAM, fontSize: '0.78rem', fontWeight: 300, color: 'rgba(242,237,228,0.65)', lineHeight: 1.8, maxWidth: '340px', margin: '0 auto' }}>
                    Our team will connect with you shortly. Your brochure download will begin now.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="popup-grid-2col">
                    <InputField label="Full Name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required error={errors.name} />
                    <InputField label="Email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required error={errors.email} />
                  </div>
                  <InputField label="Phone" name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} required error={errors.phone} />
                  <button
                    type="submit" disabled={isSubmitting}
                    style={{
                      width: '100%', padding: '1rem', background: '#2B2725', color: '#F2EDE4',
                      fontFamily: GT, fontSize: '0.58rem', fontWeight: 300,
                      letterSpacing: '0.22em', textTransform: 'uppercase' as const,
                      border: '1px solid rgba(200,161,74,0.25)',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer', transition: 'all 0.3s ease',
                      marginTop: '0.25rem', opacity: isSubmitting ? 0.6 : 1,
                    }}
                    onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.background = '#3a3330'; e.currentTarget.style.borderColor = '#C8A14A' } }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#2B2725'; e.currentTarget.style.borderColor = 'rgba(200,161,74,0.25)' }}
                  >
                    {isSubmitting ? 'Submitting…' : 'Submit Enquiry'}
                  </button>
                </form>
              )}

              <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C8A14A)', marginTop: '1.75rem' }} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
