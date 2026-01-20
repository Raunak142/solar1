"use client";

import { motion } from "framer-motion";

const About = () => {
  const features = [
    { left: "Renewable Energy Source", right: "Energy Independence" },
    { left: "Low Maintenance Costs", right: "Environmentally Friendly" },
    { left: "Technological Advancement", right: "Increased Property Value" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-linear-to-br from-orange-200 via-amber-300 to-orange-400 relative">
                <div className="absolute inset-0 bg-linear-to-t from-amber-700/60 to-amber-400/30" />
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-linear-to-t from-amber-800 to-amber-600 transform -skew-y-6 origin-bottom-left" />
                <div className="absolute bottom-10 left-10 right-10 grid grid-cols-4 gap-2 transform -skew-y-6">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 sm:h-14 bg-linear-to-b from-blue-900 to-blue-700 rounded-sm border border-blue-500/30"
                    />
                  ))}
                </div>
                <div className="absolute top-1/4 left-1/3 text-6xl opacity-60">
                  👷
                </div>
                <div className="absolute top-1/3 right-1/3 text-5xl opacity-60">
                  👷‍♂️
                </div>
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-sky-300 to-sky-100/50" />
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 lg:bottom-8 lg:-left-8 bg-slate-800 text-white rounded-2xl p-6 shadow-xl"
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
