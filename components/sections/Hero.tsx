"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);

  const logos = [
    { name: "Logoipsum", icon: "◐" },
    { name: "logo-ipsum", icon: "⊕" },
    { name: "LOGO", icon: "▣" },
    { name: "LOGO IPSUM", icon: "▤" },
    { name: "Logoipsum", icon: "◐" },
    { name: "logo-ipsum", icon: "⊕" },
    { name: "LOGO", icon: "▣" },
    { name: "LOGO IPSUM", icon: "▤" },
  ];

  return (
    <section className="bg-[#EDF7ED] min-h-[90vh]">
      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm tracking-wide">
              <span className="text-lg">☷</span>
              <span>WELCOME TO SOLAX ENERGY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tighter">
              Best Solar Energy Solutions
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Solar panels harness sunlight to generate clean electricity,
              reducing carbon emissions and combating climate change.
            </p>

            {/* CTA and Reviews */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {/* CTA Button with Fixed Slide Effect */}
              <button className="group px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-colors overflow-hidden">
                <span className="relative block h-6 overflow-hidden">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    Our Services
                  </span>
                  <span className="absolute top-0 left-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                    Our Services
                  </span>
                </span>
              </button>

              {/* Reviews */}
              <div className="flex items-center gap-4">
                {/* Avatar Stack */}
                <div className="flex -space-x-3">
                  {["👩", "👨", "👩‍🦰", "🧑"].map((avatar, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full bg-linear-to-br from-amber-200 to-orange-300 border-2 border-white flex items-center justify-center text-lg"
                    >
                      {avatar}
                    </div>
                  ))}
                  
                </div>
                {/* Rating */}
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600 font-medium">
                    19k+ reviews
                  </span>
                </div>
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
            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/hero-house.png"
                alt="Modern solar energy home"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Logo Marquee Section */}
      <div className="py-12 bg-[#EDF7ED] overflow-hidden relative px-50">
        {/* Gradient Masks for Edge Fade/Blur Effect */}
        <div className="absolute top-0 bottom-0 left-50 w-32 sm:w-48 bg-linear-to-r from-[#EDF7ED] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-50 w-32 sm:w-48 bg-linear-to-l from-[#EDF7ED] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-20 items-center shrink-0"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate logos 4x for seamless loop */}
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 shrink-0 text-slate-500"
              >
                <span className="text-4xl opacity-60">{logo.icon}</span>
                <span className="font-semibold whitespace-nowrap text-base tracking-wide">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
