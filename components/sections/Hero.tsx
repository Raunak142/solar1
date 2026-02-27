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

      {/* Trust Bar */}
      {/* Trusted Technology Partners */}
      <div className="py-20 lg:py-24 bg-[#EDF7ED] border-t border-slate-100 relative overflow-hidden">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-green-50/40 via-white to-white -z-10" />

        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight leading-tight">
                Trusted Technology Partners
                <span className="block w-24 h-1.5 bg-green-500 mt-4 rounded-full" />
              </h3>
            </div>
            <div>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-[520px]">
                We install high-quality solar components from India’s most
                reliable and industry-certified brands to ensure long-lasting
                performance and safety.
              </p>
            </div>
          </div>

          {/* Logos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6"
          >
            {/* Luminous */}
            <div className="group bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-green-100 hover:shadow-lg hover:shadow-green-100/50 rounded-xl p-6 flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-default h-24">
              <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                Luminous
              </span>
            </div>
            {/* Tata Power Solar */}
            <div className="group bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-green-100 hover:shadow-lg hover:shadow-green-100/50 rounded-xl p-6 flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-default h-24">
              <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                Tata Power
              </span>
            </div>
            {/* Havells */}
            <div className="group bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-green-100 hover:shadow-lg hover:shadow-green-100/50 rounded-xl p-6 flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-default h-24">
              <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                Havells
              </span>
            </div>
            {/* Microtek */}
            <div className="group bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-green-100 hover:shadow-lg hover:shadow-green-100/50 rounded-xl p-6 flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-default h-24">
              <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                Microtek
              </span>
            </div>
            {/* Adani Solar */}
            <div className="group bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-green-100 hover:shadow-lg hover:shadow-green-100/50 rounded-xl p-6 flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-default h-24">
              <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                Adani Solar
              </span>
            </div>
            {/* Growatt */}
            <div className="group bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-green-100 hover:shadow-lg hover:shadow-green-100/50 rounded-xl p-6 flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-default h-24">
              <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                Growatt
              </span>
            </div>
            {/* Waaree */}
            <div className="group bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-green-100 hover:shadow-lg hover:shadow-green-100/50 rounded-xl p-6 flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-default h-24">
              <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                Waaree
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
