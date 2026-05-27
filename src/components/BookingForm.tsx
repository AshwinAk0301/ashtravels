"use client";

const WHATSAPP_NUMBER = "919962000056";
const PHONE_NUMBER = "+919962000056";

export default function BookingForm() {
  return (
    <section id="booking" className="py-14 md:py-20" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="text-center">
          <span className="inline-block bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-white/20">
            Quick Booking
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Book Your Ride Now
          </h2>
          <p className="text-white/80 mb-8 md:mb-12 text-sm md:text-base max-w-md mx-auto">
            Reach us instantly via WhatsApp or give us a call. We&apos;ll arrange your ride in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent("Hi, I would like to book a ride.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-base md:text-lg transition-all hover:-translate-y-1 hover:shadow-xl shadow-lg"
              style={{ backgroundColor: "#25d366" }}
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              Book via WhatsApp
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-base md:text-lg transition-all hover:-translate-y-1 hover:shadow-xl shadow-lg"
            >
              <i className="fas fa-phone text-xl"></i>
              Call Now
            </a>
          </div>

          <p className="text-white/50 text-xs md:text-sm mt-6">
            Available 24/7 — We&apos;ll confirm your booking within minutes
          </p>
        </div>
      </div>
    </section>
  );
}
