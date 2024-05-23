import Copyright from "@/app/components/content/copyright";
import ContentFooter from "@/app/components/content/footer";
import Header from "@/app/components/content/header";
import Intro from "@/app/components/content/intro";
import Nav from "@/app/components/content/nav/nav";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import Script from "next/script";
import "../../public/assets/css/fontawesome-all.min.css";
import "../../public/assets/css/main.css";
import "../../public/assets/css/no-script.css";

export const metadata: Metadata = {
  title: "Bilhalba Engenharia: Projetos Elétricos",
  description: "Oferecendo serviços de engenharia elétrica e energia solar às cidades da fronteira de Quaraí, Artigas e região",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="wrapper" className="fade-in">
          <Intro />
          <Header />
          <Nav />
          <main id="main">
            {children}
          </main>
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
  );
}
