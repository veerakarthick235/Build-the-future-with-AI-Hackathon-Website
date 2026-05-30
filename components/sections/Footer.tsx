"use client";

import { motion } from "framer-motion";
import { Zap, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Judges", href: "#judges" },
    { label: "Prizes", href: "#prizes" },
  ],
  event: [
    { label: "Timeline", href: "#timeline" },
    { label: "Tracks", href: "#tracks" },
    { label: "Resources", href: "#resources" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "mailto:veerakarthick235@gmail.com" },
    { label: "WhatsApp", href: "https://chat.whatsapp.com/FE4BwwdvrZO4V8SZnhWuNX" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden">
                <img 
                  src="/logo.jpeg" 
                  alt="Innovation Hacks Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-lg">
                <span className="gradient-text">Innovation</span>
                <span className="text-slate-300"> Hacks</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Build • Innovate • Impact
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              A global student-led hackathon empowering the next generation of builders.
            </p>
            
            {/* Contact */}
            <div className="mt-6 space-y-2">
              <a href="mailto:veerakarthick235@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 text-indigo-400" />
                veerakarthick235@gmail.com
              </a>
              <a href="https://chat.whatsapp.com/FE4BwwdvrZO4V8SZnhWuNX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                <MessageCircle className="w-4 h-4 text-green-400" />
                WhatsApp Community
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transition-transform">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Event</h4>
            <ul className="space-y-3">
              {footerLinks.event.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transition-transform">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transition-transform">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="https://build-the-future-with-ai.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
              >
                Register Now →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs">
            © 2026 Innovation Hacks. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>for builders worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
