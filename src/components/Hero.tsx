import Image from "next/image";

export default function Hero() {
  const stats = [
    { number: "10000+", label: "Happy Customers" },
    { number: "100+", label: "Professional Drivers" },
    { number: "30+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #0ea5e9 100%)" }}
    >
      {/* Blurred car background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/call_drivers.png"
          alt=""
          fill
          className="object-cover object-center opacity-15"
          style={{ filter: "blur(6px)" }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(30,58,95,0.9) 0%, rgba(37,99,235,0.8) 50%, rgba(14,165,233,0.85) 100%)" }}
        ></div>
      </div>

      <div className="absolute -top-1/2 -right-1/5 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)" }}></div>
      <div className="absolute -bottom-1/3 -left-1/10 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-5 pt-24 pb-12 md:pb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-5 max-w-3xl">
          Hire Professional Drivers &amp; Cabs
        </h1>
        <p className="text-white text-base md:text-lg max-w-xl mb-6 md:mb-8 leading-relaxed">
          Your trusted partner for safe, reliable, and comfortable travel across
          Chennai and beyond. Available 24/7 for all your transportation needs.
        </p>

        {/* Service highlights */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
          {[
            { icon: "fas fa-plane-arrival", text: "Airport Pickup & Drop" },
            { icon: "fas fa-road", text: "Outstation Trips" },
            { icon: "fas fa-map-location-dot", text: "Local Trips" },
            { icon: "fas fa-user-tie", text: "Call Drivers" },
          ].map((item) => (
            <span key={item.text} className="flex items-center gap-2 bg-white/20 border border-white/40 text-white font-medium text-xs md:text-sm px-3 md:px-4 py-2 rounded-full">
              <i className={`${item.icon} text-white`}></i>
              {item.text}
            </span>
          ))}
        </div>

        {/* USPs */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8 md:mb-10">
          {[
            "Affordable Rates",
            "Experienced Drivers",
            "Safe & Secure",
            "On-Time Guarantee",
          ].map((usp) => (
            <span key={usp} className="flex items-center gap-2 text-white font-medium text-xs md:text-sm">
              <i className="fas fa-check-circle text-emerald-500"></i>
              {usp}
            </span>
          ))}
        </div>

        <div className="flex gap-3 md:gap-4 mb-10 md:mb-16 flex-wrap">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Book a Ride
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/70 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-white hover:text-blue-700 transition-all hover:-translate-y-0.5"
          >
            Our Services
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-white">
                {stat.number}
              </span>
              <span className="text-xs md:text-sm text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
