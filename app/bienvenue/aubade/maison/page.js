import { LangProvider } from '@/components/LangContext'
import Nav from '@/components/ui/Nav'
import { GuideMaisonContent } from '@/components/sections/GuideSections'

export const metadata = { title: "La Maison — Guide L'Aubade" }

export default function MaisonPage() {
  return <LangProvider><Nav /><main><GuideMaisonContent /></main></LangProvider>
}
