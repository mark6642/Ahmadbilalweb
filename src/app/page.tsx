import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import ServicesBento from "@/components/ServicesBento";
import GrowthEngineSection from "@/components/GrowthEngineSection";
import ProcessWorkflow from "@/components/ProcessWorkflow";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-indigo-500/30 selection:text-white">
      {/* Top Sticky Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Tech & Infrastructure Marquee */}
      <TrustMarquee />

      {/* Core 3 Pillars in Bento Box Grid */}
      <ServicesBento />

      {/* Modular Growth Engines Compact 4-Card Grid */}
      <GrowthEngineSection />

      {/* 14-Day Sprint Execution Model */}
      <ProcessWorkflow />

      {/* Verified Client Testimonials & Reviews */}
      <Testimonials />

      {/* Transparent Sprint & Retainer Pricing Plans */}
      <PricingSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* High-Converting Strategy Call Booking Form */}
      <BookingSection />

      {/* Site Footer */}
      <Footer />

      {/* Bottom-Right Floating Sticky WhatsApp CTA */}
      <FloatingWhatsApp />
    </main>
  );
}
