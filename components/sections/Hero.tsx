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
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
              {data.subheading}
            </p>

            {/* CTA and Reviews */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
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

              {/* Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden"
                    >
                      <div
                        className={`w-full h-full bg-linear-to-br ${["from-blue-200 to-indigo-300", "from-green-200 to-teal-300", "from-amber-200 to-orange-300", "from-purple-200 to-pink-300"][i - 1]}`}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600 font-bold">
                    Trusted by {data.totalClients} locals
                  </span>
                </div>
              </div>
            </div>

            {/* Value Props */}
            <div className="flex gap-6 text-sm font-semibold text-slate-600 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" /> Free Site
                Survey
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" /> 25-Year
                Warranty
              </span>
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
                      Est. Annual Savings
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {data.annualSavings}
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
      <div className="py-8 bg-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-bold text-slate-400 flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-300 rounded-full" /> Luminous
          </span>
          <span className="text-xl font-bold text-slate-400 flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-300 rounded-full" /> Tata Power
          </span>
          <span className="text-xl font-bold text-slate-400 flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-300 rounded-full" /> Havells
          </span>
          <span className="text-xl font-bold text-slate-400 flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-300 rounded-full" /> Microtek
          </span>
          <span className="text-xl font-bold text-slate-400 flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-300 rounded-full" /> Adani Solar
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
