import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "(403) 536-6897";

export default function HeroSection({ onCTAClick }) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#C8F562] rounded-full opacity-[0.04] blur-[120px]" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Proof badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8">
                <Shield className="w-4 h-4 text-[#C8F562]" />
                <span className="text-sm text-white/60 tracking-wide">Licensed Independent Advisory · Alberta</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            >
              Your Bank Protects{" "}
              <span className="text-white/40">Itself.</span>
              <br />
              <span className="text-[#C8F562]">Frank Protects</span>{" "}
              Your Family.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl text-white/50 max-w-lg leading-relaxed"
            >
              6 carriers. One honest answer. Independent life insurance advice with no bank ties, no quotas, and no pressure. <span className="text-white/30 text-base italic">frank /fraNGk/ — open, honest, and direct.</span>
            </motion.p>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 border-2 border-[#0A0A0A] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#C8F562]" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/40">Trusted by 200+ Alberta families</p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={onCTAClick}
                className="bg-[#C8F562] text-black hover:bg-[#b8e552] h-14 px-8 text-base font-semibold rounded-xl group transition-all duration-300"
              >
                Get My Free Review
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 hover:text-white h-14 px-8 text-base rounded-xl w-full sm:w-auto"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </motion.div>

            {/* Microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-xs text-white/30"
            >
              Free. No obligation. Takes 2 minutes.
            </motion.p>
          </div>

          {/* Right — Visual anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Abstract editorial portrait placeholder */}
              <div className="w-[400px] h-[480px] rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.08] flex items-end justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-end justify-center">
                      <img
                        src="/images/frank-hero.png"
                        alt="Frank Cover"
                        className="w-full h-full object-contain object-bottom"
                      />
                    </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-16 bg-[#141414] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-[#C8F562] text-sm font-semibold">6 Carriers</p>
                <p className="text-white/40 text-xs">Compared for you</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-24 bg-[#141414] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-white text-sm font-semibold">$0 Cost to You</p>
                <p className="text-white/40 text-xs">Unless a policy is placed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}