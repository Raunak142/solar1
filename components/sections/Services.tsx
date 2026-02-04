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

// 6 Benefit Cards Data
const benefits = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Lower Electricity Bills",
    description: "Save up to 70–90% on monthly bills for the next 25+ years",
    color: "bg-green-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Reliable Power Every Day",
    description: "No interruptions for work, study, or appliances",
    color: "bg-amber-500",
  },
  {
    icon: <IndianRupee className="w-6 h-6" />,
    title: "Affordable & EMI Options",
    description: "Designed for middle-class budgets with subsidy support",
    color: "bg-blue-500",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Zero Maintenance Stress",
    description: "Installation, monitoring, and support handled by SolarX",
    color: "bg-purple-500",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Higher Home Value",
    description: "A modern, future-ready solar-powered home",
    color: "bg-teal-500",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Better Future for Your Family",
    description: "Save money while protecting the environment",
    color: "bg-emerald-500",
  },
];

// 6 Service Cards Data
const services = [
  { icon: <Sun className="w-5 h-5" />, title: "Residential Solar Systems" },
  {
    icon: <Grid3X3 className="w-5 h-5" />,
    title: "Rooftop Solar Installation",
  },
  { icon: <Zap className="w-5 h-5" />, title: "On-Grid & Off-Grid Systems" },
  { icon: <Battery className="w-5 h-5" />, title: "Solar with Battery Backup" },
  { icon: <Settings className="w-5 h-5" />, title: "Maintenance & AMC" },
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "Government Subsidy Support",
  },
];

const Services = () => {
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
      className="py-24 lg:py-32 bg-linear-to-b from-white via-green-50/30 to-white overflow-hidden"
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
              Smart Energy for{" "}
              <span className="text-green-600">Smart Families</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              SolarX helps Indian middle-class families reduce electricity
              bills, enjoy reliable power, and upgrade their lifestyle with
              affordable and worry-free solar solutions.
            </p>
          </motion.div>
        </div>

        {/* HOW SOLARX HELPS - 6 BENEFIT CARDS */}
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
                  {benefit.icon}
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
            Not sure which solar system is right for your home?
          </h3>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
            Our experts will analyze your energy needs and recommend the perfect
            solution.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-green-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Free Solar Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
