import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const SECTIONS = [
  {
    title: "What is a Health Spending Account (HSA)?",
    content: `A Health Spending Account — also called a Private Health Services Plan (PHSP) or Cost-Plus plan — is a CRA-recognized mechanism that allows Canadian businesses to reimburse employees (including owner-employees) for eligible medical expenses on a 100% tax-deductible basis.

Unlike group insurance, there are no monthly premiums, no underwriting, and no coverage limits based on plan design. You simply spend on health, submit receipts, and the business deducts the reimbursement as a business expense. The employee receives the benefit tax-free.

The legal authority is CRA Interpretation Bulletin IT-339R2 and the Income Tax Act, paragraph 20(1)(e.1).`
  },
  {
    title: "Cost-Plus vs. Traditional Group Benefits",
    content: `Traditional group benefits require you to pay monthly premiums regardless of usage. If your team is healthy, you still pay. If one person has a bad year, premiums spike next renewal.

Cost-Plus is purely usage-based. You only spend when a real expense is incurred. For small businesses with 1–15 employees, this is almost always more efficient — especially when the owner wants to deduct their own family's medical costs.

The catch: Cost-Plus plans must be structured correctly to satisfy CRA. This is where most DIY setups fail, and why working with an advisor matters.`
  },
  {
    title: "Who Qualifies for a PHSP?",
    content: `CRA eligibility rules under IT-339R2:

• Incorporated business owners (T2 filers) — YES
• Self-employed sole proprietors with arm's-length employees — YES (with conditions)
• Employees of qualifying businesses — YES

Key condition for owner-operators: If you are both employer AND employee, you must not be a "key employee" who controls the plan solely for personal benefit. The plan must be available to all employees on a reasonable basis.

For incorporated professionals (dentists, lawyers, consultants, contractors) with a corporation — a PHSP is almost always straightforward to implement.`
  },
  {
    title: "What Medical Expenses Are Eligible?",
    content: `The eligible expense list follows CRA's Medical Expense Tax Credit (METC) list under Section 118.2(2) of the Income Tax Act. This includes:

• Dental work (cleanings, crowns, orthodontics)
• Vision (glasses, contacts, laser eye surgery)
• Prescriptions and paramedical services
• Physiotherapy, chiropractic, massage therapy
• Mental health counselling
• Medical travel expenses
• Hospital stays and surgery
• Fertility treatments
• And much more — 100+ eligible categories

Non-eligible: cosmetic procedures, gym memberships, vitamins (unless prescribed).`
  },
  {
    title: "How Does the Audit Safety Work?",
    content: `The CRA audits HSA/PHSP arrangements when:

1. The plan was not established in writing before expenses were incurred
2. The plan reimburses non-eligible expenses
3. The plan is structured to solely benefit the owner with no genuine benefit structure

To be audit-safe:
• The plan document must be executed before claims are made
• Claims must be for CRA-eligible medical expenses
• Receipts must be retained
• Reimbursements must flow through the business properly

Frank handles the documentation structure so your CPA has exactly what they need. Your accountant books the deduction — we make sure the plan qualifies.`
  },
  {
    title: "Common Pitfalls",
    content: `The most common HSA mistakes we see:

• Setting up after the fact: CRA requires the plan to be established BEFORE the expenses occur
• Reimbursing non-eligible items: cosmetics, gym memberships, etc.
• Not retaining receipts: every claim needs documentation
• Using informal arrangements: a proper plan document is required
• Confusing HSA with RRSP or FSA rules from the US: Canadian PHSP rules are different

Our job is to set this up right the first time so you're not explaining it to a CRA auditor later.`
  },
];

export default function HSAAuthority() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-[#C8F562] text-sm font-semibold tracking-widest uppercase mb-4">The Full Picture</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Everything your accountant{" "}
            <span className="text-white/30">wants you to know.</span>
          </h2>
          <p className="mt-4 text-white/40 text-base leading-relaxed">
            Written for business owners, professionals, and their advisors. No fluff.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          {/* Left — accordion nav */}
          <div className="space-y-2">
            {SECTIONS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 flex justify-between items-start gap-3 ${
                    openIndex === i
                      ? "border-[#C8F562]/30 bg-[#C8F562]/5"
                      : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                  }`}
                >
                  <span className={`text-sm font-medium leading-snug ${openIndex === i ? "text-[#C8F562]" : "text-white/70"}`}>
                    {s.title}
                  </span>
                  {openIndex === i
                    ? <ChevronUp className="w-4 h-4 text-[#C8F562] flex-shrink-0 mt-0.5" />
                    : <ChevronDown className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Right — content panel */}
          <div className="lg:sticky lg:top-32">
            {openIndex >= 0 && (
              <motion.div
                key={openIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{SECTIONS[openIndex].title}</h3>
                <div className="text-white/50 text-sm leading-relaxed whitespace-pre-line">
                  {SECTIONS[openIndex].content}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}