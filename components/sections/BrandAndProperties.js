'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/components/LangContext'
import { content } from '@/lib/content'
import PropertyCard from '@/components/ui/PropertyCard'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } },
}

export default function BrandAndProperties() {
  const { lang } = useLang()
  const t = content[lang].home

  return (
    <>
      {/* Brand section */}
      <section style={{ background: 'var(--mm-bg-alt)', padding: 'var(--mm-space-10) var(--mm-gutter)' }}>
        <div style={{ maxWidth: 'var(--mm-max-w)', margin: '0 auto' }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}
          >
            <div style={{
              fontFamily: 'var(--mm-font-body)',
              fontSize: 'var(--mm-label-size)',
              fontWeight: 500,
              letterSpacing: 'var(--mm-label-ls)',
              textTransform: 'uppercase',
              color: 'var(--mm-bronze)',
              marginBottom: 'var(--mm-space-5)',
            }}>
              {t.brandEyebrow}
            </div>
            <h2 style={{
              fontFamily: 'var(--mm-font-display)',
              fontSize: 'var(--mm-h2-size)',
              fontWeight: 400,
              color: 'var(--mm-forest)',
              letterSpacing: 'var(--mm-display-ls)',
              lineHeight: 'var(--mm-display-lh)',
              marginBottom: 'var(--mm-space-7)',
            }}>
              {t.brandTitle}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mm-space-5)' }}>
              <p style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-body-size)', lineHeight: 'var(--mm-body-lh)', color: 'var(--mm-ink)' }}>
                {t.brandP1}
              </p>
              <div style={{
                height: 1,
                background: 'var(--mm-bronze)',
                opacity: 0.25,
                margin: 'var(--mm-space-2) auto',
                width: 40,
              }} />
              <p style={{ fontFamily: 'var(--mm-font-italic)', fontStyle: 'italic', fontSize: 'var(--mm-body-size)', lineHeight: 'var(--mm-body-lh)', color: 'var(--mm-forest)' }}>
                {t.brandP2}
              </p>
              <p style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-body-size)', lineHeight: 'var(--mm-body-lh)', color: 'var(--mm-ink)' }}>
                {t.brandP3}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties section */}
      <section id="maisons" style={{ background: 'var(--mm-bg)', padding: 'var(--mm-space-10) var(--mm-gutter)' }}>
        <div style={{ maxWidth: 'var(--mm-max-w)', margin: '0 auto' }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: 'var(--mm-space-8)' }}
          >
            <div style={{
              fontFamily: 'var(--mm-font-body)',
              fontSize: 'var(--mm-label-size)',
              fontWeight: 500,
              letterSpacing: 'var(--mm-label-ls)',
              textTransform: 'uppercase',
              color: 'var(--mm-bronze)',
              marginBottom: 'var(--mm-space-4)',
            }}>
              {t.propertiesEyebrow}
            </div>
            <h2 style={{
              fontFamily: 'var(--mm-font-display)',
              fontSize: 'var(--mm-h2-size)',
              fontWeight: 400,
              color: 'var(--mm-forest)',
              letterSpacing: 'var(--mm-display-ls)',
              lineHeight: 'var(--mm-display-lh)',
            }}>
              {t.propertiesTitle}
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--mm-space-6)',
          }} className="cards-grid">
            <PropertyCard slug="aubade" />
            <PropertyCard slug="iena" />
            <PropertyCard slug="jaulerry" />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}
