import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import AboutMain from "@/components/sections/about/AboutMain";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { getAboutMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export function generateMetadata(): Metadata {
  return getAboutMetadata();
}

export default function AboutPage() {
  return (
    <main className="pt-20 page-bg min-h-screen">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <Header />
      <AboutMain />
      <Footer />
    </main>
  );
}
