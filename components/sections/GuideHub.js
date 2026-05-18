'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Home, BookOpen, CheckSquare, ArrowRight } from 'lucide-react'
import { useLang } from '@/components/LangContext'
import { content } from '@/lib/content'

const ICONS = { MapPin, Home, BookOpen, CheckSquare }

export default function GuideHub() {
  const { lang } = useLang()
  const t = content[lang].guide

  return (
    <div style={{ background: 'var(--mm-bg)', minHeight: '100vh', paddingTop: 72 }}>
      {/* Header */}
      <section style={{ background: 'var(--mm-forest)', padding: 'var(--mm-space-9) var(--mm-gutter)', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Image src="/logo/MaisonMarguerite-Reversed.svg" alt="Les Maisons de Marguerite" width={140} height={40} style={{ objectFit: 'contain', marginBottom: 'var(--mm-space-6)' }} />
          <h1 style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'var(--mm-h1-size)', fontWeight: 400, color: '#fff', letterSpacing: 'var(--mm-display-ls)', lineHeight: 'var(--mm-display-lh)', marginBottom: 'var(--mm-space-5)' }}>
            {t.title}
          </h1>
          <p style={{ fontFamily: 'var(--mm-font-italic)', fontStyle: 'italic', color: 'var(--mm-bronze-soft)', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
            {t.intro}
          </p>
        </motion.div>
      </section>

      {/* Tiles */}
      <section style={{ padding: 'var(--mm-space-9) var(--mm-gutter)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--mm-space-5)' }} className="guide-grid">
          {t.tiles.map((tile, i) => {
            const Icon = ICONS[tile.icon]
            return (
              <motion.a
                key={tile.id}
                href={`/bienvenue/aubade/${tile.id}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div style={{
                  position: 'relative', height: 280, borderRadius: 'var(--mm-radius-md)', overflow: 'hidden',
                  background: 'var(--mm-bg-alt)', border: 'var(--mm-border-hair)',
                }}>
                  <Image src={tile.photo} alt={tile.title} fill style={{ objectFit: 'cover' }} sizes="45vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,74,62,0.85) 0%, rgba(45,74,62,0.2) 60%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--mm-space-6)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--mm-space-3)', marginBottom: 'var(--mm-space-3)' }}>
                      {Icon && <Icon size={18} color="var(--mm-bronze-soft)" />}
                      <span style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze-soft)' }}>
                        {tile.title}
                      </span>
                    </div>
                    <p style={{ fontFamily: 'var(--mm-font-body)', fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 'var(--mm-space-4)' }}>
                      {tile.desc}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: '#fff' }}>
                      {lang === 'fr' ? 'Découvrir' : 'Open'} <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .guide-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
