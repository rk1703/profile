"use client";

import React from "react";
import { experiences } from "../constants";

export default function Experience() {
  return (
    <section className="relative w-full py-20 bg-grid-pattern" id="work">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">

        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center">
          <p className="text-sm font-semibold tracking-widest text-virescent-mint uppercase">
            Work History
          </p>
          <h2 className="font-space font-black text-white text-3xl sm:text-5xl tracking-tight">
            Professional Experience.
          </h2>
          <div className="w-16 h-1 bg-virescent-green rounded-full mx-auto" />
        </div>

        {/* Custom Responsive Timeline */}
        <div className="relative border-l-2 border-virescent-green/20 max-w-4xl mx-auto pl-8 space-y-12 py-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Point Bullet */}
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary border-2 border-virescent-green shadow shadow-virescent-green/45 group-hover:scale-110 transition-transform">
                <span className="h-2 w-2 rounded-full bg-virescent-mint animate-pulse" />
              </span>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-virescent-green/10 transition-all duration-300 group-hover:border-virescent-green/25 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-space text-xl sm:text-2xl font-bold text-white group-hover:text-virescent-mint transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <img
                        src={exp.icon}
                        alt={exp.company_name}
                        className="h-12 w-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'; // Hide img if broken
                        }}
                      />
                      <p className="text-sm text-virescent-cyan font-semibold mt-1">
                        {exp.company_name}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-virescent-green/10 border border-virescent-green/15 text-xs text-virescent-mint font-mono font-semibold self-start sm:self-center">
                    {exp.date}
                  </span>
                </div>

                <ul className="space-y-3 list-none">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-secondary text-sm sm:text-base leading-relaxed flex items-start gap-2">
                      <span className="text-virescent-green mt-1 text-xs select-none">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
