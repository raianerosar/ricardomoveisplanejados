import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { FacebookPixel } from "@/components/analytics/FacebookPixel";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { ANALYTICS_CONFIG } from "@/lib/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ricardosmoveisplanejados.com.br/#organization",
  "name": "Ricardo Móveis Planejados",
  "description": "Móveis planejados sob medida em Florianópolis e Grande Floripa - Cozinhas, quartos, banheiros e closets com projeto 3D",
  "url": "https://ricardosmoveisplanejados.com.br",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Artur Osório de Araújo, 121 - Pte. do Imaruim",
    "addressLocality": "Palhoça",
    "addressRegion": "SC",
    "postalCode": "88131-500",
    "addressCountry": "BR"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-27.6326735",
    "longitude": "-48.6509845"
  },

  "areaServed": [
    { "@type": "City", "name": "Florianópolis" },
    { "@type": "City", "name": "Palhoça" },
    { "@type": "City", "name": "São José" },
    { "@type": "City", "name": "Biguaçu" }
  ],

  "telephone": "+5548984242423",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-13:00",

  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Móveis Planejados",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cozinha Planejada",
          "description": "Projetos completos de cozinhas sob medida"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quarto Planejado",
          "description": "Guarda-roupas e closets sob medida"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Banheiro Planejado",
          "description": "Armários e nichos personalizados"
        }
      }
    ]
  }
};

export const metadata: Metadata = {
  title: "Ricardo Móveis - Móveis Planejados de Qualidade",
  description: "Especialistas em móveis planejados para cozinha, quarto e banheiro. Transforme sua casa com soluções personalizadas e de alta qualidade. Solicite seu orçamento!",
  keywords: [
    // Core business
    'móveis planejados', 'móveis sob medida', 'móveis personalizados', 'marcenaria planejada',

    // Produtos específicos
    'cozinha planejada', 'quarto planejado', 'banheiro planejado', 'sala planejada',
    'closet planejado', 'home office planejado', 'guarda-roupa planejado',

    // SEO Local - Grande Florianópolis
    'móveis planejados Florianópolis', 'móveis planejados Grande Florianópolis',
    'marcenaria Florianópolis', 'cozinha planejada Florianópolis',

    // Serviços e materiais
    'projeto 3D móveis', 'móveis MDF', 'móveis MDP'
  ].join(', '),
  authors: [{ name: "Ricardo Móveis" }],
  openGraph: {
    title: "Ricardo Móveis - Móveis Planejados de Qualidade",
    description: "Especialistas em móveis planejados para cozinha, quarto e banheiro. Transforme sua casa com soluções personalizadas.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Móveis - Móveis Planejados de Qualidade",
    description: "Especialistas em móveis planejados para cozinha, quarto e banheiro.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager - deve ser o primeiro elemento no body */}
        {ANALYTICS_CONFIG.googleTagManagerId && (
          <GoogleTagManager gtmId={ANALYTICS_CONFIG.googleTagManagerId} />
        )}
        {children}
        {ANALYTICS_CONFIG.googleAnalyticsId && (
          <GoogleAnalytics gaId={ANALYTICS_CONFIG.googleAnalyticsId} />
        )}
        {ANALYTICS_CONFIG.facebookPixelId && (
          <FacebookPixel pixelId={ANALYTICS_CONFIG.facebookPixelId} />
        )}
      </body>
    </html>
  );
}
