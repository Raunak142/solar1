"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const AboutIntro = () => {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide mb-6 uppercase">
            Our Story
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Transforming How <span className="text-green-600">Uttarakhand</span>{" "}
            Consumes Power
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Founded in the heart of Dehradun, SolarX began with a simple yet
              ambitious vision: to make clean, renewable energy accessible to
              every household and business in the Himalayas.
            </p>
            <p>
              We realized that while the sun shines brightly over our state,
              most people were still dependent on expensive and unreliable grid
              power. We set out to bridge this gap by bringing world-class solar
              technology to our local communities.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  Local Expertise
                </h4>
                <p className="text-slate-500 text-sm">
                  Deep understanding of mountain terrain & weather.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  Global Standards
                </h4>
                <p className="text-slate-500 text-sm">
                  Tier-1 panels and top-rated inverters only.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/Field Panel.png" // Placeholder, assuming this exists
              alt="SolarX Team Installation"
              fill
              className="object-cover"
            />

            {/* Floating Stat Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20 max-w-[200px]"
            >
              <p className="text-4xl font-bold text-green-600 mb-1">500+</p>
              <p className="text-slate-600 font-medium text-sm">
                Happy Families Switched to Solar
              </p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-10 -right-10 w-24 h-24 bg-green-500/20 rounded-full blur-2xl" />
          <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;
