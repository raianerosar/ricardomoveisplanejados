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

export const metadata: Metadata = {
  title: "Ricardo Móveis - Móveis Planejados de Qualidade",
  description: "Especialistas em móveis planejados para cozinha, quarto e banheiro. Transforme sua casa com soluções personalizadas e de alta qualidade. Solicite seu orçamento!",
  keywords: "móveis planejados, cozinha planejada, guarda-roupa planejado, móveis sob medida, closet, móveis corporativos",
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
