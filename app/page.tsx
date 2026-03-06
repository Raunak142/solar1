import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import FooterServer from "@/components/sections/FooterServer";
import JsonLd from "@/components/JsonLd";
import { getHomeMetadata } from "@/lib/seo";
import {
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/structured-data";

import {
  getHeroData,
  getFaqs,
  getTestimonials,
  getProjects,
  getBenefits,
  getServices,
  getBlogPosts,
  getHomePage,
} from "@/lib/data";

// ISR Revalidation:
// - Development: revalidate = 0 → always fetch fresh CMS data on every request
// - Production: revalidate = 86400 → revalidate once per day (24 hours)
// - On redeploy: Next.js rebuilds all pages with fresh CMS data automatically
export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return getHomeMetadata();
}

export default async function Home() {
  // Fetch all CMS data server-side (at build time / ISR)
  const [
    heroData,
    faqs,
    testimonials,
    projects,
    benefits,
    services,
    posts,
    homeData,
  ] = await Promise.all([
    getHeroData(),
    getFaqs(),
    getTestimonials(),
    getProjects(),
    getBenefits(),
    getServices(),
    getBlogPosts(),
    getHomePage(),
  ]);

  return (
    <main className="pt-20 page-bg">
      {/* Page-specific structured data */}
      <JsonLd
        data={[
          getServiceSchema(),
          getFaqSchema(faqs),
          getBreadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <Header />
      <Hero data={heroData} />
      <About data={homeData?.aboutSection} />
      <Services benefits={benefits} services={services} />
      <Features />
      <Benefits benefits={benefits} />
      <Projects projects={projects.slice(0, 6)} />
      <Testimonials testimonials={testimonials} />
      <FAQ faqs={faqs} />
      <Blog posts={posts} limit={3} />
      <CTA data={homeData?.ctaSection} />
      <FooterServer />
    </main>
  );
}
