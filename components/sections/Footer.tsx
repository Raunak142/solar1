"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import type { SanityFooter } from "@/lib/sanity-types";

// Local Fallbacks
const defaultEssentialPages = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

const defaultQuickLinks = [
  { label: "Residential Solar", href: "/projects?category=residential" },
  { label: "Commercial Solar", href: "/projects?category=commercial" },
  { label: "Support", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/cookies" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

interface FooterProps {
  data?: SanityFooter | null;
}

const Footer = ({ data }: FooterProps) => {
  const essentialPages = [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blog" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/contact" },
  ];

  const quickLinks = [
    { label: "Residential Solar", href: "/projects?category=residential" },
    { label: "Commercial Solar", href: "/projects?category=commercial" },
    { label: "Support", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookies Policy", href: "/cookies" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
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

  // Resolve data
  const finalEssentialPages = data?.menuSection?.links?.length
    ? data.menuSection.links
    : defaultEssentialPages;

  const finalQuickLinks = data?.solutionsSection?.links?.length
    ? data.solutionsSection.links
    : defaultQuickLinks;

  const address =
    data?.contactSection?.address ||
    "25/4, Rajpur Road,\nDehradun, Uttarakhand\nIndia - 248001";
  const email = data?.contactSection?.email || "connect@kartiksolar.in";
  const phone = data?.contactSection?.phone || "+91 98970 12345";

  // Note: For social links we can override href if present in CMS
  const activeSocialLinks = socialLinks.map((link) => {
    let href = link.href;
    if (data?.brandSection?.socialLinks) {
      const cmsOverride = data.brandSection.socialLinks.find(
        (s) => s.name?.toLowerCase() === link.name.toLowerCase(),
      );
      if (cmsOverride?.url) href = cmsOverride.url;
    }
    return { ...link, href };
  });

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Solar Logo.png"
                alt="Kartik Solar Logo"
                width={140}
                height={42}
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {data?.brandSection?.description ||
                "A Dehradun-based solar company dedicated to powering Indian homes with clean, reliable, and affordable energy solutions designed for Indian climate conditions."}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {activeSocialLinks.map((social) => (
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
          <div className="mt-10 lg:mt-20">
            <h4 className="text-lg font-bold text-white mb-6">
              {data?.menuSection?.heading || "Menu"}
            </h4>
            <ul className="space-y-3">
              {finalEssentialPages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href || "#"}
                    className="text-slate-400 hover:text-green-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mt-10 lg:mt-20">
            <h4 className="text-lg font-bold text-white mb-6">
              {data?.solutionsSection?.heading || "Solutions"}
            </h4>
            <ul className="space-y-3">
              {finalQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href || "#"}
                    className="text-slate-400 hover:text-green-400 transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="mt-10 lg:mt-20">
            <h4 className="text-lg font-bold text-white mb-6">
              {data?.contactSection?.heading || "Get in Touch"}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                  {address}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={`tel:${phone}`}
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            {data?.bottomBar?.copyrightText ||
              `© ${new Date().getFullYear()} Kartik Solar Energy Solutions. All rights reserved.`}
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            {data?.bottomBar?.creditText || "Made by"}{" "}
            <span className="text-green-500 font-medium">
              {data?.bottomBar?.creditHighlight || "Ophanim Technologies"}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
