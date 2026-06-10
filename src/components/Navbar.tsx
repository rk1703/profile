"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../constants";

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-primary/80 backdrop-blur-md border-b border-virescent-green/10" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16 flex justify-between items-center">
        {/* Brand/Logo */}
        <Link 
          href="/" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg green-gradient flex items-center justify-center font-space font-bold text-white text-lg shadow-lg shadow-virescent-green/20 group-hover:scale-105 transition-transform">
            V
          </div>
          <span className="font-space font-bold text-white tracking-wider text-xl group-hover:text-virescent-mint transition-colors">
            Viresens<span className="text-virescent-green">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className={`text-sm tracking-wide font-medium transition-all hover:text-virescent-mint relative py-1 ${
                  active === link.title 
                    ? "text-virescent-green font-semibold" 
                    : "text-secondary"
                }`}
              >
                {link.title}
                {active === link.title && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-virescent-green rounded-full" />
                )}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="https://github.com/rk1703" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-virescent-green/10 hover:bg-virescent-green/20 text-virescent-mint border border-virescent-green/25 text-sm font-semibold transition-all hover:scale-102 flex items-center gap-2"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-virescent-mint focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 border-b border-virescent-green/10 backdrop-blur-md px-6 py-6 absolute top-full left-0 w-full flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActive(link.title);
                setIsOpen(false);
              }}
              className={`text-base font-semibold py-2 border-b border-virescent-green/5 ${
                active === link.title ? "text-virescent-green" : "text-secondary"
              }`}
            >
              {link.title}
            </a>
          ))}
          <a
            href="https://github.com/rk1703"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 rounded-lg text-center bg-virescent-green/10 text-virescent-mint border border-virescent-green/20 font-bold"
          >
            Visit GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
