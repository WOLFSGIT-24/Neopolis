'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useEnquiry } from './EnquiryPopup'

const GT  = "'GT Ultra Fine', Georgia, serif"
const GAM = "'Lora', 'GT Ultra Fine', Georgia, serif"

const FEATURES = [
  '5 Acres Wellness Landscaping',
  'Low Density Living',
  'Private Lift Access',
  'Sea Link Connectivity',
]

export default function HeroIntro() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const { open, openForBrochure } = useEnquiry()
  const [primaryHov, setPrimaryHov] = useState(false)
  const [secondaryHov, setSecondaryHov] = useState(false)

  return (
    <section
      ref={ref}
      id="overview"
      className="hero-intro-section"
      style={{ background: '#F2EDE4', position: 'relative', padding: '4rem 0' }}
    >
      {/* Left vertical line */}
      <div
        className="hero-intro-left-line"
        style={{
          position: 'absolute', left: '2%', top: '50%',
          transform: 'translateY(-50%)', width: '1px', height: '50%',
          background: '#C8A14A', opacity: 0.45,
        }}
      />
      {/* Right vertical line */}
      <div
        className="hero-intro-right-line"
        style={{
          position: 'absolute', right: '2%', top: '50%',
          transform: 'translateY(-50%)', width: '1px', height: '50%',
          background: '#C8A14A', opacity: 0.45,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="hero-intro-inner max-w-[1440px] mx-auto px-8 lg:px-16"
      >
        <div className="hero-intro-content">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.7 }}
            style={{
              fontFamily: GT,
              fontSize: 'clamp(0.48rem, 0.9vw, 0.58rem)',
              fontWeight: 400,
              letterSpacing: '0.32em',
              textTransform: 'uppercase' as const,
              color: 'rgba(43,39,37,0.55)',
              marginBottom: '0.85rem',
            }}
          >
            Runwal Realty Presents
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.14, duration: 0.75 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <h2
              className="hero-intro-title"
              style={{
                fontFamily: GT,
                fontSize: 'clamp(1.15rem, 2.2vw, 1.55rem)',
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase' as const,
                color: '#2B2725',
                margin: 0,
                lineHeight: 1.35,
              }}
            >
              Runwal Raaya · Worli, Mumbai
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.22, duration: 0.8 }}
            style={{ marginBottom: '1.25rem' }}
          >
            <p style={{
              fontFamily: GAM,
              fontSize: 'clamp(0.72rem, 1.1vw, 0.85rem)',
              fontWeight: 400,
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              color: '#C8A14A',
              margin: '0 0 0.35rem',
            }}>
              Crafted For
            </p>
            <h1 style={{
              fontFamily: GT,
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: '#2B2725',
              margin: 0,
            }}>
              Uncompromised Living
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.34, duration: 0.7 }}
            style={{
              fontFamily: GT,
              fontSize: 'clamp(0.95rem, 1.35vw, 1.1rem)',
              fontWeight: 400,
              letterSpacing: '0.06em',
              color: '#2B2725',
              margin: '0 0 0.65rem',
            }}
          >
            Private 4 &amp; 5 Bed Residences
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              fontFamily: GAM,
              fontSize: 'clamp(0.82rem, 1.15vw, 0.95rem)',
              fontWeight: 300,
              letterSpacing: '0.04em',
              color: 'rgba(43,39,37,0.62)',
              margin: '0 0 2.25rem',
              lineHeight: 1.7,
            }}
          >
            Private Elevators · Expansive Decks · Wellness Living
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.48, duration: 0.75 }}
            className="hero-intro-features"
            style={{
              listStyle: 'none',
              margin: '0 0 2.5rem',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.85rem 1.5rem',
            }}
          >
            {FEATURES.map(feature => (
              <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C8A14A', flexShrink: 0, marginTop: '0.45em' }} />
                <span style={{
                  fontFamily: GAM,
                  fontSize: 'clamp(0.78rem, 1vw, 0.88rem)',
                  fontWeight: 300,
                  color: '#2B2725',
                  lineHeight: 1.5,
                  letterSpacing: '0.02em',
                }}>
                  {feature}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.56, duration: 0.75 }}
            className="hero-intro-ctas"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center', alignItems: 'center' }}
          >
            <button
              type="button"
              onClick={open}
              onMouseEnter={() => setPrimaryHov(true)}
              onMouseLeave={() => setPrimaryHov(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '0.85rem 1.75rem',
                background: primaryHov ? '#C8A14A' : '#2B2725',
                color: primaryHov ? '#2B2725' : '#F2EDE4',
                fontFamily: GT,
                fontSize: 'clamp(0.5rem, 0.85vw, 0.58rem)',
                fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase' as const,
                border: '1px solid #2B2725', cursor: 'pointer', transition: 'all 0.25s ease',
              }}
            >
              Book a Private Tour
            </button>
            <button
              type="button"
              onClick={openForBrochure}
              onMouseEnter={() => setSecondaryHov(true)}
              onMouseLeave={() => setSecondaryHov(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '0.85rem 1.75rem',
                background: secondaryHov ? '#2B2725' : 'transparent',
                color: secondaryHov ? '#F2EDE4' : '#2B2725',
                fontFamily: GT,
                fontSize: 'clamp(0.5rem, 0.85vw, 0.58rem)',
                fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase' as const,
                border: '1px solid #C8A14A', cursor: 'pointer', transition: 'all 0.25s ease',
              }}
            >
              Download Brochure
            </button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
