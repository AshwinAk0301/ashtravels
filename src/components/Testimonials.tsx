const testimonials = [
  {
    stars: 5,
    text: "Excellent service! The driver was punctual, professional, and very courteous. I use Ashwin Travels regularly for my airport transfers. Highly recommended!",
    name: "Rajesh Kumar",
    role: "Regular Customer",
  },
  {
    stars: 5,
    text: "I've been using their call driver service for 6 months now. The drivers are well-trained and know all city routes. Customer support is responsive and helpful.",
    name: "Priya Sharma",
    role: "Corporate Client",
  },
  {
    stars: 4.5,
    text: "Used their outstation service for a family trip to Pondicherry. The driver was experienced and made the journey very comfortable. Fair pricing too!",
    name: "Venkatesh M",
    role: "Family Trip",
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-gradient-to-r from-amber-300 to-amber-400 text-slate-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="mb-3 md:mb-4">
                {[...Array(Math.floor(t.stars))].map((_, i) => (
                  <i key={i} className="fas fa-star text-amber-400 text-sm"></i>
                ))}
                {t.stars % 1 !== 0 && (
                  <i className="fas fa-star-half-stroke text-amber-400 text-sm"></i>
                )}
              </div>
              <p className="text-slate-600 italic mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 flex items-center justify-center shrink-0">
                  <i className="fas fa-user text-slate-900 text-sm"></i>
                </div>
                <div>
                  <strong className="block text-sm text-slate-900">
                    {t.name}
                  </strong>
                  <span className="text-xs text-slate-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
