"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    [
      {
        quote:
          "Amazing Experience With Solar Solution Company. Their Team Is Knowledgeable And Supportive Throughout The Process.",
        name: "Mary Parker",
        role: "CEO, Digiboost",
        avatar: "👩‍💼",
        rating: 4,
      },
      {
        quote:
          "Incredible Service And Expertise! Our Solar Panels Are Performing Beyond Expectations. The Process Was Smooth, From Start To End.",
        name: "James Tucker",
        role: "CEO, CleanSweep",
        avatar: "👨‍💼",
        rating: 5,
      },
    ],
    [
      {
        quote:
          "The team was professional and efficient. Our energy bills have dropped significantly since installation. Highly recommend their services!",
        name: "Sarah Johnson",
        role: "Director, EcoTech",
        avatar: "👩‍🦰",
        rating: 5,
      },
      {
        quote:
          "Outstanding quality and customer service. They handled everything from permits to installation seamlessly. Very impressed with the results.",
        name: "Michael Chen",
        role: "CEO, GreenVentures",
        avatar: "🧑‍💼",
        rating: 5,
      },
    ],
    [
      {
        quote:
          "Best investment we've made for our business. The solar system pays for itself and the support team is always available when needed.",
        name: "Emily Davis",
        role: "Owner, SunCafe",
        avatar: "👩",
        rating: 4,
      },
      {
        quote:
          "From consultation to installation, everything was handled professionally. Our factory now runs on 80% solar power. Fantastic results!",
        name: "Robert Wilson",
        role: "COO, BuildRight Inc",
        avatar: "👨‍🔧",
        rating: 5,
      },
    ],
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-green-600 font-semibold text-sm tracking-wider mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Our Clients Review
          </h2>
        </motion.div>

        {/* Testimonials Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {testimonials[currentIndex].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
                >
                  {/* Quote */}
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      {/* Name & Role */}
                      <div>
                        <div className="font-bold text-slate-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-slate-500 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 bg-green-500 px-3 py-2 rounded-lg">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
