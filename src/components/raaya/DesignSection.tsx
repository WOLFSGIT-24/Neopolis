'use client'
import React, { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const DESIGN_IMAGE = 'https://static.wixstatic.com/media/cef78c_7fd708e50d39424b9b183270c2754f20~mv2.jpg'

function DesignImage() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '520px', overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={DESIGN_IMAGE} alt="Runwal Raaya Residence"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,39,37,0.35) 0%, transparent 55%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 16, left: 16, width: 28, height: 28, borderTop: '1px solid #C8A14A', borderLeft: '1px solid #C8A14A', pointerEvents: 'none', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: '12px', right: '14px', pointerEvents: 'none', zIndex: 3 }}>
        <p style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic', fontSize: '0.6rem', color: '#BFAF9F', opacity: 0.65, letterSpacing: '0.06em' }}>
          Artist&apos;s Impression
        </p>
      </div>
    </div>
  )
}

const features = [
  { n: '01', label: 'Elevated Ceilings',          desc: 'Soaring proportions that breathe space into every room.' },
  { n: '02', label: '6 ft. Wide Exclusive Decks', desc: 'Adjoining all living rooms, opening to the city and sky.' },
  { n: '03', label: 'Two Private-Access Elevators',desc: 'Per unit, plus a dedicated lift for house help.' },
  { n: '04', label: 'Walk-in Wardrobes',           desc: 'Thoughtfully designed for the discerning resident.' },
  { n: '05', label: 'Private Lobby',               desc: 'Your entrance. Your space. Entirely yours.' },
]

function FeatureRow({ f, i, inView }: { f: typeof features[0]; i: number; inView: boolean }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.55 + i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'baseline', gap: '1.5rem',
        padding: '1.25rem 0', borderBottom: '1px solid rgba(191,175,159,0.28)',
        transform: hov ? 'translateX(5px)' : 'translateX(0)', transition: 'transform 0.28s ease', cursor: 'default',
      }}
    >
      <span style={{
        fontFamily: "'Lora', Georgia, serif", fontSize: '0.58rem', fontWeight: 400,
        color: hov ? '#C8A14A' : 'rgba(200,161,74,0.5)', letterSpacing: '0.08em',
        flexShrink: 0, transition: 'color 0.25s ease', minWidth: '2rem',
      }}>
        {f.n}
      </span>
      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily: "'GT Ultra Fine', Georgia, serif",
          fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
          fontWeight: hov ? 500 : 400, color: hov ? '#1A1410' : '#2B2725',
          lineHeight: 1.2, marginBottom: '0.22rem', transition: 'all 0.25s ease',
        }}>
          {f.label}
        </p>
        <p style={{
          fontFamily: "'Lora', Georgia, serif", fontSize: '0.72rem', fontWeight: 300,
          color: hov ? '#5C4A3E' : 'rgba(51,43,38,0.42)', lineHeight: 1.5, transition: 'color 0.25s ease',
        }}>
          {f.desc}
        </p>
      </div>
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
        style={{ flexShrink: 0, opacity: hov ? 0.45 : 0, transition: 'opacity 0.25s ease' }}>
        <path d="M1 5h12M8 1l4 4-4 4" stroke="#C8A14A" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  )
}

export default function DesignSection() {
  const topRef   = useRef<HTMLDivElement>(null)
  const imgRef   = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)

  const topInView   = useInView(topRef,   { once: true, margin: '-60px' })
  const stripInView = useInView(stripRef, { once: true, margin: '-40px' })

  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY     = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.07, 1.0])

  return (
    <div id="residences" style={{ background: '#F4EFE8' }}>

      {/* ── TOP: Centered editorial heading ── */}
      <section ref={topRef} style={{ padding: '6rem 0 4rem', textAlign: 'center' }}>
        <div className="max-w-[900px] mx-auto px-8">

          {/* Gold label with expanding lines */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={topInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.75rem' }}
          >
            <motion.div
              initial={{ scaleX: 0 }} animate={topInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: '1px', width: '48px', background: '#C8A14A', transformOrigin: 'right' }}
            />
            <span style={{
              fontFamily: "'Lora', Georgia, serif", fontSize: '0.55rem', fontWeight: 600,
              letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: '#C8A14A',
            }}>
              Design &amp; Planning
            </span>
            <motion.div
              initial={{ scaleX: 0 }} animate={topInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: '1px', width: '48px', background: '#C8A14A', transformOrigin: 'left' }}
            />
          </motion.div>

          {/* Main heading */}
          <div style={{ overflow: 'hidden', marginBottom: '1.25rem' }}>
            <motion.h2
              initial={{ y: '70%', opacity: 0 }}
              animate={topInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.18, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'GT Ultra Fine', Georgia, serif",
                fontSize: 'clamp(2rem, 4.2vw, 3.8rem)', fontWeight: 300,
                lineHeight: 1.06, letterSpacing: '-0.015em', color: '#2B2725',
              }}
            >
              Private Residences,{' '}
              <em style={{ fontStyle: 'italic', color: '#5C4A3E', fontWeight: 300 }}>
                Designed Around Ease
              </em>
            </motion.h2>
          </div>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={topInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', fontWeight: 300,
              lineHeight: 1.8, color: '#7A726B', maxWidth: '520px', margin: '0 auto',
            }}
          >
            Expansive proportions, private movement, and wellness-led planning crafted for elevated living.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN: Asymmetric image + feature stack ── */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-20 items-start">

            {/* LEFT: Dominant image */}
            <motion.div
              ref={imgRef}
              className="design-section-image"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={topInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'relative', aspectRatio: '4/5',
                boxShadow: '0 32px 80px rgba(43,39,37,0.18)', overflow: 'hidden',
              }}
            >
              <DesignImage />
            </motion.div>

            {/* RIGHT: Feature stack */}
            <div style={{ paddingTop: '2rem' }}>
              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={topInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.7 }}
                style={{
                  fontFamily: "'Lora', Georgia, serif", fontSize: '0.55rem', fontWeight: 600,
                  letterSpacing: '0.24em', textTransform: 'uppercase' as const, color: '#C8A14A', marginBottom: '1.75rem',
                }}
              >
                Residence Features
              </motion.p>
              {features.map((f, i) => <FeatureRow key={f.n} f={f} i={i} inView={topInView} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM: Dark credential strip ── */}
      <section ref={stripRef} style={{ background: 'linear-gradient(120deg, #342D27 0%, #3E3530 100%)' }}>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C8A14A 20%, #C8A14A 80%, transparent)' }} />
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-12">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={stripInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              style={{ flexShrink: 0 }}
            >
              <p style={{
                fontFamily: "'Lora', Georgia, serif", fontSize: '0.52rem', fontWeight: 600,
                letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: '#C8A14A', marginBottom: '0.5rem',
              }}>
                Design Partners
              </p>
              <div style={{ height: '1px', width: '32px', background: '#C8A14A', opacity: 0.6 }} />
            </motion.div>

            {/* Vertical rule */}
            <div className="hidden lg:block" style={{ width: '1px', alignSelf: 'stretch', background: 'rgba(200,161,74,0.2)', margin: '0 3rem' }} />

            {/* Partners */}
            <div className="flex flex-col sm:flex-row gap-10 flex-1" id="partners">
              {[
                { name: 'Broadway Malyan', role: 'Architecture & Urban Design', desc: "Global vision, local sensitivity — designing not just for today's residents, but for the city of tomorrow." },
                { name: 'STX',             role: 'Landscape Architecture',       desc: 'Crafting landscapes that feel inevitable — transforming 4 acres into a living, breathing sanctuary.' },
              ].map((p, i) => (
                <motion.div
                  key={p.name}
                  className="design-partner-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={stripInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ flex: 1, borderLeft: i > 0 ? '1px solid rgba(200,161,74,0.18)' : 'none', paddingLeft: i > 0 ? '2.5rem' : '0' }}
                >
                  <p style={{
                    fontFamily: "'Lora', Georgia, serif", fontSize: '0.52rem', fontWeight: 600,
                    letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8A14A', marginBottom: '0.5rem',
                  }}>
                    {p.role}
                  </p>
                  <h3 style={{
                    fontFamily: "'GT Ultra Fine', Georgia, serif",
                    fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)', fontWeight: 400,
                    color: '#F4EFE8', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: '0.5rem',
                  }}>
                    {p.name}
                  </h3>
                  <div style={{ height: '1px', width: '28px', background: '#C8A14A', opacity: 0.55, marginBottom: '0.85rem' }} />
                  <p style={{
                    fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', fontWeight: 300,
                    lineHeight: 1.85, color: '#D8CFC4', opacity: 0.88, maxWidth: '320px',
                  }}>
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(200,161,74,0.25) 20%, rgba(200,161,74,0.25) 80%, transparent)' }} />
      </section>
    </div>
  )
}
