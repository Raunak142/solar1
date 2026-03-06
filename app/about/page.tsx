import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import AboutMain from "@/components/sections/about/AboutMain";
import FooterServer from "@/components/sections/FooterServer";
import JsonLd from "@/components/JsonLd";
import { getAboutMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { getAboutPage } from "@/lib/data";

// ISR Revalidation:
export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return getAboutMetadata();
}

export default async function AboutPage() {
  const aboutData = await getAboutPage();

  return (
    <main className="pt-20 page-bg min-h-screen">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <Header />
      <AboutMain data={aboutData} />
      <FooterServer />
    </main>
  );
}
