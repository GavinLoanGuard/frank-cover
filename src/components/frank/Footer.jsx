import React from "react";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/frank-favicon.png" alt="Frank Cover" className="w-8 h-8 rounded-full" />
              <span className="text-white font-semibold text-lg">Frank Cover</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Independent life insurance advisor. Licensed in Alberta. Not affiliated with any bank.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {["Term Life Insurance", "Mortgage Protection", "Whole Life Insurance", "Critical Illness", "Policy Reviews"].map(s => (
                <li key={s} className="text-white/40 text-sm hover:text-white/60 transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Compare", href: "#compare" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/40 text-sm hover:text-white/60 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/40 text-sm">(403) 536-6897</li>
              <li className="text-white/40 text-sm">frank@frankcover.ca</li>
              <li className="text-white/40 text-sm">Alberta, Canada</li>
            </ul>
          </div>
        </div>

        {/* Compliance */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-white/20" />
              <p className="text-xs text-white/25">
                Licensed life insurance advisor in Alberta, Canada. Regulated by the Alberta Insurance Council.
              </p>
            </div>
            <p className="text-xs text-white/20">
              © {new Date().getFullYear()} Frank Cover. All rights reserved.
            </p>
          </div>
          <p className="mt-4 text-[10px] text-white/15 leading-relaxed max-w-3xl">
            The information on this website is for general informational purposes only and does not constitute financial, legal, or insurance advice. Insurance products and availability may vary by province. All insurance policies are subject to the terms and conditions of the issuing carrier. Frank Cover is an independent insurance advisor and is not affiliated with any bank or single insurance carrier.
          </p>
        </div>
      </div>
    </footer>
  );
}