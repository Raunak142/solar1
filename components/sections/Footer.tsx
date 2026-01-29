"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const essentialPages = [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" }, // Changed to real page
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/contact" },
  ];

  const quickLinks = [
    { label: "Residential Solar", href: "/#services" },
    { label: "Commercial Solar", href: "/#services" },
    { label: "Our Blog", href: "/blog" },
    { label: "Support", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      href: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      href: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-4 h-4" />,
      href: "https://www.instagram.com",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-4 h-4" />,
      href: "https://www.youtube.com",
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">
                SOLAR<span className="text-green-500">X</span>
              </span>
            </Link>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Uttarakhand's most trusted solar partner. We are committed to
              powering homes and businesses with clean, renewable energy
              tailored to the Himalayan climate.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-500 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Essential Pages */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Menu</h4>
            <ul className="space-y-3">
              {essentialPages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-green-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Solutions</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-green-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  25/4, Rajpur Road,
                  <br />
                  Dehradun, Uttarakhand
                  <br />
                  India - 248001
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:connect@solarx.in"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  connect@solarx.in
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+919897012345"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  +91 98970 12345
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} SolarX Energy Solutions. All
            rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Made with <span className="text-green-500">💚</span> in Devbhoomi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
