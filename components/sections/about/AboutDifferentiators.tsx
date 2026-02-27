"use client";

import { motion } from "framer-motion";
import {
  Home,
  Headphones,
  ShieldCheck,
  BadgeCheck,
  Wrench,
  MapPin,
} from "lucide-react";

const differentiators = [
  {
    icon: Home,
    title: "Personalized for Your Home",
    description:
      "Every house is different. We carefully study your electricity usage, rooftop space, and budget to design a system that truly works for your family.",
    accent: "green",
  },
  {
    icon: Headphones,
    title: "Complete End-to-End Support",
    description:
      "From consultation and subsidy guidance to installation and after-service — we handle everything so your solar journey stays simple and stress-free.",
    accent: "blue",
  },
  {
    icon: ShieldCheck,
    title: "High-Quality & Reliable Systems",
    description:
      "We use trusted panels, efficient inverters, and durable mounting systems designed to perform in Indian heat, dust, and monsoon weather.",
    accent: "amber",
  },
  {
    icon: BadgeCheck,
    title: "Transparent & Honest Pricing",
    description:
      "No hidden charges. No confusing technical terms. Just clear guidance and honest pricing you can trust.",
    accent: "purple",
  },
  {
    icon: Wrench,
    title: "Long-Term Service & Support",
    description:
      "Solar is a 25+ year investment. Our team stays connected even after installation to ensure smooth performance and peace of mind.",
    accent: "orange",
  },
  {
    icon: MapPin,
    title: "Local Experts You Can Trust",
    description:
      "Based in Dehradun, we understand local weather, rooftops, and energy needs — giving you faster service and reliable support nearby.",
    accent: "teal",
  },
];

const accentMap: Record<
  string,
  { bg: string; iconBg: string; border: string; glow: string }
> = {
  green: {
    bg: "bg-green-50",
    iconBg: "bg-green-500",
    border: "border-green-500",
    glow: "shadow-green-500/20",
  },
  blue: {
    bg: "bg-blue-50",
    iconBg: "bg-blue-500",
    border: "border-blue-500",
    glow: "shadow-blue-500/20",
  },
  amber: {
    bg: "bg-amber-50",
    iconBg: "bg-amber-500",
    border: "border-amber-500",
    glow: "shadow-amber-500/20",
  },
  purple: {
    bg: "bg-purple-50",
    iconBg: "bg-purple-500",
    border: "border-purple-500",
    glow: "shadow-purple-500/20",
  },
  orange: {
    bg: "bg-orange-50",
    iconBg: "bg-orange-500",
    border: "border-orange-500",
    glow: "shadow-orange-500/20",
  },
  teal: {
    bg: "bg-teal-50",
    iconBg: "bg-teal-500",
    border: "border-teal-500",
    glow: "shadow-teal-500/20",
  },
};

const AboutDifferentiators = () => {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 page-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide mb-4 uppercase">
            Why Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Why Choose <span className="text-green-600">Kartik Solar</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t only install solar panels. We assist families in
            making the switch to an energy solution that is created specifically
            for Indian homes and the climate.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, index) => {
            const colors = accentMap[item.accent];
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-500 ease-out hover:shadow-xl hover:${colors.glow} hover:-translate-y-2 hover:border-slate-200 overflow-hidden`}
              >
                {/* Subtle gradient on hover */}
                <div
                  className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6 flex items-start justify-between">
                  <div
                    className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Decorative number */}
                  <span className="text-5xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors duration-300 select-none leading-none">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent bar */}
                <div
                  className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full ${colors.iconBg} transition-all duration-500 ease-out`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutDifferentiators;
