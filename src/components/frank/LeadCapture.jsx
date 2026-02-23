import React from "react";
import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

export default function LeadCapture({ funnel = "default" }) {
  return (
    <section id="contact" className="bg-[#0F0F0F] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C8F562] text-sm font-semibold tracking-widest uppercase mb-4">Get Started</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Two minutes.{" "}
              <span className="text-white/30">That's all it takes.</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              {funnel === "hsa"
                ? "Fill this out and we'll assess your HSA eligibility. No premiums, no commitment. Just a straight answer on whether this works for your business."
                : "Fill this out and we'll review your situation personally. No robo-quotes. No call centres. Just real people who know insurance."}
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Free review — no strings attached",
                "Response within 24 hours (usually same day)",
                "Your info stays between us"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8F562]" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-white/[0.03]"
          >
            <LeadForm funnel={funnel} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}