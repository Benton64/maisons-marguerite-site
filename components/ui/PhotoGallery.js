'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import { useLang } from '@/components/LangContext'

export default function PhotoGallery({ photos, title }) {
  const { lang } = useLang()
  const label = lang === 'fr' ? 'Aperçu' : 'Gallery'
  const countLabel = `${photos.length} ${lang === 'fr' ? 'photos' : 'photos'}`

  return (
    <section style={{ background: 'var(--mm-bg)', padding: 'var(--mm-space-9) 0' }}>
      {/* Header */}
      <div style={{
        padding: '0 var(--mm-gutter)',
        maxWidth: 'var(--mm-max-w)',
        margin: '0 auto var(--mm-space-7)',
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--mm-space-5)',
      }}>
        <span style={{
          fontFamily: 'var(--mm-font-body)',
          fontSize: 'var(--mm-label-size)',
          fontWeight: 500,
          letterSpacing: 'var(--mm-allcaps-ls)',
          textTransform: 'uppercase',
          color: 'var(--mm-bronze)',
        }}>
          {label}
        </span>
        <h2 style={{
          fontFamily: 'var(--mm-font-display)',
          fontSize: 'var(--mm-h2-size)',
          fontWeight: 400,
          color: 'var(--mm-forest)',
          letterSpacing: 'var(--mm-display-ls)',
          lineHeight: 1,
        }}>
          {lang === 'fr' ? 'En images' : 'In pictures'}
        </h2>
        <span style={{
          marginLeft: 'auto',
          fontFamily: 'var(--mm-font-body)',
          fontSize: 'var(--mm-label-size)',
          fontWeight: 500,
          letterSpacing: 'var(--mm-allcaps-ls)',
          textTransform: 'uppercase',
          color: 'var(--mm-bronze)',
        }}>
          {countLabel}
        </span>
      </div>

      <div style={{ padding: '0 var(--mm-gutter)', maxWidth: 'var(--mm-max-w)', margin: '0 auto' }}>
        <div style={{ height: '1px', background: 'var(--mm-border)', marginBottom: 'var(--mm-space-7)' }} />
      </div>

      {/* Desktop: magazine strip */}
      <div className="gallery-desktop" style={{ padding: '0 var(--mm-gutter)', maxWidth: 'var(--mm-max-w)', margin: '0 auto' }}>
        <MagazineStrip photos={photos} title={title} />
      </div>

      {/* Mobile: swipe carousel */}
      <div className="gallery-mobile">
        <SwipeCarousel photos={photos} title={title} />
      </div>

      <style>{`
        .gallery-desktop { display: block; }
        .gallery-mobile  { display: none; }
        @media (max-width: 900px) {
          .gallery-desktop { display: none; }
          .gallery-mobile  { display: block; }
        }
      `}</style>
    </section>
  )
}

/* ── Desktop: magazine asymmetric grid ── */
function MagazineStrip({ photos, title }) {
  const [lightbox, setLightbox] = useState(null)

  /* Layout: 1 tall left + up to 4 in a 2×2 right grid */
  const main = photos[0]
  const rest = photos.slice(1, 5)

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 'var(--mm-space-4)',
        alignItems: 'stretch',
      }}>
        {/* Large left photo */}
        <button onClick={() => setLightbox(0)} style={{ all: 'unset', cursor: 'zoom-in', display: 'block' }}>
          <div style={{ position: 'relative', height: 540, borderRadius: 'var(--mm-radius-md)', overflow: 'hidden' }}>
            <Image
              src={main} alt={`${title} — photo principale`}
              fill style={{ objectFit: 'cover', transition: 'transform var(--mm-dur-slow) var(--mm-ease)' }}
              sizes="60vw"
              className="gallery-img"
            />
          </div>
        </button>

        {/* Right 2×2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 'var(--mm-space-4)',
        }}>
          {rest.map((src, i) => (
            <button key={i} onClick={() => setLightbox(i + 1)} style={{ all: 'unset', cursor: 'zoom-in', display: 'block' }}>
              <div style={{ position: 'relative', height: '100%', minHeight: 180, borderRadius: 'var(--mm-radius-md)', overflow: 'hidden' }}>
                <Image
                  src={src} alt={`${title} — photo ${i + 2}`}
                  fill style={{ objectFit: 'cover', transition: 'transform var(--mm-dur-slow) var(--mm-ease)' }}
                  sizes="30vw"
                  className="gallery-img"
                />
                {/* "Voir toutes" overlay on last tile if more photos exist */}
                {i === rest.length - 1 && photos.length > 5 && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(45,74,62,0.65)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{
                      fontFamily: 'var(--mm-font-body)',
                      fontSize: 'var(--mm-label-size)',
                      fontWeight: 500,
                      letterSpacing: 'var(--mm-label-ls)',
                      textTransform: 'uppercase',
                      color: '#fff',
                    }}>
                      +{photos.length - 5} photos
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox photos={photos} index={lightbox} onClose={() => setLightbox(null)} title={title} />
      )}

      <style>{`
        .gallery-img:hover { transform: scale(1.03); }
      `}</style>
    </>
  )
}

/* ── Mobile: touch swipe carousel ── */
function SwipeCarousel({ photos, title }) {
  const [current, setCurrent] = useState(0)
  const startX = useRef(null)

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(photos.length - 1, c + 1))

  const onTouchStart = (e) => { startX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
    startX.current = null
  }

  return (
    <div style={{ userSelect: 'none' }}>
      {/* Slide */}
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ position: 'relative', height: 320, overflow: 'hidden' }}
      >
        {photos.map((src, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              opacity: i === current ? 1 : 0,
              transition: 'opacity var(--mm-dur-med) var(--mm-ease)',
              pointerEvents: i === current ? 'auto' : 'none',
            }}
          >
            <Image
              src={src} alt={`${title} — photo ${i + 1}`}
              fill style={{ objectFit: 'cover' }}
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Counter badge */}
        <div style={{
          position: 'absolute', bottom: 'var(--mm-space-4)', right: 'var(--mm-space-4)',
          background: 'rgba(0,0,0,0.45)',
          borderRadius: 'var(--mm-radius-pill)',
          padding: '4px 12px',
          fontFamily: 'var(--mm-font-body)',
          fontSize: 12, fontWeight: 500,
          color: '#fff',
        }}>
          {current + 1} / {photos.length}
        </div>
      </div>

      {/* Dots */}
      <div style={{
        display: 'flex', justifyContent: 'center',
        gap: 'var(--mm-space-2)',
        padding: 'var(--mm-space-5) 0 var(--mm-space-2)',
      }}>
        {photos.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            all: 'unset', cursor: 'pointer',
            width: i === current ? 20 : 8,
            height: 8,
            borderRadius: 'var(--mm-radius-pill)',
            background: i === current ? 'var(--mm-forest)' : 'var(--mm-bronze-soft)',
            transition: 'width var(--mm-dur-fast) var(--mm-ease), background var(--mm-dur-fast) var(--mm-ease)',
          }} />
        ))}
      </div>
    </div>
  )
}

/* ── Lightbox (desktop only) ── */
function Lightbox({ photos, index, onClose, title }) {
  const [current, setCurrent] = useState(index)

  const prev = (e) => { e.stopPropagation(); setCurrent(c => Math.max(0, c - 1)) }
  const next = (e) => { e.stopPropagation(); setCurrent(c => Math.min(photos.length - 1, c + 1)) }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(26,26,26,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '80vw', height: '80vh', maxWidth: 1100 }}>
        <Image
          src={photos[current]} alt={`${title} — photo ${current + 1}`}
          fill style={{ objectFit: 'contain' }}
          sizes="80vw"
        />
      </div>

      {/* Nav arrows */}
      {current > 0 && (
        <button onClick={prev} style={{
          position: 'fixed', left: 24, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%',
          width: 48, height: 48, cursor: 'pointer', color: '#fff', fontSize: 22,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>‹</button>
      )}
      {current < photos.length - 1 && (
        <button onClick={next} style={{
          position: 'fixed', right: 24, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%',
          width: 48, height: 48, cursor: 'pointer', color: '#fff', fontSize: 22,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>›</button>
      )}

      {/* Close */}
      <button onClick={onClose} style={{
        position: 'fixed', top: 20, right: 24,
        background: 'none', border: 'none', cursor: 'pointer',
        color: '#fff', fontSize: 28, lineHeight: 1,
      }}>×</button>

      {/* Counter */}
      <div style={{
        position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'var(--mm-font-body)', fontSize: 13, color: 'rgba(255,255,255,0.6)',
      }}>
        {current + 1} / {photos.length}
      </div>
    </div>
  )
}
