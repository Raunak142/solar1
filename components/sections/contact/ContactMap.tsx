"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  ArrowUpRight,
} from "lucide-react";

const ContactMap = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden page-bg">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group p-4 lg:p-6 bg-white/40 backdrop-blur-2xl border border-white/40 rounded-5xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
        >
          {/* Main Map Container with Glass Border */}
          <div className="relative aspect-video lg:aspect-21/9 w-full rounded-4xl overflow-hidden bg-slate-100 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.15286591!2d78.0411!3d30.3244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sClock%20Tower%2C%20Dehradun!5e0!3m2!1sen!2sin!4v1710321234567"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.3] contrast-[1.05] brightness-[1.02] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
            ></iframe>

            {/* Subtle Inner Glow Overlay */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-4xl" />
          </div>

          {/* Floating Glass Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-10 left-10 hidden md:block w-96 bg-white/70 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-none">
                  Kartik Solar HQ
                </h3>
                <p className="text-xs text-green-600 font-bold uppercase tracking-widest mt-1">
                  Our Flagship Hub
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-slate-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Clock Tower, Rajpur Road,
                  <br />
                  Dehradun, Uttarakhand 248001
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  +91 (555) 555-0123
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=30.3244,78.0411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 group/btn text-white text-[13px] font-bold rounded-2xl transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-slate-900/20"
              >
                <Navigation className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-y-0.5" />
                Directions
              </a>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-2xl transition-all duration-300 hover:border-green-500 hover:text-green-600 hover:shadow-sm">
                <MessageSquare className="w-3.5 h-3.5" />
                Chat Now
              </button>
            </div>
          </motion.div>

          {/* Interactive Icon in corner (Desktop Only) */}
          <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-2 px-3 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            Explorer View
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </motion.div>

        {/* Mobile Info (Visible only on small screens below the map) */}
        <div className="md:hidden mt-8 space-y-6 px-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Kartik Solar HQ
            </h3>
            <p className="text-slate-600">
              Clock Tower, Rajpur Road, Dehradun, Uttarakhand
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=30.3244,78.0411"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-bold rounded-2xl shadow-lg shadow-green-500/20"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
            <a
              href="tel:+915555550123"
              className="flex items-center justify-center w-14 h-14 bg-white border-2 border-slate-100 rounded-2xl text-slate-900"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
