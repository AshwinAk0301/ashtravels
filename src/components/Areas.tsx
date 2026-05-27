const areas = [
  { title: "Cab Service", icon: "fas fa-taxi", desc: "Available across all areas in Chennai and suburbs" },
  { title: "Call Drivers", icon: "fas fa-user-tie", desc: "Professional drivers available anywhere in the city" },
  { title: "Airport Service", icon: "fas fa-plane-arrival", desc: "Pickup & drop to Chennai International Airport" },
  { title: "Outstation Trips", icon: "fas fa-road", desc: "Travel to any destination across Tamil Nadu and beyond" },
  { title: "Local Trips", icon: "fas fa-map-location-dot", desc: "Hourly and daily packages for travel within the city" },
];

export default function Areas() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Coverage
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
            We Serve Everywhere
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            Wherever you need to go, we&apos;ve got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:-translate-y-1 transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <i className={`${area.icon} text-blue-600 text-sm md:text-base`}></i>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm md:text-base">{area.title}</h4>
                <p className="text-xs md:text-sm text-slate-500">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
