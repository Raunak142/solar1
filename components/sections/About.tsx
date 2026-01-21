"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const features = [
    { left: "Renewable Energy Source", right: "Energy Independence" },
    { left: "Low Maintenance Costs", right: "Environmentally Friendly" },
    { left: "Technological Advancement", right: "Increased Property Value" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex w-full gap-12 items-center">
          {/* Left Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="h-[85vh] w-[40vw] rounded-2xl overflow-hidden shadow-xl relative">
              <Image
                src="/images/about-team.png"
                alt="Our expert solar team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-2 lg:bottom-8 lg:-left-8 bg-slate-800 text-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-4xl font-bold">
                25<span className="text-green-400">+</span>
              </div>
              <div className="text-sm text-slate-300 mt-1">
                Years Of
                <br />
                Experience
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-green-600 font-semibold text-sm tracking-wider mb-4">
              ABOUT US
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We Provide The Best Solar Energy Solutions
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed">
              The solar solution company specializes in providing innovative,
              eco-friendly energy systems that harness the sun's power, reducing
              carbon footprints and energy costs for residential, commercial,
              and industrial clients worldwide.
            </p>

            {/* Features Grid */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                      {feature.left}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                      {feature.right}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button with Fixed Slide Effect */}
            <button className="group px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-colors overflow-hidden">
              <span className="relative block h-6 overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Learn More
                </span>
                <span className="absolute top-0 left-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                  Learn More
                </span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
