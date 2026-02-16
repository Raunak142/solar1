import Header from "@/components/sections/Header";
import ProjectsMain from "@/components/sections/projects/ProjectsMain";
import Footer from "@/components/sections/Footer";
import { getProjects } from "@/lib/data";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

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
