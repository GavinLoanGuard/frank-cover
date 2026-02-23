import React from "react";
import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";

const ROWS = [
  { feature: "Coverage follows you if you switch jobs", bank: false, frank: true },
  { feature: "Guaranteed level premiums", bank: false, frank: true },
  { feature: "Choose your own beneficiary", bank: false, frank: true },
  { feature: "Compare multiple carriers", bank: false, frank: true },
  { feature: "Coverage stays if you pay off mortgage", bank: false, frank: true },
  { feature: "Transparent pricing", bank: false, frank: true },
  { feature: "Independent advice", bank: false, frank: true },
  { feature: "No medical questions (sometimes)", bank: true, frank: false, frankNote: "Proper underwriting = better rates" },
  { feature: "Easy sign-up at the bank", bank: true, frank: true },
];

export default function ComparisonTable() {
  return (
    <section id="compare" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#C8F562] text-sm font-semibold tracking-widest uppercase mb-4">The Comparison</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Bank Insurance vs.{" "}
            <span className="text-[#C8F562]">Frank</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">Most people don't know what they're missing.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-[600px]">
            {/* Header */}
            <div className="grid grid-cols-[1fr_140px_140px] gap-4 pb-4 border-b border-white/10 mb-2">
              <div />
              <div className="text-center">
                <span className="text-white/40 text-sm font-medium">Your Bank</span>
              </div>
              <div className="text-center">
                <span className="text-[#C8F562] text-sm font-semibold">Frank Cover</span>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-[1fr_140px_140px] gap-4 py-4 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors rounded-lg px-2"
              >
                <span className="text-white/70 text-sm sm:text-base">{row.feature}</span>
                <div className="flex justify-center">
                  {row.bank ? (
                    <Check className="w-5 h-5 text-white/30" />
                  ) : (
                    <X className="w-5 h-5 text-red-400/60" />
                  )}
                </div>
                <div className="flex flex-col items-center gap-1">
                  {row.frank ? (
                    <Check className="w-5 h-5 text-[#C8F562]" />
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4 text-yellow-500/60" />
                      {row.frankNote && (
                        <span className="text-[10px] text-white/30 text-center leading-tight">{row.frankNote}</span>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}