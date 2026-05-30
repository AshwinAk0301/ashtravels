"use client";

import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Float */}
      <a
        href="https://wa.me/919962000026"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white text-xl md:text-2xl shadow-lg z-50 hover:scale-110 transition-transform animate-pulse-glow"
        style={{ backgroundColor: "#25d366" }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Call Now Float */}
      <a
        href="tel:+919962000026"
        className="fixed bottom-5 right-[72px] md:bottom-6 md:right-24 w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl md:text-2xl shadow-lg z-50 hover:scale-110 transition-transform"
      >
        <i className="fas fa-phone"></i>
      </a>

      {/* Book Now Float */}
      <a
        href="#booking"
        className="fixed bottom-5 right-[140px] md:bottom-6 md:right-[168px] h-12 md:h-14 px-4 md:px-5 rounded-full bg-white flex items-center justify-center gap-2 text-blue-700 font-semibold text-sm md:text-base shadow-lg z-50 hover:scale-105 transition-transform border border-blue-200"
      >
        <i className="fas fa-car text-base"></i>
        <span className="hidden sm:inline">Book Now</span>
      </a>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 md:bottom-24 right-5 md:right-6 w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-700 text-white flex items-center justify-center text-sm shadow-lg z-50 hover:-translate-y-1 transition-all cursor-pointer border-none"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
}
