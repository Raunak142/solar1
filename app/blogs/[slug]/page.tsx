import { blogPosts } from "@/components/sections/blogData";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Clock } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = true; // Allow dynamic paths not generated at build time

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full bg-slate-900 mt-20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-6 w-full pt-12">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>

            <div className="space-y-4">
              <span
                className={`inline-block px-3 py-1 rounded-full ${post.color || "bg-green-500"} text-white text-xs font-bold uppercase tracking-wider`}
              >
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm font-medium pt-2">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />5 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-800 [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:pl-1 [&_strong]:text-slate-900 [&_blockquote]:border-l-4 [&_blockquote]:border-green-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-700 [&_blockquote]:bg-slate-50 [&_blockquote]:p-4 [&_blockquote]:rounded-r-lg">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Share / Tags footer if needed (Placeholder) */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-slate-500 font-medium text-center">
            Share this article to help others switch to solar!
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
