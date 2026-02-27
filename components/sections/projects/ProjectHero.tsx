"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProjectHero = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/RoofPanel.png" // Using one of the existing images
          alt="Solar Projects Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Powering Real Homes with Real Savings
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
        >
          At Kartik Solar Enterprises, every installation represents a family or
          business taking control of rising electricity costs. From residential
          rooftops to commercial projects across Uttarakhand, we deliver
          reliable solar solutions designed for Indian climate conditions —
          helping customers save more and live with energy confidence.
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectHero;
