"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap,
  Settings,
  Handshake,
  HardHat,
  Wrench,
  Activity,
  Home,
  Wind,
  Sun,
  Battery,
} from "lucide-react";
import Image from "next/image";

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hide dots when scroll is complete
  const dotsOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.9, 1],
    [0, 1, 1, 0],
  );

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Efficiency Panels",
      description:
        "We use only the highest efficiency solar panels from top brands like SunPower and LG to maximize energy production.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom System Design",
      description:
        "Each solar system is uniquely designed to optimize solar production for your particular home and energy usage.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Locally Owned and Operated",
      description:
        "As a local company, we pride ourselves on excellent customer service and supporting our community.",
    },
  ];

  // Left side images - cycle through 4 images
  const leftImages = [
    { image: "/images/hero-house.png" },
    { image: "/images/about-team.png" },
    { image: "/images/hero-farm.png" },
    { image: "/images/feature-wind.png" },
  ];

  // Right side images - cycle through 4 images
  const rightImages = [
    { image: "/images/feature-wind.png" },
    { image: "/images/hero-farm.png" },
    { image: "/images/hero-house.png" },
    { image: "/images/feature-wind.png" },
  ];

  return (
    <section>
      {/* Header Section */}
      <div className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tighter mb-8"
          >
            WE MAKE GOING SOLAR SIMPLE AND AFFORDABLE.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg sm:text-lg text-slate-600 max-w-3xl mx-auto"
          >
            If you're looking to take control of ever-increasing electricity
            bills while also doing your part for the environment, look no
            further.
          </motion.p>
        </div>
      </div>

      {/* Scroll Pin Section - 500vh height for slower transitions */}
      <div ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Image Stack - Positioned higher */}
              <div className="hidden lg:block lg:col-span-3 -mt-24">
                <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl bg-white">
                  {leftImages.map((img, index) => {
                    const START = index * 0.2;
                    const FADE_IN_END = START + 0.1;
                    const END = (index + 1) * 0.2;
                    const FADE_OUT_END = END + 0.1;

                    return (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        style={{
                          opacity:
                            index === 0
                              ? 1
                              : useTransform(
                                  scrollYProgress,
                                  [START, FADE_IN_END],
                                  [0, 1],
                                ),
                          y: useTransform(
                            scrollYProgress,
                            index === 0 ? [0, 0] : [START, FADE_IN_END],
                            index === 0 ? ["0%", "0%"] : ["100%", "0%"],
                          ),
                          zIndex: index, // Ensure stacking order
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={img.image}
                            alt="Solar feature"
                            fill
                            className="object-cover"
                          />
                          {/* Overlay removed */}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Center - Pinned Feature Content */}
              <div className="lg:col-span-6 py-8">
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="flex gap-5 pb-8 border-b border-slate-200 last:border-b-0"
                    >
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center text-2xl shrink-0 shadow-sm">
                        {feature.icon}
                      </div>
                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Image Stack - Positioned lower */}
              <div className="hidden lg:block lg:col-span-3 mt-24">
                <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl bg-white">
                  {rightImages.map((img, index) => {
                    const START = index * 0.2;
                    const FADE_IN_END = START + 0.1;
                    const END = (index + 1) * 0.2;
                    const FADE_OUT_END = END + 0.1;

                    return (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        style={{
                          opacity:
                            index === 0
                              ? 1
                              : useTransform(
                                  scrollYProgress,
                                  [START, FADE_IN_END],
                                  [0, 1],
                                ),
                          y: useTransform(
                            scrollYProgress,
                            index === 0 ? [0, 0] : [START, FADE_IN_END],
                            index === 0 ? ["0%", "0%"] : ["100%", "0%"],
                          ),
                          zIndex: index,
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={img.image}
                            alt="Solar feature"
                            fill
                            className="object-cover"
                          />
                          {/* Overlay removed */}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator - Hidden when scroll complete */}
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:flex gap-2"
          style={{ opacity: dotsOpacity }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-slate-300"
              style={{
                backgroundColor: useTransform(
                  scrollYProgress,
                  [i * 0.2, i * 0.2 + 0.1],
                  ["#cbd5e1", "#22c55e"],
                ),
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
