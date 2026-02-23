import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const RULES = [
  { type: "do", text: "Compare 6+ carriers to find you the best rate" },
  { type: "do", text: "Tell you the truth — even if it means 'don't buy'" },
  { type: "do", text: "Explain everything in plain English" },
  { type: "do", text: "Respect your time and your decision" },
  { type: "dont", text: "No pressure. Ever." },
  { type: "dont", text: "No quotas to hit" },
  { type: "dont", text: "No bank telling us what to sell" },
  { type: "dont", text: "No BS" },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-baseline gap-3 mb-4">
            <p className="text-[#C8F562] text-sm font-semibold tracking-widest uppercase">Our Philosophy</p>
            <span className="text-white/20 text-xs">|</span>
            <p className="text-white/30 text-xs italic">frank /fraNGk/ — open, honest, and direct</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            We'll tell you the truth.{" "}
            <span className="text-white/30">Period.</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 leading-relaxed">
            Most insurance agents work for a company. We work for you. No scripts. No sales targets. Just honest advice from a team that would rather lose a sale than recommend something you don't need.
          </p>
        </motion.div>

        {/* Frank's Rules */}
        <div className="mt-16 grid sm:grid-cols-2 gap-4">
          {RULES.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              {rule.type === "do" ? (
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C8F562]/10 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#C8F562]" />
                </div>
              ) : (
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                  <X className="w-3.5 h-3.5 text-white/40" />
                </div>
              )}
              <span className="text-white/70 text-base">{rule.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}