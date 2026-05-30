"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Medal, Award, Star } from "lucide-react";
import TiltCard from "../TiltCard";

const mainPrizes = [
  {
    rank: 1,
    icon: Trophy,
    emoji: "🏆",
    title: "Winner",
    gradient: "from-amber-400 via-yellow-300 to-amber-500",
    borderColor: "border-amber-400/40",
    glowColor: "rgba(251, 191, 36, 0.25)",
    bgColor: "from-amber-500/10 to-yellow-500/5",
    rewards: [
      "Free 1 Month Emergent.sh Membership",
      "Certificate of Excellence",
      "Featured on Devpost & Social Media",
    ],
  },
  {
    rank: 2,
    icon: Medal,
    emoji: "🥈",
    title: "Runner-Up",
    gradient: "from-slate-300 via-slate-100 to-slate-400",
    borderColor: "border-slate-400/40",
    glowColor: "rgba(148, 163, 184, 0.2)",
    bgColor: "from-slate-500/10 to-slate-400/5",
    rewards: [
      "Free 1 Year .in Domain",
      "Certificate of Achievement",
      "Featured on Devpost & Social Media",
    ],
  },
  {
    rank: 3,
    icon: Award,
    emoji: "🥉",
    title: "Second Runner-Up",
    gradient: "from-amber-600 via-orange-400 to-amber-700",
    borderColor: "border-amber-600/40",
    glowColor: "rgba(180, 120, 72, 0.2)",
    bgColor: "from-amber-600/10 to-orange-500/5",
    rewards: [
      "Certificate of Achievement",
      "Featured on Devpost & Social Media",
    ],
  },
];

const specialPrizes = [
  { emoji: "⭐", label: "Best AI/ML Project", color: "text-indigo-400", border: "border-indigo-500/30", glow: "rgba(99, 102, 241, 0.2)" },
  { emoji: "⭐", label: "Best No-Code Solution", color: "text-emerald-400", border: "border-emerald-500/30", glow: "rgba(16, 185, 129, 0.2)" },
  { emoji: "⭐", label: "Best Web Project", color: "text-cyan-400", border: "border-cyan-500/30", glow: "rgba(6, 182, 212, 0.2)" },
  { emoji: "⭐", label: "Best UI/UX Project", color: "text-pink-400", border: "border-pink-500/30", glow: "rgba(236, 72, 153, 0.2)" },
];

export default function Prizes() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="prizes" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 glass px-4 py-2 rounded-full border border-amber-500/30">
            Prizes & Rewards
          </span>
          <h2 className="text-section-title font-bold text-white mb-4">
            Win <span className="gradient-text-gold">Amazing</span> Prizes
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Multiple prize categories with real rewards for the best builders.
          </p>
        </motion.div>

        {/* Main prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 perspective-container">
          {mainPrizes.map((prize, i) => {
            const Icon = prize.icon;
            return (
              <motion.div
                key={prize.rank}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${i === 0 ? "md:-mt-4" : ""}`}
              >
                <TiltCard className="group h-full" glowColor={prize.glowColor}>
                  <div
                    className={`glass-card rounded-3xl p-8 border ${prize.borderColor} overflow-hidden relative holo-shine h-full`}
                  >
                    {/* Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${prize.bgColor} rounded-3xl`} />

                    {/* Top gradient bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prize.gradient} rounded-t-3xl`} />

                    <div className="relative z-10 text-center preserve-3d">
                      <motion.div
                        className="text-5xl mb-4"
                        animate={{
                          rotateY: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {prize.emoji}
                      </motion.div>
                      <div className={`inline-flex items-center gap-2 text-sm font-bold mb-2 bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                        <Icon className="w-4 h-4" style={{ color: "currentColor" }} />
                        {prize.rank === 1 ? "1st Place" : prize.rank === 2 ? "2nd Place" : "3rd Place"}
                      </div>
                      <h3 className="text-2xl font-extrabold text-white mb-6 group-hover:text-neon-glow">{prize.title}</h3>

                      <div className="space-y-3">
                        {prize.rewards.map((reward, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.1 + j * 0.05 + 0.3 }}
                            className={`flex items-start gap-2 text-sm text-left p-3 rounded-xl glass border ${prize.borderColor}`}
                          >
                            <Star className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-amber-400" />
                            <span className="text-slate-300">{reward}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Special category prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-xl font-bold text-slate-300 mb-6">
            Special Category Prizes <span className="text-slate-500">(Top 3 Winners each)</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 perspective-container">
            {specialPrizes.map((sp, i) => (
              <motion.div
                key={sp.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                <TiltCard className="group" glowColor={sp.glow}>
                  <div className={`glass-card rounded-2xl p-5 border ${sp.border} text-center holo-shine`}>
                    <motion.div
                      className="text-3xl mb-3"
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {sp.emoji}
                    </motion.div>
                    <div className={`text-sm font-semibold ${sp.color}`}>{sp.label}</div>
                    <div className="text-xs text-slate-500 mt-1">Top 3 Winners</div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
