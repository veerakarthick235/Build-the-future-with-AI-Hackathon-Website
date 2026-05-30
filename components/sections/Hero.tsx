"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Users, ArrowRight, MessageCircle, Calendar, Trophy, Sparkles } from "lucide-react";
import CountdownTimer from "../CountdownTimer";

const floatingElements = [
  { icon: "🤖", delay: 0, x: "10%", y: "20%", speed: 0.04 },
  { icon: "⚡", delay: 0.5, x: "85%", y: "15%", speed: 0.06 },
  { icon: "🧠", delay: 1, x: "75%", y: "70%", speed: 0.03 },
  { icon: "🚀", delay: 1.5, x: "15%", y: "75%", speed: 0.05 },
  { icon: "💡", delay: 2, x: "50%", y: "8%", speed: 0.07 },
  { icon: "🌐", delay: 0.8, x: "90%", y: "45%", speed: 0.04 },
];

export default function Hero({ participants = 64, prizes = 7 }: { participants?: number, prizes?: number }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-bg grid-pattern perspective-container">
      {/* Gradient orbs that react to mouse */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
          style={{ transform: `translate(${mouse.x * -40}px, ${mouse.y * -40}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
          style={{ transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"
          style={{ transform: `translate(calc(-50% + ${mouse.x * -20}px), calc(-50% + ${mouse.y * -20}px))` }}
        />
      </div>

      {/* 3D Floating emoji elements with mouse parallax */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl sm:text-4xl select-none pointer-events-none z-10 hidden md:block preserve-3d"
          style={{
            left: el.x,
            top: el.y,
            transform: `translate(${mouse.x * el.speed * 100}px, ${mouse.y * el.speed * 100}px) translateZ(${30 + i * 10}px)`,
            transition: "transform 0.3s ease-out",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.5, 0.9, 0.5],
            scale: [0.85, 1.05, 0.85],
            rotateY: [0, 10, -10, 0],
          }}
          transition={{
            delay: el.delay,
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="glass rounded-2xl p-3 border border-white/10 holo-shine depth-shadow">
            {el.icon}
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 preserve-3d">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {[
            { icon: Globe, label: "Global Online", color: "text-cyan-300", border: "border-cyan-500/30", pulse: "animate-pulse-neon" },
            { icon: Users, label: "Students Only", color: "text-purple-300", border: "border-purple-500/30", pulse: "" },
            { icon: Sparkles, label: "Free to Enter", color: "text-emerald-300", border: "border-emerald-500/30", pulse: "" },
          ].map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.span
                key={badge.label}
                whileHover={{ scale: 1.1, rotateX: 5, rotateY: -5 }}
                className={`inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs sm:text-sm font-semibold ${badge.color} border ${badge.border} ${badge.pulse} magnetic-hover`}
              >
                <Icon className="w-3.5 h-3.5" />
                {badge.label}
              </motion.span>
            );
          })}
        </motion.div>

        {/* Headline with 3D depth */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          style={{
            transform: `perspective(1000px) rotateX(${mouse.y * -3}deg) rotateY(${mouse.x * 3}deg)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          <h1 className="text-hero font-extrabold text-white mb-4 leading-none tracking-tight text-neon-glow">
            Build the{" "}
            <span className="gradient-text">Future</span>
            <br />
            <span className="text-white/90 text-3d">with AI</span>
          </h1>
          <p className="text-xl sm:text-3xl font-semibold gradient-text-neon mb-6 tracking-wide">
            From Code to No-Code
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Build real-world AI projects using code or no-code tools. Learn, innovate, and showcase
          your skills in a global hackathon designed for future builders.
        </motion.p>

        {/* CTA Buttons with 3D hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="https://build-the-future-with-ai.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotateX: -3, rotateY: 3, z: 20 }}
            whileTap={{ scale: 0.97 }}
            className="group btn-primary flex items-center gap-3 px-8 py-4 rounded-2xl text-base sm:text-lg font-bold shadow-2xl shadow-indigo-500/30 animate-ring-pulse"
          >
            <Sparkles className="w-5 h-5" />
            Register Now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="https://chat.whatsapp.com/FE4BwwdvrZO4V8SZnhWuNX"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-base sm:text-lg font-bold glass border border-green-500/30 text-green-300 hover:bg-green-500/10 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Join WhatsApp Community
          </motion.a>
        </motion.div>

        {/* Event Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12 text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-400" />
            <span>June 1 – June 30, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>100% Online</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-400" />
            <span>{participants} Participants</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>{prizes} Prize Categories</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest">
            Submission Deadline
          </p>
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
}
