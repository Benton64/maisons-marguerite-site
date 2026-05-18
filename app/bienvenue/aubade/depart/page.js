import { LangProvider } from '@/components/LangContext'
import Nav from '@/components/ui/Nav'
import { GuideDepartContent } from '@/components/sections/GuideSections'

export const metadata = { title: "Le Départ — Guide L'Aubade" }

export default function DepartPage() {
  return <LangProvider><Nav /><main><GuideDepartContent /></main></LangProvider>
}
