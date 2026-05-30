"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2 } from "lucide-react";
import TiltCard from "../TiltCard";

const judges = [
  { name: "Mihir Shelar", company: "Amazon", image: '/judges/mihir.jpeg', color: "from-orange-500 to-amber-500", glow: "rgba(249, 115, 22, 0.2)" },
  { name: "Karthik Karunanith", company: "IBM", image: '/judges/karthik.jpeg', color: "from-blue-600 to-blue-400", glow: "rgba(37, 99, 235, 0.2)" },
  { name: "Naga Deepak Pothuraju", company: "TikTok", image: '/judges/naga.jpeg', color: "from-pink-500 to-rose-500", glow: "rgba(236, 72, 153, 0.2)" },
  { name: "Xingpeng Xiao", company: "Disney", image: '/judges/xiao.jpeg', color: "from-blue-500 to-indigo-500", glow: "rgba(99, 102, 241, 0.2)" },
  { name: "Archaana Pattabhii", company: "Senior Vice President", image: '/judges/arch.jpeg', color: "from-purple-500 to-violet-600", glow: "rgba(168, 85, 247, 0.2)" },
  { name: "Ankita Banerjee", company: "Walmart Global Tech", image: '/judges/ankita.jpeg', color: "from-blue-500 to-cyan-500", glow: "rgba(6, 182, 212, 0.2)" },
  { name: "Swarnamalya Mohan", company: "FedEx", image: '/judges/swarna.jpeg', color: "from-purple-600 to-indigo-500", glow: "rgba(147, 51, 234, 0.2)" },
  { name: "Andrei Shcherbinin", company: "Social Discovery Group", image: '/judges/andrei.jpeg', color: "from-emerald-500 to-teal-500", glow: "rgba(16, 185, 129, 0.2)" },
  { name: "Rajesh Soma", company: "Business Systems Analyst", image: '/judges/som.jpeg', color: "from-indigo-500 to-blue-500", glow: "rgba(99, 102, 241, 0.2)" },
  { name: "Ratna Kumar B", company: "Google Cloud Architect", image: '/judges/kumar.jpeg', color: "from-sky-500 to-blue-600", glow: "rgba(14, 165, 233, 0.2)" },
  { name: "Ankur Bhatnagar", company: "Enterprise Integration Architect", image: '/judges/ankur.jpeg', color: "from-slate-500 to-indigo-500", glow: "rgba(100, 116, 139, 0.2)" },
  { name: "Praneetha Kotla", company: "Solutions Architect", image: '/judges/kotla.jpeg', color: "from-violet-500 to-purple-600", glow: "rgba(139, 92, 246, 0.2)" },
  { name: "Preethi Bharathy", company: "Data Scientist", image: '/judges/ms_suraj.jpeg', color: "from-cyan-500 to-indigo-500", glow: "rgba(6, 182, 212, 0.2)" },
  { name: "Suraj Devatha", company: "Senior Software Engineer", image: '/judges/suraj.jpeg', color: "from-green-500 to-emerald-600", glow: "rgba(34, 197, 94, 0.2)" },
  { name: "Amey Farde", company: "Intuit", image: '/judges/amey.jpeg', color: "from-blue-500 to-indigo-600", glow: "rgba(59, 130, 246, 0.2)" },
  { name: "Vaibhav Patel", company: "AI Engineer", image: '/judges/patel.jpeg', color: "from-indigo-500 to-purple-600", glow: "rgba(99, 102, 241, 0.2)" },
  { name: "Sunil Subash", company: "Data Analyst", image: '/judges/sunil_subash.jpg', color: "from-teal-500 to-cyan-600", glow: "rgba(20, 184, 166, 0.2)" },
];

export default function Judges() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="judges" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4 glass px-4 py-2 rounded-full border border-indigo-500/30">
            Meet the Experts
          </span>
          <h2 className="text-section-title font-bold text-white mb-4">
            Industry <span className="gradient-text">Judges</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            17+ top professionals from world-class companies will evaluate your projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 perspective-container">
          {judges.map((judge, i) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.5) }}
            >
              <TiltCard className="group" glowColor={judge.glow} tiltAmount={20}>
                <div className="glass-card rounded-2xl p-5 text-center border border-white/5 relative overflow-hidden holo-shine">
                  {/* Gradient top */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${judge.color}`} />

                  {/* Avatar with 3D depth */}
                  <div className="preserve-3d">
                    <motion.div
                      whileHover={{ scale: 1.15, rotateY: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${judge.color} p-[2px] shadow-lg depth-shadow`}
                    >
                      <img
                        src={judge.image}
                        alt={judge.name}
                        className="w-full h-full rounded-[14px] object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="font-semibold text-white text-sm leading-tight mb-1.5 group-hover:text-neon-glow transition-all">
                    {judge.name}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs text-slate-400">
                    <Building2 className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{judge.company}</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Company logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {["Amazon", "IBM", "TikTok", "Disney", "Walmart", "FedEx", "Google", "Intuit"].map((company) => (
            <motion.div
              key={company}
              whileHover={{ scale: 1.1, y: -3 }}
              className="glass px-4 py-2 rounded-full text-slate-400 text-sm font-medium border border-white/5 magnetic-hover"
            >
              {company}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
