import Layout from "@/components/Layout.tsx/Layout"
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portafolio',
  keywords: ['Dylan', 'Riquelme', 'Dylan Riquelme', 'Riquelme Dylan', 'Portafolio Dylan Riquelme', 'Portafolio Riquelme Dylan', 'CV Dylan Riquelme', 'Portafolio'],
  description: 'Portafolio de Dylan Riquelme',
  authors: { name: 'Dylan Riquelme', url: 'https://portafolio-dylan-riquelme.vercel.app/' },
  openGraph: {
    title: 'Portafolio',
    description: 'The React Framework for the Web',
    url: 'https://portafolio-dylan-riquelme.vercel.app/',
    siteName: 'Portafolio Dylan Riquelme',
    images: [
      {
        url: 'image.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
