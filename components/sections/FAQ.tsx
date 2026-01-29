"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: "Is solar really worth it for Indian homes?",
      answer:
        "Yes. With rising electricity prices, solar helps you save up to 70–90% on your monthly bills. It’s a one-time investment that gives you free power for 25+ years.",
    },
    {
      question: "Will solar panels work during cloudy or rainy days?",
      answer:
        "Yes. Panels still generate electricity during cloudy days, though at a slightly reduced capacity. Uttarakhand’s climate is suitable for solar production.",
    },
    {
      question: "What happens at night?",
      answer:
        "At night, your home uses grid power. If you choose a battery system, you can use stored solar power even at night.",
    },
    {
      question: ". Can I run AC, fridge, TV, and washing machine on solar?",
      answer:
        "Yes. We design systems based on your appliance usage so that all essential devices run smoothly.",
    },
    {
      question: "How much rooftop space do I need?",
      answer:
        "Approximate requirement:1kW = 80–100 sq. ft.   ,  3kW = 250–300 sq. ft.   , 5kW = 400–500 sq. ft.",
    },
    {
      question: "What is the lifespan of solar panels?",
      answer:
        "High-quality solar panels last 25+ years. Inverters usually last 8–12 years.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Typically 2–4 days, depending on system size and roof condition.",
    },
    {
      question: "Is maintenance expensive?",
      answer:
        "No. Solar systems require very little maintenance—mainly panel cleaning once or twice a month.",
    },
    {
      question: "What if my roof is small or shaded?",
      answer:
        "We do a site inspection first. If solar is not suitable, we’ll honestly tell you. No false promises.",
    },
    {
      question: "Can I get government subsidy?",
      answer:
        "Yes, for eligible residential systems. SolarX helps you with the full subsidy documentation process.",
    },
    {
      question: "How much does a solar system cost in India?",
      answer:
        "Cost depends on system size and type. We offer customized plans that suit middle-class budgets with EMI options.",
    },
    {
      question: "Will my electricity bill become zero?",
      answer:
        "In many cases, yes—or very close to zero. Small fixed charges from the electricity board may still apply.",
    },
    {
      question: "What happens if there is a power cut?",
      answer:
        "On-grid systems stop during power cuts for safety. If you want power during outages, we recommend a battery backup system.",
    },
    {
      question: "Is solar safe for my home?",
      answer:
        "Absolutely. Our systems include safety breakers, earthing, and surge protection.",
    },
    {
      question: "Will solar damage my roof?",
      answer:
        "No. We use strong, non-invasive mounting structures that do not damage your roof.",
    },
    {
      question: "What if I move to another house?",
      answer:
        "You can uninstall and reinstall the system at your new location.",
    },
    {
      question: "Does solar work in winter?",
      answer:
        "Yes. In fact, panels often perform better in cooler temperatures.",
    },
    {
      question: "What if something goes wrong?",
      answer:
        "SolarX provides long-term support, warranty handling, and quick service.",
    },
    {
      question: "Can I monitor my solar power production?",
      answer:
        "Yes. You can track everything on your mobile—daily output, savings, and system health.",
    },
    {
      question: "Why should I choose SolarX?",
      answer:
        "Because we offer: Honest pricing, Customized systems, Local support, 10+ years experience, After-sales service, Middle-class focused solutions.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6);

  return (
    <section className="py-24 lg:py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-sm" />
            <span className="text-slate-600 font-medium text-sm">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {visibleFaqs.map((faq, index) => (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border-l-4 border-green-500 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <svg
                      className="w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              if (showAll && headerRef.current) {
                headerRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
              setShowAll(!showAll);
            }}
            className="inline-flex items-center gap-2 font-semibold text-green-600 hover:text-green-700 transition-colors"
          >
            {showAll ? "Show Less Questions" : "View More Questions"}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center text-center gap-6"
        >
          <p className="text-slate-600 max-w-2xl">
            Still have questions? We're here to help! Whether you're curious
            about installation, costs, or how solar works, our team is ready to
            guide.
          </p>
          <Link
            href="/contact"
            className="group px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors overflow-hidden"
          >
            <span className="relative block h-5 overflow-hidden">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Explore More
              </span>
              <span className="absolute top-0 left-0 w-full block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 text-center">
                Explore More
              </span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
