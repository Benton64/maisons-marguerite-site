'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown, ChevronUp, Waves, BedDouble, Flame, Wifi, KeyRound, Mountain, Monitor, Car, Bath, MapPin, Trees, Layers, Thermometer } from 'lucide-react'
import { useLang } from '@/components/LangContext'
import { content, properties } from '@/lib/content'
import PhotoGallery from '@/components/ui/PhotoGallery'

const ICONS = { Waves, BedDouble, Flame, Wifi, KeyRound, Mountain, Monitor, Car, Bath, MapPin, Trees, Layers, Thermometer }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
}

function FAQ({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mm-space-2)' }}>
      {items.map(([q, a], i) => (
        <div key={i} style={{ borderBottom: 'var(--mm-border-divider)', paddingBottom: 'var(--mm-space-4)' }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{
            width: '100%', background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: 'var(--mm-space-5)', padding: 'var(--mm-space-4) 0', textAlign: 'left',
          }}>
            <span style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-body-size)', fontWeight: 500, color: 'var(--mm-forest)' }}>{q}</span>
            {open === i ? <ChevronUp size={18} color="var(--mm-bronze)" /> : <ChevronDown size={18} color="var(--mm-bronze)" />}
          </button>
          {open === i && (
            <p style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-body-size)', color: 'var(--mm-ink)', lineHeight: 'var(--mm-body-lh)', paddingBottom: 'var(--mm-space-4)' }}>
              {a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default function PropertyContent({ slug }) {
  const { lang } = useLang()
  const t = content[lang][slug]
  const photos = properties[slug]
  const h = content[lang].home
  const common = content[lang].common

  if (!t) return null

  const scrollToContact = () => {
    window.location.href = '/#contact'
  }

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '70vh', minHeight: 480, overflow: 'hidden' }}>
        <Image src={photos.heroPhoto} alt={t.title} fill style={{ objectFit: 'cover' }} priority sizes="100vw" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)' }} />
        <div style={{
          position: 'relative', zIndex: 1, height: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
          textAlign: 'center', padding: '0 var(--mm-gutter) var(--mm-space-9)',
        }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}>
            <div style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-allcaps-ls)', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--mm-space-4)' }}>
              {t.title}
            </div>
            <p style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'clamp(20px, 3vw, 36px)', fontWeight: 400, color: '#fff', lineHeight: 1.3, maxWidth: 680 }}>
              {t.heroTagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo gallery */}
      <PhotoGallery photos={photos.gallery} title={t.title} />

      {/* Key info + lede */}
      <section style={{ background: 'var(--mm-bg)', padding: 'var(--mm-space-9) var(--mm-gutter)' }}>
        <div style={{ maxWidth: 'var(--mm-max-w)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--mm-space-8)', alignItems: 'start' }} className="keyinfo-grid">
            <div>
              <div style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', marginBottom: 'var(--mm-space-3)' }}>
                {t.keyInfo[0][1]}
              </div>
              <h1 style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'var(--mm-h1-size)', fontWeight: 400, color: 'var(--mm-forest)', letterSpacing: 'var(--mm-display-ls)', lineHeight: 'var(--mm-display-lh)', marginBottom: 'var(--mm-space-5)' }}>
                {t.title}
              </h1>
              <p style={{ fontFamily: 'var(--mm-font-italic)', fontStyle: 'italic', fontSize: 18, color: 'var(--mm-forest)', lineHeight: 1.5 }}>
                {t.lede}
              </p>
            </div>
            <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--mm-space-3) var(--mm-space-6)', alignContent: 'start' }}>
              {t.keyInfo.map(([k, v], i) => (
                <>
                  <dt key={`k${i}`} style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', whiteSpace: 'nowrap' }}>{k}</dt>
                  <dd key={`v${i}`} style={{ fontFamily: 'var(--mm-font-body)', fontSize: 15, color: 'var(--mm-ink)' }}>{v}</dd>
                </>
              ))}
            </dl>
          </div>

          {/* Icon infos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--mm-space-5)', marginTop: 'var(--mm-space-8)', paddingTop: 'var(--mm-space-8)', borderTop: 'var(--mm-border-divider)' }} className="infos-grid">
            {t.infos.map((info, i) => {
              const Icon = ICONS[info.icon]
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--mm-space-4)' }}>
                  {Icon && <Icon size={20} color="var(--mm-bronze)" style={{ flexShrink: 0, marginTop: 2 }} />}
                  <div>
                    <div style={{ fontFamily: 'var(--mm-font-body)', fontSize: 12, fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', marginBottom: 2 }}>{info.label}</div>
                    <div style={{ fontFamily: 'var(--mm-font-body)', fontSize: 15, color: 'var(--mm-ink)' }}>{info.value}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Description */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}
        style={{ background: 'var(--mm-bg-alt)', padding: 'var(--mm-space-9) var(--mm-gutter)' }}>
        <div style={{ maxWidth: 'var(--mm-max-w)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--mm-space-8)', alignItems: 'center' }} className="desc-grid">
            <div style={{ position: 'relative', height: 420, borderRadius: 'var(--mm-radius-md)', overflow: 'hidden' }}>
              <Image src={photos.altPhoto1} alt={t.title} fill style={{ objectFit: 'cover' }} sizes="50vw" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', marginBottom: 'var(--mm-space-4)' }}>
                {t.descTitle}
              </div>
              <h2 style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'var(--mm-h2-size)', fontWeight: 400, color: 'var(--mm-forest)', letterSpacing: 'var(--mm-display-ls)', lineHeight: 'var(--mm-display-lh)', marginBottom: 'var(--mm-space-6)' }}>
                {t.title}
              </h2>
              <p style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-body-size)', lineHeight: 'var(--mm-body-lh)', color: 'var(--mm-ink)', marginBottom: 'var(--mm-space-5)' }}>{t.descP1}</p>
              <p style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-body-size)', lineHeight: 'var(--mm-body-lh)', color: 'var(--mm-ink)' }}>{t.descP2}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Equipment — Aubade only */}
      {t.equip && (
        <section style={{ background: 'var(--mm-bg)', padding: 'var(--mm-space-9) var(--mm-gutter)' }}>
          <div style={{ maxWidth: 'var(--mm-max-w)', margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', marginBottom: 'var(--mm-space-4)' }}>
              {lang === 'fr' ? "L'essentiel" : "What's inside"}
            </div>
            <h2 style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'var(--mm-h2-size)', fontWeight: 400, color: 'var(--mm-forest)', letterSpacing: 'var(--mm-display-ls)', lineHeight: 'var(--mm-display-lh)', marginBottom: 'var(--mm-space-7)' }}>
              {t.equipTitle}
            </h2>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--mm-space-4)' }} className="equip-grid">
              {t.equip.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--mm-space-3)' }}>
                  <Check size={16} color="var(--mm-bronze)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ fontFamily: 'var(--mm-font-body)', fontSize: 15, color: 'var(--mm-ink)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ background: 'var(--mm-bg-alt)', padding: 'var(--mm-space-9) var(--mm-gutter)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--mm-space-8)' }}>
            <div style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', marginBottom: 'var(--mm-space-4)' }}>FAQ</div>
            <h2 style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'var(--mm-h2-size)', fontWeight: 400, color: 'var(--mm-forest)', letterSpacing: 'var(--mm-display-ls)', lineHeight: 'var(--mm-display-lh)' }}>{t.faqTitle}</h2>
          </div>
          <FAQ items={t.faq} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--mm-forest)', padding: 'var(--mm-space-9) var(--mm-gutter)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'var(--mm-h2-size)', fontWeight: 400, color: '#fff', letterSpacing: 'var(--mm-display-ls)', lineHeight: 'var(--mm-display-lh)', marginBottom: 'var(--mm-space-4)' }}>
            {t.ctaTitle}
          </h2>
          <p style={{ fontFamily: 'var(--mm-font-italic)', fontStyle: 'italic', color: 'var(--mm-bronze-soft)', marginBottom: 'var(--mm-space-7)' }}>
            {t.ctaText}
          </p>
          <button onClick={scrollToContact} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 32px',
            fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500,
            letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase',
            color: 'var(--mm-forest)', background: 'var(--mm-bg)',
            border: 'none', borderRadius: 'var(--mm-radius-sm)', cursor: 'pointer',
          }}>
            {t.ctaBtn} <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* Guide link — Aubade only */}
      {t.guideLinkLede && (
        <section style={{ background: 'var(--mm-bg)', padding: 'var(--mm-space-7) var(--mm-gutter)' }}>
          <div style={{ maxWidth: 'var(--mm-max-w)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--mm-space-6)', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', marginBottom: 'var(--mm-space-2)' }}>
                {t.guideLinkLede}
              </div>
              <p style={{ fontFamily: 'var(--mm-font-italic)', fontStyle: 'italic', color: 'var(--mm-forest)', fontSize: 17 }}>
                {t.guideLinkText}
              </p>
            </div>
            <a href="/bienvenue/aubade" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px',
              fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500,
              letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase',
              color: 'var(--mm-forest)',
              border: '1px solid var(--mm-forest)',
              borderRadius: 'var(--mm-radius-sm)',
              textDecoration: 'none',
            }}>
              {common.bookGuideCta} <ArrowRight size={14} />
            </a>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 720px) {
          .keyinfo-grid { grid-template-columns: 1fr !important; }
          .desc-grid { grid-template-columns: 1fr !important; }
          .infos-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .equip-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
