'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { useLang } from '@/components/LangContext'
import { content } from '@/lib/content'

export default function Hero() {
  const { lang } = useLang()
  const t = content[lang].home
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const scrollToMaisons = () => {
    document.getElementById('maisons')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section ref={ref} style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Parallax image */}
      <motion.div style={{ position: 'absolute', inset: '-10% 0', y }}>
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2200&q=85&auto=format&fit=crop"
          alt="Les Maisons de Marguerite"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.4) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 var(--mm-gutter)',
        gap: 'var(--mm-space-5)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--mm-space-5)' }}
        >
          <Image
            src="/logo/MaisonMarguerite-Reversed.svg"
            alt="Les Maisons de Marguerite"
            width={180} height={52}
            style={{ objectFit: 'contain' }}
            priority
          />
          <p style={{
            fontFamily: 'var(--mm-font-display)',
            fontSize: 'clamp(22px, 3.5vw, 42px)',
            fontWeight: 400,
            color: '#fff',
            letterSpacing: '0.02em',
            lineHeight: 1.2,
            maxWidth: 600,
          }}>
            {t.tagline}
          </p>
          <p style={{
            fontFamily: 'var(--mm-font-body)',
            fontSize: 'var(--mm-label-size)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.72)',
            letterSpacing: 'var(--mm-allcaps-ls)',
            textTransform: 'uppercase',
          }}>
            {t.subtagline}
          </p>
          <button onClick={scrollToMaisons} style={{
            marginTop: 'var(--mm-space-3)',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 32px',
            fontFamily: 'var(--mm-font-body)',
            fontSize: 'var(--mm-label-size)',
            fontWeight: 500,
            letterSpacing: 'var(--mm-label-ls)',
            textTransform: 'uppercase',
            color: '#fff',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: 'var(--mm-radius-sm)',
            cursor: 'pointer',
            transition: 'background-color var(--mm-dur-fast) var(--mm-ease), border-color var(--mm-dur-fast) var(--mm-ease)',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)' }}
          >
            {t.heroCta}
            <ArrowDown size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
