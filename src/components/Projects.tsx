"use client";

import React from "react";
import Image from "next/image";
import { projects } from "../constants";

export default function Projects() {
  return (
    <section className="relative w-full py-20 bg-black-200/40" id="projects">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <p className="text-sm font-semibold tracking-widest text-virescent-mint uppercase">
            My Portfolio
          </p>
          <h2 className="font-space font-black text-white text-3xl sm:text-5xl tracking-tight">
            Featured Projects.
          </h2>
          <div className="w-16 h-1 bg-virescent-green rounded-full" />
        </div>

        {/* Narrative */}
        <p className="text-secondary text-base sm:text-lg max-w-3xl leading-relaxed mb-16">
          These projects showcase my capabilities in software development and green tech. They include custom real-time databases, telemetry polling services, and generative AI integrations.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between border border-virescent-green/10 hover:border-virescent-green/20 hover:shadow-2xl hover:shadow-virescent-green/5 transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative w-full h-[240px] bg-black-200/60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-center group-hover:scale-[1.03] transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Enterprise/Tool Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {!project.website_link && project.name.includes("CO₂") && (
                    <span className="px-2.5 py-1 rounded bg-[#0d261b]/90 border border-virescent-green/30 text-[10px] font-bold text-virescent-mint backdrop-blur-sm">
                      🔒 JSW Steel Enterprise
                    </span>
                  )}
                  {project.name.includes("SpendWise") && (
                    <span className="px-2.5 py-1 rounded bg-indigo-950/90 border border-indigo-500/30 text-[10px] font-bold text-indigo-300 backdrop-blur-sm">
                      ✨ AI Integrated
                    </span>
                  )}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-space text-2xl font-bold text-white group-hover:text-virescent-mint transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Links */}
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded bg-black-200/50 border border-virescent-green/5 ${tag.color}`}
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-3 border-t border-virescent-green/10">
                    {project.source_code_link && (
                      <a 
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-black-200 hover:bg-black-100 border border-virescent-green/20 text-xs font-semibold text-slate-200 transition-all flex items-center gap-2"
                      >
                        <span>Code Repo</span>
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    
                    {project.website_link && (
                      <a 
                        href={project.website_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-virescent-green/10 hover:bg-virescent-green/20 border border-virescent-green/35 text-xs font-semibold text-virescent-mint transition-all flex items-center gap-2"
                      >
                        <span>Launch App</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
