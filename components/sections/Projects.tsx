"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

import { projects as fallbackProjects } from "./projects/projectData";
import { client, urlFor } from "@/lib/sanity";
import { allProjectsQuery } from "@/lib/queries";
import type { SanityProject } from "@/lib/sanity-types";

interface ProjectItem {
  id: number | string;
  slug: string;
  title: string;
  category: string;
  location: string;
  systemSize: string;
  type: string;
  image: string;
  monthlySavings?: string;
  yearlySavings?: string;
  installationTime: string;
  panelType: string;
  inverter?: string;
  battery: string;
  content: string;
}

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [projectsList, setProjectsList] =
    useState<ProjectItem[]>(fallbackProjects);

  // Fetch projects from Sanity
  useEffect(() => {
    async function fetchProjects() {
      try {
        const sanityProjects: SanityProject[] =
          await client.fetch(allProjectsQuery);
        if (sanityProjects && sanityProjects.length > 0) {
          const transformed: ProjectItem[] = sanityProjects.map((p, i) => ({
            id: p._id || i,
            slug: p.slug?.current || `project-${i}`,
            title: p.title,
            category: p.category,
            location: p.location,
            systemSize: p.systemSize,
            type: p.type || p.category,
            image: p.image
              ? urlFor(p.image).width(1200).height(800).url()
              : "/images/Panel.png",
            monthlySavings: p.monthlySavings,
            yearlySavings: p.yearlySavings,
            installationTime: p.installationTime,
            panelType: p.panelType,
            inverter: p.inverter,
            battery: p.battery,
            content: "",
          }));
          setProjectsList(transformed);
        }
      } catch (error) {
        console.error("Error fetching projects from Sanity:", error);
      }
    }
    fetchProjects();
  }, []);

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
          <div className="flex justify-center">
            <div className="relative h-[250px] sm:h-[400px] lg:h-[600px] w-full max-w-[900px]">
              <AnimatePresence initial={false} custom={index}>
                {[-2, -1, 0, 1, 2].map((offsetVal) => {
                  const effectiveIndex = index + offsetVal;
                  const dataIndex =
                    ((effectiveIndex % projectsList.length) +
                      projectsList.length) %
                    projectsList.length;
                  const project = projectsList[dataIndex];

                  return (
                    <motion.div
                      key={effectiveIndex}
                      className="absolute top-0 left-0 w-full h-full"
                      initial={{
                        x: `${offsetVal * 110}%`,
                        scale: 0.9,
                        opacity: 0.5,
                        zIndex: 0,
                      }}
                      animate={{
                        x: `${offsetVal * 105}%`,
                        scale: offsetVal === 0 ? 1 : 0.9,
                        opacity: offsetVal === 0 ? 1 : 0.4,
                        zIndex: offsetVal === 0 ? 10 : 0,
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
            onClick={() => setIndex((prev) => prev + 1)}
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
