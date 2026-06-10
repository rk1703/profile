"use client";

import React from "react";
import TerminalConsole from "./TerminalConsole";
import ViresensWidget from "./ViresensWidget";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 flex items-center bg-grid-pattern overflow-hidden" id="hero">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-virescent-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-virescent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Intro & Terminal Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-virescent-green/10 border border-virescent-green/20 text-xs font-semibold text-virescent-mint">
              <span className="w-1.5 h-1.5 rounded-full bg-virescent-green animate-pulse" />
              SustainTech & Full-Stack Developer
            </div>
            
            <h1 className="font-space font-black text-white text-[44px] sm:text-[60px] leading-[1.1] tracking-tight">
              Driving <span className="text-gradient-green">Virescence</span> <br />
              Through Code.
            </h1>
            
            <p className="text-secondary text-[16px] sm:text-[18px] max-w-xl leading-relaxed">
              Hi, I&apos;m <span className="text-white font-bold">Ravikant Baghel</span>. Currently leading Digital Transformation & Carbon Reduction at JSW Steel Ltd, while launching <span className="text-virescent-mint font-semibold">Viresens</span>—a digital sustainability consultancy.
            </p>
          </div>

          {/* Interactive Shell Console */}
          <TerminalConsole />
        </div>

        {/* ESG Widget / Impact Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-6 text-center lg:text-left space-y-2">
            <h2 className="font-space text-lg font-bold text-white tracking-wide uppercase">
              Viresens Consultancy
            </h2>
            <p className="text-xs text-secondary max-w-sm">
              Helping companies reduce emissions and transition towards carbon neutrality through process digitalization.
            </p>
          </div>
          
          <ViresensWidget />
        </div>

      </div>
    </section>
  );
}
