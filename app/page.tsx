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

export default function Home() {
  return (
    <main className="pt-20 bg-[#EDF7ED]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <Benefits />
      <Projects />
      <Testimonials />
      <FAQ />
      <Blog limit={3} />
      <CTA />
      <Footer />
    </main>
  );
}
