import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: {
    template: '%s | João Vitor Minosso',
    default: 'João Vitor Minosso',
    absolute: 'João Vitor Minosso - Desenvolvedor Front-end',
  },
  description:
    'Portfólio onde eu apresento minhas habilidades no desenvolvimento web, conhecimentos, experiência e os projetos em que já trabalhei.',
  category: 'Portfolio',
  //metadataBase: new URL(process.env.PORTFOLIO_URL!),
  openGraph: {
    type: 'website',
    title: 'João Vitor Minosso - Desenvolvedor Front-end',
    emails: 'joaovitorminosso@gmail.com',
    description:
      'O mostruário da minha stack e experiências.',
    countryName: 'Brazil',
    siteName: 'João Vitor Minosso - Desenvolvedor Front-end',
    //url: process.env.PORTFOLIO_URL,
    phoneNumbers: '+5548999484088',
    locale: 'pt-BR',
    images: '/me.png',
  },
  authors: [{ name: 'João Vitor Minosso' }],
  keywords: [
    'Portfolio',
    'Desenvolvedor Full Stack',
    'Desenvolvedor Fullstack',
    'Developer',
    'Desenvolvedor',
    'Programador',
    'Front-end',
    'Back-end',
    'Full Stack',
    'React',
  ],
  applicationName: 'João Vitor Minosso - Desenvolvedor Front-end',
  creator: 'João Vitor Minosso',
  publisher: 'Vercel',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  appleWebApp: {
    title: 'João Vitor Minosso - Desenvolvedor Front-end',
    //startupImage: process.env.PORTFOLIO_URL,
  },
  generator: 'Next.js',
  twitter: {
    title: 'João Vitor Minosso - Desenvolvedor Front-end',
    creator: 'João Vitor Minosso',
    creatorId: '@kallarari',
    //site: process.env.PORTFOLIO_URL,
    images: '/me.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  );
}
