import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown, Heart, Home, Briefcase, ShieldCheck } from "lucide-react";
import { createPageUrl } from "@/utils";

const PHONE_NUMBER = "(403) 536-6897";

const SOLUTIONS = [
  { icon: Heart, label: "Life Insurance", desc: "Term & whole life", href: createPageUrl("Home"), color: "text-rose-400" },
  { icon: Home, label: "Mortgage Protection", desc: "Protect your home", href: createPageUrl("Home"), color: "text-amber-400" },
  { icon: Briefcase, label: "Health Spending Account", desc: "HSA / Cost-Plus / PHSP", href: createPageUrl("HSA"), color: "text-[#C8F562]" },
  { icon: ShieldCheck, label: "Disability Insurance", desc: "Income protection", href: createPageUrl("Home"), color: "text-blue-400" },
];

const NAV_ITEMS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function StickyHeader({ onCTAClick, funnel }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/images/logo-transparent.png" alt="Frank Cover" className="h-9 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Solutions dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors"
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-3 w-64 bg-[#141414] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    {SOLUTIONS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-white/[0.05] transition-colors"
                      >
                        <s.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${s.color}`} />
                        <div>
                          <p className="text-white text-sm font-medium">{s.label}</p>
                          <p className="text-white/30 text-xs">{s.desc}</p>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <Button
              onClick={onCTAClick}
              className="bg-[#C8F562] text-black hover:bg-[#b8e552] h-10 px-6 text-sm font-semibold rounded-lg"
            >
              Free Review
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button size="icon" className="bg-[#C8F562] text-black hover:bg-[#b8e552] h-10 w-10 rounded-lg">
                <Phone className="w-4 h-4" />
              </Button>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white/60 hover:text-white p-2"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 p-6 md:hidden"
          >
            <nav className="space-y-4">
              <p className="text-white/20 text-xs uppercase tracking-widest font-semibold pt-1">Solutions</p>
              {SOLUTIONS.map((s) => (
                <a key={s.label} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-white/60 hover:text-white">
                  <s.icon className={`w-4 h-4 ${s.color}`} />
                  <span className="text-base">{s.label}</span>
                </a>
              ))}
              <div className="border-t border-white/[0.06] pt-4 mt-2" />
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white/60 hover:text-white text-lg"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => { setMobileOpen(false); onCTAClick(); }}
                className="w-full bg-[#C8F562] text-black hover:bg-[#b8e552] h-12 text-base font-semibold rounded-xl mt-4"
              >
                Get My Free Review
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}