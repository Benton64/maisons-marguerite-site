'use client'

import { useState } from 'react'
import { ArrowLeft, MapPin, Copy, Check } from 'lucide-react'
import { useLang } from '@/components/LangContext'
import { content } from '@/lib/content'

const sectionStyle = {
  background: 'var(--mm-bg)',
  minHeight: '100vh',
  paddingTop: 72,
}

const containerStyle = {
  maxWidth: 720,
  margin: '0 auto',
  padding: 'var(--mm-space-9) var(--mm-gutter)',
}

const h1Style = {
  fontFamily: 'var(--mm-font-display)',
  fontSize: 'var(--mm-h1-size)',
  fontWeight: 400,
  color: 'var(--mm-forest)',
  letterSpacing: 'var(--mm-display-ls)',
  lineHeight: 'var(--mm-display-lh)',
  marginBottom: 'var(--mm-space-5)',
}

const eyebrowStyle = {
  fontFamily: 'var(--mm-font-body)',
  fontSize: 'var(--mm-label-size)',
  fontWeight: 500,
  letterSpacing: 'var(--mm-label-ls)',
  textTransform: 'uppercase',
  color: 'var(--mm-bronze)',
  marginBottom: 'var(--mm-space-4)',
}

const cardStyle = {
  background: 'var(--mm-bg-alt)',
  border: 'var(--mm-border-hair)',
  borderRadius: 'var(--mm-radius-md)',
  padding: 'var(--mm-space-6)',
  marginBottom: 'var(--mm-space-5)',
}

const labelStyle = {
  fontFamily: 'var(--mm-font-body)',
  fontSize: 'var(--mm-label-size)',
  fontWeight: 500,
  letterSpacing: 'var(--mm-label-ls)',
  textTransform: 'uppercase',
  color: 'var(--mm-bronze)',
  marginBottom: 'var(--mm-space-2)',
  display: 'block',
}

const valueStyle = {
  fontFamily: 'var(--mm-font-body)',
  fontSize: 'var(--mm-body-size)',
  color: 'var(--mm-ink)',
  lineHeight: 'var(--mm-body-lh)',
}

function BackLink({ lang }) {
  return (
    <a href="/bienvenue/aubade" style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--mm-font-body)',
      fontSize: 'var(--mm-label-size)',
      fontWeight: 500,
      letterSpacing: 'var(--mm-label-ls)',
      textTransform: 'uppercase',
      color: 'var(--mm-bronze)',
      textDecoration: 'none',
      marginBottom: 'var(--mm-space-7)',
      display: 'inline-flex',
    }}>
      <ArrowLeft size={14} /> {lang === 'fr' ? 'Retour au guide' : 'Back to guide'}
    </a>
  )
}

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={copy} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mm-bronze)', display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, marginLeft: 8 }}>
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  )
}

export function GuideArriveeContent() {
  const { lang } = useLang()
  const t = content[lang].guideArrivee
  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <BackLink lang={lang} />
        <div style={eyebrowStyle}>{lang === 'fr' ? "Guide d'arrivée" : 'Arrival guide'}</div>
        <h1 style={h1Style}>{t.title}</h1>
        <p style={{ ...valueStyle, fontStyle: 'italic', fontFamily: 'var(--mm-font-italic)', color: 'var(--mm-forest)', marginBottom: 'var(--mm-space-8)' }}>
          {lang === 'fr' ? content.fr.guide?.intro : content.en.guide?.intro}
        </p>

        <div style={cardStyle}>
          <span style={labelStyle}>{lang === 'fr' ? 'Adresse' : 'Address'}</span>
          <p style={valueStyle}>{t.address} <CopyButton value={t.address} /></p>
          <p style={{ ...valueStyle, color: 'var(--mm-bronze)', fontSize: 14, marginTop: 4 }}>GPS : {t.gps} <CopyButton value={t.gps} /></p>
          <p style={{ ...valueStyle, marginTop: 'var(--mm-space-3)', fontSize: 14 }}>{t.access}</p>
        </div>

        <div style={cardStyle}>
          <span style={labelStyle}>{lang === 'fr' ? 'Boîte à clé' : 'Key box'}</span>
          <p style={valueStyle}>{t.keyDetails}</p>
        </div>

        <div style={cardStyle}>
          <span style={labelStyle}>{lang === 'fr' ? 'Horaires' : 'Hours'}</span>
          <p style={valueStyle}>{t.hours}</p>
        </div>

        <div style={{ marginBottom: 'var(--mm-space-7)' }}>
          <h2 style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'var(--mm-h3-size)', fontWeight: 400, color: 'var(--mm-forest)', marginBottom: 'var(--mm-space-5)' }}>
            {t.teamTitle}
          </h2>
          {t.team.map(([name, desc], i) => (
            <div key={i} style={{ display: 'flex', gap: 'var(--mm-space-5)', paddingBottom: 'var(--mm-space-4)', borderBottom: 'var(--mm-border-divider)', marginBottom: 'var(--mm-space-4)' }}>
              <span style={{ fontFamily: 'var(--mm-font-body)', fontWeight: 500, color: 'var(--mm-forest)', minWidth: 80 }}>{name}</span>
              <span style={valueStyle}>{desc}</span>
            </div>
          ))}
        </div>

        <div>
          <h2 style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'var(--mm-h3-size)', fontWeight: 400, color: 'var(--mm-forest)', marginBottom: 'var(--mm-space-5)' }}>
            {t.emergencyTitle}
          </h2>
          {t.emergency.map(([name, num], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 'var(--mm-space-4)', borderBottom: 'var(--mm-border-divider)', marginBottom: 'var(--mm-space-4)' }}>
              <span style={valueStyle}>{name}</span>
              <a href={`tel:${num}`} style={{ fontFamily: 'var(--mm-font-body)', fontWeight: 500, color: 'var(--mm-forest)', textDecoration: 'none' }}>{num}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function GuideMaisonContent() {
  const { lang } = useLang()
  const t = content[lang].guideMaison
  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <BackLink lang={lang} />
        <div style={eyebrowStyle}>{lang === 'fr' ? "Guide d'arrivée" : 'Arrival guide'}</div>
        <h1 style={h1Style}>{t.title}</h1>

        <div style={cardStyle}>
          <span style={labelStyle}>WiFi</span>
          <p style={valueStyle}>{lang === 'fr' ? 'Réseau' : 'Network'} : <strong>{t.wifiNetwork}</strong> <CopyButton value={t.wifiNetwork} /></p>
          <p style={valueStyle}>{lang === 'fr' ? 'Mot de passe' : 'Password'} : <strong>{t.wifiPassword}</strong> <CopyButton value={t.wifiPassword} /></p>
        </div>

        <div style={cardStyle}>
          <span style={labelStyle}>Sonos</span>
          <p style={valueStyle}>{t.sonosText}</p>
        </div>

        <div style={cardStyle}>
          <span style={labelStyle}>{lang === 'fr' ? 'Piscine' : 'Pool'}</span>
          <p style={valueStyle}>{t.poolText}</p>
        </div>

        <div style={cardStyle}>
          <span style={labelStyle}>{lang === 'fr' ? 'BBQ Weber gaz + plancha' : 'Weber gas BBQ + plancha'}</span>
          <p style={valueStyle}>{t.bbqText}</p>
        </div>

        <div style={cardStyle}>
          <span style={labelStyle}>{lang === 'fr' ? 'Cheminée Focus' : 'Focus fireplace'}</span>
          <ol style={{ paddingLeft: 'var(--mm-space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--mm-space-2)' }}>
            {t.fireplaceSteps.map((step, i) => (
              <li key={i} style={valueStyle}>{step}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'var(--mm-h3-size)', fontWeight: 400, color: 'var(--mm-forest)', marginBottom: 'var(--mm-space-5)' }}>
            {lang === 'fr' ? 'Divers' : 'Misc'}
          </h2>
          {t.misc.map(([k, v], i) => (
            <div key={i} style={{ display: 'flex', gap: 'var(--mm-space-5)', paddingBottom: 'var(--mm-space-4)', borderBottom: 'var(--mm-border-divider)', marginBottom: 'var(--mm-space-4)' }}>
              <span style={{ ...valueStyle, fontWeight: 500, color: 'var(--mm-forest)', minWidth: 160 }}>{k}</span>
              <span style={valueStyle}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function GuideCarnetContent() {
  const { lang } = useLang()
  const t = content[lang].guideCarnet
  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <BackLink lang={lang} />
        <div style={eyebrowStyle}>{lang === 'fr' ? "Guide d'arrivée" : 'Arrival guide'}</div>
        <h1 style={h1Style}>{t.title}</h1>
        {t.intro && <p style={{ ...valueStyle, fontStyle: 'italic', fontFamily: 'var(--mm-font-italic)', color: 'var(--mm-bronze)', marginBottom: 'var(--mm-space-8)' }}>{t.intro}</p>}

        {t.groups.map((group, gi) => (
          <div key={gi} style={{ marginBottom: 'var(--mm-space-8)' }}>
            <div style={eyebrowStyle}>{group.eyebrow}</div>
            {group.items.map((item, ii) => (
              <div key={ii} style={{ ...cardStyle, marginBottom: 'var(--mm-space-4)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: item.quote ? 'var(--mm-space-3)' : 0 }}>
                  <span style={{ fontFamily: 'var(--mm-font-body)', fontWeight: 500, fontSize: 16, color: 'var(--mm-forest)' }}>{item.name}</span>
                  <span style={{ fontFamily: 'var(--mm-font-body)', fontSize: 13, color: 'var(--mm-bronze)' }}>{item.meta}</span>
                </div>
                {item.quote && <p style={{ ...valueStyle, fontStyle: 'italic', fontFamily: 'var(--mm-font-italic)', color: 'var(--mm-ink)', fontSize: 15 }}>« {item.quote} »</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function GuideDepartContent() {
  const { lang } = useLang()
  const t = content[lang].guideDepart
  const [checked, setChecked] = useState([])
  const toggle = (i) => setChecked(checked.includes(i) ? checked.filter(x => x !== i) : [...checked, i])
  const allDone = checked.length === t.checklist.length

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <BackLink lang={lang} />
        <div style={eyebrowStyle}>{lang === 'fr' ? "Guide d'arrivée" : 'Arrival guide'}</div>
        <h1 style={h1Style}>{t.title}</h1>
        <p style={{ ...valueStyle, marginBottom: 'var(--mm-space-7)' }}>{t.hours}</p>

        <div style={{ marginBottom: 'var(--mm-space-8)' }}>
          <h2 style={{ fontFamily: 'var(--mm-font-display)', fontSize: 'var(--mm-h3-size)', fontWeight: 400, color: 'var(--mm-forest)', marginBottom: 'var(--mm-space-5)' }}>
            {lang === 'fr' ? 'Avant de partir' : 'Before you leave'}
          </h2>
          {t.checklist.map((item, i) => (
            <button key={i} onClick={() => toggle(i)} style={{
              width: '100%', background: checked.includes(i) ? 'var(--mm-card-hover)' : 'var(--mm-bg-alt)',
              border: 'var(--mm-border-hair)', borderRadius: 'var(--mm-radius-sm)',
              padding: 'var(--mm-space-4) var(--mm-space-5)',
              display: 'flex', alignItems: 'center', gap: 'var(--mm-space-4)',
              cursor: 'pointer', marginBottom: 'var(--mm-space-2)', textAlign: 'left',
              transition: 'background-color var(--mm-dur-fast) var(--mm-ease)',
            }}>
              <div style={{
                width: 20, height: 20, borderRadius: 2, flexShrink: 0,
                border: '2px solid var(--mm-forest)',
                background: checked.includes(i) ? 'var(--mm-forest)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {checked.includes(i) && <Check size={12} color="#fff" />}
              </div>
              <span style={{ ...valueStyle, textDecoration: checked.includes(i) ? 'line-through' : 'none', opacity: checked.includes(i) ? 0.5 : 1 }}>
                {item}
              </span>
            </button>
          ))}
          {allDone && (
            <p style={{ fontFamily: 'var(--mm-font-italic)', fontStyle: 'italic', color: 'var(--mm-forest)', textAlign: 'center', marginTop: 'var(--mm-space-5)' }}>
              {lang === 'fr' ? '✓ Tout est en ordre.' : '✓ All done.'}
            </p>
          )}
        </div>

        <div style={cardStyle}>
          <span style={labelStyle}>{lang === 'fr' ? 'Les clés' : 'The keys'}</span>
          <p style={valueStyle}>{t.keysText}</p>
        </div>

        <div style={{ ...cardStyle, background: 'var(--mm-forest)', border: 'none' }}>
          <p style={{ fontFamily: 'var(--mm-font-italic)', fontStyle: 'italic', fontSize: 16, lineHeight: 1.7, color: 'var(--mm-bronze-soft)', marginBottom: 'var(--mm-space-4)' }}>
            {t.wordText}
          </p>
          <p style={{ fontFamily: 'var(--mm-font-display)', fontSize: 18, color: '#fff' }}>{t.signature}</p>
        </div>
      </div>
    </div>
  )
}
