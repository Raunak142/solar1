"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { TestimonialItem } from "@/lib/data";

const Testimonials = ({
  testimonials,
}: {
  testimonials: TestimonialItem[];
}) => {
  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-green-400 font-medium text-sm tracking-wide mb-6 backdrop-blur-sm">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Real Families, Real Experiences,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-500">
              Real Savings
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it — hear from families and
            businesses who switched to solar with Kartik Solar Enterprises and
            now enjoy lower electricity bills, reliable power, and peace of
            mind.
          </p>
        </motion.div>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full group">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex gap-8 pl-8 w-max marquee-track">
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <VideoCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
              />
            ),
          )}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-33.33%, 0, 0);
          }
        }
        .marquee-track {
          animation: marquee 80s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .group:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const VideoCard = ({ testimonial }: { testimonial: TestimonialItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="shrink-0 w-[380px] group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-black/50"
    >
      <div className="relative aspect-3/4 overflow-hidden bg-slate-900/50">
        <video
          ref={videoRef}
          {...(testimonial.poster ? { poster: testimonial.poster } : {})}
          className="w-full h-full object-cover"
          playsInline
          loop
          preload="metadata"
        >
          {testimonial.video && (
            <source src={testimonial.video} type="video/mp4" />
          )}
        </video>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <p className="text-slate-100 text-base mb-6 leading-relaxed font-medium line-clamp-4 text-shadow-sm">
          &quot;{testimonial.quote}&quot;
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <p className="font-bold text-white text-sm tracking-wide">
              {testimonial.name}
            </p>
            <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3" />
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
