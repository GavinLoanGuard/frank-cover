import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Frank saved us $180/month by switching from our bank's mortgage insurance to a proper term policy. Same coverage, way less money.",
    name: "Sarah M.",
    location: "Calgary, AB",
    context: "Mortgage protection"
  },
  {
    quote: "He actually told me I didn't need to change my existing policy. What insurance person does that? I sent him three referrals.",
    name: "James K.",
    location: "Edmonton, AB",
    context: "Policy review"
  },
  {
    quote: "No pressure, no scripts, no follow-up calls every week. He explained everything, gave me time to think, and I signed when I was ready.",
    name: "Priya D.",
    location: "Red Deer, AB",
    context: "Term life insurance"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0F0F0F] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6998a0c7e276eec875e1c31e/e89088f1a_frank-avatar.png"
            alt="Frank Cover"
            className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-[#C8F562]/30"
          />
          <p className="text-[#C8F562] text-sm font-semibold tracking-widest uppercase mb-4">Real People</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Don't take my word for it.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#C8F562]/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-4 h-4 fill-[#C8F562] text-[#C8F562]" />
                ))}
              </div>
              <p className="text-white/70 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.location} · {t.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}