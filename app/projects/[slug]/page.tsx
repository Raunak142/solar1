import { projects } from "@/components/sections/projects/projectData";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Zap,
  Battery,
  IndianRupee,
  Shield,
  CheckCircle,
} from "lucide-react";

export function generateStaticParams() {
  return projects.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = true;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-slate-900 mt-20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full pt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>

            <div className="space-y-6 max-w-4xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-sm font-bold uppercase tracking-wider">
                {project.type}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-200 text-lg font-medium pt-2">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-500" />
                  {project.location}, Uttarakhand
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  {project.systemSize} System
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content & Spec Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 lg:py-24 -mt-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                Project Overview
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-800 [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:pl-1 [&_strong]:text-slate-900 [&_blockquote]:border-l-4 [&_blockquote]:border-green-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-slate-700 [&_blockquote]:bg-slate-50 [&_blockquote]:p-6 [&_blockquote]:rounded-r-xl">
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              </div>
            </div>

            {/* Installation Gallery Placeholder (Optional) */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Installation Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100 rounded-xl h-48 flex items-center justify-center text-slate-400 font-medium">
                  Before Installation
                </div>
                <div className="bg-green-50 rounded-xl h-48 flex items-center justify-center text-green-600 font-bold border-2 border-green-100">
                  After SolarX
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 sticky top-32 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Technical Specifications
              </h3>

              <div className="space-y-6">
                <div className="flex items-start justify-between pb-6 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Panel Type</span>
                  <span className="text-slate-900 font-bold text-right max-w-[60%]">
                    {project.panelType}
                  </span>
                </div>

                <div className="flex items-start justify-between pb-6 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Inverter</span>
                  <span className="text-slate-900 font-bold text-right max-w-[60%]">
                    {project.inverter || "Standard String Inverter"}
                  </span>
                </div>

                <div className="flex items-start justify-between pb-6 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">
                    Battery Backup
                  </span>
                  <span className="text-slate-900 font-bold text-right max-w-[60%] flex gap-2 items-center justify-end">
                    {project.battery === "No" ? (
                      <span className="text-slate-400">None</span>
                    ) : (
                      <span className="text-amber-600 flex items-center gap-1">
                        <Battery className="w-4 h-4" /> Integrated
                      </span>
                    )}
                  </span>
                </div>

                <div className="flex items-start justify-between pb-6 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">
                    Install Time
                  </span>
                  <span className="text-slate-900 font-bold text-right max-w-[60%]">
                    {project.installationTime}
                  </span>
                </div>

                <div className="pt-2">
                  <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100">
                    <span className="block text-green-600 text-sm font-bold uppercase tracking-wider mb-1">
                      Estimated Savings
                    </span>
                    <span className="block text-3xl font-extrabold text-slate-900">
                      {project.monthlySavings || project.yearlySavings}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-center transition-colors shadow-lg"
                >
                  Get a Quote Like This
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
