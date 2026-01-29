"use client";

import { ProjectCategory } from "./projectData";

interface ProjectFiltersProps {
  activeCategory: ProjectCategory | "all";
  setActiveCategory: (category: ProjectCategory | "all") => void;
}

const ProjectFilters = ({
  activeCategory,
  setActiveCategory,
}: ProjectFiltersProps) => {
  const categories: { id: ProjectCategory | "all"; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "offgrid", label: "Off-Grid" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`px-6 py-2.5 rounded-full text-sm base:text-base font-semibold transition-all duration-300 ${
            activeCategory === cat.id
              ? "bg-green-600 text-white shadow-lg shadow-green-600/30 scale-105"
              : "bg-white text-slate-600 border border-slate-200 hover:border-green-500 hover:text-green-600"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
