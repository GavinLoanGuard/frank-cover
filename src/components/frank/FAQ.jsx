import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How much does this cost me?",
    a: "Nothing. Our service is free to you. Insurance carriers pay us a commission if and when a policy is placed. You pay the exact same premium whether you go through us or directly to the carrier."
  },
  {
    q: "How do I know you're not biased toward one carrier?",
    a: "We work with 6+ independent carriers and are not employed by any of them. We have no quotas, no sales targets, and no reason to push one over another. We recommend what fits your situation best."
  },
  {
    q: "How long does this take?",
    a: "The initial call is about 15 minutes. We'll have quotes ready within 1-2 business days. The full application process depends on the carrier but typically takes 2-4 weeks."
  },
  {
    q: "Am I obligated to buy anything?",
    a: "No. Our conversation is free. Our review is free. If we can't find something better than what you have, we'll tell you to keep it. No obligation. Ever."
  },
  {
    q: "Is my personal information safe?",
    a: "Yes. We're bound by Canadian privacy laws and a professional code of conduct. Your information is never shared without your explicit consent."
  },
  {
    q: "Are you actually licensed?",
    a: "Yes. Frank is a licensed life insurance advisory operating in Alberta. Our license can be verified through the Alberta Insurance Council."
  },
  {
    q: "Which insurance carriers do you work with?",
    a: "We work with Canada's top independent carriers including Canada Life, Manulife, Sun Life, Desjardins, RBC Insurance, and more. The exact carrier we recommend depends on your specific needs."
  },
  {
    q: "What if I already have insurance through my bank?",
    a: "That's one of the most common situations we help with. Bank mortgage insurance is often more expensive and less flexible than an independent term policy. We'll do a free comparison and show you the difference."
  },
];

export default function FAQ() {
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
            Common questions.{" "}
            <span className="text-white/30">Straight answers.</span>
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