"use client";

import React from "react";
import { services } from "../constants";

export default function About() {
  return (
    <section className="relative w-full py-20 bg-black-200/40" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <p className="text-sm font-semibold tracking-widest text-virescent-mint uppercase">
            Overview
          </p>
          <h2 className="font-space font-black text-white text-3xl sm:text-5xl tracking-tight">
            About Me &amp; Vision.
          </h2>
          <div className="w-16 h-1 bg-virescent-green rounded-full" />
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              I am a web developer by passion, currently combining software engineering with industrial engineering. In my role as <span className="text-white font-semibold">Assistant Manager at JSW Steel Ltd</span>, I leverage next-generation digital frameworks, relational databases, and data analytical models to drive carbon emission reductions.
            </p>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              My upcoming venture, <span className="text-virescent-mint font-semibold">Viresens</span>, is founded to consult heavy manufacturing enterprises and early-stage companies on their carbon footprints, helping them establish sustainable digital architectures, real-time pollution telemetry dashboards, and API trackers.
            </p>
          </div>
          
          <div className="lg:col-span-5 p-6 rounded-2xl glass-panel border-virescent-green/20 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-virescent-green/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="font-space text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-virescent-green">🌱</span> Viresens Mission Statement
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              &quot;To accelerate heavy industrial decarbonization by combining cloud-native APIs, industrial data pipelines, and ESG auditing structures—turning compliance reporting into automated optimization.&quot;
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 border border-virescent-green/10"
            >
              <div className="space-y-4">
                {/* SVG Icon matching service type */}
                <div className="w-12 h-12 rounded-xl bg-virescent-green/10 flex items-center justify-center border border-virescent-green/25 text-2xl">
                  {index === 0 ? "🌲" : index === 1 ? "💻" : "🤖"}
                </div>
                <h3 className="font-space text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
