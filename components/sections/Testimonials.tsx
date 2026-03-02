"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Quote } from "lucide-react";
import Image from "next/image";
import type { TestimonialItem } from "@/lib/data";

const Testimonials = ({
  testimonials,
}: {
  testimonials: TestimonialItem[];
}) => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Soft floating background gradient blur */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-200/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-200/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-green-100 text-green-700 font-semibold text-sm tracking-wide mb-6 border border-green-200 shadow-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Trusted by Homes & Businesses <br className="hidden md:block" />
            <span className="text-green-600">Across Uttarakhand</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Real experiences from families and businesses who switched to clean,
            reliable solar energy with Kartik Solar.
          </motion.p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: TestimonialItem;
  index: number;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Variations for staggered intro and resting tilt
  const rotation = index % 2 === 0 ? -1 : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: isMobile ? 0 : rotation,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={
        isMobile
          ? {}
          : {
              y: -12,
              scale: 1.03,
              rotate: index % 2 === 0 ? -2 : 2,
              transition: { duration: 0.3, ease: "easeOut" },
            }
      }
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-linear-to-br from-green-300/20 to-emerald-400/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-3xl" />

      <div className="relative h-full bg-white/70 backdrop-blur-md border border-white/80 rounded-xl p-8 shadow-xl shadow-slate-200/50 group-hover:shadow-2xl group-hover:shadow-green-900/10 group-hover:bg-white/90 transition-all duration-300 flex flex-col justify-between overflow-hidden">
        <div>
          {/* Customer Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-green-100 shadow-inner shrink-0">
              <Image
                src={testimonial.poster}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg leading-tight">
                {testimonial.name}
              </h4>
              <p className="text-slate-500 text-sm flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-green-600" />
                {testimonial.location}
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="relative">
            <p className="text-slate-700 leading-relaxed text-base italic">
              &quot;{testimonial.quote}&quot;
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < (testimonial.rating || 5)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-slate-200"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <Quote className="w-8 h-8 text-green-600/20 group-hover:text-green-600/40 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
