import React from "react";
import { motion } from "framer-motion";
import { Phone, BarChart3, FileCheck } from "lucide-react";

const STEPS = [
  {
    icon: Phone,
    step: "01",
    title: "Quick Call",
    description: "15 minutes. We talk about your situation, coverage needs, and budget. No forms. No commitment.",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Frank Compares",
    description: "We shop 6+ carriers and find the best fit for your family. You see exactly what we see — no hidden options.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "You Decide",
    description: "Review the options. Ask questions. Take your time. If nothing fits, we'll tell you. No pressure to sign.",
  },
];

export default function HowItWorks({ onCTAClick }) {
  return (
    <section id="how-it-works" className="bg-[#0F0F0F] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#C8F562] text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Three steps.{" "}
            <span className="text-white/30">Zero pressure.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#C8F562]/10 flex items-center justify-center group-hover:bg-[#C8F562]/20 transition-colors">
                    <step.icon className="w-6 h-6 text-[#C8F562]" />
                  </div>
                  <span className="text-5xl font-bold text-white/[0.06]">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}