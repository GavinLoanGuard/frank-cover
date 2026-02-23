import React from "react";
import { motion } from "framer-motion";
import { Shield, BookOpen, Calculator, Users, CheckCircle2, FileText } from "lucide-react";

const ITEMS = [
  { icon: Shield, label: "CRA-Compliant PHSP" },
  { icon: BookOpen, label: "IT-339 Compliant" },
  { icon: Calculator, label: "Accountant-Approved" },
  { icon: Users, label: "Owner + Employee Eligible" },
  { icon: CheckCircle2, label: "No Premiums Required" },
  { icon: FileText, label: "Audit-Safe Documentation" },
];

export default function HSATrustBar() {
  return (
    <section className="bg-[#0F0F0F] border-y border-white/[0.04] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <item.icon className="w-5 h-5 text-[#C8F562]" />
              <span className="text-white/40 text-xs leading-tight">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}