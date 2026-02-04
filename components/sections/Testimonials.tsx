"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Zap, Play } from "lucide-react";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Ramesh Sharma",
    location: "Rajpur Road, Dehradun",
    systemSize: "5 kW",
    rating: 5,
    quote:
      "SolarX made the entire process simple and affordable. My electricity bill is almost zero now.",
    video: "/blog1.mp4",
    poster: "/images/Testimonial1.png",
  },
  {
    id: 2,
    name: "Priya Gupta",
    location: "Vasant Vihar, Dehradun",
    systemSize: "3 kW",
    rating: 5,
    quote:
      "The team explained everything clearly. Very professional installation.",
    video: "/blog2.mp4",
    poster: "/images/Testimonial2.png",
  },
  {
    id: 3,
    name: "Anil Thakur",
    location: "Selaqui, Dehradun",
    systemSize: "10 kW",
    rating: 5,
    quote:
      "My factory's power bill dropped by ₹40,000 per month. Best investment ever.",
    video: "/blog3.mp4",
    poster: "/images/Testimonial3.png",
  },
  {
    id: 4,
    name: "Sunita Rawat",
    location: "Mussoorie",
    systemSize: "4 kW",
    rating: 5,
    quote: "Living off-grid in the hills was a dream. SolarX made it happen.",
    video: "/blog4.mp4",
    poster: "/images/Testimonial4.png",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Clement Town, Dehradun",
    systemSize: "6 kW",
    rating: 5,
    quote:
      "No more power cuts during summers. My family is very happy with SolarX.",
    video: "/blog1.mp4",
    poster: "/images/Testimonial1.png",
  },
];

const Testimonials = () => {
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
            Real Stories,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-500">
              Real Savings
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it—see how SolarX is transforming homes
            and businesses across Uttarakhand.
          </p>
        </motion.div>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full group">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex gap-8 pl-8 w-max animate-marquee group-hover:paused">
          {/* Triplicate for smoother infinite loop */}
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
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .group:hover .group-hover\\:paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

// VideoCard Component
const VideoCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        // Autoplay fallback
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
      videoRef.current.load(); // Restores the poster image
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="shrink-0 w-[380px] group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-black/50"
    >
      {/* Video Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-slate-900/50">
        <video
          ref={videoRef}
          poster={testimonial.poster}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          playsInline
          loop
          preload="metadata"
        >
          <source src={testimonial.video} type="video/mp4" />
        </video>

        {/* Play Icon Removed */}

        {/* Bottom Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90" />
      </div>

      {/* Card Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        {/* Quote */}
        <p className="text-slate-100 text-base mb-6 leading-relaxed font-medium line-clamp-4 text-shadow-sm">
          "{testimonial.quote}"
        </p>

        {/* Client Info */}
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
