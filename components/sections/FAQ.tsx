"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who can participate?",
    a: "This hackathon is open to students worldwide — high school, undergraduate, postgraduate, and recent graduates. Whether you're studying CS, design, business, or any other field, you're welcome!",
  },
  {
    q: "Can beginners participate?",
    a: "Absolutely! This hackathon is designed to be beginner-friendly. Whether you've never coded before or you're new to no-code platforms, you're encouraged to join and learn.",
  },
  {
    q: "Can I work in a team?",
    a: "Yes! You can participate individually or form a team. Teams of up to 4 members are allowed. Collaborate with friends from your school or connect with other participants.",
  },
  {
    q: "Can I use AI tools in my project?",
    a: "Yes! In fact, we encourage it. You can use any AI tools including ChatGPT, Gemini, Claude, Midjourney, and many more to build and enhance your project.",
  },
  {
    q: "Can I use No-Code tools?",
    a: "Absolutely! No-Code & Low-Code is a dedicated track in this hackathon. Tools like Bubble, Webflow, Glide, and others are not just allowed — they're celebrated!",
  },
  {
    q: "When is the submission deadline?",
    a: "All projects must be submitted by June 30, 2026 at 11:59 PM. Make sure your submission is complete, including your project link, description, and demo video.",
  },
  {
    q: "How do I submit my project?",
    a: "All submissions are done through Devpost. Register at build-the-future-with-ai.devpost.com and follow the instructions to submit your project.",
  },
  {
    q: "Is participation free?",
    a: "Yes, participation is completely free. There are no registration fees or hidden costs.",
  },
];

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left glass-card rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 focus:outline-none"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-semibold text-white text-sm sm:text-base pr-4">{q}</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-indigo-400" />
          </motion.div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="faq" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 glass px-4 py-2 rounded-full border border-amber-500/30">
            FAQ
          </span>
          <h2 className="text-section-title font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
