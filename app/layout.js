import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '../styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--mm-font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--mm-font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Les Maisons de Marguerite',
  description: 'Des maisons habitées, jamais mises en scène. Trois adresses choisies en France.',
  metadataBase: new URL('https://lesmaisonsdemarguerite.com'),
  openGraph: {
    siteName: 'Les Maisons de Marguerite',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
