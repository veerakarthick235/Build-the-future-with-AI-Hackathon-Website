"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const criteria = [
  { label: "Technical Implementation", percentage: 25, color: "#6366f1", bg: "from-indigo-500 to-indigo-600", icon: "⚙️" },
  { label: "Real-World Impact", percentage: 25, color: "#a855f7", bg: "from-purple-500 to-purple-600", icon: "🌍" },
  { label: "Innovation & Creativity", percentage: 20, color: "#00d4ff", bg: "from-cyan-400 to-cyan-500", icon: "💡" },
  { label: "UI/UX Design", percentage: 15, color: "#f59e0b", bg: "from-amber-400 to-amber-500", icon: "🎨" },
  { label: "Presentation & Demo", percentage: 15, color: "#ec4899", bg: "from-pink-500 to-pink-600", icon: "🎤" },
];

export default function Criteria() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="criteria" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4 glass px-4 py-2 rounded-full border border-cyan-500/30">
            How We Judge
          </span>
          <h2 className="text-section-title font-bold text-white mb-4">
            Judging <span className="gradient-text">Criteria</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Projects are evaluated across five key dimensions to ensure fair and comprehensive assessment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bar chart visual */}
          <div className="space-y-5">
            {criteria.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm sm:text-base font-medium text-slate-300">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: item.color }}>
                    {item.percentage}%
                  </span>
                </div>
                <div className="h-3 glass rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${item.bg} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                    style={{ boxShadow: `0 0 15px ${item.color}80` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Donut chart visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* SVG donut chart */}
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                {(() => {
                  let cumulative = 0;
                  const r = 70;
                  const cx = 100;
                  const cy = 100;
                  const circumference = 2 * Math.PI * r;
                  
                  return criteria.map((item, i) => {
                    const dash = (item.percentage / 100) * circumference;
                    const offset = (cumulative / 100) * circumference;
                    cumulative += item.percentage;
                    return (
                      <circle
                        key={item.label}
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill="none"
                        stroke={item.color}
                        strokeWidth="28"
                        strokeDasharray={`${dash} ${circumference - dash}`}
                        strokeDashoffset={-offset}
                        strokeLinecap="butt"
                        style={{ filter: `drop-shadow(0 0 6px ${item.color})` }}
                      />
                    );
                  });
                })()}
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-white">100%</span>
                <span className="text-xs text-slate-400">Total Score</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legend cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-3"
        >
          {criteria.map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-xl p-3 text-center border border-white/5"
              style={{ borderColor: `${item.color}30` }}
            >
              <div className="text-xl mb-1">{item.icon}</div>
              <div className="text-lg font-bold" style={{ color: item.color }}>{item.percentage}%</div>
              <div className="text-xs text-slate-400 leading-tight mt-0.5">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
