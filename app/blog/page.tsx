import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Blog from "@/components/sections/Blog";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { getBlogPosts } from "@/lib/data";
import { getBlogsListingMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/structured-data";

// ISR: Revalidate every 1 hour
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return getBlogsListingMetadata();
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="pt-20 page-bg min-h-screen">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Header />
      <Blog posts={posts} />
      <Footer />
    </main>
  );
}
