"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Calendar } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-green-600 text-white text-center p-10 lg:p-20 shadow-2xl shadow-green-500/30"
        >
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-800/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Ready to Switch to Solar?
            </h2>
            <p className="text-lg text-green-50 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Join hundreds of families who are already saving money and
              enjoying reliable power with Kartik Solar Enterprises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-700/50 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 hover:border-white/40 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="mt-8 text-sm text-green-200/80 font-medium">
              Free consultation • Subsidy guidance • Long-term warranty support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
