import Image from "next/image";

const services = [
  {
    icon: "fas fa-plane-arrival",
    title: "Airport Pickup & Drop",
    desc: "Hassle-free airport transfers with flight tracking. We ensure you never miss a flight or wait at the airport.",
    image: "/airport_pickup_and_drop.png",
  },
  {
    icon: "fas fa-road",
    title: "Outstation Trips",
    desc: "Plan your outstation trips with our experienced drivers who know all routes thoroughly for safe highway driving.",
    image: "/Outstation.png",
  },
  {
    icon: "fas fa-map-location-dot",
    title: "Local Trips",
    desc: "Affordable local trip packages for sightseeing, shopping, hospital visits, and daily commute within Chennai city.",
    image: "/local_trip.png",
  },
  {
    icon: "fas fa-user-tie",
    title: "Call Drivers",
    desc: "Professional drivers to drive your own car. Available for hourly, daily, monthly, and permanent basis.",
    image: "/call_drivers.png",
    imagePosition: "object-[30%_center]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            We provide a wide range of transportation services to meet all your
            travel needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10"></div>
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${"imagePosition" in service ? service.imagePosition : "object-center"}`}
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
