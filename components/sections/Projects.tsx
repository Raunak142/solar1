"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IndianRupee,
  MapPin,
  Zap,
  Battery,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ProjectItem } from "@/lib/data";

const Projects = ({ projects }: { projects: ProjectItem[] }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play: only when in viewport and not hovered
  useEffect(() => {
    if (!isInView || isHovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000); // Slower 5-second intervals
    return () => clearInterval(interval);
  }, [isInView, isHovered, index]);

  // Touch / swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex((prev) => prev - 1);
      }
    }
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
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
              Powering Real Homes with{" "}
              <span className="text-green-600">Real Savings</span>
            </h2>
            <p className="text-lg text-slate-600 mt-4 leading-relaxed">
              Every project we complete represents a family choosing smarter
              energy. From consultation to installation, Kartik Solar
              Enterprises helps homeowners reduce electricity bills and enjoy
              reliable solar power built for Indian conditions.
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex justify-center">
            <div className="relative h-[250px] sm:h-[400px] lg:h-[600px] w-full max-w-[900px]">
              <AnimatePresence initial={false} custom={index}>
                {[-2, -1, 0, 1, 2].map((offsetVal) => {
                  const effectiveIndex = index + offsetVal;
                  const dataIndex =
                    ((effectiveIndex % projects.length) + projects.length) %
                    projects.length;
                  const project = projects[dataIndex];

                  return (
                    <motion.div
                      key={effectiveIndex}
                      className="absolute top-0 left-0 w-full h-full"
                      initial={{
                        x: `${offsetVal * 110}%`,
                        scale: 0.88,
                        opacity: 0.4,
                        zIndex: 0,
                      }}
                      animate={{
                        x: `${offsetVal * 105}%`,
                        scale: offsetVal === 0 ? 1 : 0.88,
                        opacity: offsetVal === 0 ? 1 : 0.35,
                        zIndex: offsetVal === 0 ? 10 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 22,
                        mass: 1.2,
                      }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="block h-full cursor-pointer"
                      >
                        <ProjectCard
                          project={project}
                          isActive={offsetVal === 0}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Arrows + Dots */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIndex((prev) => prev - 1)}
              className="p-4 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-green-500 hover:text-green-600 hover:shadow-lg transition-colors duration-300 group z-20"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </motion.button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {projects.map((_, i) => {
                const activeIndex =
                  ((index % projects.length) + projects.length) %
                  projects.length;
                return (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-8 h-2.5 bg-green-500"
                        : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to project ${i + 1}`}
                  />
                );
              })}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIndex((prev) => prev + 1)}
              className="p-4 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-green-500 hover:text-green-600 hover:shadow-lg transition-colors duration-300 group z-20"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
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
  project: ProjectItem;
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
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> System Size
            </div>
            <div className="font-semibold text-slate-100 text-sm sm:text-base">
              {project.systemSize}
            </div>
          </div>

          <div className="space-y-1 hidden sm:block">
            <div className="flex items-center gap-2 text-green-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4" /> Monthly Savings
            </div>
            <div className="font-semibold text-slate-100 text-sm sm:text-base">
              {project.monthlySavings}
            </div>
          </div>

          <div className="space-y-1 hidden sm:block">
            <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              <Battery className="w-3 h-3 sm:w-4 sm:h-4" /> Battery Backup
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
