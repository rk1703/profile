"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./canvas/Earth";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_pv4roli",
        "template_m4e4tw4",
        {
          from_name: form.name,
          to_name: "Ravikant",
          from_email: form.email,
          to_email: "ravibaghe1703@gmail.com",
          message: form.message,
        },
        "J82n1PaVIXj08oa3v"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section className="relative w-full py-20 bg-grid-pattern" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-12 text-center lg:text-left">
          <p className="text-sm font-semibold tracking-widest text-virescent-mint uppercase">
            Get in touch
          </p>
          <h2 className="font-space font-black text-white text-3xl sm:text-5xl tracking-tight">
            Contact Me.
          </h2>
          <div className="w-16 h-1 bg-virescent-green rounded-full mx-auto lg:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Form Side */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl flex flex-col justify-between border border-virescent-green/10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="w-full bg-black-200 border border-virescent-green/10 focus:border-virescent-green/40 py-4 px-6 placeholder:text-secondary/50 text-white rounded-xl outline-none font-medium transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className="w-full bg-black-200 border border-virescent-green/10 focus:border-virescent-green/40 py-4 px-6 placeholder:text-secondary/50 text-white rounded-xl outline-none font-medium transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or questions..."
                  className="w-full bg-black-200 border border-virescent-green/10 focus:border-virescent-green/40 py-4 px-6 placeholder:text-secondary/50 text-white rounded-xl outline-none font-medium transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-virescent-green hover:bg-virescent-emerald text-white font-bold tracking-wide transition-all shadow-lg shadow-virescent-green/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-virescent-green/10 flex justify-between text-xs text-secondary font-mono">
              <span>DESIGNED &amp; DEVELOPED BY RAVIKANT BAGHEL</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>

          {/* 3D Model Side */}
          <div className="lg:col-span-5 h-[350px] lg:h-auto rounded-2xl overflow-hidden glass-panel border border-virescent-green/10 relative flex items-center justify-center min-h-[350px]">
            <div className="absolute inset-0 z-0">
              <EarthCanvas />
            </div>
            {/* Soft Overlay Info */}
            <div className="absolute bottom-4 left-4 z-10 pointer-events-none bg-black-200/60 backdrop-blur-sm p-3 rounded-lg border border-virescent-green/10">
              <p className="text-[10px] font-mono text-virescent-mint font-semibold">
                GLOBAL REACH · REMOTE CONSULTANCY
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
