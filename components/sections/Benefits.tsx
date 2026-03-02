"use client";

import { motion, Variants } from "framer-motion";
import {
  Wallet,
  Zap,
  IndianRupee,
  Battery,
  Shield,
  Settings,
  Home,
  Leaf,
  Award,
  MapPin,
  CheckCircle,
  Users,
  XCircle,
} from "lucide-react";
import type { BenefitItem } from "@/lib/data";

// Icon mapping for CMS data
const iconMap: Record<string, React.ReactNode> = {
  Wallet: <Wallet className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  IndianRupee: <IndianRupee className="w-5 h-5" />,
  Battery: <Battery className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Settings: <Settings className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
};

// Fallback benefits
const fallbackBenefits = [
  {
    icon: "Wallet",
    title: "Lower Electricity Bills",
    description:
      "Save up to 70–90% on monthly electricity costs with smart solar energy designed for Indian homes.",
    color: "bg-green-500",
  },
  {
    icon: "Zap",
    title: "Reliable & Clean Power",
    description:
      "Enjoy uninterrupted electricity while switching to safe, pollution-free energy.",
    color: "bg-amber-500",
  },
  {
    icon: "IndianRupee",
    title: "Government Subsidy Assistance",
    description:
      "We help you claim available solar subsidies with complete documentation support.",
    color: "bg-blue-500",
  },
  {
    icon: "Battery",
    title: "Battery Backup Options",
    description:
      "Keep essential appliances running during power cuts with smart energy storage solutions.",
    color: "bg-purple-500",
  },
  {
    icon: "Shield",
    title: "25-Year Warranty",
    description:
      "Long-lasting performance backed by trusted components and strong warranty protection.",
    color: "bg-teal-500",
  },
  {
    icon: "Settings",
    title: "Hassle-Free Maintenance",
    description:
      "Installation, monitoring, and service support handled by our local expert team.",
    color: "bg-red-500",
  },
  {
    icon: "Home",
    title: "Increase Home Value",
    description:
      "Solar-powered homes are future-ready and more attractive to buyers and tenants.",
    color: "bg-indigo-500",
  },
  {
    icon: "Leaf",
    title: "Eco-Friendly Energy",
    description:
      "Reduce carbon footprint while saving money and protecting the environment.",
    color: "bg-emerald-500",
  },
];

// Trust items
const trustItems = [
  "Government-approved installation support",
  "25+ years solar panel performance life",
  "Trusted by local homeowners",
  "Dedicated Dehradun-based service & support",
];

// Comparison Table Data
const comparisonData = [
  {
    feature: "Monthly Cost",
    kartikSolar: "Low & Stable",
    traditional: "Continuously Increasing",
  },
  {
    feature: "Power Cuts",
    kartikSolar: "Backup Options Available",
    traditional: "Frequent Interruptions",
  },
  {
    feature: "Long-Term Savings",
    kartikSolar: "High Savings (25+ Years)",
    traditional: "No Savings",
  },
  {
    feature: "Pollution",
    kartikSolar: "Clean Energy",
    traditional: "High Carbon Emissions",
  },
  {
    feature: "Future Ready",
    kartikSolar: "Smart & Sustainable",
    traditional: "Outdated System",
  },
];

const Benefits = ({ benefits: propBenefits }: { benefits: BenefitItem[] }) => {
  const benefits = propBenefits.length > 0 ? propBenefits : fallbackBenefits;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="benefits"
      className="py-24 lg:py-32 bg-slate-900 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-semibold text-sm tracking-wide mb-6">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              The Kartik Solar <span className="text-green-400">Advantage</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Along with solar panel installation, Kartik Solar Enterprises
              offers a total energy solution tailored for Indian homes
              considering Indian climate conditions.
            </p>
          </motion.div>
        </div>

        {/* BENEFITS LIST — Two-column with icon + text rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-5 mb-20 lg:mb-24 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div
                className={`shrink-0 w-10 h-10 rounded-lg ${benefit.color} flex items-center justify-center text-white`}
              >
                {iconMap[benefit.icon] || <Zap className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  {benefit.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* COMPARISON TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-white mb-10 px-4">
            Kartik Solar <span className="text-green-400">vs</span> Traditional
            Electricity
          </h3>
          <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm shadow-2xl">
            {/* Table Header - Desktop Only */}
            <div className="hidden md:grid grid-cols-3 bg-white/10 border-b border-white/10">
              <div className="px-8 py-5 text-sm font-bold text-slate-300 uppercase tracking-wider">
                Feature
              </div>
              <div className="px-8 py-5 text-sm font-bold text-green-400 uppercase tracking-wider text-center">
                Kartik Solar
              </div>
              <div className="px-8 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider text-center">
                Traditional Power
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/10">
              {comparisonData.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 md:grid-cols-3 hover:bg-white/5 transition-colors duration-200"
                >
                  {/* Feature Title - Full width on mobile/tablet until md */}
                  <div className="col-span-2 md:col-span-1 px-6 sm:px-8 py-4 bg-white/5 md:bg-transparent">
                    <span className="text-xs sm:text-sm font-bold md:font-medium text-slate-300 uppercase md:normal-case tracking-wider md:tracking-normal">
                      {row.feature}
                    </span>
                  </div>

                  {/* Kartik Solar Value */}
                  <div className="px-4 sm:px-8 py-6 md:py-5 text-center border-r border-white/10 md:border-r-0 flex flex-col items-center justify-center">
                    <div className="md:hidden text-[10px] text-green-500/60 font-bold uppercase mb-2 tracking-tighter">
                      Kartik Solar
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-green-400 font-semibold px-2">
                      <CheckCircle className="w-5 h-5 md:w-4 md:h-4 shrink-0" />
                      <span className="text-xs sm:text-sm leading-tight">
                        {row.kartikSolar}
                      </span>
                    </div>
                  </div>

                  {/* Traditional Power Value */}
                  <div className="px-4 sm:px-8 py-6 md:py-5 text-center flex flex-col items-center justify-center">
                    <div className="md:hidden text-[10px] text-slate-500/60 font-bold uppercase mb-2 tracking-tighter">
                      Traditional Power
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-red-400/70 font-medium px-2">
                      <XCircle className="w-5 h-5 md:w-4 md:h-4 shrink-0" />
                      <span className="text-xs sm:text-sm leading-tight text-center sm:text-left">
                        {row.traditional}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* WHY FAMILIES TRUST */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-8">
            Why Families Trust Kartik Solar Enterprises
          </h3>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20"
              >
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-sm font-medium text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
