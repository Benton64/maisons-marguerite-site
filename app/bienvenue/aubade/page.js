import { LangProvider } from '@/components/LangContext'
import Nav from '@/components/ui/Nav'
import GuideHub from '@/components/sections/GuideHub'

export const metadata = {
  title: "Guide d'arrivée — L'Aubade",
  description: "Votre guide d'arrivée pour L'Aubade. Adresse, accès, WiFi, équipements, carnet d'adresses de Val.",
}

export default function GuideAubadePage() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <GuideHub />
      </main>
    </LangProvider>
  )
}
