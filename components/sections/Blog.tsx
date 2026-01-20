"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Blog = () => {
  const [showAll, setShowAll] = useState(false);

  const allPosts = [
    {
      title: "How to choose the solar panels for your home",
      date: "Mar 9, 2024",
      readTime: "6 min to read",
      image: "👷‍♂️🔆",
      bgGradient: "from-amber-300 via-orange-400 to-amber-500",
    },
    {
      title: "Solar energy's path to tomorrow a glimpse into the future",
      date: "Mar 7, 2024",
      readTime: "8 min to read",
      image: "🌬️🔋",
      bgGradient: "from-sky-400 via-blue-500 to-sky-600",
    },
    {
      title: "How you can earn with solar energy?",
      date: "Jan 6, 2024",
      readTime: "9 min to read",
      image: "👨‍🔧☀️",
      bgGradient: "from-sky-300 via-blue-400 to-sky-500",
    },
    {
      title: "The environmental impact of switching to solar power",
      date: "Jan 2, 2024",
      readTime: "7 min to read",
      image: "🌍🌱",
      bgGradient: "from-green-400 via-emerald-500 to-green-600",
    },
    {
      title: "Understanding solar panel maintenance and care",
      date: "Dec 28, 2023",
      readTime: "5 min to read",
      image: "🔧⚙️",
      bgGradient: "from-slate-400 via-slate-500 to-slate-600",
    },
    {
      title: "Solar incentives and tax benefits explained",
      date: "Dec 20, 2023",
      readTime: "10 min to read",
      image: "💰📊",
      bgGradient: "from-amber-400 via-yellow-500 to-amber-600",
    },
  ];

  const visiblePosts = showAll ? allPosts : allPosts.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Our newest posts on renewable energy for living.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end items-start lg:items-end gap-4"
          >
            <p className="text-slate-600 text-right max-w-md">
              Discover the positive effects of choosing sustainable energy and
              tips for building a more eco-friendly lifestyle.
            </p>
            <div className="flex items-center gap-2">
              {/* Slide Button */}
              <button className="group px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors overflow-hidden">
                <span className="relative block h-5 overflow-hidden">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    Explore More
                  </span>
                  <span className="absolute top-0 left-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                    Explore More
                  </span>
                </span>
              </button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors"
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visiblePosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${post.bgGradient}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-500">
                        {post.image}
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-sky-400/50 to-transparent" />
                  </div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                    >
                      <svg
                        className="w-6 h-6 text-green-500 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-500 mb-2">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-400 rounded-full" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* See All / Show Less Button with Fixed Slide Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group px-8 py-4 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold rounded-full transition-all duration-300 overflow-hidden"
          >
            <span className="relative flex items-center justify-center gap-2 h-5 overflow-hidden">
              <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                {showAll ? "Show Less" : "See All Articles"}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <span className="absolute top-0 left-0 flex items-center gap-2 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                {showAll ? "Show Less" : "See All Articles"}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
