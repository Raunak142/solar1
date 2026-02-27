"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const AboutFounder = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-2, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 page-bg overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide mb-4 uppercase">
            From the Founder
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            It&apos;s About <span className="text-green-600">Empowerment</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Image with animation (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative"
          >
            <motion.div
              style={{ scale: imageScale, rotate: imageRotate }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/about-team.png"
                  alt="Raunak — Founder, Kartik Solar Enterprises"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              {/* Founder name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-xl">Raunak</p>
                <p className="text-green-300 text-sm font-medium">
                  Founder &amp; CEO, Kartik Solar Enterprises
                </p>
              </div>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-green-500/20" />
            <div className="absolute -z-10 top-8 -left-8 w-20 h-20 bg-green-500/15 rounded-full blur-2xl" />
          </motion.div>

          {/* Right: Quote content (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {/* Quote icon */}
            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-8">
              <Quote className="w-7 h-7 text-green-600" />
            </div>

            <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed">
              <p>
                The journey of establishing Kartik Solar Enterprises went beyond
                simply being able to point out solar panels on a building. It
                was about giving families the peace of mind with respect to
                their electricity situation. Lessening the monthly burden that
                stems from the uncertainty of and the value of their
                electricity, the cuts, and the bills.
              </p>
              <p>
                In a state that is as naturally beautiful as Uttarakhand, it is
                also our responsibility to choose the clean energy option. Every
                rooftop that turns to solar is, not only, saving themselves some
                money, but also, paving the way for a healthier and more
                sustainable future for all of us.
              </p>
              <p className="font-semibold text-slate-800 text-lg lg:text-xl italic">
                We are privileged to extend our families, one home and one
                rooftop at a time.
              </p>
            </div>

            {/* Founder signature block */}
            <div className="mt-10 pt-8 border-t border-slate-200 flex items-center gap-4">
              <div className="w-12 h-1 bg-green-500 rounded-full" />
              <div>
                <p className="font-bold text-slate-900 text-lg">Raunak</p>
                <p className="text-slate-500 text-sm">
                  Founder &amp; CEO, Kartik Solar Enterprises
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
