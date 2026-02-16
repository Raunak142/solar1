"use client";

import { useState, useEffect } from "react";
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
import { client } from "@/lib/sanity";
import { allBenefitsQuery } from "@/lib/queries";
import type { SanityBenefit } from "@/lib/sanity-types";

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

// 8 Benefit Cards (fallback)
const fallbackBenefits = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Up to 90% Lower Electricity Bills",
    description: "Save thousands every year with solar power.",
    color: "bg-green-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "25+ Years of Free Electricity",
    description: "One-time investment with long-term savings.",
    color: "bg-amber-500",
  },
  {
    icon: <IndianRupee className="w-6 h-6" />,
    title: "Affordable EMI & Subsidy Support",
    description: "Solar made easy for middle-class families.",
    color: "bg-blue-500",
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: "No Power Cut Stress",
    description: "Optional battery backup for uninterrupted power.",
    color: "bg-purple-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Safe Power for Home Appliances",
    description: "Protects ACs, TVs, fridges, and laptops.",
    color: "bg-teal-500",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Low Maintenance, High Reliability",
    description: "Minimal upkeep with long-term performance.",
    color: "bg-orange-500",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Increases Home Value",
    description: "A modern, future-ready upgrade for your home.",
    color: "bg-rose-500",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Clean Energy for Your Children",
    description: "Save money while protecting the environment.",
    color: "bg-emerald-500",
  },
];

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

// Trust Badges
const trustBadges = [
  { icon: <Award className="w-5 h-5" />, label: "10+ Years Experience" },
  { icon: <Users className="w-5 h-5" />, label: "500+ Installations" },
  { icon: <CheckCircle className="w-5 h-5" />, label: "Govt. Approved Vendor" },
  { icon: <Shield className="w-5 h-5" />, label: "Premium Components" },
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

const Benefits = () => {
  const [benefits, setBenefits] = useState<BenefitItem[]>(fallbackBenefits);

  useEffect(() => {
    async function fetchBenefits() {
      try {
        const sanityBenefits: SanityBenefit[] =
          await client.fetch(allBenefitsQuery);
        if (sanityBenefits && sanityBenefits.length > 0) {
          setBenefits(
            sanityBenefits.map((b) => ({
              icon: iconMap[b.icon] || <Zap className="w-6 h-6" />,
              title: b.title,
              description: b.description,
              color: b.color || "bg-green-500",
            })),
          );
        }
      } catch (error) {
        console.error("Error fetching benefits from Sanity:", error);
      }
    }
    fetchBenefits();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
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
              Why Choose <span className="text-green-600">SolarX</span>?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real benefits designed for Indian middle-class families—saving
              money, improving lifestyle, and building a greener future.
            </p>
          </motion.div>
        </div>

        {/* 8 BENEFIT CARDS (2x4 Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                {benefit.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* COMPARISON TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 text-center mb-10">
            SolarX vs Traditional Electricity
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 text-slate-600 font-semibold">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-green-600 font-bold">
                    SolarX
                  </th>
                  <th className="text-center py-4 px-4 text-slate-500 font-semibold">
                    Traditional
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-4 px-4 text-slate-800 font-medium">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                        <CheckCircle className="w-4 h-4" />
                        {row.solarx}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-slate-500">
                      {row.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* TRUST BADGES */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-20"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-2 bg-slate-100 rounded-full py-2 px-4 text-slate-700"
            >
              <span className="text-green-600">{badge.icon}</span>
              <span className="text-sm font-medium">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* SOFT CTA */}
      </div>
    </section>
  );
};

export default Benefits;
