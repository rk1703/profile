import React from "react";

// Sample testimonials data
const testimonials = [
  {
    name: "Aisha Khan",
    role: "Sustainability Lead, SteelCo",
    image: "/user/userf1.png",
    content: "Ravib’s CO₂ Dashboard transformed how we monitor emissions – real‑time insights and automated reporting saved us weeks of manual work.",
  },
  {
    name: "Liam Patel",
    role: "CTO, FinTech Startup",
    image: "/user/userm1.png",
    content: "SpendWise AI’s intelligent expense analysis feels like having a personal CFO. The integration with Gemini AI is seamless.",
  },
  {
    name: "Mei Lin",
    role: "Product Manager, GlobalSpeak",
    image: "/user/userm2.png",
    content: "The multilingual real‑time translation experience is fluid and reliable – a game‑changer for our global user base.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 bg-black-200/40" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        <div className="space-y-4 mb-12 text-center">
          <p className="text-sm font-semibold tracking-widest text-virescent-mint uppercase">
            Testimonials
          </p>
          <h2 className="font-space font-black text-white text-3xl sm:text-5xl tracking-tight">
            What People Say
          </h2>
          <div className="w-16 h-1 bg-virescent-green rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-2 border border-virescent-green/10"
            >
              <p className="text-sm text-secondary leading-relaxed mb-4">{t.content}</p>
              <div className="mt-auto flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-virescent-green/20"
                />
                <div>
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-xs text-virescent-mint">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
