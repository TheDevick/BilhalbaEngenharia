import Copyright from '@/components/Layout/Copyright/Copyright'
import Header from '@/components/Layout/Header/Header'
import Navbar from '@/components/Layout/Navbar/Navbar'
import ContentFooter from '@/components/Layout/Footer/Footer'
import '@/styles/fontawesome-all.min.css'
import '@/styles/main.css'
import '@/styles/no-script.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import Script from 'next/script'

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
    <html lang="en">
      <body>
        <div id="wrapper" className="fade-in">
          <Header />
          <Navbar />
          <main id="main">{children}</main>
          <ContentFooter />
          <Copyright />
        </div>
        <Analytics />
        <Script src="/assets/js/jquery.min.js" />
        <Script src="/assets/js/jquery.scrollex.min.js" />
        <Script src="/assets/js/jquery.scrolly.min.js" />
        <Script src="/assets/js/browser.min.js" />
        <Script src="/assets/js/breakpoints.min.js" />
        <Script src="/assets/js/util.js" />
        <Script src="/assets/js/main.js" />
      </body>
    </html>
  )
}
