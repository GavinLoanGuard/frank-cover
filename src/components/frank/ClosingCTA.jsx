import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const PHONE_NUMBER = "(403) 536-6897";

export default function ClosingCTA({ onCTAClick, headline }) {
  return (
    <section className="bg-[#0F0F0F] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-12 sm:p-16 text-center"
        >
          {/* Gradient orb */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8F562] rounded-full opacity-[0.04] blur-[100px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {headline ? (
                <span className="text-[#C8F562]">{headline}</span>
              ) : (
                <>Still paying for bank insurance?{" "}<span className="text-[#C8F562]">Let's fix that.</span></>
              )}
            </h2>
            <p className="mt-6 text-lg text-white/50">
              One call. Free comparison. No obligation. That's it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onCTAClick}
                className="bg-[#C8F562] text-black hover:bg-[#b8e552] h-14 px-10 text-base font-semibold rounded-xl group"
              >
                Get My Free Review
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 hover:text-white h-14 px-10 text-base rounded-xl w-full"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {PHONE_NUMBER}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}