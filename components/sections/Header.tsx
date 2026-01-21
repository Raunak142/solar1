"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    {
      label: "Essential Pages",
      href: "#",
      dropdown: [
        { label: "Services", href: "#services" },
        { label: "Features", href: "#features" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    { label: "Blogs", href: "#blog" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2 border-b border-slate-100"
          : "bg-transparent py-4 border-b-0 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
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
              <span className="text-2xl font-bold text-slate-800 ml-2">
                Solarax
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-slate-600 hover:text-green-600 font-medium transition-colors">
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2 text-slate-600 hover:text-green-600 hover:bg-slate-50 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-slate-600 hover:text-green-600 font-medium transition-colors ${link.label === "Home" ? "text-green-600" : ""}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button with Slide Effect */}
          <div className="hidden md:block">
            <button className="group relative px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors overflow-hidden">
              <span className="relative block h-5 overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Get Started
                </span>
                <span className="absolute top-0 left-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                  Get Started
                </span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-green-600"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 bg-white rounded-b-2xl shadow-xl absolute left-0 right-0 px-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <span className="text-slate-600 font-medium">
                        {link.label}
                      </span>
                      <div className="pl-4 mt-2 flex flex-col gap-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="text-slate-500 hover:text-green-600"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-green-600 font-medium"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <button className="group mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors overflow-hidden">
                <span className="relative block h-5 overflow-hidden">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    Get Started
                  </span>
                  <span className="absolute top-0 left-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                    Get Started
                  </span>
                </span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
