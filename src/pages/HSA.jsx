import React, { useRef } from "react";
import StickyHeader from "@/components/frank/StickyHeader";
import HSAHero from "@/components/frank/hsa/HSAHero";
import HSATrustBar from "@/components/frank/hsa/HSATrustBar";
import HSAAuthority from "@/components/frank/hsa/HSAAuthority";
import HSAHowItWorks from "@/components/frank/hsa/HSAHowItWorks";
import HSAComparison from "@/components/frank/hsa/HSAComparison";
import HSAFaq from "@/components/frank/hsa/HSAFaq";
import LeadCapture from "@/components/frank/LeadCapture";
import CrossSell from "@/components/frank/CrossSell";
import ClosingCTA from "@/components/frank/ClosingCTA";
import Footer from "@/components/frank/Footer";
import FloatingCTA from "@/components/frank/FloatingCTA";
import ExitIntentModal from "@/components/frank/ExitIntentModal";

export default function HSA() {
  const formRef = useRef(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <title>Health Spending Account Alberta | Frank Cover — HSA & Cost-Plus Benefits</title>
      <StickyHeader onCTAClick={scrollToForm} funnel="hsa" />
      <HSAHero onCTAClick={scrollToForm} />
      <HSATrustBar />
      <HSAAuthority />
      <HSAHowItWorks onCTAClick={scrollToForm} />
      <HSAComparison />
      <div ref={formRef}>
        <LeadCapture funnel="hsa" />
      </div>
      <HSAFaq />
      <CrossSell currentFunnel="hsa" onCTAClick={scrollToForm} />
      <ClosingCTA onCTAClick={scrollToForm} headline="Ready to turn personal health expenses into business deductions?" />
      <Footer />
      <FloatingCTA onCTAClick={scrollToForm} label="Get My HSA Setup" />
      <ExitIntentModal funnel="hsa" />
    </div>
  );
}