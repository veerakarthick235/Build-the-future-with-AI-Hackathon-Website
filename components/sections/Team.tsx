"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const team = [
  { name: 'Karthickkumar S', role: 'Founder & Organizer', photo: '/team/veera_karthick.jpeg', order: 1, gradient: "from-purple-500 to-indigo-600" },
  { name: 'Sarjan P', role: 'Co Organizer', photo: '/team/sarjan.jpeg', order: 2, gradient: "from-blue-500 to-cyan-500" },
  { name: 'Lokesh M', role: 'Manager', photo: '/team/loki.png', order: 3, gradient: "from-emerald-500 to-teal-600" },
];

export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="team" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 glass px-4 py-2 rounded-full border border-emerald-500/30">
            Our Team
          </span>
          <h2 className="text-section-title font-bold text-white mb-4">
            Meet the <span className="gradient-text">Organizers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The passionate team working behind the scenes to make this hackathon a reality.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.sort((a, b) => a.order - b.order).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative w-full max-w-[300px]"
            >
              <div className="glass-card rounded-3xl p-6 text-center card-hover border border-white/5 relative overflow-hidden h-full">
                {/* Gradient top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient}`} />
                
                {/* Photo */}
                <div className={`w-32 h-32 mx-auto mb-5 rounded-full bg-gradient-to-br ${member.gradient} p-1 shadow-xl`}>
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover border-4 border-[#0a0a1a]"
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&color=fff&size=150`;
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:gradient-text transition-all">
                  {member.name}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mt-2">
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
