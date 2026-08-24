'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const meanings = [
  {
    lang: 'Sanskrit',
    meaning: 'Royalty. Grandeur. Prestige.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9" stroke="#C8A14A" strokeWidth="0.7" strokeOpacity="0.6" />
        <path d="M10 4v12M4 10h12" stroke="#C8A14A" strokeWidth="0.7" strokeOpacity="0.5" />
        <circle cx="10" cy="10" r="2" stroke="#C8A14A" strokeWidth="0.7" strokeOpacity="0.7" />
      </svg>
    ),
  },
  {
    lang: 'Hindi',
    meaning: 'King. Emperor. Monarch.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 14l3-6 3 4 3-4 3 6" stroke="#C8A14A" strokeWidth="0.7" strokeOpacity="0.6" strokeLinejoin="round" />
        <line x1="3" y1="16" x2="17" y2="16" stroke="#C8A14A" strokeWidth="0.7" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    lang: 'Persian',
    meaning: 'Radiance. Light. Perfection.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5 5l1.5 1.5M13.5 13.5L15 15M5 15l1.5-1.5M13.5 6.5L15 5" stroke="#C8A14A" strokeWidth="0.7" strokeOpacity="0.6" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" stroke="#C8A14A" strokeWidth="0.7" strokeOpacity="0.5" />
      </svg>
    ),
  },
]

function AnimatedDivider({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: '1px', height: '100%',
        background: 'linear-gradient(to bottom, transparent, rgba(200,161,74,0.25), transparent)',
        transformOrigin: 'top', position: 'absolute', right: 0, top: 0,
      }}
    />
  )
}

function MeaningCard({ item, index, inView }: { item: typeof meanings[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.65 + index * 0.14, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center text-center px-8 py-10"
      style={{ transform: hovered ? 'translateY(-5px)' : 'translateY(0)', transition: 'transform 0.35s ease', cursor: 'default' }}
    >
      {index < meanings.length - 1 && <AnimatedDivider inView={inView} delay={0.7 + index * 0.1} />}

      <motion.div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', height: '1px', background: '#C8A14A', width: hovered ? '60px' : '0px', transition: 'width 0.35s ease', opacity: 0.7 }} />

      <motion.div style={{ marginBottom: '1.25rem', opacity: hovered ? 1 : 0.55, transition: 'opacity 0.35s ease' }}>
        {item.icon}
      </motion.div>

      <span style={{
        fontFamily: "'Lora', Georgia, serif", fontSize: '0.58rem', fontWeight: 600,
        letterSpacing: '0.28em', color: hovered ? '#D6B97A' : '#B08C4B',
        textTransform: 'uppercase' as const, marginBottom: '0.9rem', transition: 'color 0.35s ease', display: 'block',
      }}>
        {item.lang}
      </span>

      <p style={{
        fontFamily: "'GT Ultra Fine', Georgia, serif",
        fontSize: 'clamp(1.2rem, 1.8vw, 1.65rem)', fontWeight: 300, lineHeight: 1.45,
        color: hovered ? '#F2EDE4' : 'rgba(242,237,228,0.75)', transition: 'color 0.35s ease',
        textShadow: hovered ? '0 2px 20px rgba(200,161,74,0.08)' : 'none',
      }}>
        {item.meaning}
      </p>
    </motion.div>
  )
}

export default function SignatureStatement() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="meaning"
      ref={ref}
      style={{ background: 'linear-gradient(160deg, #2B2725 0%, #3A2E27 100%)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background texture */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 680" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="45%" r="40%">
            <stop offset="0%" stopColor="#C8A14A" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#C8A14A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="680" fill="url(#centerGlow)" />
        {[0,1,2,3].map(i => (
          <ellipse key={i} cx="720" cy="340" rx={260+i*130} ry={120+i*55}
            stroke="#C8A14A" strokeWidth="0.4" strokeOpacity={0.055-i*0.008}
            className="contour-line" style={{ animationDelay: `${-i*2}s` }} />
        ))}
        <line x1="0"    y1="200" x2="500"  y2="680" stroke="#C8A14A" strokeWidth="0.3" strokeOpacity="0.04" />
        <line x1="1440" y1="200" x2="940"  y2="680" stroke="#C8A14A" strokeWidth="0.3" strokeOpacity="0.04" />
        <line x1="0"    y1="340" x2="1440" y2="340" stroke="#C8A14A" strokeWidth="0.3" strokeOpacity="0.04" />
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Label with animated expanding lines */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10 justify-center"
        >
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: '1px', width: '48px', background: 'linear-gradient(to right, transparent, #C8A14A)', transformOrigin: 'right' }}
          />
          <span style={{
            fontFamily: "'Lora', Georgia, serif", fontSize: '0.58rem', fontWeight: 500,
            letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'rgba(200,161,74,0.7)',
          }}>
            The Name
          </span>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: '1px', width: '48px', background: 'linear-gradient(to left, transparent, #C8A14A)', transformOrigin: 'left' }}
          />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-5 text-center">
          <motion.h2
            initial={{ y: '60%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'GT Ultra Fine', Georgia, serif",
              fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.01em',
            }}
          >
            <span style={{ color: '#F2EDE4' }}>Raaya </span>
            <span style={{ color: 'rgba(242,237,228,0.55)' }}>isn&apos;t just a name.</span>
          </motion.h2>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.42, duration: 0.8 }}
          className="text-center"
          style={{
            fontFamily: "'GT Ultra Fine', Georgia, serif", fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.8vw, 1.35rem)', fontWeight: 300,
            color: '#C8A14A', opacity: 0.85, marginBottom: '3.5rem', letterSpacing: '0.02em',
          }}
        >
          Inspired by the ancient Sanskrit word &apos;Raay&apos;, Raaya evokes royalty, grace, and quiet power.
        </motion.p>

        {/* Full-width divider */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.52, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(200,161,74,0.35) 20%, rgba(200,161,74,0.35) 80%, transparent)',
            marginBottom: '0', transformOrigin: 'center',
          }}
        />

        {/* Meaning cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 relative">
          {meanings.map((item, i) => (
            <MeaningCard key={item.lang} item={item} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.1, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(200,161,74,0.35) 20%, rgba(200,161,74,0.35) 80%, transparent)',
            transformOrigin: 'center',
          }}
        />
      </div>
    </section>
  )
}
