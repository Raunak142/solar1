"use client";

import { motion } from "framer-motion";
import { Clock, Users, Zap, ShieldCheck } from "lucide-react";

// Helper component for counting animation
const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center group p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100">
        <stat.icon className="w-8 h-8" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
        {stat.value}
      </div>
      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
        {stat.label}
      </div>
    </motion.div>
  );
};

const AboutTrust = () => {
  const stats = [
    { label: "Years Experience", value: "10+", icon: Clock },
    { label: "Happy Clients", value: "500+", icon: Users },
    { label: "Power Generated", value: "2 MW+", icon: Zap }, // Changed Leaf to Zap for consistency
    { label: "Local Support", value: "24/7", icon: ShieldCheck },
  ];

  return (
    <section className="py-12 border-y border-slate-100 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
