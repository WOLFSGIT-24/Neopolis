'use client'
import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const LIFESTYLE_IMAGES = {
  unwind:    'https://static.wixstatic.com/media/cef78c_b7f8f21855514f43a46d27e01d4d03fc~mv2.png',
  move:      'https://static.wixstatic.com/media/cef78c_0db84e855e4a41d6be626dc8d3f5eef0~mv2.jpg',
  connect:   'https://static.wixstatic.com/media/cef78c_937d499994a641f8bc8def36f0cd929d~mv2.jpg',
  celestial: 'https://static.wixstatic.com/media/cef78c_b2e014131edb4568a520b6b94932e14a~mv2.jpg',
}

const tabs = [
  {
    id: 'unwind', label: 'Unwind', tagline: 'Stillness, curated.',
    items: ['Library & Art Café', 'Shallow Water Paths', 'Landscape Gardens', '4-Acre Wellness-First Landscaping', 'Indoor Wellness Pool & Spa'],
  },
  {
    id: 'move', label: 'Move', tagline: 'Energy, elevated.',
    items: ['Rock-Climbing Wall', 'Sports Bar & Gymnasium', 'Multipurpose Studio', "Kids' Crèche & Outdoor Play Area", 'Pickle-Ball & Padel Courts', 'Cycling Track', 'Badminton Courts'],
  },
  {
    id: 'connect', label: 'Connect', tagline: 'Community, refined.',
    items: ['Banquet Hall & Business Centre', 'Game Zone', 'Private Theatre', 'Pet Zone', 'Rooftop Retreats', 'Barbeque Area & Senior Plaza', 'Amphitheatre'],
  },
  {
    id: 'celestial', label: 'Celestial Club', tagline: 'Above the ordinary.',
    items: ['Party Café', 'Observation Deck', 'Barbecue', 'Sky Deck'],
  },
]

function AmenityIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6" stroke="#B08C4B" strokeWidth="0.8" />
      <circle cx="7" cy="7" r="2" fill="#B08C4B" fillOpacity="0.5" />
    </svg>
  )
}

export default function Lifestyle() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(0)
  const current = tabs[activeTab]

  return (
    <section id="lifestyle" ref={ref} style={{ background: '#2F241E', padding: '4.5rem 0' }}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="gold-line" />
          <span className="luxury-label" style={{ color: '#C8A86B' }}>The Lifestyle</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'GT Ultra Fine', Georgia, serif",
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            fontWeight: 300, color: '#F2EDE4', marginBottom: '3rem',
          }}
        >
          A Life Beyond the Ordinary
        </motion.h2>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lifestyle-tabs flex flex-wrap gap-0 mb-12"
          style={{ borderBottom: '1px solid rgba(176,140,75,0.2)' }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className="px-6 py-4 transition-all duration-300"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const,
                color: activeTab === i ? '#C8A86B' : 'rgba(242,237,228,0.4)',
                borderBottom: activeTab === i ? '1px solid #C8A86B' : '1px solid transparent',
                marginBottom: '-1px', background: 'transparent', cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <motion.img
                key={current.id}
                src={LIFESTYLE_IMAGES[current.id as keyof typeof LIFESTYLE_IMAGES]}
                alt={current.label}
                className="w-full h-full object-cover"
                style={{ objectPosition: current.id === 'move' ? 'center 30%' : 'center' }}
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 img-overlay-bottom" />
              <div className="absolute bottom-6 left-6">
                <p style={{
                  fontFamily: "'GT Ultra Fine', Georgia, serif",
                  fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 300, color: '#F2EDE4',
                }}>
                  {current.tagline}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 pointer-events-none">
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic', fontSize: '0.62rem', color: '#BFAF9F', opacity: 0.65, letterSpacing: '0.06em' }}>
                  Artist&apos;s Impression
                </p>
              </div>
            </div>

            {/* Amenities list */}
            <div>
              <p style={{
                fontFamily: "'GT Ultra Fine', Georgia, serif",
                fontStyle: 'italic', fontSize: '0.85rem', color: '#B08C4B',
                letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '2rem',
              }}>
                {current.label}
              </p>
              {current.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="flex items-center gap-4 py-4"
                  style={{ borderBottom: '1px solid rgba(176,140,75,0.1)' }}
                >
                  <AmenityIcon />
                  <span style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.875rem', fontWeight: 300,
                    color: 'rgba(242,237,228,0.8)', letterSpacing: '0.03em',
                  }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
