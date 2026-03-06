import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMap from "@/components/sections/contact/ContactMap";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";
import FooterServer from "@/components/sections/FooterServer";
import JsonLd from "@/components/JsonLd";
import { getContactMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { getContactPage } from "@/lib/data";

// ISR Revalidation
export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return getContactMetadata();
}

export default async function ContactPage() {
  const contactData = await getContactPage();

  return (
    <main className="min-h-screen bg-[#F3F8F5] pt-24 font-sans selection:bg-green-500/30">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
      <Header />
      <ContactHero data={contactData?.heroSection} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 lg:-mt-24 relative z-10 mb-20 lg:mb-32">

        <div className="flex flex-col gap-8 lg:gap-12">
          <ContactForm data={contactData?.formSection} />
          <ContactMap />
        </div>

      </div>

      <ContactFAQ data={contactData?.faqSection} />
      <FooterServer />
    </main>
  );
}
