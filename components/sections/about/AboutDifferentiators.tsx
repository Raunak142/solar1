"use client";

import { motion } from "framer-motion";
import { User, ShieldCheck, Zap, Award, Clock, MapPin } from "lucide-react";

// Differentiators Data
const differentiators = [
  {
    icon: <User className="w-6 h-6 text-white" />,
    title: "Customer-First Approach",
    description:
      "We listen first and design later. Every system is customized to your energy needs, roof structure, and budget.",
    color: "bg-blue-500",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "End-to-End Service",
    description:
      "From consultation and documentation to installation and maintenance—we handle everything for you.",
    color: "bg-green-500",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Premium Quality Products",
    description:
      "High-efficiency panels, reliable inverters, and strong mounting systems for long-lasting performance.",
    color: "bg-amber-500",
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: "Transparent Pricing",
    description:
      "No hidden costs. No confusing terms. Just honest, upfront solar solutions.",
    color: "bg-purple-500",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "Strong After-Sales Support",
    description:
      "Monitoring, maintenance, and long-term service—because solar is a lifetime investment.",
    color: "bg-orange-500",
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "Local Expertise",
    description:
      "Based in Dehradun, Uttarakhand, with deep understanding of local climate and energy needs.",
    color: "bg-teal-500",
  },
];

const AboutDifferentiators = () => {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Why Choose <span className="text-green-600">SolarX</span>?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We don't just sell solar panels; we deliver complete energy solutions
          tailored to your life, backed by unwavering support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {differentiators.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div
              className={`relative w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
            >
              {item.icon}
            </div>

            <div className="relative">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {item.description}
              </p>
            </div>

            {/* Bottom Accent */}
            <div
              className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full ${item.color} transition-all duration-500 ease-out`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutDifferentiators;
