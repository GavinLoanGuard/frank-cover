import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !triggered.current) {
        const dismissed = sessionStorage.getItem("exit_intent_dismissed");
        if (!dismissed) {
          triggered.current = true;
          setShow(true);
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("exit_intent_dismissed", "true");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={dismiss}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[#111111] border border-white/10 rounded-2xl p-8 sm:p-10"
          >
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-white/30 hover:text-white/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Wait — before you go.
              </h3>
              <p className="text-white/50 text-sm">
                Get a free, no-obligation insurance review. Takes 2 minutes. Could save you hundreds.
              </p>
            </div>

            <LeadForm inline />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}