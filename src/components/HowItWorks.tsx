const steps = [
  {
    number: 1,
    icon: "fas fa-calendar-check",
    title: "Choose Service",
    desc: "Select from our range of services — cab booking, call driver, airport transfer, local or outstation trip",
  },
  {
    number: 2,
    icon: "fas fa-location-dot",
    title: "Fill Details",
    desc: "Enter your pickup location, destination, date, time, and any special requirements",
  },
  {
    number: 3,
    icon: "fas fa-thumbs-up",
    title: "Enjoy Your Ride",
    desc: "We'll confirm your booking and send a professional driver to your location on time",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Simple Process
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 text-sm md:text-base">Book your ride in 3 simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 opacity-30" style={{ background: "linear-gradient(to right, #2563eb, #0ea5e9, #2563eb)" }}></div>

          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="absolute -top-2 right-[30%] md:right-[20%] w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                {step.number}
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center mx-auto mb-4 md:mb-5">
                <i className={`${step.icon} text-2xl md:text-3xl text-blue-600`}></i>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 max-w-[250px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
