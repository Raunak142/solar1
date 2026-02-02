"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogPosts, BlogPost } from "@/components/sections/blogData";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { client, urlFor } from "@/lib/sanity";
import { postBySlugQuery } from "@/lib/queries";
import type { SanityPost } from "@/lib/sanity-types";
import { PortableText } from "@portabletext/react";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [sanityContent, setSanityContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const sanityPost: SanityPost = await client.fetch(postBySlugQuery, {
          slug,
        });

        if (sanityPost) {
          // Transform Sanity post to match component format
          const transformedPost: BlogPost = {
            id: sanityPost._id,
            slug: sanityPost.slug.current,
            title: sanityPost.title,
            category: sanityPost.category,
            description: sanityPost.description,
            image: sanityPost.image
              ? urlFor(sanityPost.image).width(1200).height(800).url()
              : "/images/feature-wind.png",
            date: new Date(sanityPost.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            author: sanityPost.author,
            color: sanityPost.color,
            content: "", // Will use portable text instead
          };
          setPost(transformedPost);
          setSanityContent(sanityPost.content);
        } else {
          // Fallback to hardcoded data
          const foundPost = blogPosts.find((p) => p.slug === slug);
          setPost(foundPost || null);
        }
      } catch (error) {
        console.error("Error fetching post from Sanity:", error);
        // Fallback to hardcoded data
        const foundPost = blogPosts.find((p) => p.slug === slug);
        setPost(foundPost || null);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white pt-20">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <p className="text-slate-600">Loading...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-white pt-20">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Post Not Found
          </h1>
          <Link href="/blog" className="text-green-600 hover:underline">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-20">
      <Header />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-8">
          <span
            className={`inline-flex items-center px-3 py-1.5 rounded-full ${post.color} text-white text-sm font-bold mb-4`}
          >
            <Tag className="w-4 h-4 mr-1.5" />
            {post.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          {sanityContent ? (
            <PortableText
              value={sanityContent}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-6 text-slate-700 leading-relaxed">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                      {children}
                    </h3>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-green-500 pl-6 italic my-8 text-slate-600">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-inside mb-6 space-y-2 text-slate-700">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-inside mb-6 space-y-2 text-slate-700">
                      {children}
                    </ol>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-bold text-slate-900">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                },
              }}
            />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
