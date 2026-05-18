'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LangContext = createContext('fr')

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr')

  useEffect(() => {
    const stored = localStorage.getItem('mm-lang')
    if (stored === 'en') setLang('en')
  }, [])

  const toggle = () => {
    const next = lang === 'fr' ? 'en' : 'fr'
    setLang(next)
    localStorage.setItem('mm-lang', next)
  }

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
