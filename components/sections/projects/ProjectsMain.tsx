"use client";

import { useState } from "react";
import ProjectHero from "./ProjectHero";
import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";
import { projects, ProjectCategory } from "./projectData";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";

const ProjectsMain = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all",
  );

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProjectHero />

      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Explore Our Solar Installations
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Filter by category to see how we are transforming homes and
            businesses across Uttarakhand.
          </p>
        </div>

        <ProjectFilters
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <ProjectGrid projects={filteredProjects} />
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-white border-y border-slate-100 py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1">500+</h3>
              <p className="text-slate-500 font-medium">Installations</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1">
                10+ Years
              </h3>
              <p className="text-slate-500 font-medium">Experience</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1">
                25 Years
              </h3>
              <p className="text-slate-500 font-medium">Performance Warranty</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1">100%</h3>
              <p className="text-slate-500 font-medium">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-4 text-center bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want a solar system like these?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Get a customized solar solution for your home or business. Free site
            survey and consultation included.
          </p>
          <button className="group inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/30">
            Get Free Solar Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsMain;
