'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLang } from '@/components/LangContext'
import { content } from '@/lib/content'

export default function Footer() {
  const { lang } = useLang()
  const t = content[lang].footer
  const nav = content[lang].nav
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer style={{ background: 'var(--mm-forest)', color: 'var(--mm-bronze-soft)' }}>
      <div style={{
        maxWidth: 'var(--mm-max-w)', margin: '0 auto',
        padding: 'var(--mm-space-10) var(--mm-gutter)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 'var(--mm-space-8)',
          marginBottom: 'var(--mm-space-9)',
        }} className="footer-grid">
          {/* Brand column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mm-space-5)' }}>
            <Image
              src="/logo/MaisonMarguerite-Reversed.svg"
              alt="Les Maisons de Marguerite"
              width={140} height={40}
              style={{ objectFit: 'contain', objectPosition: 'left' }}
            />
            <p style={{
              fontFamily: 'var(--mm-font-italic)',
              fontStyle: 'italic',
              fontSize: 15,
              lineHeight: 1.6,
              color: 'var(--mm-bronze-soft)',
              maxWidth: 320,
            }}>
              {t.promise}
            </p>

            {/* Newsletter */}
            <div style={{ marginTop: 'var(--mm-space-4)' }}>
              <div style={{
                fontFamily: 'var(--mm-font-body)',
                fontSize: 'var(--mm-label-size)',
                fontWeight: 500,
                letterSpacing: 'var(--mm-label-ls)',
                textTransform: 'uppercase',
                color: 'var(--mm-bronze-soft)',
                marginBottom: 'var(--mm-space-2)',
              }}>
                {t.newsletter}
              </div>
              <p style={{ fontSize: 14, color: 'rgba(212,197,176,0.7)', marginBottom: 'var(--mm-space-4)' }}>
                {t.newsletterText}
              </p>
              {subscribed ? (
                <p style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--mm-bronze-soft)' }}>✓ {lang === 'fr' ? 'Merci !' : 'Thank you!'}</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true) }}
                      style={{ display: 'flex', gap: 'var(--mm-space-3)' }}>
                  <input
                    type="email" required value={email} onChange={e => setEmail(e.target.value)}
                    placeholder={t.placeholder}
                    style={{
                      flex: 1, padding: '10px 14px',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(212,197,176,0.3)',
                      borderRadius: 'var(--mm-radius-sm)',
                      fontFamily: 'var(--mm-font-body)',
                      fontSize: 14, color: '#fff', outline: 'none',
                    }}
                  />
                  <button type="submit" style={{
                    padding: '10px 20px',
                    fontFamily: 'var(--mm-font-body)',
                    fontSize: 'var(--mm-label-size)',
                    fontWeight: 500,
                    letterSpacing: 'var(--mm-label-ls)',
                    textTransform: 'uppercase',
                    background: 'var(--mm-bronze)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 'var(--mm-radius-sm)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}>
                    {t.newsletterCta}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div style={{
              fontFamily: 'var(--mm-font-body)',
              fontSize: 'var(--mm-label-size)',
              fontWeight: 500,
              letterSpacing: 'var(--mm-label-ls)',
              textTransform: 'uppercase',
              color: '#fff',
              marginBottom: 'var(--mm-space-5)',
            }}>
              {t.explore}
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mm-space-4)' }}>
              {[
                { label: nav.aubade, href: '/aubade' },
                { label: nav.jaulerry, href: '/jaulerry' },
                { label: nav.iena, href: '/iena' },
              ].map((l) => (
                <a key={l.href} href={l.href} style={{
                  fontFamily: 'var(--mm-font-body)',
                  fontSize: 15, color: 'var(--mm-bronze-soft)',
                  textDecoration: 'none',
                }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Practical */}
          <div>
            <div style={{
              fontFamily: 'var(--mm-font-body)',
              fontSize: 'var(--mm-label-size)',
              fontWeight: 500,
              letterSpacing: 'var(--mm-label-ls)',
              textTransform: 'uppercase',
              color: '#fff',
              marginBottom: 'var(--mm-space-5)',
            }}>
              {t.practical}
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mm-space-4)' }}>
              {[
                { label: t.contact, href: '#contact' },
                { label: t.instagram, href: '#' },
                { label: t.legal, href: '/mentions-legales' },
                { label: t.privacy, href: '/confidentialite' },
              ].map((l) => (
                <a key={l.label} href={l.href} style={{
                  fontFamily: 'var(--mm-font-body)',
                  fontSize: 15, color: 'var(--mm-bronze-soft)',
                  textDecoration: 'none',
                }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(212,197,176,0.2)',
          paddingTop: 'var(--mm-space-6)',
          fontFamily: 'var(--mm-font-body)',
          fontSize: 13,
          color: 'rgba(212,197,176,0.5)',
        }}>
          {t.copy}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
