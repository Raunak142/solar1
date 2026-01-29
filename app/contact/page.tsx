import Header from "@/components/sections/Header";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMap from "@/components/sections/contact/ContactMap";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <main className="pt-20 bg-[#EDF7ED] min-h-screen">
      <Header />
      <ContactHero />
      <div className="relative z-10 -mt-20">
        <ContactForm />
      </div>
      <ContactMap />
      <ContactFAQ />
      <Footer />
    </main>
  );
}
