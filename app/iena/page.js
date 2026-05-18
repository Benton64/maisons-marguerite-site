import { LangProvider } from '@/components/LangContext'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import PropertyContent from '@/components/sections/PropertyContent'

export const metadata = {
  title: 'Iéna — Les Maisons de Marguerite',
  description: "Duplex haussmannien 125 m² Paris 16ᵉ. 2 chambres, 4 personnes, parking inclus. Bail mobilité.",
}

export default function IenaPage() {
  return (
    <LangProvider>
      <Nav />
      <main style={{ paddingTop: 72 }}>
        <PropertyContent slug="iena" />
      </main>
      <Footer />
    </LangProvider>
  )
}
