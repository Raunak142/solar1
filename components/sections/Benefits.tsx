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
} from "lucide-react";
import type { BenefitItem } from "@/lib/data";

// Icon mapping for CMS data (keys match PascalCase names stored in Sanity)
const iconMap: Record<string, React.ReactNode> = {
  Wallet: <Wallet className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  IndianRupee: <IndianRupee className="w-6 h-6" />,
  Battery: <Battery className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
};

// Fallback benefits
const fallbackBenefits = [
  {
    icon: "Wallet",
    title: "Up to 90% Lower Electricity Bills",
    description: "Save thousands every year with solar power.",
    color: "bg-green-500",
  },
  {
    icon: "Zap",
    title: "Reliable & Clean Energy",
    description: "Say goodbye to power cuts and diesel generators.",
    color: "bg-amber-500",
  },
  {
    icon: "IndianRupee",
    title: "Government Subsidies Available",
    description: "Get up to 40% subsidy under PM Surya Ghar Yojana.",
    color: "bg-blue-500",
  },
  {
    icon: "Battery",
    title: "Battery Backup Options",
    description: "Stay powered day and night with smart storage.",
    color: "bg-purple-500",
  },
  {
    icon: "Shield",
    title: "25-Year Warranty",
    description: "Long-term protection on panels and inverters.",
    color: "bg-teal-500",
  },
  {
    icon: "Settings",
    title: "Free Maintenance & AMC",
    description: "No hidden costs—SolarX manages everything.",
    color: "bg-red-500",
  },
  {
    icon: "Home",
    title: "Increase Property Value",
    description: "Homes with solar sell for more and faster.",
    color: "bg-indigo-500",
  },
  {
    icon: "Leaf",
    title: "Help the Environment",
    description: "Reduce your carbon footprint with clean energy.",
    color: "bg-emerald-500",
  },
];

// Trust badges remain static
const trustBadges = [
  { icon: <Award className="w-5 h-5" />, label: "Govt. Approved Installer" },
  { icon: <Shield className="w-5 h-5" />, label: "25-Year Warranty" },
  { icon: <Users className="w-5 h-5" />, label: "500+ Happy Customers" },
  { icon: <MapPin className="w-5 h-5" />, label: "Local Dehradun Support" },
];

// Comparison Table Data
const comparisonData = [
  { feature: "Monthly Cost", solarx: "Low", traditional: "Increasing" },
  { feature: "Power Cuts", solarx: "Optional Backup", traditional: "Frequent" },
  { feature: "Long-Term Savings", solarx: "High", traditional: "None" },
  { feature: "Pollution", solarx: "Zero", traditional: "High" },
  { feature: "Future Ready", solarx: "Yes", traditional: "No" },
];

const Benefits = ({ benefits: propBenefits }: { benefits: BenefitItem[] }) => {
  const benefits = propBenefits.length > 0 ? propBenefits : fallbackBenefits;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="benefits"
      className="py-24 lg:py-32 bg-linear-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
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
            <span className="inline-block py-1.5 px-4 rounded-full bg-green-100 text-green-700 font-semibold text-sm tracking-wide mb-6">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              The SolarX <span className="text-green-600">Advantage</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              More than just solar panels—SolarX delivers a complete energy
              upgrade for your home.
            </p>
          </motion.div>
        </div>

        {/* BENEFIT CARDS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-green-200 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}
              >
                {iconMap[benefit.icon] || <Zap className="w-6 h-6" />}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* COMPARISON TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            SolarX <span className="text-green-600">vs</span> Traditional Power
          </h3>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
              <div className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">
                Feature
              </div>
              <div className="px-6 py-4 text-sm font-bold text-green-600 uppercase tracking-wider text-center">
                SolarX
              </div>
              <div className="px-6 py-4 text-sm font-bold text-slate-400 uppercase tracking-wider text-center">
                Traditional
              </div>
            </div>
            {comparisonData.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 ${i < comparisonData.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div className="px-6 py-4 text-slate-700 font-medium">
                  {row.feature}
                </div>
                <div className="px-6 py-4 text-center">
                  <span className="inline-flex items-center gap-1.5 text-green-600 font-semibold">
                    <CheckCircle className="w-4 h-4" /> {row.solarx}
                  </span>
                </div>
                <div className="px-6 py-4 text-center text-slate-400 font-medium">
                  {row.traditional}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TRUST BADGES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 lg:gap-8"
        >
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-xl border border-slate-100 shadow-sm"
            >
              <div className="text-green-500">{badge.icon}</div>
              <span className="text-sm font-semibold text-slate-700">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
