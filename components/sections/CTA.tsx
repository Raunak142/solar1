"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-slate-800 rounded-3xl px-8 sm:px-12 lg:px-16 py-12 lg:py-16 relative overflow-hidden"
        >
          {/* Background Decorative Element */}
          <div className="absolute right-8 bottom-4 opacity-20">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <path d="M60 10L60 110" stroke="white" strokeWidth="4" />
              <path d="M60 30L30 60" stroke="white" strokeWidth="4" />
              <path d="M60 30L90 60" stroke="white" strokeWidth="4" />
              <path d="M60 30L60 80" stroke="white" strokeWidth="4" />
              <circle cx="60" cy="90" r="15" stroke="white" strokeWidth="4" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                Reduce Your Carbon Footprint With Solarax.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 bg-transparent border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500 transition-colors"
                  required
                />
                {/* Slide Button */}
                <button
                  type="submit"
                  className="group px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-colors whitespace-nowrap overflow-hidden"
                >
                  <span className="relative block h-6 overflow-hidden">
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                      Send Now
                    </span>
                    <span className="absolute top-0 left-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                      Send Now
                    </span>
                  </span>
                </button>
              </form>
              <p className="text-slate-400 text-sm mt-4">
                Subscribe today and stay updated
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
