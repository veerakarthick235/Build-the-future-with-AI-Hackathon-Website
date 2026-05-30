"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "../AnimatedCounter";
import TiltCard from "../TiltCard";

export default function Stats({ participants = 64, prizes = 7 }: { participants?: number, prizes?: number }) {
  const stats = [
    { value: participants, suffix: "", label: "Participants", color: "from-indigo-500 to-purple-500", desc: "Builders Worldwide", glow: "rgba(99, 102, 241, 0.2)" },
    { value: 17, suffix: "+", label: "Industry Judges", color: "from-purple-500 to-pink-500", desc: "Top Companies", glow: "rgba(168, 85, 247, 0.2)" },
    { value: prizes, suffix: "", label: "Prize Categories", color: "from-cyan-500 to-indigo-500", desc: "Win Big", glow: "rgba(6, 182, 212, 0.2)" },
    { value: 100, suffix: "%", label: "Online", color: "from-emerald-500 to-cyan-500", desc: "Fully Remote", glow: "rgba(16, 185, 129, 0.2)" },
  ];

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 perspective-container">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <TiltCard className="group" glowColor={stat.glow}>
                <div className="glass-card rounded-2xl p-6 text-center cursor-default relative overflow-hidden holo-shine">
                  {/* Gradient top border */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.color} rounded-t-2xl`} />

                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                  <div className={`text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:text-neon-glow`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white font-bold text-base sm:text-lg mb-1">
                    {stat.label}
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm">
                    {stat.desc}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Global reach banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-indigo-500/30 magnetic-hover"
          >
            <span className="text-2xl">🌍</span>
            <span className="text-slate-300 font-medium">
              <span className="gradient-text font-bold">Global</span> reach across 50+ countries
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
