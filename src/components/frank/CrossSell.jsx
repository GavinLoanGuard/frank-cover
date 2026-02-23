import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Home, Briefcase, ShieldCheck } from "lucide-react";
import { createPageUrl } from "@/utils";

const SOLUTIONS = {
  life: {
    icon: Heart,
    label: "Life Insurance",
    desc: "Term and whole life for families and mortgage holders.",
    page: "Life",
    color: "text-rose-400",
  },
  mortgage: {
    icon: Home,
    label: "Mortgage Protection",
    desc: "Protect your home and family if you're no longer here.",
    page: "Mortgage",
    color: "text-amber-400",
  },
  hsa: {
    icon: Briefcase,
    label: "Health Spending Account",
    desc: "Turn medical expenses into tax-deductible business costs.",
    page: "HSA",
    color: "text-[#C8F562]",
  },
  disability: {
    icon: ShieldCheck,
    label: "Disability / Income Protection",
    desc: "Replace your income if illness or injury keeps you off work.",
    page: "Disability",
    color: "text-blue-400",
  },
};

const CROSS_SELL_MAP = {
  hsa: ["life", "disability"],
  life: ["mortgage", "hsa"],
  mortgage: ["life", "hsa"],
  default: ["hsa", "life"],
};

export default function CrossSell({ currentFunnel = "default" }) {
  const suggestions = (CROSS_SELL_MAP[currentFunnel] || CROSS_SELL_MAP.default).map((k) => ({ key: k, ...SOLUTIONS[k] }));

  return (
    <section className="bg-[#0A0A0A] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-white/30 text-sm font-semibold uppercase tracking-widest mb-2">Also worth knowing</p>
          <h3 className="text-2xl font-bold text-white">Other ways Frank can help</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {suggestions.map((s, i) => (
            <motion.a
              key={s.key}
              href={createPageUrl(s.page)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-start gap-5 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.07] transition-colors">
                <s.icon className={`w-6 h-6 ${s.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-base mb-1">{s.label}</p>
                <p className="text-white/40 text-sm leading-snug">{s.desc}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}