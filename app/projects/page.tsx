import Header from "@/components/sections/Header";
import ProjectsMain from "@/components/sections/projects/ProjectsMain";
import Footer from "@/components/sections/Footer";
import { getProjects } from "@/lib/data";

// ISR: Revalidate every 1 hour
export const revalidate = 3600;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="pt-20 bg-[#EDF7ED] min-h-screen">
      <Header />
      <ProjectsMain projects={projects} />
      <Footer />
    </main>
  );
}
