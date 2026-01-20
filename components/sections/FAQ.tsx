"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideButton from "../ui/SlideButton";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of solar services do you offer?",
      answer:
        "We specialize in residential, commercial, and industrial solar installations, including rooftop systems, ground-mounted arrays, and solar carports.",
    },
    {
      question: "Where is your company located?",
      answer:
        "Our headquarters is based in California, US. We also offer installation services across multiple states depending on your needs.",
    },
    {
      question: "Is my investment in solar safe?",
      answer:
        "All you need is a suitable roof or ground space with good sun exposure. Solar panels are designed to last 25-30 years with minimal maintenance.",
    },
    {
      question: "How long does a typical installation take?",
      answer:
        "The duration depends on the size of your system. Residential installations typically take 1-3 days, while commercial projects may take longer.",
    },
    {
      question: "When will I see savings on my energy bills?",
      answer:
        "Savings begin immediately after installation. Most customers see a 50-70% reduction in their electricity bills from the first month.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
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
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
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
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          {/* Button with Fixed Slide Effect */}
          {/* <SlideButton
            className="rounded-full"
            icon={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Start Project
          </SlideButton> */}
           <div className="hidden md:block ">
            <button className="group relative px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors overflow-hidden">
              <span className="relative block h-5 overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Start 
                </span>
                <span className="absolute top-0 left-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                  Start 
                </span>
              </span>
            </button>
          </div>
          <p className="text-slate-600">
            Still have questions? We're here to help! Whether you're curious
            about installation, costs, or how solar works, our team is ready to
            guide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
