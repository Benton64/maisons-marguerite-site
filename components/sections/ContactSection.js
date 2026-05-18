'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { useLang } from '@/components/LangContext'
import { content } from '@/lib/content'

const inputStyle = {
  width: '100%', padding: '14px 16px',
  background: 'var(--mm-bg)',
  border: '1px solid var(--mm-border)',
  borderRadius: 'var(--mm-radius-sm)',
  fontFamily: 'var(--mm-font-body)',
  fontSize: 'var(--mm-body-size)',
  color: 'var(--mm-fg)',
  outline: 'none',
}

export default function ContactSection() {
  const { lang } = useLang()
  const t = content[lang].home
  const [form, setForm] = useState({ firstName: '', email: '', property: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState('')

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{
      background: 'var(--mm-bg-alt)',
      padding: 'var(--mm-space-10) var(--mm-gutter)',
    }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--mm-space-8)' }}>
          <div style={{
            fontFamily: 'var(--mm-font-body)',
            fontSize: 'var(--mm-label-size)',
            fontWeight: 500,
            letterSpacing: 'var(--mm-label-ls)',
            textTransform: 'uppercase',
            color: 'var(--mm-bronze)',
            marginBottom: 'var(--mm-space-4)',
          }}>
            {t.contactEyebrow}
          </div>
          <h2 style={{
            fontFamily: 'var(--mm-font-display)',
            fontSize: 'var(--mm-h2-size)',
            fontWeight: 400,
            color: 'var(--mm-forest)',
            letterSpacing: 'var(--mm-display-ls)',
            lineHeight: 'var(--mm-display-lh)',
            marginBottom: 'var(--mm-space-4)',
          }}>
            {t.contactTitle}
          </h2>
          <p style={{
            fontFamily: 'var(--mm-font-italic)',
            fontStyle: 'italic',
            color: 'var(--mm-bronze)',
            fontSize: 'var(--mm-body-size)',
          }}>
            {t.contactSubtitle}
          </p>
        </div>

        {sent ? (
          <div style={{ textAlign: 'center', padding: 'var(--mm-space-9) 0' }}>
            <h3 style={{
              fontFamily: 'var(--mm-font-display)',
              fontSize: 'var(--mm-h3-size)',
              color: 'var(--mm-forest)',
              marginBottom: 'var(--mm-space-4)',
            }}>
              {t.thanksTitle}
            </h3>
            <p style={{ color: 'var(--mm-bronze)', fontStyle: 'italic', fontFamily: 'var(--mm-font-italic)' }}>
              {t.thanksText}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mm-space-5)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--mm-space-5)' }}
                 className="form-grid">
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', marginBottom: 'var(--mm-space-2)' }}>
                  {t.firstName}
                </label>
                <input
                  type="text" required value={form.firstName} onChange={set('firstName')}
                  style={{ ...inputStyle, borderColor: focused === 'firstName' ? 'var(--mm-forest)' : 'var(--mm-border)' }}
                  onFocus={() => setFocused('firstName')} onBlur={() => setFocused('')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', marginBottom: 'var(--mm-space-2)' }}>
                  {t.email}
                </label>
                <input
                  type="email" required value={form.email} onChange={set('email')}
                  style={{ ...inputStyle, borderColor: focused === 'email' ? 'var(--mm-forest)' : 'var(--mm-border)' }}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', marginBottom: 'var(--mm-space-2)' }}>
                {t.property}
              </label>
              <select
                required value={form.property} onChange={set('property')}
                style={{ ...inputStyle, borderColor: focused === 'property' ? 'var(--mm-forest)' : 'var(--mm-border)', appearance: 'none', cursor: 'pointer' }}
                onFocus={() => setFocused('property')} onBlur={() => setFocused('')}
              >
                <option value="">{t.propertyChoose}</option>
                <option value="aubade">L'Aubade</option>
                <option value="jaulerry">Jaulerry</option>
                <option value="iena">Iéna</option>
                <option value="other">{t.propertyOther}</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--mm-font-body)', fontSize: 'var(--mm-label-size)', fontWeight: 500, letterSpacing: 'var(--mm-label-ls)', textTransform: 'uppercase', color: 'var(--mm-bronze)', marginBottom: 'var(--mm-space-2)' }}>
                {t.message}
              </label>
              <textarea
                required rows={5} value={form.message} onChange={set('message')}
                style={{ ...inputStyle, resize: 'vertical', borderColor: focused === 'message' ? 'var(--mm-forest)' : 'var(--mm-border)' }}
                onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
              />
            </div>

            <button type="submit" style={{
              alignSelf: 'flex-start',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 32px',
              fontFamily: 'var(--mm-font-body)',
              fontSize: 'var(--mm-label-size)',
              fontWeight: 500,
              letterSpacing: 'var(--mm-label-ls)',
              textTransform: 'uppercase',
              color: 'var(--mm-cta-fg)',
              background: 'var(--mm-cta-bg)',
              border: 'none',
              borderRadius: 'var(--mm-radius-sm)',
              cursor: 'pointer',
            }}>
              {t.send}
              <Send size={14} />
            </button>
          </form>
        )}
      </div>
      <style>{`
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
