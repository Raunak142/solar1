"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "./projectData";

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence>
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectGrid;
