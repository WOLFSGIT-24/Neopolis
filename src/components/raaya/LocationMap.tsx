'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const MAP_LINK = 'https://maps.app.goo.gl/x5eXPbjpqwb4LNwA9'
const MAP_EMBED = 'https://maps.google.com/maps?q=Runwal+Raaya,+Opposite+Bharat+Mill+Mhada,+Ganapatrao+Kadam+Marg,+Worli,+Mumbai,+Maharashtra+400013&t=&z=16&ie=UTF8&iwloc=&output=embed'
const GT = "'GT Ultra Fine', Georgia, serif"
const LORA = "'Lora', Georgia, serif"

function CTAButton() {
  const [hov, setHov] = useState(false)
  return (
    <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', padding: '0.8rem 2rem', background: hov ? '#2B2725' : 'transparent', color: hov ? '#F2EDE4' : '#2B2725', fontFamily: LORA, fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, border: `1px solid ${hov ? '#2B2725' : '#C8A14A'}`, textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}>
      Open in Google Maps
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </a>
  )
}

export default function LocationMap() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={{ background: '#F2EDE4' }}>
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(200,161,74,0.35) 25%, rgba(200,161,74,0.35) 75%, transparent)' }} />
      <div style={{ padding: '2rem 0 1.5rem', textAlign: 'center' }}>
        <div className="max-w-[900px] mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '1px', width: '36px', background: '#C8A14A', opacity: 0.6 }} />
            <span style={{ fontFamily: LORA, fontSize: '0.52rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: '#C8A14A' }}>Location Map</span>
            <div style={{ height: '1px', width: '36px', background: '#C8A14A', opacity: 0.6 }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: GT, fontSize: 'clamp(1.3rem, 2.4vw, 2rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.01em', color: '#2B2725', margin: '0 0 0.45rem' }}>
            Find <em style={{ fontStyle: 'italic', color: '#5C4A3E', fontWeight: 300 }}>Runwal Raaya</em>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.22, duration: 0.7 }}
            style={{ fontFamily: LORA, fontSize: '0.72rem', fontWeight: 300, color: 'rgba(43,39,37,0.5)', letterSpacing: '0.04em', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
            Opposite Bharat Mill Mhada, Ganapatrao Kadam Marg, Worli, Mumbai — 400013
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }}>
            <CTAButton />
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="location-map-frame" style={{ position: 'relative', width: '100%' }}>
        <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(200,161,74,0.2)', pointerEvents: 'none', zIndex: 2 }} />
        <iframe title="Runwal Raaya Location" src={MAP_EMBED} width="100%" height="100%" style={{ border: 'none', display: 'block', filter: 'grayscale(15%) contrast(1.03)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </motion.div>
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(200,161,74,0.25) 25%, rgba(200,161,74,0.25) 75%, transparent)' }} />
    </section>
  )
}
