import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-12 md:pt-16" style={{ backgroundColor: "#1e3a5f" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-8 md:pb-10 border-b border-white/10">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="#home"
              className="flex items-center gap-2.5 text-white text-lg md:text-xl font-bold no-underline mb-4"
            >
              <i className="fas fa-taxi text-sky-400 text-xl md:text-2xl"></i>
              <span>
                ASHWIN <strong className="text-sky-400">CABS</strong>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Your trusted transportation partner in Chennai. Professional
              drivers, well-maintained vehicles, and 24/7 service for all your
              travel needs.
            </p>
            <div className="flex gap-3">
              {["facebook-f", "instagram", "whatsapp", "youtube"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-sky-400 hover:text-slate-900 transition-all text-sm"
                  >
                    <i className={`fab fa-${social}`}></i>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 md:mb-5 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 md:space-y-2.5">
              {["Home", "About", "Services", "Book Now", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-white/60 text-sm hover:text-sky-400 transition-colors no-underline"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 md:mb-5 text-sm md:text-base">Services</h4>
            <ul className="space-y-2 md:space-y-2.5">
              {[
                "Cab Booking",
                "Airport Pickup & Drop",
                "Outstation Trips",
                "Local Trips",
                "Call Drivers",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/60 text-sm hover:text-sky-400 transition-colors no-underline"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 md:mb-5 text-sm md:text-base">Contact Info</h4>
            <ul className="space-y-2.5 md:space-y-3">
              <li className="flex items-center gap-2.5 text-white/60 text-sm">
                <i className="fas fa-phone text-sky-400 w-4 text-xs"></i>
                +91 99620 00026
              </li>
              <li className="flex items-center gap-2.5 text-white/60 text-sm">
                <i className="fab fa-whatsapp text-sky-400 w-4 text-xs"></i>
                +91 99620 00026
              </li>
              <li className="flex items-center gap-2.5 text-white/60 text-sm break-all">
                <i className="fas fa-envelope text-sky-400 w-4 text-xs shrink-0"></i>
                ashwincctrips@gmail.com
              </li>
              <li className="flex items-center gap-2.5 text-white/60 text-sm">
                <i className="fas fa-map-marker-alt text-sky-400 w-4 text-xs"></i>
                Chennai, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center py-5 md:py-6">
          <p className="text-white/50 text-xs md:text-sm">
            &copy; 2026 ASHWIN CABS AND CALL DRIVERS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
