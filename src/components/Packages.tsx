const travelPackages = [
  {
    icon: "fas fa-car",
    name: "Sedan",
    desc: "Swift Dzire / Etios",
    price: "₹1,400",
    duration: "4 Hrs / 40 Kms",
    features: ["Extra km: ₹14/km", "Extra hour: ₹150/hr", "Driver allowance included"],
  },
  {
    icon: "fas fa-van-shuttle",
    name: "Innova",
    desc: "Toyota Innova",
    price: "₹2,000",
    duration: "4 Hrs / 40 Kms",
    features: ["Extra km: ₹18/km", "Extra hour: ₹200/hr", "Driver allowance included"],
    popular: true,
  },
  {
    icon: "fas fa-car-side",
    name: "Innova Crysta",
    desc: "Toyota Innova Crysta",
    price: "₹2,200",
    duration: "4 Hrs / 40 Kms",
    features: ["Extra km: ₹20/km", "Extra hour: ₹220/hr", "Driver allowance included"],
  },
  {
    icon: "fas fa-bus",
    name: "Tempo Traveller",
    desc: "12-18 Seater",
    price: "₹2,500",
    duration: "4 Hrs / 40 Kms",
    features: ["Extra km: ₹22/km", "Extra hour: ₹250/hr", "Driver allowance included"],
  },
];

const callDriverRates = [
  { plan: "Hourly Basis", price: "₹150", unit: "/hour", note: "Minimum 4 hours" },
  { plan: "Half Day (12 Hrs)", price: "₹800", unit: "", note: "Up to 12 hours" },
  { plan: "Full Day (24 Hrs)", price: "₹1,200", unit: "", note: "Up to 24 hours" },
  { plan: "Monthly", price: "₹18,000", unit: "", note: "Dedicated driver" },
];

export default function Packages() {
  return (
    <section id="packages" className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-gradient-to-r from-amber-300 to-amber-400 text-slate-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Our Tariff
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
            Travel Packages
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Affordable rates for all types of vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-10 md:mb-16">
          {travelPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-xl p-6 md:p-8 text-center border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative ${
                pkg.popular
                  ? "border-amber-400 shadow-lg"
                  : "border-slate-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Popular
                </div>
              )}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <i className={`${pkg.icon} text-lg md:text-xl text-amber-600`}></i>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">
                {pkg.name}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mb-3 md:mb-4">{pkg.desc}</p>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
                {pkg.price}
              </div>
              <span className="text-xs text-slate-500 block mb-4 md:mb-5">
                {pkg.duration}
              </span>
              <ul className="text-left space-y-2 mb-5 md:mb-6">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs md:text-sm text-slate-600 pb-2 border-b border-slate-100 last:border-none"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-amber-500 transition-all"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Call Driver Tariff */}
        <div className="bg-white rounded-xl p-6 md:p-10 border border-slate-200">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-5 md:mb-6 flex items-center gap-3">
            <i className="fas fa-user-tie text-amber-400"></i>
            Call Driver Tariff
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {callDriverRates.map((rate) => (
              <div
                key={rate.plan}
                className="bg-slate-50 p-4 md:p-6 rounded-lg text-center border border-slate-200 hover:border-amber-400 hover:-translate-y-1 transition-all"
              >
                <h4 className="text-xs md:text-sm font-semibold text-slate-900 mb-1 md:mb-2">
                  {rate.plan}
                </h4>
                <div className="text-lg md:text-2xl font-bold text-amber-600 mb-1">
                  {rate.price}
                  {rate.unit && (
                    <span className="text-xs md:text-sm font-normal text-slate-500">
                      {rate.unit}
                    </span>
                  )}
                </div>
                <p className="text-[10px] md:text-xs text-slate-500">{rate.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
