"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is the site visit and consultation really free?",
    answer:
      "Yes! We offer a 100% free site survey and energy consultation in Dehradun. Our experts will visit your property, analyze your roof, and suggest the best solar solution for you—no strings attached.",
  },
  {
    question: "How much can I save with solar?",
    answer:
      "Most of our residential customers save between 80-90% on their electricity bills. A typical 5kW system for a 3-4 bedroom home can save approx. ₹50,000 to ₹70,000 annually.",
  },
  {
    question: "What is the warranty period?",
    answer:
      "We provide a 25-year performance warranty on solar panels and a 5-10 year warranty on inverters. Our installation services also come with a workmanship guarantee.",
  },
  {
    question: "Do you help with the subsidy process?",
    answer:
      "Absolutely. We handle the entire government subsidy paperwork for you under the 'PM Surya Ghar: Muft Bijli Yojana', ensuring you get the maximum benefit without the hassle.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Once the design is finalized, the actual installation usually takes just 1-3 days for residential projects. Commercial projects may take longer depending on key size.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-slate-600">
            Quick answers to help you decide.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 hover:border-green-200 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-slate-800 text-lg">
                  {faq.question}
                </span>
                <span
                  className={`ml-4 p-2 rounded-full transition-colors duration-300 ${
                    openIndex === index
                      ? "bg-green-100 text-green-600"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-200/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
