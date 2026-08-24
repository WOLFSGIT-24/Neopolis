'use client'
import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const TOWER_IMAGE = 'https://static.wixstatic.com/media/cef78c_4587d799e78f438ca327c56f95fe0f6c~mv2.jpg'
const GT  = "'GT Ultra Fine', Georgia, serif"
const GAM = "'Lora', 'GT Ultra Fine', Georgia, serif"

const PARAS = [
  "Inspired by the ancient Sanskrit word Raay, Raaya carries the quiet weight of royalty—a way of life that is poised, powerful, and innately confident.",
  "Set across 4 acres in the heart of Worli, Raaya is a rare sanctuary with just two iconic towers. Each residence is a realm of uncompromised luxury—private elevators, sunlit terraces, and amenities that whisper elegance.",
  "Much like the promise it holds, Runwal Raaya delivers not just a home, but a world where life doesn't adjust. It dazzles.",
]

export default function ProjectHighlights() {
  const ref    = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section id="project" ref={ref} style={{ background: '#F4EFE8', padding: '5.5rem 0' }}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[44fr_56fr] gap-10 lg:gap-16 items-center">

          {/* LEFT: Image */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="project-image"
            style={{
              position: 'relative', overflow: 'hidden',
              minHeight: '520px', background: '#E0D8CC',
              boxShadow: '0 24px 64px rgba(43,39,37,0.14)',
              border: '1px solid rgba(200,161,74,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <motion.img
              src={TOWER_IMAGE}
              alt="Runwal Raaya — Artist's Impression"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block', y: imgY }}
            />
            <div style={{ position: 'absolute', top: 14, left: 14, width: 28, height: 28, borderTop: '1px solid #C8A14A', borderLeft: '1px solid #C8A14A', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 12, right: 14, pointerEvents: 'none' }}>
              <p style={{ fontFamily: GAM, fontStyle: 'italic', fontSize: '0.6rem', color: '#BFAF9F', opacity: 0.65, letterSpacing: '0.06em' }}>
                Artist&apos;s Impression
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Editorial story panel */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.1rem' }}
            >
              <motion.div
                initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '1px', width: '28px', background: '#C8A14A', transformOrigin: 'left' }}
              />
              <span style={{
                fontFamily: GAM, fontSize: '0.52rem', fontWeight: 600,
                letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: '#C8A14A',
              }}>
                The Project
              </span>
            </motion.div>

            {/* Heading */}
            <div style={{ overflow: 'hidden', marginBottom: '0.3rem' }}>
              <motion.h2
                initial={{ y: '60%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: GT, fontSize: 'clamp(1.9rem, 3.2vw, 3rem)',
                  fontWeight: 500, lineHeight: 1.08, letterSpacing: '-0.01em', color: '#2B2725', margin: 0,
                }}
              >
                Worli&apos;s Crown Jewel
              </motion.h2>
            </div>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.8 }}
              style={{
                fontFamily: GT, fontStyle: 'italic',
                fontSize: 'clamp(0.88rem, 1.2vw, 1rem)', fontWeight: 300,
                color: '#C8A14A', lineHeight: 1.5, margin: '0 0 2rem', opacity: 0.9,
              }}
            >
              Where innovation meets nature, and design meets life.
            </motion.p>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: '1px', background: 'linear-gradient(90deg, #C8A14A, rgba(200,161,74,0.08))', marginBottom: '2rem', transformOrigin: 'left' }}
            />

            {/* Editorial paragraphs */}
            <div style={{ display: 'flex', gap: '1.5rem', maxWidth: '480px' }}>
              {/* Vertical gold accent */}
              <motion.div
                initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.5, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  flexShrink: 0, width: '1px',
                  background: 'linear-gradient(to bottom, #C8A14A, rgba(200,161,74,0.15))',
                  transformOrigin: 'top', alignSelf: 'stretch',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {PARAS.map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      fontFamily: GAM, fontSize: 'clamp(0.92rem, 1.15vw, 1.02rem)',
                      fontWeight: 300, lineHeight: 1.85, color: '#4A433D', letterSpacing: '0.01em', margin: 0,
                    }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.7 }}
              style={{ marginTop: '2.5rem' }}
            >
              <button
                onClick={() => document.querySelector('#residences')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.85rem 2rem', background: 'transparent', color: '#2B2725',
                  fontFamily: GT, fontSize: '0.62rem', fontWeight: 400,
                  letterSpacing: '0.16em', textTransform: 'uppercase' as const,
                  border: '1px solid #C8A14A', cursor: 'pointer', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2B2725'; e.currentTarget.style.color = '#F4EFE8' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2B2725' }}
              >
                View Residences
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5h10M7 1l4 4-4 4" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
