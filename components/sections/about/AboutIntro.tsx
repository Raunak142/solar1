"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Globe } from "lucide-react";

const AboutIntro = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Image translates from top to bottom as section scrolls through
  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 300]);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto page-bg overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
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
            Sunshine to <span className="text-green-600">Savings</span> —
            Beginning Our Journey
          </h2>
          <div className="space-y-5 text-base lg:text-lg text-slate-600 leading-relaxed">
            <p>
              Kartik Solar Enterprises started in Dehradun with the belief that
              clean energy should not be a luxury. They believed that energy
              should be accessible to every Indian family.
            </p>
            <p>
              As residents of Uttarakhand, we noticed an anomaly. There was an
              abundance of sunlight, yet, many homes were still struggling with
              rising electricity bills. Because of frequent power-cuts, families
              were forced to rely on expensive grid electricity. Year after year
              families were spending more money, but were receiving less
              reliability in return.
            </p>
            <p className="font-semibold text-slate-800 text-lg lg:text-xl">
              That&apos;s where our journey began.
            </p>
            <p>
              We started Kartik Solar Enterprises with the purpose of bringing
              simple and affordable solar solutions to the community. We build
              solar solutions meant for Indian rooftops, for mountain regions,
              and for all kinds of weather. Every installation democratizes
              energy for the family and is an investment towards a more
              sustainable future.
            </p>
            <p>
              Currently, our work is more than just about installing panels. We
              are working towards Uttarakhand&apos;s goal of a cleaner and more
              independent energy future. Our focus is on building trust and
              reducing the financial burden for households. We are also working
              on constructing Uttarakhand&apos;s future.
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
                  We understand Uttarakhand&apos;s terrain, weather patterns,
                  and household energy needs — allowing us to design systems
                  that truly work in local conditions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  Global Quality Standards
                </h4>
                <p className="text-slate-500 text-sm">
                  We combine local understanding with high-quality solar
                  technology, ensuring long-lasting performance and dependable
                  energy for decades.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Image with scroll-linked motion */}
        <motion.div style={{ y: imageY }} className="relative">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Field Panel.png"
                alt="Kartik Solar Team Installation"
                fill
                className="object-cover"
              />

              {/* Floating Stat Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;
