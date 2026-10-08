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
  title: "Aryaa Builders — Premium Real Estate & Construction | Jabalpur",
  description:
    "Aryaa Builders is a premium real estate and construction company based in Jabalpur, Madhya Pradesh. Residential construction, commercial development, custom homes, and real estate development — crafted with precision.",
  keywords:
    "Aryaa Builders, Real Estate Builders Jabalpur, Construction Company Jabalpur, Builders in Jabalpur, Residential Construction Jabalpur, Real Estate Development Jabalpur, Custom Homes Jabalpur",
  authors: [{ name: "Aryaa Builders" }],
  openGraph: {
    title: "Aryaa Builders — Premium Real Estate & Construction | Jabalpur",
    description:
      "Where vision becomes home. Premium real estate and construction in Jabalpur, Madhya Pradesh.",
    url: "https://aryaabuiders.com",
    siteName: "Aryaa Builders",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryaa Builders — Premium Real Estate & Construction",
    description:
      "Where vision becomes home. Premium real estate and construction in Jabalpur, Madhya Pradesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aryaabuiders.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-[#F4F1EA] text-[#0B0B0A] selection:bg-[#B8A27C] selection:text-[#0B0B0A]">
        {children}
      </body>
    </html>
  );
}

