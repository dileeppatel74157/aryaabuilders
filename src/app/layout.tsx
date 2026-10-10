import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aryaabuilders.vercel.app"),
  title: "Aryaa Builders — Premium Real Estate & Construction | Jabalpur",
  description:
    "Aryaa Builders is a premier architectural construction and real estate development firm in Jabalpur, Madhya Pradesh. Residential construction, custom homes, commercial development, and bespoke architecture crafted with precision.",
  keywords: [
    "Aryaa Builders",
    "Construction Company Jabalpur",
    "Builders in Jabalpur",
    "Residential Construction Jabalpur",
    "Real Estate Development Jabalpur",
    "Custom Homes Jabalpur",
    "Architectural Construction Jabalpur",
  ],
  authors: [{ name: "Aryaa Builders" }],
  openGraph: {
    title: "Aryaa Builders — Premium Real Estate & Construction | Jabalpur",
    description:
      "Where vision becomes home. Premium real estate and architectural construction in Jabalpur, Madhya Pradesh.",
    url: "https://aryaabuilders.vercel.app",
    siteName: "Aryaa Builders",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/construction-frames/ezgif-frame-240.jpg",
        width: 1920,
        height: 1080,
        alt: "Aryaa Builders Neoclassical Estate Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryaa Builders — Premium Real Estate & Construction | Jabalpur",
    description:
      "Where vision becomes home. Premium real estate and architectural construction in Jabalpur, Madhya Pradesh.",
    images: ["/images/construction-frames/ezgif-frame-240.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aryaabuilders.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Aryaa Builders",
  "image": "https://aryaabuilders.vercel.app/images/construction-frames/ezgif-frame-240.jpg",
  "description":
    "Aryaa Builders is a premium real estate and construction company based in Jabalpur, Madhya Pradesh.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ward 73, Star City, 306, Katangi Rd, Phase 4, Karmeta",
    "addressLocality": "Jabalpur",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "482002",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.1815",
    "longitude": "79.9864",
  },
  "url": "https://aryaabuilders.vercel.app",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body
        suppressHydrationWarning
        className="antialiased font-sans bg-[#F4F1EA] text-[#0B0B0A] selection:bg-[#B8A27C] selection:text-[#0B0B0A]"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
