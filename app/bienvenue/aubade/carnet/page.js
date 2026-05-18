import { LangProvider } from '@/components/LangContext'
import Nav from '@/components/ui/Nav'
import { GuideCarnetContent } from '@/components/sections/GuideSections'

export const metadata = { title: "Le Carnet de Val — Guide L'Aubade" }

export default function CarnetPage() {
  return <LangProvider><Nav /><main><GuideCarnetContent /></main></LangProvider>
}
