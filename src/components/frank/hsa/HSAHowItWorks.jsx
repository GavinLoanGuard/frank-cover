import React from "react";
import { motion } from "framer-motion";
import { FileText, Receipt, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    icon: FileText,
    step: "01",
    title: "We Set Up the Plan",
    description: "We establish your PHSP plan document — the formal legal structure CRA requires. Takes about 15 minutes. Your CPA gets a copy.",
  },
  {
    icon: Receipt,
    step: "02",
    title: "You Incur Eligible Expenses",
    description: "Pay for dental, vision, prescriptions, or any CRA-eligible medical expense. Keep your receipts.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Submit & Deduct",
    description: "Submit receipts through the plan. The business reimburses you. The reimbursement is a 100% deductible business expense. You receive it tax-free.",
  },
];

export default function HSAHowItWorks({ onCTAClick }) {
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
            <span className="text-white/30">No ongoing premiums.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center">
          <Button
            onClick={onCTAClick}
            className="bg-[#C8F562] text-black hover:bg-[#b8e552] h-14 px-10 text-base font-semibold rounded-xl group"
          >
            Set Up My HSA — Free Review
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}