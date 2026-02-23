import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Award, Building2, Lock, BadgeCheck } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Shield, label: "Licensed in Alberta" },
  { icon: Building2, label: "6+ Insurance Carriers" },
  { icon: Users, label: "200+ Families Served" },
  { icon: BadgeCheck, label: "Independent & Unbiased" },
  { icon: Lock, label: "Your Info Stays Private" },
  { icon: Award, label: "No Bank Affiliation" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#0F0F0F] border-y border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <item.icon className="w-5 h-5 text-[#C8F562]" />
              <span className="text-xs sm:text-sm text-white/50 font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}