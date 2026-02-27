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
import Footer from "@/components/sections/Footer";

import {
  getHeroData,
  getFaqs,
  getTestimonials,
  getProjects,
  getBenefits,
  getServices,
  getBlogPosts,
} from "@/lib/data";

// ISR: Revalidate every 1 hour
export const revalidate = 3600;

export default async function Home() {
  // Fetch all CMS data server-side (at build time / ISR)
  const [heroData, faqs, testimonials, projects, benefits, services, posts] =
    await Promise.all([
      getHeroData(),
      getFaqs(),
      getTestimonials(),
      getProjects(),
      getBenefits(),
      getServices(),
      getBlogPosts(),
    ]);

  return (
    <main className="pt-20 page-bg">
      <Header />
      <Hero data={heroData} />
      <About />
      <Services benefits={benefits} services={services} />
      <Features />
      <Benefits benefits={benefits} />
      <Projects projects={projects.slice(0, 6)} />
      <Testimonials testimonials={testimonials} />
      <FAQ faqs={faqs} />
      <Blog posts={posts} limit={3} />
      <CTA />
      <Footer />
    </main>
  );
}
