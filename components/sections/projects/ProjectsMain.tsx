"use client";

import { useState } from "react";
import ProjectHero from "./ProjectHero";
import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";
import { projects as fallbackProjects, ProjectCategory } from "./projectData";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";
import type { ProjectItem } from "@/lib/data";

interface ProjectsMainProps {
  projects?: ProjectItem[];
}

const ProjectsMain = ({ projects: propProjects }: ProjectsMainProps) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all",
  );

  // Use CMS data if available, else fallback
  const projectsList =
    propProjects && propProjects.length > 0 ? propProjects : fallbackProjects;

  const filteredProjects =
    activeCategory === "all"
      ? projectsList
      : projectsList.filter((project) => project.category === activeCategory);

  return (
    <>
      <ProjectHero />

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <ProjectGrid projects={filteredProjects} />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-linear-to-br from-green-500 to-emerald-600 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Growing List of Happy Clients?
            </h2>
            <p className="text-green-100 text-lg mb-10">
              Get a free consultation and see how much you can save with SolarX.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-green-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-green-100 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" /> Free Site Survey
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-white" /> Installed in 2-5 Days
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-white" /> 25-Year Warranty
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsMain;
