"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IndianRupee,
  Sun,
  Cpu,
  MapPin,
  Zap,
  Battery,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Filter Categories - REMOVED

import { projects } from "./projects/projectData";

// Filter Categories - REMOVED

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Hydration fix for window width
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, index]);

  const cardWidth = windowWidth < 640 ? 350 : windowWidth < 1024 ? 600 : 900;
  const gap = windowWidth < 768 ? 16 : 32;
  const offset = (cardWidth + gap) * index;

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 bg-slate-50 overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-green-100 text-green-700 font-semibold text-sm tracking-wide mb-6">
              Our Projects
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Our Work, Our <span className="text-green-600">Pride</span>
            </h2>
            <p className="text-lg text-slate-600 mt-4 leading-relaxed">
              At SolarX, every project tells a story of savings, reliability,
              and a smarter lifestyle.
            </p>
          </motion.div>

          {/* View All Projects Button */}
          <div className="hidden md:block">
            <Link
              href="/projects"
              className="group px-6 py-2.5 bg-white border border-slate-200 hover:border-green-500 text-slate-600 hover:text-green-600 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2"
            >
              See All Projects
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* PROJECT CAROUSEL */}
        <div
          className="relative py-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Centered container logic */}
          <div className="flex justify-center overflow-hidden">
            {/* 
                We render a massive track. 
                Using `x` transform to slide. 
                `index` keeps increasing unboundedly.
                We render enough items to cover the view.
                Actually simpler: Just map a range around the current index.
             */}
            <motion.div
              className="flex gap-4 md:gap-8 items-center"
              initial={false}
              animate={{ x: -offset }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 1,
              }}
              style={{ x: 0 }} // Reset or init
            >
              {/* 
                 Render a very broad range of items to create infinite illusion. 
                 We shift the "center" of the rendering based on the index.
                 This is a virtualization technique for infinite scrolling.
              */}
              {[-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8].map((offsetIndex) => {
                // Calculate the actual infinite index
                const currentIndex = index + offsetIndex;

                // Modulo math to cycle through data
                // ((i % n) + n) % n handles negative numbers correctly
                const dataIndex =
                  ((currentIndex % projects.length) + projects.length) %
                  projects.length;
                const project = projects[dataIndex];

                // We only need to render if it's somewhat visible
                // But for simplicity with framer motion width calculations, we render a fixed set relative to "index" 0 position
                // Wait, simpler approach:
                // We render a list from index-2 to index+5
                // And we strictly control their key to be unique based on position
                return null;
              })}

              {/* 
                  RETRYING LOGIC:
                  The best way for infinite slider with Framer Motion:
                  1. Have an index state that grows forever (0, 1, 2...).
                  2. Render items from `index - 2` to `index + 2`.
                  3. Position them absolutely? No, changing DOM order breaks animations.
                  4. Standard approach: Render a huge list? No, performance.
                  
                  BETTER APPROACH:
                  Use the track method but simply re-order?
                  
                  LET'S STICK TO THE UNBOUNDED INDEX + MODULO MAPPING.
                  We render a distinct set of keys.
               */}

              {/* Let's render a static large-enough array and slide the track. 
                   Actually, to be truly infinite without rewind, specific "infinite carousel" libraries used.
                   With just React/Framer:
                   We can assume the user won't scroll 1000 times.
                   We'll just map a large range relative to the current index.
               */}
              {Array.from({ length: 20 }).map((_, i) => {
                // We render a window around the current index.
                // Let's say we render index - 2 to index + 5
                // No, that changes the DOM.

                // Alternative: Just render "projects" repeated 100 times?
                // Too heavy.

                // Correct logic:
                // We rely on the fact that we can just cycle the `x` value.
                // But strictly for the user's request "last to first should start from first":
                // The "rewind" happens because index goes projects.length -> 0.
                // If index goes ... -> 4 -> 5 -> 6, it never rewinds.
                // So we just need to render project[index % length].
                return null;
              })}
            </motion.div>
          </div>

          {/* 
              IMPLEMENTATION ATTEMPT 2:
              We will maintain the `motion.div` track.
              We will render items from `index - 2` to `index + 2` dynamically.
              We adjust the `x` offset to keep the current item centered.
           */}
          <div className="flex justify-center">
            <div className="relative h-[250px] sm:h-[400px] lg:h-[600px] w-full max-w-[900px]">
              <AnimatePresence initial={false} custom={index}>
                {/* 
                        Actually, a full carousel replacement is safer than trying to hack the track 
                        if we want perfect infinite loop without complex virtualization code in one file.
                        
                        Let's use a "Center Mode" Slider approach where we absolute position the slides based on their distance from "index".
                     */}
                {[-2, -1, 0, 1, 2].map((offset) => {
                  const effectiveIndex = index + offset;
                  const dataIndex =
                    ((effectiveIndex % projects.length) + projects.length) %
                    projects.length;
                  const project = projects[dataIndex];

                  return (
                    <motion.div
                      key={effectiveIndex} // UNIQUE KEY is critical
                      className="absolute top-0 left-0 w-full h-full"
                      initial={{
                        x: `${offset * 110}%`,
                        scale: 0.9,
                        opacity: 0.5,
                        zIndex: 0,
                      }}
                      animate={{
                        x: `${offset * 105}%`, // 105% allows for a 5% gap
                        scale: offset === 0 ? 1 : 0.9,
                        opacity: offset === 0 ? 1 : 0.4,
                        zIndex: offset === 0 ? 10 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="block h-full cursor-pointer"
                      >
                        <ProjectCard
                          project={project}
                          isActive={offset === 0}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIndex((prev) => prev - 1)}
            className="p-4 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-green-500 hover:text-green-600 hover:shadow-lg transition-colors duration-300 group z-20"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIndex((prev) => prev + 1)} // Unbounded increment
            className="p-4 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-green-500 hover:text-green-600 hover:shadow-lg transition-colors duration-300 group z-20"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({
  project,
  isActive,
}: {
  project: (typeof projects)[0];
  isActive: boolean;
}) => {
  return (
    <div
      className={`w-full h-full group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 ${
        isActive ? "shadow-2xl ring-1 ring-green-500/20" : ""
      }`}
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 ${isActive ? "opacity-90" : "opacity-60"}`}
        />

        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-sm font-bold text-white shadow-sm">
            {project.type}
          </span>
        </div>
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white z-20">
        <h3 className="text-xl sm:text-3xl font-bold mb-4 line-clamp-1">
          {project.title}
        </h3>

        <div
          className={`grid grid-cols-2 gap-4 transition-all duration-500 ${isActive ? "opacity-100 max-h-40" : "opacity-0 max-h-0 hidden sm:grid"}`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-green-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" /> Location
            </div>
            <div className="font-semibold text-slate-100 text-sm sm:text-base truncate">
              {project.location}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> Size
            </div>
            <div className="font-semibold text-slate-100 text-sm sm:text-base">
              {project.systemSize}
            </div>
          </div>

          <div className="space-y-1 hidden sm:block">
            <div className="flex items-center gap-2 text-green-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4" /> Savings
            </div>
            <div className="font-semibold text-slate-100 text-sm sm:text-base">
              {project.monthlySavings}
            </div>
          </div>

          <div className="space-y-1 hidden sm:block">
            <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              <Battery className="w-3 h-3 sm:w-4 sm:h-4" /> Battery
            </div>
            <div className="font-semibold text-slate-100 text-sm sm:text-base">
              {project.battery}
            </div>
          </div>
        </div>

        {!isActive && (
          <div className="text-sm font-medium text-slate-300 mt-2 flex items-center gap-2">
            <span>View Project</span> <ChevronRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
