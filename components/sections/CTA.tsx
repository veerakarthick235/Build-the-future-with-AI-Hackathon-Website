"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Sparkles, Users, Trophy } from "lucide-react";

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-12 sm:p-16 border border-indigo-500/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

          {/* Glow orbs inside card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl shadow-2xl shadow-indigo-500/30 animate-pulse-glow">
                🚀
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to Build the{" "}
              <span className="gradient-text">Future?</span>
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join innovators worldwide and turn your ideas into impactful products.
              The deadline is June 30, 2026 — don&apos;t miss your chance.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
              {[
                { icon: Users, value: "63+", label: "Participants" },
                { icon: Trophy, value: "7+", label: "Prize Categories" },
                { icon: Sparkles, value: "17+", label: "Industry Judges" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-indigo-400" />
                    <span className="text-white font-bold">{stat.value}</span>
                    <span className="text-slate-400 text-sm">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <a
              href="https://build-the-future-with-ai.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 btn-primary px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-indigo-500/30"
            >
              <Sparkles className="w-5 h-5" />
              Register on Devpost
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-slate-500 text-sm">Free to participate • No experience required</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
