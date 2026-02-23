import React, { useRef } from "react";
import HeroSection from "@/components/frank/HeroSection";
import TrustBar from "@/components/frank/TrustBar";
import Philosophy from "@/components/frank/Philosophy";
import HowItWorks from "@/components/frank/HowItWorks";
import ComparisonTable from "@/components/frank/ComparisonTable";
import Testimonials from "@/components/frank/Testimonials";
import TransparencySection from "@/components/frank/TransparencySection";
import LeadCapture from "@/components/frank/LeadCapture";
import FAQ from "@/components/frank/FAQ";
import ClosingCTA from "@/components/frank/ClosingCTA";
import Footer from "@/components/frank/Footer";
import StickyHeader from "@/components/frank/StickyHeader";
import FloatingCTA from "@/components/frank/FloatingCTA";
import ExitIntentModal from "@/components/frank/ExitIntentModal";
import CrossSell from "@/components/frank/CrossSell";

export default function Home() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <StickyHeader onCTAClick={scrollToForm} />
      <HeroSection onCTAClick={scrollToForm} />
      <TrustBar />
      <Philosophy />
      <HowItWorks onCTAClick={scrollToForm} />
      <ComparisonTable />
      <Testimonials />
      <TransparencySection />
      <div ref={formRef}>
        <LeadCapture />
      </div>
      <FAQ />
      <CrossSell currentFunnel="life" onCTAClick={scrollToForm} />
      <ClosingCTA onCTAClick={scrollToForm} />
      <Footer />
      <FloatingCTA onCTAClick={scrollToForm} />
      <ExitIntentModal />
    </div>
  );
}