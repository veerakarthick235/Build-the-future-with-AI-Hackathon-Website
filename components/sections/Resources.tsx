"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";

const resources = [
  {
    emoji: "🤖",
    title: "AI Tools",
    desc: "Cutting-edge AI models and platforms to power your projects.",
    items: ["ChatGPT / GPT-4o", "Google Gemini", "Claude AI", "Hugging Face", "Replicate"],
    gradient: "from-indigo-500 to-purple-600",
    border: "border-indigo-500/30",
  },
  {
    emoji: "💻",
    title: "Web Development",
    desc: "Modern frameworks and libraries to build fast, beautiful web apps.",
    items: ["Next.js", "React", "Vue.js", "Tailwind CSS", "Vercel"],
    gradient: "from-cyan-500 to-blue-600",
    border: "border-cyan-500/30",
  },
  {
    emoji: "🔧",
    title: "No-Code Platforms",
    desc: "Build powerful products without writing a single line of code.",
    items: ["Bubble.io", "Webflow", "Glide", "Softr", "AppGyver"],
    gradient: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/30",
  },
  {
    emoji: "☁️",
    title: "Cloud Services",
    desc: "Scalable infrastructure and cloud platforms for your projects.",
    items: ["AWS", "Google Cloud", "Azure", "Supabase", "PlanetScale"],
    gradient: "from-sky-500 to-blue-600",
    border: "border-sky-500/30",
  },
  {
    emoji: "📦",
    title: "Open Source",
    desc: "Free, community-driven tools and datasets for every project type.",
    items: ["GitHub", "Kaggle Datasets", "HuggingFace Models", "LangChain", "Ollama"],
    gradient: "from-pink-500 to-rose-600",
    border: "border-pink-500/30",
  },
];

export default function Resources() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="resources" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-pink-400 mb-4 glass px-4 py-2 rounded-full border border-pink-500/30">
            Resources
          </span>
          <h2 className="text-section-title font-bold text-white mb-4">
            Tools to Build{" "}
            <span className="gradient-text">Anything</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you code or prefer no-code, here are the best resources to help you build and innovate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <div className={`glass-card rounded-3xl p-7 border ${resource.border} card-hover relative overflow-hidden h-full`}>
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${resource.gradient}`} />
                
                <div className="mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                    {resource.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{resource.desc}</p>
                </div>

                <ul className="space-y-2">
                  {resource.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
