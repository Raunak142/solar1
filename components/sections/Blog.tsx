"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "./blogData";
import type { BlogPostItem } from "@/lib/data";

interface BlogProps {
  posts?: BlogPostItem[];
  limit?: number;
}

const Blog = ({ posts: propPosts, limit }: BlogProps) => {
  // Use prop data if available, fall back to hardcoded blogData
  const posts: BlogPostItem[] =
    propPosts && propPosts.length > 0
      ? propPosts
      : blogPosts.map((post) => ({
          ...post,
          slug: post.slug,
          image: post.image,
        }));

  const displayedPosts =
    limit && posts.length > 0 ? posts.slice(0, limit) : posts;

  return (
    <section
      id="blog"
      className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide mb-4 uppercase">
              Learn About Solar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Solar <span className="text-green-600">Knowledge Hub</span> for
              Smarter Energy Decisions
            </h2>
            <p className="text-lg text-slate-600 mt-4 leading-relaxed">
              Explore expert guides, cost-saving tips, and government updates
              designed to help Indian homeowners understand solar energy, reduce
              electricity bills, and make informed decisions.
            </p>
          </motion.div>

          {/* View All Button */}
          {limit && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/blog"
                className="group px-6 py-3 bg-white border border-slate-200 hover:border-green-500 text-slate-700 hover:text-green-600 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                View All Articles
                <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-green-100 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          )}
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blogs/${post.slug}`} className="group block h-full">
                <div className="h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col transition-all duration-500 ease-out hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-2 hover:border-green-500/30">
                  {/* Image Container */}
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70" />

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`inline-flex items-center px-3 py-1.5 rounded-full ${post.color || "bg-slate-800"} text-white text-xs font-bold shadow-lg transform transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Tag className="w-3 h-3 mr-1.5" />
                        {post.category}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 z-10 transform translate-y-[-10px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-700 text-xs font-bold shadow-lg">
                        <Calendar className="w-3 h-3 mr-1.5 text-green-500" />
                        {post.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 relative bg-white">
                    {/* Meta Info - Author */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-3">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <span>By {post.author}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-sm font-bold text-green-600 flex items-center gap-2 group/btn">
                        Read Full Article →
                      </span>

                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 transform transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                      </div>
                    </div>

                    {/* Bottom Border Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-green-400 to-emerald-600 transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 origin-left" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
