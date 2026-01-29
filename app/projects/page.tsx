import Header from "@/components/sections/Header";
import ProjectsMain from "@/components/sections/projects/ProjectsMain";
import Footer from "@/components/sections/Footer";

export default function ProjectsPage() {
  return (
    <main className="pt-20 bg-[#EDF7ED] min-h-screen">
      <Header />
      <ProjectsMain />
      <Footer />
    </main>
  );
}
