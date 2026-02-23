import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <style>{`
        :root {
          --background: 0 0% 4%;
          --foreground: 0 0% 95%;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #0A0A0A;
          color: #F5F5F5;
        }
        /* Hide scrollbar on mobile floating CTA overlap */
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
      {children}
    </div>
  );
}