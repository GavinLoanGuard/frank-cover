import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Eye, Handshake } from "lucide-react";

const ITEMS = [
  {
    icon: DollarSign,
    title: "How We Get Paid",
    description: "Insurance carriers pay us a commission when a policy is placed. You pay the same rate whether you use us or go directly. If no policy is placed, we earn nothing."
  },
  {
    icon: Eye,
    title: "What We See, You See",
    description: "Every quote, every carrier comparison, every detail — we share it all. There's no hidden option we're holding back. You see the full picture."
  },
  {
    icon: Handshake,
    title: "No Obligation. Ever.",
    description: "Our conversation is free. Our review is free. If you decide not to move forward, that's fine. We don't follow up 10 times. Your call."
  },
];

export default function TransparencySection() {
  return (
    <section id="transparency" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-[#C8F562] text-sm font-semibold tracking-widest uppercase mb-4">Full Transparency</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            No fine print.{" "}
            <span className="text-white/30">Ask us anything.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C8F562]/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-[#C8F562]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}