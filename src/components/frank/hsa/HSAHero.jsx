import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, DollarSign, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "(403) 536-6897";

export default function HSAHero({ onCTAClick }) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#C8F562] rounded-full opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8">
                <Building2 className="w-4 h-4 text-[#C8F562]" />
                <span className="text-sm text-white/60 tracking-wide">CRA-Compliant · Alberta Small Business</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            >
              Your Health Bills{" "}
              <span className="text-white/40">Are Costing</span>
              <br />
              <span className="text-[#C8F562]">More Than They Should.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl text-white/50 max-w-lg leading-relaxed"
            >
              A Health Spending Account (HSA) lets incorporated business owners and self-employed Canadians convert personal medical expenses into 100% tax-deductible business costs. CRA-approved. No premiums. No monthly fees.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              {[
                { label: "Tax Deductible", sub: "for the business" },
                { label: "Tax-Free", sub: "for employees" },
                { label: "CRA Approved", sub: "under PHSP rules" },
              ].map((s, i) => (
                <div key={i} className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <p className="text-[#C8F562] font-semibold text-sm">{s.label}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.sub}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={onCTAClick}
                className="bg-[#C8F562] text-black hover:bg-[#b8e552] h-14 px-8 text-base font-semibold rounded-xl group transition-all duration-300"
              >
                Set Up My HSA
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 hover:text-white h-14 px-8 text-base rounded-xl w-full sm:w-auto">
                  Talk to an Advisor
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-xs text-white/30"
            >
              Free setup review. No premiums. No obligation. Takes 15 minutes.
            </motion.p>
          </div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02]">
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-6">Example Savings — Incorporated Professional</p>
              <div className="space-y-5">
                {[
                  { label: "Annual medical spend", value: "$8,400", note: "dentist, vision, prescriptions" },
                  { label: "Without HSA (personal)", value: "0% deductible", highlight: false },
                  { label: "With HSA (business)", value: "100% deductible", highlight: true },
                  { label: "Est. tax savings (40% bracket)", value: "~$3,360/yr", highlight: true, big: true },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between items-center py-4 border-b border-white/[0.05] ${row.big ? "border-0 pt-6" : ""}`}>
                    <span className="text-white/50 text-sm">{row.label}</span>
                    <span className={`font-semibold ${row.highlight ? "text-[#C8F562]" : "text-white/40"} ${row.big ? "text-2xl" : "text-base"}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/20">Illustrative only. Speak with your accountant. CRA rules apply.</p>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-[#C8F562] text-black rounded-2xl px-4 py-3 shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-wide">CRA-Compliant</p>
                <p className="text-[10px] opacity-70">PHSP / Cost-Plus</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}