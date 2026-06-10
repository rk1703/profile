"use client";

import React, { useState, useEffect, useRef } from "react";

interface LogLine {
  text: string;
  type: "input" | "output" | "system" | "success";
}

export default function TerminalConsole() {
  const [history, setHistory] = useState<LogLine[]>([
    { text: "System initialization: Success", type: "system" },
    { text: "Viresens Shell v1.0.4 loaded.", type: "system" },
    { text: "Type 'help' or click the quick commands below to explore.", type: "output" },
  ]);
  const [input, setInput] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { text: `viresens-guest:~$ ${cmd}`, type: "input" as const }];

    let response: LogLine[] = [];

    switch (trimmed) {
      case "help":
        response = [
          { text: "Available commands:", type: "output" },
          { text: "  about      - Details about Ravikant Baghel", type: "output" },
          { text: "  skills     - Core technical expertise", type: "output" },
          { text: "  viresens   - The vision behind the startup", type: "output" },
          { text: "  projects   - Show key highlights", type: "output" },
          { text: "  clear      - Clear terminal logs", type: "output" },
        ];
        break;
      case "about":
        response = [
          { text: "Developer Profile:", type: "success" },
          { text: "  Name: Ravikant Baghel", type: "output" },
          { text: "  Role: Assistant Manager, JSW Steel Ltd.", type: "output" },
          { text: "  Focus: Process Digitization & Carbon Emission Reduction", type: "output" },
          { text: "  Passion: Creating performant, high-impact web apps", type: "output" },
        ];
        break;
      case "skills":
        response = [
          { text: "Technical Skills Matrix:", type: "success" },
          { text: "  Languages  : TypeScript, JavaScript, Python, C++", type: "output" },
          { text: "  Frameworks : Next.js, React, Node.js, Express", type: "output" },
          { name: "Databases", text: "  Databases  : SQL Server, Supabase, Firebase, Cosmos DB", type: "output" },
          { text: "  Concepts   : Decarbonization APIs, Real-time telemetry, ESG", type: "output" },
        ];
        break;
      case "viresens":
        response = [
          { text: "Viresens Sustainability Consultancy:", type: "success" },
          { text: "  Viresens is derived from 'Virescence' (becoming green).", type: "output" },
          { text: "  Mission: Help heavy manufacturing and startups transition to carbon neutrality.", type: "output" },
          { text: "  Services: Custom CO2 tracking APIs, data-driven ESG audits, and digital transformation.", type: "output" },
        ];
        break;
      case "projects":
        response = [
          { text: "Key Projects Portfolio:", type: "success" },
          { text: "  1. CO2_monitor - SQL Server live decarbonization dashboard for JSW Steel.", type: "output" },
          { text: "  2. SpendWise   - Expense tracker with Gemini AI insights & Genkit.", type: "output" },
          { text: "  3. InstaMemo  - Supabase & Prisma note-taker.", type: "output" },
        ];
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        response = [
          { text: `Command not found: '${trimmed}'. Type 'help' for options.`, type: "output" },
        ];
    }

    setHistory([...newHistory, ...response]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <div className="w-full glass-panel rounded-2xl overflow-hidden border border-virescent-green/20 shadow-2xl flex flex-col font-mono text-sm h-[320px] max-w-lg mx-auto">
      {/* Header bar */}
      <div className="bg-black-100 px-4 py-2 border-b border-virescent-green/15 flex justify-between items-center select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-virescent-green/80" />
        </div>
        <span className="text-[10px] text-secondary font-semibold font-space tracking-wider uppercase">
          viresens-guest@shell
        </span>
        <div className="w-12" /> {/* spacer */}
      </div>

      {/* Terminal logs */}
      <div
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto space-y-2 bg-black-200/40 text-virescent-mint"
      >
        {history.map((line, i) => (
          <div key={i} className="leading-relaxed whitespace-pre-wrap">
            {line.type === "input" && (
              <span className="text-virescent-cyan">{line.text}</span>
            )}
            {line.type === "system" && (
              <span className="text-secondary opacity-80">{line.text}</span>
            )}
            {line.type === "success" && (
              <span className="text-virescent-green font-bold">{line.text}</span>
            )}
            {line.type === "output" && (
              <span className="text-slate-100">{line.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Form input */}
      <form onSubmit={onSubmit} className="flex border-t border-virescent-green/15 bg-black-100">
        <span className="pl-4 py-3 text-virescent-cyan select-none">viresens-guest:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type help..."
          className="flex-1 bg-transparent py-3 px-2 text-slate-100 outline-none placeholder:text-secondary/40 font-mono terminal-cursor"
        />
      </form>

      {/* Quick shortcuts */}
      <div className="bg-black-100/80 px-4 py-2 border-t border-virescent-green/10 flex flex-wrap gap-2 text-[10px] justify-center select-none">
        <span className="text-secondary font-semibold mr-1">Quick Links:</span>
        {["help", "about", "skills", "viresens", "projects"].map((c) => (
          <button
            key={c}
            onClick={() => handleCommand(c)}
            className="px-2 py-0.5 rounded bg-virescent-green/10 hover:bg-virescent-green/20 text-virescent-mint border border-virescent-green/20 transition-all"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
