"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const AboutFounder = () => {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden relative">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-32" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6 text-green-600">
              <Quote className="w-10 h-10 -scale-x-100 opacity-60" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              It's not just about power.
              <br /> It's about{" "}
              <span className="text-green-600">empowerment.</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                "When I started SolarX, my goal wasn't just to install panels.
                It was to give power back to the people. In a state like
                Uttarakhand, where nature is our greatest asset, it felt wrong
                to rely on polluting energy sources."
              </p>
              <p>
                "I believe that every home that switches to solar is a victory
                for our environment and our future economy. We are building a
                legacy of sustainability, one rooftop at a time."
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Raunak</h3>
                  <p className="text-green-600 font-medium">
                    Founder & CEO, SolarX
                  </p>
                </div>
                <div className="h-10 w-[1px] bg-slate-200 mx-2" />
                <p className="text-slate-400 text-sm font-medium">
                  10+ Years in Renewables
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-square md:aspect-4/5 rounded-3xl overflow-hidden shadow-2xl skew-x-3 hover:skew-x-0 transition-transform duration-700 ease-out group">
              <Image
                src="/images/House.png"
                alt="Raunak - Founder of SolarX"
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
