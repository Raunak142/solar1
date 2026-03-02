"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { HeroData } from "@/lib/data";

const Hero = ({ data }: { data: HeroData }) => {
  return (
    <section className="bg-[#EDF7ED] min-h-[90vh]">
      {/* Main Hero Content */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-green-700 font-bold text-sm tracking-wide uppercase bg-green-100 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
              <span>{data.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.1]">
              {data.heading}
            </h1>

            {/* Description */}
            <div className="text-lg text-slate-600 max-w-lg leading-relaxed font-medium space-y-3">
              {data.subheading
                .split("\n")
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>

            {/* CTA and Reviews */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href={data.ctaLink}
                  className="group px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-green-500/30 transition-all transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative block h-6 overflow-hidden">
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                      {data.ctaText}
                    </span>
                    <span className="absolute top-0 left-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                      {data.ctaText}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white/50">
              <Image
                src={data.image}
                alt="Modern solar energy home in Uttarakhand"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">
                      Estimated Annual Savings
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {data.annualSavings}
                    </p>
                    <p className="text-xs text-slate-500">
                      {data.annualSavingsDescription}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar (Trusted Technology Partners) */}
      <div className="py-20 lg:py-28 relative overflow-hidden bg-white">
        {/* Faint Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-100/40 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block py-1.5 px-4 rounded-full bg-slate-50 text-slate-500 font-medium text-sm tracking-wide border border-slate-200 mb-4"
            >
              Industry Certified Brands
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-6"
            >
              Trusted Technology Partners
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-slate-500 leading-relaxed font-medium"
            >
              We install high-quality solar components from India’s most
              reliable manufacturers to ensure long-lasting performance, maximum
              efficiency, and complete safety for your home or business.
            </motion.p>
          </div>

          {/* Logos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6"
          >
            {[
              {
                name: "Luminous",
                color: "text-[#ed1b24] group-hover:text-red-700",
              },
              {
                name: "Tata Power",
                color: "text-[#0b5c9b] group-hover:text-blue-800",
              },
              {
                name: "Havells",
                color: "text-[#ed1c24] group-hover:text-red-700",
              },
              {
                name: "Microtek",
                color: "text-[#ff0000] group-hover:text-red-800",
              },
              {
                name: "Adani Solar",
                color: "text-[#183661] group-hover:text-blue-900",
              },
              {
                name: "Growatt",
                color: "text-[#8ac340] group-hover:text-green-700",
              },
              {
                name: "Waaree",
                color: "text-[#f37021] group-hover:text-orange-600",
              },
            ].map((brand, i) => (
              <motion.div
                key={brand.name}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative h-28 bg-white border border-slate-100 rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex items-center justify-center transition-all duration-300 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/10 cursor-default"
              >
                {/* Green Glow Effect inside card on hover (subtle) */}
                <div className="absolute inset-0 bg-linear-to-b from-green-50/0 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                <span
                  className={`relative z-10 text-xl font-black md:text-2xl transition-all duration-300 ${brand.color}`}
                >
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
