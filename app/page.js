import { LangProvider } from '@/components/LangContext'
import Nav from '@/components/ui/Nav'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/ui/Footer'
import BrandAndProperties from '@/components/sections/BrandAndProperties'
import ContactSection from '@/components/sections/ContactSection'

export const metadata = {
  title: 'Les Maisons de Marguerite — Des maisons habitées, jamais mises en scène',
  description: "Trois adresses choisies en France : L'Aubade en Dordogne, Jaulerry à Biarritz, Iéna à Paris 16e.",
}

export default function HomePage() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <BrandAndProperties />
        <ContactSection />
      </main>
      <Footer />
    </LangProvider>
  )
}
