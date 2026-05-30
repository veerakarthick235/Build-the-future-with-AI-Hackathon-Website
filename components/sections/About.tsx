"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Smile, Users, Award, Zap } from "lucide-react";

const features = [
  { icon: Globe, label: "Open Worldwide", desc: "Students from any country can participate", color: "text-cyan-400" },
  { icon: Smile, label: "Beginner Friendly", desc: "No prior experience required to join", color: "text-emerald-400" },
  { icon: Users, label: "Individual or Team", desc: "Solo or team up with friends", color: "text-purple-400" },
  { icon: Award, label: "Industry Judges", desc: "Evaluated by top tech professionals", color: "text-amber-400" },
  { icon: Zap, label: "Real-World Impact", desc: "Build solutions that matter", color: "text-indigo-400" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 section-bg-alt pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4 glass px-4 py-2 rounded-full border border-indigo-500/30">
            About the Hackathon
          </span>
          <h2 className="text-section-title font-bold text-white mb-6">
            A Global Student-Led{" "}
            <span className="gradient-text">Innovation Challenge</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Build the Future with AI — From Code to No-Code empowers students to solve real-world
            problems using <span className="text-indigo-400 font-semibold">AI</span>,{" "}
            <span className="text-purple-400 font-semibold">Web Development</span>, and{" "}
            <span className="text-cyan-400 font-semibold">No-Code tools</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Feature grid */}
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex items-center gap-4 glass-card rounded-2xl p-4 card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{feature.label}</div>
                    <div className="text-slate-400 text-sm">{feature.desc}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 neon-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10" />
              <div className="relative z-10">
                <div className="text-6xl mb-6">🌟</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Innovation for the{" "}
                  <span className="gradient-text">Future</span>
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Whether you&apos;re a seasoned developer or just starting with no-code platforms,
                  this hackathon is your stage to shine. Build, learn, and connect with a global
                  community of forward-thinkers.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {[
                    { icon: "🧑‍💻", text: "Code" },
                    { icon: "🔧", text: "No-Code" },
                    { icon: "🤝", text: "Collaborate" },
                  ].map((item) => (
                    <div key={item.text} className="text-center">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-xs text-slate-400 font-medium">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative orbital ring */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-indigo-500/20 rounded-full animate-spin-slow pointer-events-none hidden md:block">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
