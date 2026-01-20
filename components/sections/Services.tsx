"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      title: "Windmill installation",
      description:
        "At Solarify renewable energy private limited, we offer windmill.",
      icon: "🌬️",
    },
    {
      title: "Global energy network",
      description:
        "Our network of experts spans the globe, allow us to deliver energy.",
      icon: "🌐",
    },
    {
      title: "Support & Maintenance",
      description:
        "That's why we offer comprehensive support and repair services to ensure.",
      icon: "⚙️",
    },
    {
      title: "Polycrystalline Services",
      description:
        "Polycrystalline are a wide range of industries, from to renewable energy.",
      icon: "🔋",
    },
    {
      title: "Solar Panel Setup",
      description:
        "Complete installation of high-efficiency solar panels for residential and commercial use.",
      icon: "☀️",
    },
    {
      title: "Energy Consulting",
      description:
        "Expert advice on optimizing your energy consumption and reducing costs.",
      icon: "📊",
    },
    {
      title: "Battery Storage",
      description:
        "Advanced battery solutions to store excess energy for later use.",
      icon: "🔌",
    },
    {
      title: "EV Charging Stations",
      description:
        "Installation of electric vehicle charging infrastructure for homes and businesses.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
        >
          Excellence green energy
          <br />
          power services.
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex gap-6 marquee-track"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* Triple the services for seamless loop */}
          {[...services, ...services, ...services].map((service, index) => (
            <div
              key={index}
              className="shrink-0 w-80 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-10">
                {service.description}
              </p>

              {/* Icon - Purple/Violet color matching screenshot */}
              <div className="w-14 h-14 rounded-xl bg-[#48d27b] flex items-center justify-center text-2xl text-white shadow-md">
                {service.icon}
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .marquee-track {
            animation: marquee 40s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
        `}</style>
      </motion.div>
    </section>
  );
};

export default Services;
