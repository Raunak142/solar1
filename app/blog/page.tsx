import Header from "@/components/sections/Header";
import Blog from "@/components/sections/Blog";
import Footer from "@/components/sections/Footer";
import { getBlogPosts } from "@/lib/data";

// ISR: Revalidate every 1 hour
export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="pt-20 bg-[#EDF7ED] min-h-screen">
      <Header />
      <Blog posts={posts} />
      <Footer />
    </main>
  );
}
