"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

// Team members — update names, roles, and images with real team photos
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Raunak Aggarwal",
    role: "Founder & Solar Consultant",
    image: "/images/about-team.png",
    tagline: "Vision & Leadership",
  },
  {
    id: 2,
    name: "Solar Engineer",
    role: "Lead Installation Engineer",
    image: "/images/Field Panel.png",
    tagline: "Precision & Quality",
  },
  {
    id: 3,
    name: "Operations Lead",
    role: "Site & Project Manager",
    image: "/images/House.png",
    tagline: "Seamless Execution",
  },
  {
    id: 4,
    name: "Support Specialist",
    role: "Customer Success",
    image: "/images/Forest Panel.png",
    tagline: "Client Satisfaction",
  },
];

const AboutTeam = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Meet the People Behind Kartik Solar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Our experienced team of engineers, solar experts, and support
            professionals work together to deliver reliable clean energy
            solutions across Uttarakhand.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay with Social Icons (Optional) */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* Icons could go here if needed, keeping it clean for now as per minimal background request, 
                        but adding a subtle gradient for text readability if text were over image */}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-slate-500 font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-green-600 font-semibold uppercase tracking-wider bg-green-50 inline-block px-2 py-1 rounded-md">
                  {member.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
