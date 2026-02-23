import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const FEATURES = [
  { label: "Monthly premiums", group: false, hsa: true, note: "HSA: pay only what you use" },
  { label: "Tax deductible for business", group: true, hsa: true },
  { label: "Tax-free for employee", group: true, hsa: true },
  { label: "No underwriting required", group: false, hsa: true },
  { label: "Covers pre-existing conditions", group: false, hsa: true },
  { label: "Usage-based (no waste)", group: false, hsa: true },
  { label: "CRA-approved structure", group: true, hsa: true },
  { label: "Works with 1-person corps", group: false, hsa: true },
  { label: "Premium increases on renewal", group: true, hsa: false, note: "HSA: cost is what you spend" },
  { label: "100+ eligible expense categories", group: false, hsa: true },
];

export default function HSAComparison() {
  return (
    <section id="compare" className="bg-[#0F0F0F] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#C8F562] text-sm font-semibold tracking-widest uppercase mb-4">HSA vs Group Benefits</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Why small businesses{" "}
            <span className="text-white/30">are switching.</span>
          </h2>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-white/40 text-sm font-medium w-1/2">Feature</th>
                <th className="py-4 px-6 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-white/40 text-sm font-medium">Group Benefits</span>
                    <span className="text-white/20 text-xs">Traditional plan</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-[#C8F562] text-sm font-semibold">HSA / Cost-Plus</span>
                    <span className="text-[#C8F562]/40 text-xs">Frank Cover</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((f, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="text-white/60 text-sm">{f.label}</span>
                    {f.note && <span className="ml-2 text-[#C8F562]/50 text-xs">({f.note})</span>}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {f.group
                      ? <Check className="w-5 h-5 text-white/30 mx-auto" />
                      : <X className="w-5 h-5 text-white/15 mx-auto" />}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {f.hsa
                      ? <Check className="w-5 h-5 text-[#C8F562] mx-auto" />
                      : <X className="w-5 h-5 text-white/15 mx-auto" />}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}