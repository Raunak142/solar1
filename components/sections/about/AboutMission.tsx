"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const AboutMission = () => {
  return (
    <section className="bg-slate-900 py-24 lg:py-32 text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-green-300 font-semibold text-xs tracking-wide mb-4 uppercase">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Purpose That Powers{" "}
            <span className="text-green-400">Every Installation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:p-12 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1"
          >
            {/* Card glow on hover */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-500/30 transition-transform duration-300 group-hover:scale-110">
                <Target className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-5 tracking-tight">
                Our Mission
              </h3>

              <p className="text-slate-300 text-lg leading-relaxed">
                To help Indian families reduce electricity expenses and achieve
                energy independence through clean, affordable, and dependable
                solar solutions.
              </p>

              {/* Decorative bottom line */}
              <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-green-400 to-transparent rounded-full group-hover:w-24 transition-all duration-500" />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:p-12 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
          >
            {/* Card glow on hover */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
                <Eye className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-5 tracking-tight">
                Our Vision
              </h3>

              <p className="text-slate-300 text-lg leading-relaxed">
                To become a trusted solar partner across Uttarakhand and India
                by delivering quality installations, honest service, and
                long-lasting customer relationships.
              </p>

              {/* Decorative bottom line */}
              <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-blue-400 to-transparent rounded-full group-hover:w-24 transition-all duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
