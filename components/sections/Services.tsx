"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Wallet,
  Zap,
  IndianRupee,
  Wrench,
  Home,
  Leaf,
  Sun,
  Grid3X3,
  Battery,
  Settings,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import type { BenefitItem, ServiceItem } from "@/lib/data";

// Icon mapping for CMS data (keys match PascalCase names stored in Sanity)
const iconMap: Record<string, React.ReactNode> = {
  Wallet: <Wallet className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  IndianRupee: <IndianRupee className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Sun: <Sun className="w-5 h-5" />,
  Grid3X3: <Grid3X3 className="w-5 h-5" />,
  Battery: <Battery className="w-5 h-5" />,
  Settings: <Settings className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
};

// Fallback data in case CMS returns empty
const fallbackBenefits = [
  {
    icon: "Wallet",
    title: "Lower Electricity Bills",
    description:
      "Reduce your monthly electricity expenses by 70–90% and protect your family from continuously increasing power tariffs. Solar is a one-time investment that delivers savings for 25+ years.",
    color: "bg-green-500",
  },
  {
    icon: "Zap",
    title: "Reliable Power Every Day",
    description:
      "No more stress during power cuts. Keep fans, lights, Wi-Fi, study equipment, and essential appliances running smoothly — perfect for work-from-home and students.",
    color: "bg-amber-500",
  },
  {
    icon: "IndianRupee",
    title: "Affordable for Middle-Class Budgets",
    description:
      "Government subsidies, flexible payment options, and EMI support make solar affordable without financial burden. Start saving from the first month itself.",
    color: "bg-blue-500",
  },
  {
    icon: "Wrench",
    title: "Low Maintenance & Long Life",
    description:
      "Built for Indian dust, heat, and monsoon conditions. Our systems require minimal maintenance while delivering consistent performance year after year.",
    color: "bg-purple-500",
  },
  {
    icon: "Home",
    title: "Increase Home Value",
    description:
      "A solar-powered home is modern, energy-efficient, and more attractive for future buyers or tenants, increasing long-term property value.",
    color: "bg-teal-500",
  },
  {
    icon: "Leaf",
    title: "Secure Future for Your Family",
    description:
      "Save money while contributing to a cleaner environment. Solar energy reduces pollution and ensures a sustainable future for the next generation.",
    color: "bg-emerald-500",
  },
];

const fallbackServices = [
  { icon: "Sun", title: "Residential Solar Systems" },
  { icon: "Grid3X3", title: "Rooftop Solar Installation" },
  { icon: "Zap", title: "On-Grid & Off-Grid Systems" },
  { icon: "Battery", title: "Solar with Battery Backup" },
  { icon: "Settings", title: "Maintenance & AMC" },
  { icon: "FileCheck", title: "Government Subsidy Support" },
];

interface ServicesProps {
  benefits: BenefitItem[];
  services: ServiceItem[];
}

const Services = ({
  benefits: propBenefits,
  services: propServices,
}: ServicesProps) => {
  const benefits = propBenefits.length > 0 ? propBenefits : fallbackBenefits;
  const services = propServices.length > 0 ? propServices : fallbackServices;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      id="services"
      className="py-24 lg:py-32 bg-[#EBF5EB] overflow-hidden"
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
              Why Solar?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Intelligent Solution for{" "}
              <span className="text-green-600">Indian Consumers</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              With the aid of Kartik Solar Enterprises, Indian middle-class
              families can utilize safe and affordable solar options while
              managing climbing electricity costs. Our systems, made for the
              power requirements and weather conditions of India, offer enduring
              savings and provide your family with the convenience of a smart
              lifestyle and uninterrupted energy.
            </p>
          </motion.div>
        </div>

        {/* HOW Kartik Solar HELPS - 6 BENEFIT CARDS */}
        <div className="mb-20 lg:mb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-green-200 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}
                >
                  {iconMap[benefit.icon] || <Zap className="w-6 h-6" />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-green-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Not Sure Which Solar System is Right for Your Home?
          </h3>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
            Our experts at Kartik Solar Enterprises analyze your electricity
            usage, rooftop space, and budget to recommend the perfect solar
            solution.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-green-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Solar Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
