"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-house.png"
          alt="Kartik Solar Installation"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-semibold text-xs tracking-wide mb-6 uppercase backdrop-blur-sm">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              Smart Solar Energy for the <br className="hidden md:block" />{" "}
              Indian Household
            </h2>

            <div className="text-lg md:text-xl text-slate-300 leading-relaxed space-y-6">
              <p>
                Kartik Solar Enterprises is creating a new way for Indian homes
                to generate and use electricity. Focusing on Indian homes and
                the Indian climate, we aim to meet real energy needs with our
                innovative, affordable, and personalized solar solutions.
              </p>
              <p>
                Kartik Solar Enterprises understands that in the varying and
                often extreme weather conditions common to India, solar energy
                harnessing systems must be durable and tough. We hope to provide
                families with the ability to be energy independent while also
                diminishing the energy and power generation issues that plague
                modern society.
              </p>
              <p>
                We aim to simplify and modernize solar energy to provide the
                Indian family with a practical and affordable energy solution
                while retaining a focus on performance and the long-term
                efficiency of the systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
