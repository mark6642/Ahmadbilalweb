"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Globe,
  Zap,
  Megaphone,
  Layers,
  ArrowRight,
  Loader2,
  ShieldCheck,
  ChevronRight,
  User,
  Mail,
  Building,
} from "lucide-react";

// Direct Site Owner Contact Email
const OWNER_EMAIL = "aisalesmarketinga@gmail.com";

const SERVICES = [
  { id: "Web Development", label: "Web Development", icon: Globe },
  { id: "Lead Generation", label: "B2B Lead Generation", icon: Zap },
  { id: "Digital Marketing", label: "Digital Marketing", icon: Megaphone },
  { id: "AI Automations", label: "AI Automations", icon: Layers },
];

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyOrUrl: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web Development",
    "Lead Generation",
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/send-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          companyOrUrl: formData.companyOrUrl || "Not specified",
          message: formData.message || "Looking to discuss project requirements",
          selectedServices,
          timeline: "Immediate",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit proposal. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      companyOrUrl: "",
      message: "",
    });
    setErrorMessage(null);
  };

  return (
    <section
      id="book-call"
      className="relative py-20 lg:py-28 bg-[#f8fafc] overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-purple-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* =========================================================
            CLEAN HEADER
            ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1.5 text-xs font-semibold text-blue-700 mb-5 shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Let&apos;s Connect • 15-Min Free Strategy Session</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Ready to Scale Your Pipeline? <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Let&apos;s Work Together
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Fill out this quick brief and Ahmad Bilal will review your project and get back to you with a tailored strategic roadmap.
          </p>
        </div>

        {/* =========================================================
            MAIN ULTRA-CLEAN FORM CARD
            ========================================================= */}
        <div className="mx-auto max-w-2xl bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/60 relative overflow-hidden">
          
          {/* Subtle Top Gradient Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800">
              <p className="font-bold">Notice</p>
              <p className="mt-0.5">{errorMessage}</p>
            </div>
          )}

          <AnimatePresence mode="wait">
            {isSuccess ? (
              /* =========================================================
                  SUCCESS VIEW
                  ========================================================= */
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="py-10 text-center space-y-6"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-sm">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>

                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                    ✨ Proposal Sent Successfully
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Thank You, {formData.name || "Founder"}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your proposal has been delivered directly to Ahmad Bilal at <strong className="text-slate-800">{OWNER_EMAIL}</strong>. We are reviewing your requirements and will reach out to <strong className="text-slate-800">{formData.email}</strong> within 2–4 hours.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    <span>Send another message</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* =========================================================
                  CLEAN FORM VIEW
                  ========================================================= */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Direct Site Owner Contact Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:px-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-slate-50 border border-blue-100 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs shadow-blue-500/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10.5px] uppercase font-bold tracking-wider text-blue-700 block">
                        Direct Owner Email
                      </span>
                      <a 
                        href={`mailto:${OWNER_EMAIL}?subject=Project%20Inquiry%20via%20Website&body=Hi%20Ahmad,%0A%0AI%20would%20like%20to%20discuss%20a%20project...`}
                        className="font-bold text-slate-900 hover:text-blue-600 transition-colors text-xs sm:text-sm block"
                      >
                        {OWNER_EMAIL}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`mailto:${OWNER_EMAIL}?subject=Project%20Inquiry%20via%20Website&body=Hi%20Ahmad,%0A%0AI%20would%20like%20to%20discuss%20a%20project...`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 font-semibold text-xs shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Email Directly</span>
                    <ArrowRight className="w-3 h-3 text-blue-600" />
                  </a>
                </div>

                {/* 1. Services Pill Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    What are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((svc) => {
                      const isSelected = selectedServices.includes(svc.id);
                      const Icon = svc.icon;
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => toggleService(svc.id)}
                          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-blue-50 border-blue-500 text-blue-700 shadow-xs ring-1 ring-blue-500/20"
                              : "bg-slate-50/70 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300"
                          }`}
                        >
                          <Icon className={`h-3.5 w-3.5 ${isSelected ? "text-blue-600" : "text-slate-400"}`} />
                          <span>{svc.label}</span>
                          {isSelected && <span className="text-[11px] font-bold text-blue-600">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name <span className="text-blue-600">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email <span className="text-blue-600">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition shadow-2xs"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Company or Website */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Company / Website URL <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      name="companyOrUrl"
                      value={formData.companyOrUrl}
                      onChange={handleInputChange}
                      placeholder="e.g. acme.com or linkedin.com/in/..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition shadow-2xs"
                    />
                  </div>
                </div>

                {/* 4. Message / Project Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project Details & Goals <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us what you'd like to achieve, current bottlenecks, or timeline..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition shadow-2xs resize-none"
                    />
                  </div>
                </div>

                {/* 5. Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl py-3.5 px-6 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-lg shadow-blue-600/20 active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-white" />
                      <span>Sending Proposal...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Proposal & Book Call</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                {/* 6. Clean Trust Footer */}
                <div className="pt-1 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-center text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    Strict Mutual NDA
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-blue-600" />
                    Delivered directly to {OWNER_EMAIL}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span>4-Hour Response</span>
                </div>

              </form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
