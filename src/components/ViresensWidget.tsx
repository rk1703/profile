"use client";

import React, { useState } from "react";

export default function ViresensWidget() {
  const [production, setProduction] = useState<number>(3.5); // mtpa
  const [digitization, setDigitization] = useState<number>(60); // %

  // Calculation parameters:
  // Base steel emissions: ~1.85 tons of CO2 per ton of steel.
  // Digital optimization can reduce emissions by up to 8% (0.15 tCO2/tCS).
  // Formula: co2ReductionPerTon = (digitization / 100) * 0.148
  // Total saved per year = production * 1,000,000 * co2ReductionPerTon
  const co2PerTonSaved = (digitization / 100) * 0.12; // tCO2 per ton of steel
  const totalCo2Saved = Math.round(production * 1000000 * co2PerTonSaved);
  const coalSaved = Math.round(totalCo2Saved * 0.45); // 0.45 tons of coal per ton CO2 offset
  const treesEquiv = Math.round(totalCo2Saved * 45); // 45 trees absorb 1 ton of CO2 per year

  return (
    <div className="glass-panel p-6 rounded-2xl w-full max-w-lg mx-auto relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute -right-10 -top-10 w-24 h-24 bg-virescent-green/20 rounded-full blur-xl pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-virescent-green animate-pulse" />
        <h3 className="font-space text-xl font-bold text-white tracking-wide">
          Viresens Impact Simulator
        </h3>
      </div>
      
      <p className="text-sm text-secondary mb-6 leading-relaxed">
        Interactive model showing how process optimization and digital transformation reduce emissions in a typical integrated steel plant.
      </p>

      {/* Sliders */}
      <div className="space-y-5 mb-8">
        <div>
          <div className="flex justify-between text-xs font-semibold text-white mb-2">
            <span>Plant Production Capacity</span>
            <span className="text-virescent-green font-mono">{production.toFixed(1)} MTPA</span>
          </div>
          <input
            type="range"
            min="1.0"
            max="10.0"
            step="0.5"
            value={production}
            onChange={(e) => setProduction(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-black-200 rounded-lg appearance-none cursor-pointer accent-virescent-green"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-white mb-2">
            <span>Process Digitization & AI Integration</span>
            <span className="text-virescent-green font-mono">{digitization}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            step="5"
            value={digitization}
            onChange={(e) => setDigitization(parseInt(e.target.value))}
            className="w-full h-1.5 bg-black-200 rounded-lg appearance-none cursor-pointer accent-virescent-green"
          />
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-black-200/50 p-4 rounded-xl border border-virescent-green/10 text-center">
          <p className="text-[10px] text-secondary uppercase tracking-wider mb-1 font-semibold">CO₂ Prevented</p>
          <p className="text-lg font-space font-bold text-virescent-mint font-mono">
            {totalCo2Saved >= 1000000 
              ? `${(totalCo2Saved / 1000000).toFixed(2)}M` 
              : totalCo2Saved.toLocaleString()}
          </p>
          <p className="text-[9px] text-secondary mt-1">tCO₂ / Year</p>
        </div>

        <div className="bg-black-200/50 p-4 rounded-xl border border-virescent-green/10 text-center">
          <p className="text-[10px] text-secondary uppercase tracking-wider mb-1 font-semibold">Coal Saved</p>
          <p className="text-lg font-space font-bold text-virescent-cyan font-mono">
            {coalSaved >= 1000000 
              ? `${(coalSaved / 1000000).toFixed(2)}M` 
              : coalSaved.toLocaleString()}
          </p>
          <p className="text-[9px] text-secondary mt-1">Tons / Year</p>
        </div>

        <div className="bg-black-200/50 p-4 rounded-xl border border-virescent-green/10 text-center">
          <p className="text-[10px] text-secondary uppercase tracking-wider mb-1 font-semibold">Forest Equivalent</p>
          <p className="text-lg font-space font-bold text-yellow-400 font-mono">
            {treesEquiv >= 1000000 
              ? `${(treesEquiv / 1000000).toFixed(2)}M` 
              : treesEquiv.toLocaleString()}
          </p>
          <p className="text-[9px] text-secondary mt-1">Trees Planted</p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-virescent-green/15 flex justify-between items-center text-[10px] text-secondary font-mono">
        <span>EST. RATIO: -{(co2PerTonSaved * 10).toFixed(2)}% EMISSIONS</span>
        <span className="text-virescent-green uppercase">VIRESENS CONSULTING</span>
      </div>
    </div>
  );
}
