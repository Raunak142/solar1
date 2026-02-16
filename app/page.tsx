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

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

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
    <main className="pt-20 bg-[#EDF7ED]">
      <Header />
      <Hero data={heroData} />
      <About />
      <Services benefits={benefits} services={services} />
      <Features />
      <Benefits benefits={benefits} />
      <Projects projects={projects} />
      <Testimonials testimonials={testimonials} />
      <FAQ faqs={faqs} />
      <Blog posts={posts} limit={3} />
      <CTA />
      <Footer />
    </main>
  );
}
