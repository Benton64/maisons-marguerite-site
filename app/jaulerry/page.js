import { LangProvider } from '@/components/LangContext'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import PropertyContent from '@/components/sections/PropertyContent'

export const metadata = {
  title: 'Jaulerry — Les Maisons de Marguerite',
  description: "Appartement 200 m² en plein cœur de Biarritz. 3 chambres, 6 personnes, bail mobilité.",
}

export default function JauperryPage() {
  return (
    <LangProvider>
      <Nav />
      <main style={{ paddingTop: 72 }}>
        <PropertyContent slug="jaulerry" />
      </main>
      <Footer />
    </LangProvider>
  )
}
