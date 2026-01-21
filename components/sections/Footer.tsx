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
    { label: "About company", href: "#about" },
    { label: "FAQ Page", href: "#faq" },
    { label: "Our Services", href: "#services" },
    { label: "Get in touch", href: "#contact" },
  ];

  const quickLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Our Team", href: "#team" },
    { label: "Blogs", href: "#blog" },
    { label: "404", href: "/404" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-4 h-4" />,
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="8" fill="#FBBF24" />
                <path
                  d="M20 4V8"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M20 32V36"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M4 20H8"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M32 20H36"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M8.5 8.5L11.5 11.5"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M28.5 28.5L31.5 31.5"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M8.5 31.5L11.5 28.5"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M28.5 11.5L31.5 8.5"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-2xl font-bold text-white">Solarax</span>
            </Link>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Solarax Solar Solutions provides innovative and sustainable solar
              energy systems for residential and commercial clients worldwide.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-green-500 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Essential Pages */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Essential Pages
            </h4>
            <ul className="space-y-4">
              {essentialPages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-green-500">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-slate-300">info@solara.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-green-500">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-slate-300">+1 987 654 3210</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-green-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-slate-300">
                  9100 North Poor House Street Brooklyn, NY 11218
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
