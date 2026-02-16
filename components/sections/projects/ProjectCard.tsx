"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Zap,
  Battery,
  Calendar,
  CreditCard,
  ArrowUpRight,
} from "lucide-react";
import { Project } from "./projectData";
import type { ProjectItem } from "@/lib/data";

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative h-[420px] w-full cursor-pointer"
    >
      {/* Card Container with Premium Hover Effects */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-green-500/10 group-hover:-translate-y-2 group-hover:border-green-200/50">
        {/* Image Container with Zoom Effect */}
        <div className="relative h-[65%] w-full overflow-hidden bg-slate-200">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Gradient Overlay - Intensifies on Hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

          {/* Shimmer Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </div>

          {/* Type Badge - Slides in */}
          <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:-translate-y-0.5">
            <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-slate-800 shadow-lg shadow-black/5 border border-white/50">
              {project.type}
            </span>
          </div>

          {/* System Size Badge */}
          <div className="absolute bottom-4 right-4 transform transition-all duration-300 group-hover:scale-105">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg shadow-green-500/30">
              <Zap className="w-4 h-4 fill-current" />
              {project.systemSize}
            </span>
          </div>

          {/* Arrow Icon - Appears on Hover */}
          <div className="absolute top-4 right-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-10">
            <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
              <ArrowUpRight className="w-5 h-5 text-green-600" />
            </div>
          </div>

          {/* Status Dot - Disappears on Hover */}
          <div className="absolute top-4 right-4 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
            <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg text-green-600 border border-white/50">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-white p-6 transition-all duration-500">
          {/* Title & Location */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-slate-900 mb-2 truncate transition-colors duration-300 group-hover:text-green-600">
              {project.title}
            </h3>
            <div className="flex items-center text-slate-500 text-sm font-medium">
              <MapPin className="w-4 h-4 mr-1.5 text-green-500" />
              {project.location}, Uttarakhand
            </div>
          </div>

          {/* Stats Row - Slides up on Hover */}
          <div className="absolute left-0 right-0 bottom-0 px-6 pb-6 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <CreditCard className="w-3.5 h-3.5 text-green-500" />
                <span className="font-semibold text-slate-700">
                  {project.monthlySavings || project.yearlySavings}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Battery className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-semibold text-slate-700">
                  {project.battery}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                <span className="font-semibold text-slate-700">
                  {project.installationTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect on Hover */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-green-500/30 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
