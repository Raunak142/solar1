"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

const AboutMission = () => {
  return (
    <section className="bg-slate-900 py-20 lg:py-28 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors"
          >
            <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-green-500/30">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              To empower homes and businesses with clean energy while reducing
              dependency on traditional power sources—creating a greener,
              smarter, and more sustainable future.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors"
          >
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-500/30">
              <Lightbulb className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              To become one of India’s most trusted solar brands by delivering
              innovative solutions, unmatched service quality, and real
              environmental impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
