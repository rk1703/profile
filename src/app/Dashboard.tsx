"use client";

import React from "react";
import CursorGlow from "../components/CursorGlow";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";

export default function Dashboard() {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}
