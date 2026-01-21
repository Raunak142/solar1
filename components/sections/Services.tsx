"use client";

import { motion, Variants } from "framer-motion";
import {
  Wind,
  Globe,
  Settings,
  Battery,
  Sun,
  BarChart3,
  Plug,
  Zap,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Windmill installation",
      description:
        "At Solarify renewable energy private limited, we offer windmill.",
      icon: <Wind className="w-8 h-8" />,
    },
    {
      title: "Global energy network",
      description:
        "Our network of experts spans the globe, allow us to deliver energy.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Support & Maintenance",
      description:
        "That's why we offer comprehensive support and repair services to ensure.",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: "Polycrystalline Services",
      description:
        "Polycrystalline are a wide range of industries, from to renewable energy.",
      icon: <Battery className="w-8 h-8" />,
    },
    {
      title: "Solar Panel Setup",
      description:
        "Complete installation of high-efficiency solar panels for residential and commercial use.",
      icon: <Sun className="w-8 h-8" />,
    },
    {
      title: "Energy Consulting",
      description:
        "Expert advice on optimizing your energy consumption and reducing costs.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Battery Storage",
      description:
        "Advanced battery solutions to store excess energy for later use.",
      icon: <Plug className="w-8 h-8" />,
    },
    {
      title: "EV Charging Stations",
      description:
        "Installation of electric vehicle charging infrastructure for homes and businesses.",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tighter tracking-tighter"
        >
          Excellence green energy
          <br />
          power services.
        </motion.h2>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-green-500/30 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-green-50 group-hover:bg-green-500 flex items-center justify-center text-3xl mb-6 transition-colors duration-300">
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
