"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Forest Panel.png"
          alt="Kartik Solar Installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-300 font-bold text-sm tracking-widest uppercase mb-6">
            Our Mission
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Empowering India&apos;s{" "}
            <span className="text-green-400">Sustainable Future</span> — One
            Home at a Time
          </h1>

          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-light">
              Kartik Solar Enterprises is pioneering the way Indian families
              generate and use electricity. Our mission is to provide every
              household, particularly the Indian climate and energy needs, the
              access to clean, dependable, and cheap solar energy. From
              Dehradun, we want to provide solar energy to every home.
            </p>
          </div>

          <Link
            href="/#services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
          >
            See How We Power Homes
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
