import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "@/components/sections/blogData";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/data";

// ISR: Revalidate every 1 hour
export const revalidate = 3600;

// Pre-build all known blog slugs at build time
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Calculate read time (approximate)
  const readTime = post.content ? Math.ceil(post.content.length / 1000) : 5;

  // Get related posts (exclude current post, take up to 3)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen page-bg">
      <Header />

      <article>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-slate-900">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-white/20"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </Link>

            {/* Category */}
            <div className="flex justify-center mb-6">
              <span
                className={`inline-flex items-center px-4 py-1.5 rounded-full ${post.color} text-white text-sm font-bold shadow-lg shadow-green-900/20 tracking-wide uppercase`}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-full">
                  <User className="w-4 h-4 text-green-400" />
                </div>
                <span>{post.author}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-full">
                  <Calendar className="w-4 h-4 text-blue-400" />
                </div>
                <span>{post.date}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-full">
                  <Tag className="w-4 h-4 text-purple-400" />
                </div>
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="relative -mt-16 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-white">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Body */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-green-600 hover:prose-a:text-green-700">
                {post.sanityContent ? (
                  <PortableText
                    value={post.sanityContent}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="mb-6">{children}</p>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-3xl mt-12 mb-6 pb-4 border-b border-slate-100">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-2xl mt-8 mb-4">{children}</h3>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-green-500 pl-6 py-2 italic my-8 bg-green-50/50 rounded-r-lg text-slate-700">
                            {children}
                          </blockquote>
                        ),
                      },
                    }}
                  />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                )}
              </div>

              {/* Tags / Share */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">
                    Tags:
                  </span>
                  <span className="text-slate-600 text-sm hover:text-green-600 cursor-pointer">
                    #{post.category}
                  </span>
                  <span className="text-slate-600 text-sm hover:text-green-600 cursor-pointer">
                    #SolarEnergy
                  </span>
                  <span className="text-slate-600 text-sm hover:text-green-600 cursor-pointer">
                    #Sustainability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* AUTHOR BIO & RELATED POSTS */}
      <section className="page-bg py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Author Bio */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-16 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border-4 border-green-50">
              <User className="w-8 h-8 text-slate-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Written by {post.author}
              </h3>
              <p className="text-slate-600 mb-4">
                Expert in renewable energy solutions and sustainable living.
                Dedicated to helping Indian homeowners transition to clean
                power.
              </p>
              <Link
                href="/about"
                className="text-green-600 font-semibold hover:text-green-700 text-sm inline-flex items-center gap-1"
              >
                View Verified Profile{" "}
                <ArrowLeft className="w-3 h-3 rotate-180" />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Related Articles
            </h2>
            <Link
              href="/blog"
              className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1"
            >
              View All <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blogs/${relatedPost.slug}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-green-200"
              >
                <div className="relative aspect-video bg-slate-100 overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2">
                    <span
                      className={`${relatedPost.color || "bg-slate-700"} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide`}
                    >
                      {relatedPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span>{relatedPost.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
