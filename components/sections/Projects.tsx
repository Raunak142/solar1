"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const dotsOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.9, 1],
    [0, 1, 1, 0],
  );

  const projects = [
    {
      title: "Amazing Textiles Manufacturing Plant",
      description:
        "To reduce operational costs and commit to green manufacturing, Vaibhav Textiles integrated a high-efficiency 500 kW solar array into their production facility.",
      tags: ["Solar panels", "Battery storage", "EV Charger"],
      stats: [
        { label: "POWER RATING", value: "10 KVA" },
        { label: "BATTERIES", value: "12.5 KW" },
        { label: "SOLAR PANELS", value: "20 Panels" },
        { label: "ANNUAL SAVINGS", value: "$1,500" },
        { label: "ROI", value: "6 Years" },
        { label: "CO₂ SAVED/YR", value: "6 tons of CO₂" },
      ],
      gradient: "from-amber-400 via-yellow-500 to-amber-600",
      emoji: "👷‍♂️👷",
    },
    {
      title: "Green Horizons Realty Group",
      description:
        "Green Horizons partnered with us to bring clean energy to their flagship eco-conscious apartment complex.",
      tags: ["Solar panels", "Battery storage", "EV Charger"],
      stats: [
        { label: "POWER RATING", value: "15 KVA" },
        { label: "BATTERIES", value: "15 KW" },
        { label: "SOLAR PANELS", value: "30 Panels" },
        { label: "ANNUAL SAVINGS", value: "$2,000" },
        { label: "ROI", value: "5 Years" },
        { label: "CO₂ SAVED/YR", value: "3 tons of CO₂" },
      ],
      gradient: "from-blue-400 via-sky-500 to-blue-600",
      emoji: "🧑‍🔧",
    },
    {
      title: "The Martinez Family Home",
      description:
        "Frequent blackouts and high energy bills due to rising grid costs. A 6.5kWp solar system with battery backup to provide reliable power during outages.",
      tags: ["Solar panels", "Battery storage"],
      stats: [
        { label: "POWER RATING", value: "10 KVA" },
        { label: "BATTERIES", value: "12.5 KW" },
        { label: "SOLAR PANELS", value: "20 Panels" },
        { label: "ANNUAL SAVINGS", value: "$1,500" },
        { label: "ROI", value: "6 Years" },
        { label: "CO₂ SAVED/YR", value: "6 tons of CO₂" },
      ],
      gradient: "from-sky-400 via-blue-500 to-sky-600",
      emoji: "👷👷‍♂️",
    },
  ];

  return (
    <section className="bg-white">
      {/* Header Section */}
      <div className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-sm" />
                <span className="text-slate-600 font-semibold text-sm tracking-wider">
                  PROJECTS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                We bring renewable
                <br />
                energy to every space
              </h2>
            </motion.div>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              href="#"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-green-600 transition-colors"
            >
              VIEW ALL PROJECTS
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll Pin Section */}
      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden py-8">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="relative h-[600px]">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      index === 0
                        ? [0, 0.33 - 0.05, 0.33]
                        : index === 1
                          ? [0.33, 0.33 + 0.05, 0.66 - 0.05, 0.66]
                          : [0.66, 0.66 + 0.05, 1],
                      index === 0
                        ? [1, 1, 0]
                        : index === 1
                          ? [0, 1, 1, 0]
                          : [0, 1, 1],
                    ),
                    y: useTransform(
                      scrollYProgress,
                      index === 0
                        ? [0, 0.1]
                        : index === 1
                          ? [0.33, 0.33 + 0.05]
                          : [0.66, 0.66 + 0.05],
                      index === 0 ? [0, 0] : [40, 0],
                    ),
                    zIndex: index,
                  }}
                >
                  <div className="grid lg:grid-cols-2 h-full">
                    {/* Left Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-5 leading-relaxed text-sm lg:text-base">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-700"
                          >
                            {tag === "Solar panels" && <span>☀️</span>}
                            {tag === "Battery storage" && <span>🔋</span>}
                            {tag === "EV Charger" && <span>⚡</span>}
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mb-6">
                        <div className="text-xs font-semibold text-slate-500 mb-3 tracking-wider">
                          RESULT
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {project.stats.map((stat, i) => (
                            <div
                              key={i}
                              className="p-2.5 bg-slate-50 rounded-lg border border-slate-100"
                            >
                              <div className="text-[10px] text-slate-500 mb-0.5 tracking-wide">
                                {stat.label}
                              </div>
                              <div className="font-bold text-slate-900 text-sm">
                                {stat.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button with Fixed Slide Effect */}
                      <button className="group px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-colors w-fit text-sm overflow-hidden">
                        <span className="relative flex items-center gap-2 h-5 overflow-hidden">
                          <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                            VIEW PROJECT
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                          <span className="absolute top-0 left-0 flex items-center gap-2 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                            VIEW PROJECT
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-full min-h-[300px] lg:min-h-0">
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${project.gradient}`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-8xl lg:text-9xl">
                            {project.emoji}
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-slate-900/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 grid grid-cols-5 gap-1">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className="h-6 bg-blue-900/70 rounded-sm border border-blue-700/40"
                            />
                          ))}
                        </div>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {[0, 1, 2, 3, 4].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full ${dot === 0 ? "bg-white" : "bg-white/50"}`}
                            />
                          ))}
                        </div>

                        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-2"
          style={{ opacity: dotsOpacity }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-slate-300"
              style={{
                backgroundColor: useTransform(
                  scrollYProgress,
                  [i * 0.33, i * 0.33 + 0.1],
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

export default Projects;
