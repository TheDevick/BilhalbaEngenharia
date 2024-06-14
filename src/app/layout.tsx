import Header from '@/components/Layout/Header/Header'
import { Analytics } from '@vercel/analytics/react'
import '@/assets/styles/globals.css'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export function generateMetadata(): Metadata {
  return {
    title: {
      default: 'Bilhalba Engenharia',
      template: '%s | Bilhalba Engenharia',
    },
    description:
      'Oferecendo serviços de engenharia elétrica e energia solar às cidades da fronteira de Quaraí, Artigas e região',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
