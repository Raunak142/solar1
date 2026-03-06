"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { SanityHomePage } from "@/lib/sanity-types";
import { urlFor } from "@/lib/sanity";

interface AboutProps {
  data?: SanityHomePage["aboutSection"];
}

const About = ({ data }: AboutProps) => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={
            data?.backgroundImage
              ? urlFor(data.backgroundImage).width(1920).height(1080).url()
              : "/images/hero-house.png"
          }
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
              {data?.badge || "Who We Are"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              {data?.heading ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: data.heading.replace(
                      "Indian Household",
                      '<br class="hidden md:block" /> Indian Household',
                    ),
                  }}
                />
              ) : (
                <>
                  Smart Solar Energy for the <br className="hidden md:block" />{" "}
                  Indian Household
                </>
              )}
            </h2>

            <div className="text-lg md:text-xl text-slate-300 leading-relaxed space-y-6">
              {data?.paragraph1 ? (
                <>
                  {data?.paragraph1 && <p>{data.paragraph1}</p>}
                  {data?.paragraph2 && <p>{data.paragraph2}</p>}
                </>
              ) : (
                <>
                  <p>
                    Kartik Solar Enterprises is creating a new way for Indian
                    homes to generate and use electricity. Focusing on Indian
                    homes and the Indian climate, we aim to meet real energy
                    needs with our innovative, affordable, and personalized
                    solar solutions.
                  </p>

                  <p>
                    We aim to simplify and modernize solar energy to provide the
                    Indian family with a practical and affordable energy
                    solution while retaining a focus on performance and the
                    long-term efficiency of the systems.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
