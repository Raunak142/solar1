"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
      icon: "🔋",
      title: "High Efficiency Panels",
      description:
        "We use only the highest efficiency solar panels from top brands like SunPower and LG to maximize energy production.",
    },
    {
      icon: "⚙️",
      title: "Custom System Design",
      description:
        "Each solar system is uniquely designed to optimize solar production for your particular home and energy usage.",
    },
    {
      icon: "🤝",
      title: "Locally Owned and Operated",
      description:
        "As a local company, we pride ourselves on excellent customer service and supporting our community.",
    },
  ];

  // Left side images - cycle through 4 images
  const leftImages = [
    {
      emoji: "👷",
      gradient: "from-amber-400 via-orange-500 to-amber-600",
      label: "Installation",
    },
    {
      emoji: "🔧",
      gradient: "from-slate-400 via-slate-500 to-slate-600",
      label: "Maintenance",
    },
    {
      emoji: "📊",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      label: "Monitoring",
    },
    {
      emoji: "🏠",
      gradient: "from-green-400 via-emerald-500 to-green-600",
      label: "Residential",
    },
  ];

  // Right side images - cycle through 4 images
  const rightImages = [
    {
      emoji: "🌬️",
      gradient: "from-sky-300 via-blue-400 to-sky-500",
      label: "Wind Energy",
    },
    {
      emoji: "☀️",
      gradient: "from-amber-300 via-yellow-400 to-amber-500",
      label: "Solar Power",
    },
    {
      emoji: "🔋",
      gradient: "from-emerald-300 via-green-400 to-emerald-500",
      label: "Storage",
    },
    {
      emoji: "⚡",
      gradient: "from-purple-300 via-violet-400 to-purple-500",
      label: "Grid Connect",
    },
  ];

  return (
    <section className="bg-white">
      {/* Header Section */}
      <div className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-8"
          >
            WE MAKE GOING SOLAR SIMPLE AND AFFORDABLE.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto"
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
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Image Stack - Positioned higher */}
              <div className="hidden lg:block lg:col-span-3 -mt-24">
                <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl">
                  {leftImages.map((img, index) => (
                    <motion.div
                      key={index}
                      className={`absolute inset-0 bg-linear-to-br ${img.gradient}`}
                      style={{
                        opacity: useTransform(
                          scrollYProgress,
                          index === 0
                            ? [0, 0.2 - 0.05, 0.2]
                            : [
                                index * 0.2,
                                index * 0.2 + 0.1,
                                (index + 1) * 0.2 - 0.05,
                                (index + 1) * 0.2,
                              ],
                          index === 0
                            ? [1, 1, 0]
                            : [0, 1, 1, index === 3 ? 1 : 0],
                        ),
                        y: useTransform(
                          scrollYProgress,
                          index === 0
                            ? [0, 0.1]
                            : [index * 0.2, index * 0.2 + 0.1],
                          index === 0 ? [0, 0] : [60, 0],
                        ),
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl">{img.emoji}</span>
                      </div>
                      {/* Solar panels at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-slate-900/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-1">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="h-8 bg-blue-900/80 rounded-sm border border-blue-700/50"
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
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
                <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl">
                  {rightImages.map((img, index) => (
                    <motion.div
                      key={index}
                      className={`absolute inset-0 bg-linear-to-br ${img.gradient}`}
                      style={{
                        opacity: useTransform(
                          scrollYProgress,
                          index === 0
                            ? [0, 0.2 - 0.05, 0.2]
                            : [
                                index * 0.2,
                                index * 0.2 + 0.1,
                                (index + 1) * 0.2 - 0.05,
                                (index + 1) * 0.2,
                              ],
                          index === 0
                            ? [1, 1, 0]
                            : [0, 1, 1, index === 3 ? 1 : 0],
                        ),
                        y: useTransform(
                          scrollYProgress,
                          index === 0
                            ? [0, 0.1]
                            : [index * 0.2, index * 0.2 + 0.1],
                          index === 0 ? [0, 0] : [60, 0],
                        ),
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl">{img.emoji}</span>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-white/30 to-transparent" />
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                        <div className="w-2 h-16 bg-white/60 rounded-full" />
                        <div className="w-2 h-20 bg-white/60 rounded-full" />
                        <div className="w-2 h-14 bg-white/60 rounded-full" />
                      </div>
                    </motion.div>
                  ))}
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
