'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/components/LangContext'
import { content, properties } from '@/lib/content'

export default function PropertyCard({ slug }) {
  const { lang } = useLang()
  const t = content[lang].cards[slug]
  const photos = properties[slug]
  const [hovered, setHovered] = useState(false)

  return (
    <a href={`/${slug}`} style={{ textDecoration: 'none', display: 'block' }}
       onMouseEnter={() => setHovered(true)}
       onMouseLeave={() => setHovered(false)}>
      <div style={{
        background: 'var(--mm-bg-alt)',
        border: 'var(--mm-border-hair)',
        borderRadius: 'var(--mm-radius-md)',
        overflow: 'hidden',
        transition: 'transform var(--mm-dur-med) var(--mm-ease), box-shadow var(--mm-dur-med) var(--mm-ease)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? 'var(--mm-shadow-lift)' : 'none',
      }}>
        {/* Photo */}
        <div style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
          <Image
            src={photos.photo}
            alt={t.title}
            fill
            style={{
              objectFit: 'cover',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform var(--mm-dur-slow) var(--mm-ease)',
            }}
            sizes="(max-width: 720px) 100vw, 33vw"
          />
        </div>

        {/* Content */}
        <div style={{ padding: 'var(--mm-space-6)' }}>
          <div style={{
            fontFamily: 'var(--mm-font-body)',
            fontSize: 'var(--mm-label-size)',
            fontWeight: 500,
            letterSpacing: 'var(--mm-label-ls)',
            textTransform: 'uppercase',
            color: 'var(--mm-bronze)',
            marginBottom: 'var(--mm-space-2)',
          }}>
            {t.location}
          </div>

          <h3 style={{
            fontFamily: 'var(--mm-font-display)',
            fontSize: 'var(--mm-h3-size)',
            fontWeight: 400,
            color: 'var(--mm-forest)',
            letterSpacing: 'var(--mm-display-ls)',
            lineHeight: 'var(--mm-display-lh)',
            marginBottom: 'var(--mm-space-3)',
          }}>
            {t.title}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mm-space-1)', marginBottom: 'var(--mm-space-5)' }}>
            {t.info.map((line, i) => (
              <span key={i} style={{
                fontFamily: 'var(--mm-font-body)',
                fontSize: 15,
                color: 'var(--mm-ink)',
                opacity: 0.7,
              }}>
                {line}
              </span>
            ))}
          </div>

          <div style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            paddingTop: 'var(--mm-space-5)',
            borderTop: 'var(--mm-border-divider)',
          }}>
            <div>
              <span style={{
                fontFamily: 'var(--mm-font-display)',
                fontSize: 24,
                fontWeight: 500,
                color: 'var(--mm-forest)',
              }}>
                {t.price}
              </span>
              <span style={{
                fontFamily: 'var(--mm-font-body)',
                fontSize: 13,
                color: 'var(--mm-bronze)',
                marginLeft: 6,
              }}>
                {t.priceUnit}
              </span>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--mm-font-body)',
              fontSize: 'var(--mm-label-size)',
              fontWeight: 500,
              letterSpacing: 'var(--mm-label-ls)',
              textTransform: 'uppercase',
              color: 'var(--mm-forest)',
            }}>
              {content[lang].home.cardCta}
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
