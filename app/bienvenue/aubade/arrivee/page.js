import { LangProvider } from '@/components/LangContext'
import Nav from '@/components/ui/Nav'
import { GuideArriveeContent } from '@/components/sections/GuideSections'

export const metadata = { title: "Arrivée — Guide L'Aubade" }

export default function ArrivéePage() {
  return <LangProvider><Nav /><main><GuideArriveeContent /></main></LangProvider>
}
