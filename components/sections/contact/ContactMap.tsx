"use client";

import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-4 shadow-xl border border-slate-100"
        >
          {/* Map Container */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-slate-200">
            {/* Using a styled iframe for Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74637174665!2d77.94709403248384!3d30.32540979219662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710321234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>

            {/* Overlay Title */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
              <h3 className="font-bold text-slate-800 text-lg mb-1">
                SolarX Headquarters
              </h3>
              <p className="text-sm text-slate-600">
                Rajpur Road, Dehradun, Uttarakhand 248001
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
