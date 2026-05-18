import { LangProvider } from '@/components/LangContext'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import PropertyContent from '@/components/sections/PropertyContent'

export const metadata = {
  title: "L'Aubade — Les Maisons de Marguerite",
  description: "Maison de famille rénovée dans le Périgord Vert. 4 suites, 8 personnes, piscine chauffée. Location à la semaine, mai à octobre.",
}

export default function AubadePage() {
  return (
    <LangProvider>
      <Nav />
      <main style={{ paddingTop: 72 }}>
        <PropertyContent slug="aubade" />
      </main>
      <Footer />
    </LangProvider>
  )
}
