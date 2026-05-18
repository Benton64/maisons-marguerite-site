'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLang } from '@/components/LangContext'
import { content } from '@/lib/content'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const { lang, toggle } = useLang()
  const t = content[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.aubade, href: '/aubade' },
    { label: t.jaulerry, href: '/jaulerry' },
    { label: t.iena, href: '/iena' },
    { label: t.contact, href: '#contact' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled ? 'var(--mm-bg)' : 'transparent',
      borderBottom: scrolled ? 'var(--mm-border-hair)' : 'none',
      transition: 'background-color var(--mm-dur-med) var(--mm-ease), border-color var(--mm-dur-med) var(--mm-ease)',
    }}>
      <div style={{
        maxWidth: 'var(--mm-max-w)', margin: '0 auto',
        padding: '0 var(--mm-gutter)',
        height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={scrolled ? '/logo/MaisonMarguerite-OneColorBG.svg' : '/logo/MaisonMarguerite-Reversed.svg'}
            alt="Les Maisons de Marguerite"
            width={140} height={40}
            style={{ objectFit: 'contain' }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--mm-space-7)' }}
             className="nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'var(--mm-font-body)',
              fontSize: 'var(--mm-label-size)',
              fontWeight: 500,
              letterSpacing: 'var(--mm-label-ls)',
              textTransform: 'uppercase',
              color: scrolled ? 'var(--mm-forest)' : 'var(--mm-paper)',
              textDecoration: 'none',
              transition: 'color var(--mm-dur-fast) var(--mm-ease)',
            }}>
              {l.label}
            </a>
          ))}
          <button onClick={toggle} style={{
            fontFamily: 'var(--mm-font-body)',
            fontSize: 'var(--mm-label-size)',
            fontWeight: 500,
            letterSpacing: 'var(--mm-label-ls)',
            textTransform: 'uppercase',
            color: scrolled ? 'var(--mm-bronze)' : 'rgba(255,255,255,0.7)',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '4px 0',
          }}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)}
                className="nav-mobile"
                style={{ background: 'none', border: 'none', cursor: 'pointer',
                         color: scrolled ? 'var(--mm-forest)' : 'var(--mm-paper)' }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          backgroundColor: 'var(--mm-bg)',
          borderTop: 'var(--mm-border-hair)',
          padding: 'var(--mm-space-5) var(--mm-gutter)',
          display: 'flex', flexDirection: 'column', gap: 'var(--mm-space-5)',
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--mm-font-body)',
              fontSize: 'var(--mm-label-size)',
              fontWeight: 500,
              letterSpacing: 'var(--mm-label-ls)',
              textTransform: 'uppercase',
              color: 'var(--mm-forest)',
              textDecoration: 'none',
            }}>
              {l.label}
            </a>
          ))}
          <button onClick={() => { toggle(); setOpen(false) }} style={{
            fontFamily: 'var(--mm-font-body)',
            fontSize: 'var(--mm-label-size)',
            fontWeight: 500,
            letterSpacing: 'var(--mm-label-ls)',
            textTransform: 'uppercase',
            color: 'var(--mm-bronze)',
            background: 'none', border: 'none', cursor: 'pointer',
            textAlign: 'left', padding: 0,
          }}>
            {lang === 'fr' ? 'English' : 'Français'}
          </button>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile  { display: none; }
        @media (max-width: 720px) {
          .nav-desktop { display: none; }
          .nav-mobile  { display: flex; }
        }
      `}</style>
    </header>
  )
}
