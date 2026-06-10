import React from "react";
import { technologies } from "../constants";

export default function Skills() {
  return (
    <section className="relative w-full py-20 bg-black-200/40" id="skills">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        <div className="space-y-4 mb-12 text-center">
          <p className="text-sm font-semibold tracking-widest text-virescent-mint uppercase">
            Skills
          </p>
          <h2 className="font-space font-black text-white text-3xl sm:text-5xl tracking-tight">
            My Tech Stack
          </h2>
          <div className="w-16 h-1 bg-virescent-green rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-2xl flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-virescent-green/10"
            >
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2 rounded-full" />
              <p className="text-sm text-white mt-1">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
