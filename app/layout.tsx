import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebsiteSchema,
} from "@/lib/structured-data";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — #1 Solar Partner in Uttarakhand`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Best solar energy solutions for residential, commercial, and industrial clients in Dehradun, Haridwar, Rishikesh & Uttarakhand. Save up to 90% on electricity bills.",
  keywords: [
    "solar energy Dehradun",
    "solar panels Uttarakhand",
    "rooftop solar installation",
    "Kartik Solar Enterprises",
    "solar subsidy India",
    "solar for home",
    "solar panel installation near me",
    "best solar company Dehradun",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — #1 Solar Partner in Uttarakhand`,
    description:
      "Best solar energy solutions for residential, commercial, and industrial clients in Dehradun, Haridwar, Rishikesh & Uttarakhand.",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-UK",
    "geo.placename": "Dehradun",
    "geo.position": "30.3165;78.0322",
    ICBM: "30.3165, 78.0322",
    "content-language": "en-IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {/* Global Structured Data — appears on every page */}
        <JsonLd
          data={[
            getOrganizationSchema(),
            getLocalBusinessSchema(),
            getWebsiteSchema(),
          ]}
        />
        {children}
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
