"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { FaqItem } from "@/lib/data";

const FAQ = ({ faqs }: { faqs: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

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
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
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
            Still have questions? We&apos;re here to help! Whether you&apos;re
            curious about installation, costs, or how solar works, our team is
            ready to guide.
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
