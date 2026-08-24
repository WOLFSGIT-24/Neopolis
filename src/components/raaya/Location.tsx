'use client'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const SLIDER_IMAGES = [
  { src: 'https://static.wixstatic.com/media/cef78c_e3d9d95f71cd4c0bbe21cafdbc1eb251~mv2.png', alt: 'Runwal Raaya Location Map' },
  { src: 'https://static.wixstatic.com/media/cef78c_dd50c5e57ba44e1f8bcf35ef4043c2b9~mv2.png', alt: 'Runwal Raaya Connectivity' },
  { src: 'https://static.wixstatic.com/media/cef78c_2e3f378a661d4b4c91d0a151774ffd05~mv2.jpg', alt: 'Runwal Raaya Worli' },
  { src: 'https://static.wixstatic.com/media/cef78c_af08e081d790492b80086d33c5518419~mv2.jpg', alt: 'Runwal Raaya Mumbai' },
]

function LocationSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = SLIDER_IMAGES.length
  const go = useCallback((next: number, dir: number) => {
    setDirection(dir); setCurrent((next + total) % total)
  }, [total])
  useEffect(() => {
    const t = setInterval(() => go(current + 1, 1), 3500)
    return () => clearInterval(t)
  }, [current, go])
  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', boxShadow: '0 20px 56px rgba(43,39,37,0.13)' }}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={current} src={SLIDER_IMAGES[current].src} alt={SLIDER_IMAGES[current].alt}
          custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute top-4 right-4 w-8 h-8 pointer-events-none z-10"
        style={{ borderTop: '1px solid #C8A14A', borderRight: '1px solid #C8A14A' }} />
      <button onClick={() => go(current - 1, -1)} aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
        style={{ width: '32px', height: '32px', background: 'rgba(43,39,37,0.45)', border: '1px solid rgba(200,161,74,0.3)', cursor: 'pointer', transition: 'background 0.25s ease' }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(43,39,37,0.75)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(43,39,37,0.45)')}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7 1L3 5l4 4" stroke="#C8A14A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button onClick={() => go(current + 1, 1)} aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
        style={{ width: '32px', height: '32px', background: 'rgba(43,39,37,0.45)', border: '1px solid rgba(200,161,74,0.3)', cursor: 'pointer', transition: 'background 0.25s ease' }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(43,39,37,0.75)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(43,39,37,0.45)')}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 1l4 4-4 4" stroke="#C8A14A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDER_IMAGES.map((_, i) => (
          <button key={i} onClick={() => go(i, i > current ? 1 : -1)} aria-label={`Slide ${i + 1}`}
            style={{ width: i === current ? '20px' : '6px', height: '2px', background: i === current ? '#C8A14A' : 'rgba(242,237,228,0.4)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.35s ease' }} />
        ))}
      </div>
    </div>
  )
}

const distances = [
  { name: 'Bandra-Worli Sea Link',   dist: '2.4 km' },
  { name: 'Eastern Express Highway', dist: '2.7 km' },
  { name: 'Cuffe Parade',            dist: '11.7 km' },
  { name: 'Domestic Airport',        dist: '14.5 km' },
  { name: 'International Airport',   dist: '14.5 km' },
]

const landmarks = [
  'Nariman Point', 'Churchgate', 'Lower Parel', 'Phoenix Palladium',
  'Peninsula Corporate Park', 'Mahalaxmi Racecourse', 'Dhirubhai Ambani International School',
  'Wockhardt Hospital', 'Jaslok Hospital', 'St. Regis', 'Siddhivinayak Temple',
]

// Minimal line icons per distance row
const rowIcons = [
  <svg key="bridge" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 10 Q4 4 7 4 Q10 4 13 10" stroke="#C8A14A" strokeWidth="0.8" fill="none" strokeOpacity="0.7"/><line x1="1" y1="10" x2="13" y2="10" stroke="#C8A14A" strokeWidth="0.8" strokeOpacity="0.5"/></svg>,
  <svg key="road"   width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12 L7 2 L12 12" stroke="#C8A14A" strokeWidth="0.8" fill="none" strokeOpacity="0.7"/><line x1="5" y1="8" x2="9" y2="8" stroke="#C8A14A" strokeWidth="0.8" strokeOpacity="0.5"/></svg>,
  <svg key="pin1"   width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="6" r="3" stroke="#C8A14A" strokeWidth="0.8" strokeOpacity="0.7"/><path d="M7 9 L7 13" stroke="#C8A14A" strokeWidth="0.8" strokeOpacity="0.5"/></svg>,
  <svg key="plane1" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 9 L7 3 L12 9 L7 7 Z" stroke="#C8A14A" strokeWidth="0.8" fill="none" strokeOpacity="0.7"/><line x1="4" y1="11" x2="10" y2="11" stroke="#C8A14A" strokeWidth="0.8" strokeOpacity="0.5"/></svg>,
  <svg key="plane2" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 9 L7 3 L12 9 L7 7 Z" stroke="#C8A14A" strokeWidth="0.8" fill="none" strokeOpacity="0.7"/><line x1="4" y1="11" x2="10" y2="11" stroke="#C8A14A" strokeWidth="0.8" strokeOpacity="0.5"/></svg>,
]

function DistanceRow({ item, icon, index, inView }: { item: typeof distances[0]; icon: React.ReactNode; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.4 + index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.85rem 0.75rem',
        borderBottom: '1px solid rgba(176,140,75,0.12)',
        borderLeft: hovered ? '2px solid #C8A14A' : '2px solid transparent',
        background: hovered ? 'rgba(200,161,74,0.04)' : 'transparent',
        transition: 'all 0.28s ease', cursor: 'default', gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ opacity: hovered ? 1 : 0.5, transition: 'opacity 0.28s ease', flexShrink: 0 }}>{icon}</span>
        <span style={{
          fontFamily: "'GT Ultra Fine', Georgia, serif", fontSize: '0.83rem',
          fontWeight: hovered ? 400 : 300, color: hovered ? '#2B2725' : '#4A433D',
          transition: 'all 0.28s ease', letterSpacing: '0.01em',
        }}>
          {item.name}
        </span>
      </div>
      <span style={{
        fontFamily: "'GT Ultra Fine', Georgia, serif", fontSize: '0.8rem', fontWeight: 600,
        color: hovered ? '#C8A14A' : '#B08C4B', letterSpacing: '0.04em', flexShrink: 0, transition: 'color 0.28s ease',
      }}>
        {item.dist}
      </span>
    </motion.div>
  )
}

function LandmarkChip({ name, index, inView }: { name: string; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.9 + index * 0.04, duration: 0.4 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'GT Ultra Fine', Georgia, serif", fontSize: '0.68rem',
        fontWeight: hovered ? 500 : 400, color: hovered ? '#2B2725' : 'rgba(51,43,38,0.65)',
        border: `1px solid ${hovered ? '#C8A14A' : 'rgba(176,140,75,0.22)'}`,
        background: hovered ? 'rgba(200,161,74,0.07)' : 'transparent',
        padding: '0.32rem 0.85rem', borderRadius: '2px', letterSpacing: '0.04em',
        cursor: 'default', transition: 'all 0.25s ease', display: 'inline-block',
      }}
    >
      {name}
    </motion.span>
  )
}

export default function Location() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="location" ref={ref} style={{ background: '#F2EDE4', padding: '4.5rem 0' }}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="flex items-center gap-3 mb-4"
        >
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: '1px', width: '40px', background: '#C8A14A', transformOrigin: 'left' }}
          />
          <span style={{
            fontFamily: "'GT Ultra Fine', Georgia, serif", fontSize: '0.58rem', fontWeight: 500,
            letterSpacing: '0.24em', textTransform: 'uppercase' as const, color: '#C8A14A',
          }}>
            Location, Uncompromised
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'GT Ultra Fine', Georgia, serif",
            fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)', fontWeight: 500,
            lineHeight: 1.12, letterSpacing: '-0.01em', color: '#2B2725', marginBottom: '1rem',
          }}
        >
          All of Mumbai Within 30 Minutes
        </motion.h2>

        {/* Intro para */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.28, duration: 0.8 }}
          style={{
            fontFamily: "'GT Ultra Fine', Georgia, serif", fontSize: '0.875rem', fontWeight: 400,
            lineHeight: 1.85, color: '#4A433D', maxWidth: '520px', marginBottom: '0.75rem',
          }}
        >
          At Worli, Runwal Raaya sits within one of Mumbai&apos;s most strategic and prestigious
          urban positions, connecting residents seamlessly to South Bombay, business districts,
          and landmark destinations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.36, duration: 0.8 }}
          style={{
            fontFamily: "'GT Ultra Fine', Georgia, serif", fontSize: '0.8rem', fontWeight: 300,
            lineHeight: 1.85, color: '#7A726B', maxWidth: '480px', marginBottom: '2.5rem',
          }}
        >
          Major arterial routes, arterial highways, and the Bandra-Worli Sea Link place
          the entire city within effortless reach.
        </motion.p>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              {distances.map((d, i) => (
                <DistanceRow key={d.name} item={d} icon={rowIcons[i]} index={i} inView={inView} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="flex items-center gap-3 mb-4"
            >
              <div style={{ height: '1px', width: '28px', background: '#C8A14A', opacity: 0.6 }} />
              <span style={{
                fontFamily: "'GT Ultra Fine', Georgia, serif", fontSize: '0.58rem', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8A14A',
              }}>
                In the Heart of the Golden Triangle
              </span>
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {landmarks.map((lm, i) => (
                <LandmarkChip key={lm} name={lm} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Right: image slider */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <LocationSlider />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
