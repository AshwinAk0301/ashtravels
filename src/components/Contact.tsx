const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Our Office",
    lines: ["Chennai, Tamil Nadu", "India"],
  },
  {
    icon: "fas fa-phone",
    title: "Phone",
    lines: ["+91 99620 00056"],
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    lines: ["ashwincctrips@gmail.com"],
  },
  {
    icon: "fas fa-clock",
    title: "Working Hours",
    lines: ["24/7 Available", "365 Days a Year"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="bg-white rounded-xl p-5 md:p-8 text-center border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <i className={`${info.icon} text-base md:text-lg text-blue-600`}></i>
              </div>
              <h4 className="font-semibold text-slate-900 mb-1.5 md:mb-2 text-sm md:text-base">{info.title}</h4>
              {info.lines.map((line) => (
                <p key={line} className="text-xs md:text-sm text-slate-500 break-all md:break-normal">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
