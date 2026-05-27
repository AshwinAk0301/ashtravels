export default function About() {
  const features = [
    {
      icon: "fas fa-shield-halved",
      title: "Safe & Secure",
      desc: "All drivers are verified and professionally trained",
    },
    {
      icon: "fas fa-clock",
      title: "On-Time Service",
      desc: "Punctual pickups and timely arrivals guaranteed",
    },
    {
      icon: "fas fa-indian-rupee-sign",
      title: "Affordable Rates",
      desc: "Competitive pricing with no hidden charges",
    },
  ];

  return (
    <section id="about" className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <div className="rounded-xl h-[280px] md:h-[450px] flex items-center justify-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a5f, #2563eb)" }}>
              <i className="fas fa-car-side text-6xl md:text-8xl text-white/15"></i>
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-white p-3 md:p-4 px-5 md:px-6 rounded-lg text-center shadow-lg">
                <span className="block text-2xl md:text-3xl font-extrabold text-blue-600">
                  30+
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-slate-700 uppercase">
                  Years of Excellence
                </span>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              About Us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
              We Are The Best Cab &amp; Call Driver Service in Chennai
            </h2>
            <p className="text-slate-500 mb-3 md:mb-4 text-sm md:text-base">
              ASHWIN CABS AND CALL DRIVERS is a premier transportation service
              provider in Chennai. We offer reliable, safe, and professional
              driving services for all your travel needs.
            </p>
            <p className="text-slate-500 mb-6 md:mb-8 text-sm md:text-base">
              Whether you need a cab for local travel, airport transfers,
              outstation trips, or a professional call driver for your own
              vehicle, we&apos;ve got you covered with experienced and well-trained
              drivers.
            </p>

            <div className="flex flex-col gap-4 md:gap-5">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <i className={`${f.icon} text-lg text-blue-600`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-0.5 md:mb-1 text-sm md:text-base">
                      {f.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
