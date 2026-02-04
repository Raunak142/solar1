"use client";

import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/images/Forest Panel.png')", // Using existing asset
          }}
        />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-green-500/20 border border-green-500/30 text-green-300 font-semibold rounded-full text-sm mb-6 backdrop-blur-md">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            We&apos;re Here to <span className="text-green-400">Help</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium">
            Whether you have questions about our solar solutions, need a quote,
            or want to learn more about renewable energy, our team is ready to
            assist you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
