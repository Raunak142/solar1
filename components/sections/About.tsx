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
          alt="SolarX Installation"
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
              Transforming How Uttarakhand <br className="hidden md:block" />{" "}
              Consumes Power
            </h2>

            <div className="text-lg md:text-xl text-slate-300 leading-relaxed space-y-6">
              <p>
                SolarX is a Dehradun-based solar energy company dedicated to
                transforming how Uttarakhand and India consume power. Founded
                with a strong belief in clean, affordable, and sustainable
                energy, SolarX delivers smart solar solutions that help homes
                and businesses reduce electricity bills while protecting the
                environment.
              </p>
              <p>
                With a strong focus on innovation, quality, and long-term value,
                SolarX designs and installs high-performance solar systems for
                residential, commercial, and industrial clients. Our mission is
                simple—to make solar energy easy, reliable, and accessible for
                everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
