import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../../public/assets/css/main.css";
import "../../public/assets/css/no-script.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}`}>
        {children}
        <Script src="assets/js/jquery.min.js" />
        <Script src="assets/js/jquery.scrollex.min.js" />
        <Script src="assets/js/jquery.scrolly.min.js" />
        <Script src="assets/js/browser.min.js" />
        <Script src="assets/js/breakpoints.min.js" />
        <Script src="assets/js/util.js" />
        <Script src="assets/js/main.js" />
      </body>
    </html>
  );
}
