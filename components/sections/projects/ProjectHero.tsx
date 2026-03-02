"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProjectHero = () => {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/RoofPanel.png" // Using one of the existing images
          alt="Solar Projects Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.2]"
        >
          Powering Real Homes with{" "}
          <span className="text-green-400">Real Savings</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
        >
          At Kartik Solar Enterprises, every installation represents a family or
          business taking control of rising electricity costs. From residential
          rooftops to commercial projects across Uttarakhand, we deliver
          reliable solar solutions designed for Indian climate conditions.
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectHero;
