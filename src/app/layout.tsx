import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.neotowers.in'),
  title: 'Neo Towers — Luxury Residences, Neopolis Kokapet Hyderabad',
  description: 'Neo Towers — An Address Above All. 4.36 Acres, 2 Iconic Towers, 57 Storeys, 711 Ultra-Luxury 3 & 4 BHK Residences overlooking Osman Sagar & 1,00,000+ Acres of 111 GO Greens in Neopolis Kokapet.',
  keywords: 'Neo Towers, Neopolis Kokapet, Hyderabad luxury apartments, 3 BHK, 4 BHK, luxury penthouses, Osman Sagar lake view, Yula Globus Developers, TG RERA P02400010006',
  authors: [{ name: 'Yula Globus Developers LLP' }],
  icons: {
    icon: '/neo-assets/logo.svg',
    apple: '/neo-assets/logo.svg',
  },
  openGraph: {
    title: 'Neo Towers — An Address Above All | Neopolis Kokapet Hyderabad',
    description: 'Where life rises above the ordinary. 57 Storeys of architectural perfection with 104,000 sq. ft. of curated amenities, Club Neo, Sky Offices & Skydeck.',
    url: 'https://www.neotowers.in/',
    siteName: 'Neo Towers',
    images: [
      {
        url: '/neo-assets/lifeatneo/banner/desktop.jpg',
        width: 1920,
        height: 1080,
        alt: 'Neo Towers Hyderabad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/jsh2pwp.css" />
        <link rel="icon" href="/neo-assets/logo.svg" type="image/svg+xml" />
      </head>
      <body className="bg-neo-charcoal text-neo-ivory font-sans antialiased selection:bg-neo-copper selection:text-neo-charcoal">
        {children}
      </body>
    </html>
  )
}
