"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sun,
  User,
  ShieldCheck,
  Zap,
  Award,
  Users,
  Clock,
  MapPin,
  Leaf,
  Target,
  Lightbulb,
} from "lucide-react";

// Differentiators Data
const differentiators = [
  {
    icon: <User className="w-6 h-6 text-green-600" />,
    title: "Customer-First Approach",
    description:
      "We listen first and design later. Every system is customized to your energy needs, roof structure, and budget.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "End-to-End Service",
    description:
      "From consultation and documentation to installation and maintenance—we handle everything for you.",
  },
  {
    icon: <Zap className="w-6 h-6 text-green-600" />,
    title: "Premium Quality Products",
    description:
      "High-efficiency panels, reliable inverters, and strong mounting systems for long-lasting performance.",
  },
  {
    icon: <Award className="w-6 h-6 text-green-600" />,
    title: "Transparent Pricing",
    description:
      "No hidden costs. No confusing terms. Just honest, upfront solar solutions.",
  },
  {
    icon: <Clock className="w-6 h-6 text-green-600" />,
    title: "Strong After-Sales Support",
    description:
      "Monitoring, maintenance, and long-term service—because solar is a lifetime investment.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-green-600" />,
    title: "Local Expertise",
    description:
      "Based in Dehradun, Uttarakhand, with deep understanding of local climate and energy needs.",
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-house.png"
            alt="SolarX Installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            About SolarX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed"
          >
            Powering a cleaner, smarter future with reliable solar solutions.
          </motion.p>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide mb-6 uppercase">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Transforming How Uttarakhand <br className="hidden md:block" />{" "}
              Consumes Power
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              SolarX is a Dehradun-based solar energy company dedicated to
              transforming how Uttarakhand and India consume power. Founded with
              a strong belief in clean, affordable, and sustainable energy,
              SolarX delivers smart solar solutions that help homes and
              businesses reduce electricity bills while protecting the
              environment.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With a strong focus on innovation, quality, and long-term value,
              SolarX designs and installs high-performance solar systems for
              residential, commercial, and industrial clients. Our mission is
              simple—to make solar energy easy, reliable, and accessible for
              everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square md:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-team.png" // Using existing team image or founder placeholder
                  alt="Raunak - Founder of SolarX"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl hidden lg:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-medium opacity-90">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">
                Our Founder
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Meet Raunak
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  SolarX was founded by <strong>Raunak</strong>, a passionate
                  solar energy professional with{" "}
                  <strong>10+ years of experience</strong> in the renewable
                  energy industry.
                </p>
                <p>
                  Raunak began his journey in the power and energy sector with a
                  deep interest in sustainable technologies. Over the years, he
                  has worked on a wide range of solar projects—from small
                  residential rooftops to large commercial installations—gaining
                  hands-on expertise in system design, site analysis, energy
                  optimization, and project execution.
                </p>
                <p>
                  What truly sets him apart is his belief that solar is not just
                  a business—it is a{" "}
                  <span className="text-green-700 font-semibold">
                    responsibility toward future generations
                  </span>
                  . This vision became the foundation of SolarX.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHY SOLARX IS DIFFERENT */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why SolarX Is Different
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We don't just sell solar panels; we deliver complete energy
            solutions tailored to your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-green-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. MISSION & VISION */}
      <section className="bg-slate-900 py-20 lg:py-28 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-green-500/30">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To empower homes and businesses with clean energy while reducing
                dependency on traditional power sources—creating a greener,
                smarter, and more sustainable future.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-500/30">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To become one of India’s most trusted solar brands by delivering
                innovative solutions, unmatched service quality, and real
                environmental impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. TRUST INDICATORS (Optional) */}
      <section className="py-16 border-t border-slate-100 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "10+", icon: Clock },
              { label: "Happy Clients", value: "500+", icon: Users },
              { label: "Installations", value: "2 MW+", icon: Leaf },
              { label: "Local Support", value: "24/7", icon: ShieldCheck },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 text-green-600 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
