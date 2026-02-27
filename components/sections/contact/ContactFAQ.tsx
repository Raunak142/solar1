"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is the site survey and solar consultation really free?",
    answer:
      "Yes. Our team provides a completely free site visit and consultation to understand your roof space, electricity usage, and recommend the best solar solution.",
  },
  {
    question: "How much can I save on electricity bills with solar?",
    answer:
      "Most homes reduce their electricity bills by 70–90%, depending on system size and energy consumption. We provide a personalized savings estimate during consultation.",
  },
  {
    question: "Do you help with government subsidy and documentation?",
    answer:
      "Absolutely. Kartik Solar handles the entire subsidy process — from application and approvals to net-metering — making the experience hassle-free for you.",
  },
  {
    question: "How long does solar installation take?",
    answer:
      "Most residential systems are installed within 2–5 days after approvals. Our local Dehradun team manages everything end-to-end.",
  },
  {
    question: "Will solar work during cloudy weather or power cuts?",
    answer:
      "Yes. Solar panels still generate power in cloudy conditions. With optional battery backup, your home can also stay powered during outages.",
  },
  {
    question: "What happens after installation? Do you provide support?",
    answer:
      "Yes. We provide ongoing monitoring, maintenance support, and warranty assistance to ensure your system performs efficiently for years.",
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
