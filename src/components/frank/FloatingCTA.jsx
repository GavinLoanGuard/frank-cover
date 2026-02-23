import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const PHONE_NUMBER = "(403) 536-6897";

export default function FloatingCTA({ onCTAClick, label }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-white/5 p-4 md:hidden"
        >
          <div className="flex gap-3">
            <a href={`tel:${PHONE_NUMBER}`} className="flex-shrink-0">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 hover:text-white h-12 w-12 rounded-xl p-0"
              >
                <Phone className="w-5 h-5" />
              </Button>
            </a>
            <Button
              onClick={onCTAClick}
              className="flex-1 bg-[#C8F562] text-black hover:bg-[#b8e552] h-12 text-base font-semibold rounded-xl group"
            >
              {label || "Get My Free Review"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}