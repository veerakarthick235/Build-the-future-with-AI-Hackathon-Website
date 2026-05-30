"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const events = [
  {
    date: "June 1, 2026",
    title: "Hackathon Starts",
    desc: "Registration opens and participants receive their project brief. Time to start building!",
    icon: "🚀",
    status: "upcoming",
    color: "from-indigo-500 to-purple-500",
  },
  {
    date: "June 1–30, 2026",
    title: "Build & Submit Projects",
    desc: "Work on your project, use AI tools, no-code platforms, or code from scratch. Submit before the deadline.",
    icon: "⚡",
    status: "active",
    color: "from-purple-500 to-pink-500",
  },
  {
    date: "July 1–10, 2026",
    title: "Judging Period",
    desc: "Industry judges from top companies review all submissions and evaluate based on our criteria.",
    icon: "⚖️",
    status: "upcoming",
    color: "from-cyan-500 to-indigo-500",
  },
  {
    date: "July 11, 2026",
    title: "Winners Announcement",
    desc: "The top builders are revealed! Winners get certificates, prizes, and global recognition.",
    icon: "🏆",
    status: "upcoming",
    color: "from-amber-400 to-orange-500",
  },
];

export default function Timeline() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="timeline" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 glass px-4 py-2 rounded-full border border-emerald-500/30">
            Schedule
          </span>
          <h2 className="text-section-title font-bold text-white mb-4">
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Mark your calendar — from start to finish, here&apos;s what to expect.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px timeline-line"
            initial={{ scaleY: 0, transformOrigin: "top" }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-10">
            {events.map((event, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex items-center gap-6 sm:gap-0 
                    ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isEven ? "sm:pr-12" : "sm:pl-12"} pl-14 sm:pl-0`}>
                    <div className="glass-card rounded-2xl p-6 border border-white/8 card-hover group relative overflow-hidden">
                      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${event.color}`} />
                      
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{event.icon}</span>
                        <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-3.5 sm:left-1/2 sm:-translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg`}
                      style={{ boxShadow: `0 0 15px rgba(99, 102, 241, 0.5)` }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
