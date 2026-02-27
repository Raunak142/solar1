import { projects } from "@/components/sections/projects/projectData";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Zap,
  Battery,
  IndianRupee,
  Shield,
  CheckCircle,
  Clock,
  Sun,
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
      <div className="relative h-[65vh] min-h-[620px] w-full bg-slate-900 mt-20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full pt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>

            <div className="space-y-5 max-w-4xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-sm font-bold uppercase tracking-wider">
                {project.type}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {project.title} —{" "}
                <span className="text-green-400">
                  {project.tagline || "Smart Solar Solution"}
                </span>
              </h1>

              <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                {project.shortDescription ||
                  "A customized rooftop solar system designed to reduce electricity expenses and provide reliable, clean energy for everyday household needs."}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-200 text-sm font-medium pt-2">
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 text-green-400" />
                  {project.location}, Uttarakhand
                </span>
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <Zap className="w-4 h-4 text-amber-400" />
                  {project.systemSize} {project.type} Installation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content & Spec Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 lg:py-24 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                Project Overview
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-800 [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:flex [&_h3]:items-center [&_h3]:gap-2 [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-3 [&_li]:pl-0 [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:bg-slate-50 [&_li]:p-4 [&_li]:rounded-xl [&_li]:border [&_li]:border-slate-100 [&_li]:text-base [&_strong]:text-slate-900 [&_blockquote]:border-l-4 [&_blockquote]:border-green-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-slate-700 [&_blockquote]:bg-slate-50 [&_blockquote]:p-6 [&_blockquote]:rounded-r-xl">
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              </div>
            </div>

            {/* Installation Impact Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-amber-600" />
                </div>
                Installation Impact
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-300" />
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Before Solar
                  </span>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {project.impactBefore ||
                      "High electricity bills and dependency on grid power."}
                  </p>
                </div>
                <div className="relative bg-green-50 rounded-2xl p-8 border-2 border-green-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-green-600 mb-4 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    After Kartik Solar
                  </span>
                  <p className="text-slate-700 text-base leading-relaxed font-medium">
                    {project.impactAfter ||
                      "Lower monthly expenses, reliable energy generation, and long-term savings."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 sticky top-32 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                Technical Specifications
              </h3>

              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-500 text-sm font-medium">
                    Panel Type
                  </span>
                  <span className="text-slate-900 font-bold text-sm text-right max-w-[60%]">
                    {project.panelType}
                  </span>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-500 text-sm font-medium">
                    Inverter
                  </span>
                  <span className="text-slate-900 font-bold text-sm text-right max-w-[60%]">
                    {project.inverter || "Standard String Inverter"}
                  </span>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-500 text-sm font-medium">
                    Battery Backup
                  </span>
                  <span className="text-sm font-bold text-right max-w-[60%]">
                    {project.battery === "No" ? (
                      <span className="text-slate-400 bg-slate-50 px-3 py-1 rounded-full text-xs">
                        Not Required (On-Grid)
                      </span>
                    ) : (
                      <span className="text-amber-600 flex items-center gap-1.5 justify-end">
                        <Battery className="w-4 h-4 shrink-0" />
                        {project.battery === "Yes"
                          ? "Integrated"
                          : project.battery}
                      </span>
                    )}
                  </span>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-500 text-sm font-medium">
                    Install Time
                  </span>
                  <span className="text-slate-900 font-bold text-sm text-right max-w-[60%] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {project.installationTime}
                  </span>
                </div>
              </div>

              {/* Estimated Savings */}
              <div className="mt-8 bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100">
                <span className="flex items-center justify-center gap-1.5 text-green-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <IndianRupee className="w-3.5 h-3.5" />
                  Estimated Savings
                </span>
                <span className="block text-3xl font-extrabold text-slate-900">
                  {project.monthlySavings || project.yearlySavings}
                </span>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="group block w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-center transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                >
                  <span className="flex items-center justify-center gap-2">
                    {project.ctaText || "Get Your Free Solar Quote"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
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
