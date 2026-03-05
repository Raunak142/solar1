import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMap from "@/components/sections/contact/ContactMap";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { getContactMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export function generateMetadata(): Metadata {
  return getContactMetadata();
}

export default function ContactPage() {
  return (
    <main className="pt-20 page-bg min-h-screen">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Header />
      <ContactHero />
      <div className="relative z-10 -mt-8">
        <ContactForm />
      </div>
      <ContactMap />
      <ContactFAQ />
      <Footer />
    </main>
  );
}
