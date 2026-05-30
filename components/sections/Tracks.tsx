"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Code2, Blocks, Palette } from "lucide-react";
import TiltCard from "../TiltCard";

const tracks = [
  {
    icon: Brain,
    emoji: "🧠",
    title: "AI / Machine Learning",
    desc: "Build intelligent systems, train models, and create AI-powered solutions that solve real problems.",
    tags: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
    gradient: "from-indigo-500 to-purple-600",
    border: "border-indigo-500/30",
    glow: "rgba(99, 102, 241, 0.2)",
    bg: "from-indigo-500/10 to-purple-500/5",
  },
  {
    icon: Code2,
    emoji: "💻",
    title: "Web Development",
    desc: "Create modern web applications using the latest frameworks and technologies.",
    tags: ["React", "Next.js", "Node.js", "APIs"],
    gradient: "from-cyan-500 to-blue-600",
    border: "border-cyan-500/30",
    glow: "rgba(0, 212, 255, 0.2)",
    bg: "from-cyan-500/10 to-blue-500/5",
  },
  {
    icon: Blocks,
    emoji: "🔧",
    title: "No-Code & Low-Code",
    desc: "Use visual platforms to build powerful apps without writing traditional code.",
    tags: ["Bubble", "Webflow", "Zapier", "Make"],
    gradient: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/30",
    glow: "rgba(16, 185, 129, 0.2)",
    bg: "from-emerald-500/10 to-teal-500/5",
  },
  {
    icon: Palette,
    emoji: "🎨",
    title: "UI/UX Innovation",
    desc: "Design stunning interfaces and experiences that delight users and solve real problems.",
    tags: ["Figma", "Prototyping", "Design Systems", "Accessibility"],
    gradient: "from-pink-500 to-rose-600",
    border: "border-pink-500/30",
    glow: "rgba(236, 72, 153, 0.2)",
    bg: "from-pink-500/10 to-rose-500/5",
  },
];

export default function Tracks() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="tracks" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-400 mb-4 glass px-4 py-2 rounded-full border border-purple-500/30">
            Competition Tracks
          </span>
          <h2 className="text-section-title font-bold text-white mb-4">
            Choose Your{" "}
            <span className="gradient-text">Track</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Four exciting tracks to showcase your skills. Pick one and build something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-container">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <TiltCard className="group" glowColor={track.glow}>
                  <div
                    className={`relative glass-card rounded-3xl p-8 border ${track.border} overflow-hidden cursor-default holo-shine`}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${track.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                    <div className="relative z-10 preserve-3d">
                      {/* Icon header with depth */}
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          whileHover={{ rotateY: 180 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.gradient} flex items-center justify-center shadow-lg depth-shadow`}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="text-4xl animate-float-3d">{track.emoji}</div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-neon-glow transition-all">
                        {track.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-6">{track.desc}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {track.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`px-3 py-1 rounded-full text-xs font-medium glass border ${track.border} text-slate-300 magnetic-hover`}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
