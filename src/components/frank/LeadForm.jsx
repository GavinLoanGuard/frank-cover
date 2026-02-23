import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Lock, CheckCircle2, Loader2 } from "lucide-react";
const FUNNEL_DEFAULTS = {
  hsa: { label: "What best describes you?", options: [
    { value: "incorporated_owner", label: "Incorporated Business Owner" },
    { value: "self_employed", label: "Self-Employed / Sole Proprietor" },
    { value: "small_business", label: "Small Business (with employees)" },
    { value: "not_sure", label: "Not Sure — Need Advice" },
  ]},
  default: { label: "What are you looking for?", options: [
    { value: "term_life", label: "Term Life Insurance" },
    { value: "mortgage_protection", label: "Mortgage Protection" },
    { value: "whole_life", label: "Whole Life Insurance" },
    { value: "critical_illness", label: "Critical Illness" },
    { value: "hsa", label: "Health Spending Account (HSA)" },
    { value: "disability", label: "Disability / Income Protection" },
    { value: "not_sure", label: "Not Sure — Need Advice" },
  ]},
};

export default function LeadForm({ inline = false, funnel = "default" }) {
  const funnelConfig = FUNNEL_DEFAULTS[funnel] || FUNNEL_DEFAULTS.default;

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    insurance_type: funnel === "hsa" ? "" : "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUTMParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const utmParams = getUTMParams();

    // GA4 event
    if (typeof window.gtag === "function") {
      window.gtag("event", "lead_form_submit", {
        funnel_type: funnel,
        insurance_type: form.insurance_type,
        utm_source: utmParams.utm_source,
      });
    }

    // TODO: Replace with Web3Forms or another lead capture service
    // Lead data: { ...form, ...utmParams, status: "new", funnel }
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center ${inline ? "py-8" : "py-16"}`}
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-[#C8F562]/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-[#C8F562]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">You're in.</h3>
        <p className="text-white/50">Frank will reach out within 24 hours. Usually much sooner.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          placeholder="Full Name *"
          value={form.full_name}
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
          required
          className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#C8F562]/50 focus:ring-[#C8F562]/20"
        />
        <Input
          placeholder="Phone Number *"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#C8F562]/50 focus:ring-[#C8F562]/20"
        />
      </div>
      <Input
        placeholder="Email (optional)"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#C8F562]/50 focus:ring-[#C8F562]/20"
      />
      <Select
        value={form.insurance_type}
        onValueChange={(val) => setForm({ ...form, insurance_type: val })}
      >
        <SelectTrigger className="bg-white/[0.06] border-white/10 text-white h-12 rounded-xl [&>span]:text-white/30 data-[state=open]:border-[#C8F562]/50">
          <SelectValue placeholder={funnelConfig.label} />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border-white/10">
          {funnelConfig.options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value} className="text-white focus:bg-white/10 focus:text-white">
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#C8F562] text-black hover:bg-[#b8e552] h-14 text-base font-semibold rounded-xl group transition-all duration-300"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Get My Free Review
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>

      <div className="flex items-center justify-center gap-2 pt-1">
        <Lock className="w-3 h-3 text-white/20" />
        <p className="text-xs text-white/25">
          Your info is private. No spam. No obligation. Free.
        </p>
      </div>
    </form>
  );
}