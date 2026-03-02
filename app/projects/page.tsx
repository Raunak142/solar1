import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import ProjectsMain from "@/components/sections/projects/ProjectsMain";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { getProjects } from "@/lib/data";
import { getProjectsMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/structured-data";

// ISR: Revalidate every 1 hour
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return getProjectsMetadata();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="pt-24 md:pt-28 page-bg min-h-screen">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <Header />
      <ProjectsMain projects={projects} />
      <Footer />
    </main>
  );
}
