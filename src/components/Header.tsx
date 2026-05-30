"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#booking", label: "Book Now" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "py-2.5 md:py-3 shadow-lg" : "py-3 md:py-4"
      }`}
      style={{ backgroundColor: isScrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.9)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-5 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 text-lg md:text-xl font-bold no-underline">
          <i className="fas fa-taxi text-blue-600 text-xl md:text-2xl"></i>
          <span className="text-slate-800">
            ASHWIN <strong className="text-blue-600">TRAVELS</strong>
          </span>
        </Link>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-[1000] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        <nav
          className={`md:flex items-center gap-8 ${
            isMobileMenuOpen
              ? "fixed top-0 right-0 w-[75%] max-w-[280px] h-screen flex flex-col justify-center gap-6 p-10 z-[1001] shadow-2xl"
              : "hidden"
          }`}
          style={isMobileMenuOpen ? { backgroundColor: "#1e3a5f" } : undefined}
        >
          {isMobileMenuOpen && (
            <button
              className="absolute top-5 right-5 text-white text-2xl bg-transparent border-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          )}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`no-underline text-base md:text-sm font-medium transition-colors ${
                isMobileMenuOpen ? "text-white/90 hover:text-sky-400" : "text-slate-600 hover:text-blue-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="md:hidden inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>

        <a
          href="#booking"
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all hover:-translate-y-0.5"
        >
          Book Now
        </a>

        <button
          className="md:hidden text-slate-700 text-xl bg-transparent border-none cursor-pointer p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
