"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageCircle, Mail, Globe, Sparkles } from "lucide-react";

export default function Community() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="community" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-400 mb-4 glass px-4 py-2 rounded-full border border-green-500/30">
            Community
          </span>
          <h2 className="text-section-title font-bold text-white mb-4">
            Connect with <span className="gradient-text">Builders</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join our community of innovators. Get support, share ideas, and collaborate with participants worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href="https://chat.whatsapp.com/FE4BwwdvrZO4V8SZnhWuNX"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="glass-card rounded-3xl p-8 border border-green-500/30 hover:border-green-500/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-3xl mb-6 shadow-lg">
                    💬
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">WhatsApp Community</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    Join our active WhatsApp group to connect with other participants, get announcements, ask questions, and form teams.
                  </p>
                  <div className="flex items-center gap-2 text-green-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    <MessageCircle className="w-4 h-4" />
                    Join Community
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:veerakarthick235@gmail.com"
              className="group block"
            >
              <div className="glass-card rounded-3xl p-8 border border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl mb-6 shadow-lg">
                    ✉️
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Contact Us</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    Have a question or need help? Reach out to the organizers directly and we&apos;ll get back to you as soon as possible.
                  </p>
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    <Mail className="w-4 h-4" />
                    veerakarthick235@gmail.com
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 glass px-8 py-4 rounded-2xl border border-white/10">
            <Globe className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-300 font-medium">
              Join <span className="text-white font-bold">500+</span> participants already registered from around the world
            </span>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
