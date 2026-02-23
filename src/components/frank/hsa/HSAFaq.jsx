import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Do I need an incorporated company to set up an HSA?",
    a: "Incorporation makes it straightforward. Incorporated professionals (doctors, lawyers, consultants, contractors) are the most common HSA users. Self-employed sole proprietors may qualify but face additional CRA conditions — specifically, they must have at least one arm's-length employee. We'll tell you upfront if you qualify."
  },
  {
    q: "How is this different from just paying medical expenses personally?",
    a: "When you pay personally, you use after-tax dollars. With an HSA, your corporation reimburses you for the same expenses and deducts the full amount as a business expense. Depending on your corporate tax rate, this can save you 30–45% on every eligible dollar spent."
  },
  {
    q: "Can I include my spouse and children?",
    a: "Yes. If your spouse is an employee of the corporation, they can be included. Children under 18 (and some over 18) are covered as dependants. This is one of the most tax-efficient ways for families with incorporated businesses to manage healthcare costs."
  },
  {
    q: "What's the annual limit?",
    a: "There is no CRA-mandated dollar cap on PHSP benefits for incorporated employees (unlike some US HSA plans). The plan must be structured properly and the amounts must be reasonable — but for most business owners, this is not a practical constraint."
  },
  {
    q: "Do I need to tell my accountant?",
    a: "Yes, and they'll likely approve. Your CPA needs to know the plan exists so they can properly deduct the reimbursements on your T2 corporate return. We provide a plan summary document designed specifically for accountants."
  },
  {
    q: "Can this replace my existing group plan?",
    a: "For small businesses (1–10 employees), often yes. Many of our clients cancel expensive group plans and switch to a fully usage-based HSA. It's not right for every situation — if you have employees who want predictable prescription drug coverage, a hybrid approach may be better. We'll walk through your specific setup."
  },
  {
    q: "What does Frank charge for this?",
    a: "Our advisory service is free. If you proceed with an HSA through one of our administration partners, there is typically a small administration fee (usually 10% of claims or a flat monthly fee). You still save significantly compared to traditional premiums. We'll be transparent about all costs upfront."
  },
  {
    q: "Is this the same as a Flexible Spending Account (FSA)?",
    a: "No. FSAs are a US product. Canadian PHSPs/HSAs operate under Canadian tax law (IT-339R2). The rules, limits, and eligible expenses are different. Don't assume US HSA rules apply to your Canadian corporation."
  },
];

export default function HSAFaq() {
  return (
    <section id="faq" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#C8F562] text-sm font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            The questions your accountant{" "}
            <span className="text-white/30">is already asking.</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="border border-white/[0.06] rounded-xl px-6 bg-white/[0.02] data-[state=open]:bg-white/[0.04] transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-[#C8F562] text-left py-5 text-base font-medium [&[data-state=open]]:text-[#C8F562]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}