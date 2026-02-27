"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Home, Zap, Phone } from "lucide-react";

// Animated counter hook
const useCountUp = (
  end: number,
  duration: number = 2000,
  startCounting: boolean = false,
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, startCounting]);

  return count;
};

const stats = [
  {
    label: "Years Combined Experience",
    value: 10,
    suffix: "+",
    icon: Star,
    color: "from-amber-400 to-amber-600",
    glow: "shadow-amber-500/20",
    bg: "bg-amber-50",
  },
  {
    label: "Happy Families Powered by Solar",
    value: 500,
    suffix: "+",
    icon: Home,
    color: "from-green-400 to-green-600",
    glow: "shadow-green-500/20",
    bg: "bg-green-50",
  },
  {
    label: "Clean Energy Installed",
    value: 2,
    suffix: " MW+",
    icon: Zap,
    color: "from-blue-400 to-blue-600",
    glow: "shadow-blue-500/20",
    bg: "bg-blue-50",
  },
  {
    label: "Local Support from Dehradun Team",
    value: 24,
    suffix: "/7",
    icon: Phone,
    color: "from-purple-400 to-purple-600",
    glow: "shadow-purple-500/20",
    bg: "bg-purple-50",
  },
];

const StatCard = ({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(stat.value, 2000, isInView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:${stat.glow} hover:-translate-y-1 hover:border-slate-200 overflow-hidden`}
    >
      {/* Subtle bg tint on hover */}
      <div
        className={`absolute inset-0 ${stat.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
      />

      <div className="relative">
        <div
          className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
          {count}
          <span className="text-green-600">{stat.suffix}</span>
        </div>

        <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider leading-snug">
          {stat.label}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r ${stat.color} transition-all duration-500 ease-out`}
      />
    </motion.div>
  );
};

const AboutTrust = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide mb-4 uppercase">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Impact <span className="text-green-600">So Far</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
