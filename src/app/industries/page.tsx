import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "44 B2B Industry Verticals We Serve | Targeted Outreach | AISMA",
  description:
    "Explore AISMA's specialized prospecting and outbound acquisition systems across 44 unique B2B industry verticals.",
  openGraph: {
    title: "44 B2B Industry Verticals We Serve | AISMA",
    description:
      "Targeted decision-maker research and human-led outreach across 44 B2B sectors.",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Top Header */}
      <Navbar />

      <main className="flex-1 pt-12">
        {/* Interactive 44 Industries Directory Component */}
        <IndustriesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp Floating Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
