"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  ArrowRight, Play, TrendingUp, Megaphone, Globe, 
  ShieldCheck, Zap, Star, CheckCircle2,
  MousePointerClick, Sparkles, DollarSign
} from "lucide-react";

// WhatsApp Contact Configuration
// Tip: Yahan apna WhatsApp number daalein (country code k sath, bina '+' ya space k, eg: "923001234567")
const WHATSAPP_NUMBER = "923000000000"; 
const WHATSAPP_MESSAGE = "Hi Ahmad Bilal, I am interested in your agency services and would like to discuss a project.";

// Typewriter Animation Words
const ANIMATED_WORDS = ["Bigger Growth.", "Higher Revenue.", "Viral Reach.", "Top Rankings."];

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  // Typewriter Animation State
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      const currentWord = ANIMATED_WORDS[wordIndex];
      
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          // Pause when word is completely typed
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length);
          return;
        }
      }
    }, isDeleting ? 30 : 80); // Typing speed

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, isMounted]);

  if (!isMounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#f8fafc] font-sans pt-26 lg:pt-22 pb-12 lg:pb-8">
      
      {/* =========================================
          BACKGROUND: CLEAN ABSTRACT LIGHTING & MESH (NO IMAGE)
          ========================================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft ambient lighting glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-blue-400/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-[15%] left-[-5%] w-[40vw] h-[40vw] bg-purple-400/15 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[30%] w-[35vw] h-[35vw] bg-cyan-400/10 rounded-full blur-[120px]" />
        
        {/* Subtle dot grid for clean tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* =========================================
          MAIN WIDESCREEN HERO CANVAS (EXTRA DISTANCE)
          ========================================= */}
      <div className="relative z-10 w-full max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex-1 flex flex-col justify-center items-center py-6 lg:py-12">
        
        {/* HERO WRAPPER WITH ORBITAL STAGGERED ALIGNMENT */}
        <div className="relative w-full flex flex-col items-center justify-center min-h-[620px] lg:min-h-[700px]">

          {/* ========================================================
              LEFT COLUMN: 4 FLOATING CARDS (STAGGERED ORBITAL ALIGNMENT)
              ======================================================== */}
          
          {/* Card 1: Top-Left (Tilted gently, inset top corner) */}
          <motion.div 
            animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex items-center gap-2.5 absolute top-2 left-2 xl:left-6 2xl:left-12 -rotate-2 hover:rotate-0 bg-white/95 backdrop-blur-xl border border-slate-100/90 shadow-[0_12px_32px_rgba(17,110,240,0.09)] rounded-2xl p-3 text-left w-[220px] xl:w-[245px] 2xl:w-[260px] z-20 pointer-events-auto hover:scale-105 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#116ef0] to-indigo-600 text-white font-bold flex items-center justify-center shrink-0 shadow-sm text-xs">
              SJ
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[11px] font-bold text-slate-900">Sarah Jenkins</span>
                <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">✓ Verified</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                &ldquo;Leads grew by <span className="font-bold text-[#116ef0]">+320%</span> in 30 days! 🔥&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Card 2: Upper-Mid-Left (Swung further outward to the left edge) */}
          <motion.div 
            animate={{ y: [0, -10, 0], x: [0, -4, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex items-center gap-2.5 absolute top-[27%] -left-3 xl:left-0 2xl:left-6 rotate-1 hover:rotate-0 bg-white/95 backdrop-blur-xl border border-blue-50 shadow-[0_14px_36px_rgba(17,110,240,0.11)] rounded-2xl p-3 text-left w-[220px] xl:w-[245px] 2xl:w-[260px] z-20 pointer-events-auto hover:scale-105 transition-all duration-300"
          >
            <div className="relative shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full animate-ping" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[11px] font-bold text-slate-900">Client Inbound</span>
                <span className="text-[9px] text-slate-400">Just now</span>
              </div>
              <p className="text-[10px] text-slate-700 font-medium leading-snug">
                &ldquo;Hi Ahmad! Ready to start the $5K project.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Card 3: Lower-Mid-Left (Tucked slightly inward towards bottom center) */}
          <motion.div 
            animate={{ y: [0, 11, 0], x: [0, 4, 0] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            className="hidden xl:flex items-center gap-2.5 absolute top-[55%] left-3 xl:left-8 2xl:left-14 -rotate-1 hover:rotate-0 bg-white/95 backdrop-blur-xl border border-emerald-50 shadow-[0_12px_32px_rgba(16,185,129,0.09)] rounded-2xl p-3 text-left w-[220px] xl:w-[245px] 2xl:w-[260px] z-20 pointer-events-auto hover:scale-105 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shrink-0 shadow-sm">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[11px] font-bold text-slate-900">Revenue Milestone</span>
                <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">+340%</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                &ldquo;<span className="font-bold text-slate-900">$48,500</span> in new client sales! 💰&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Card 4: Bottom-Left (Swung outward at bottom corner) */}
          <motion.div 
            animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="hidden lg:flex items-center gap-2 absolute bottom-2 left-0 xl:left-2 2xl:left-8 rotate-2 hover:rotate-0 bg-white/90 backdrop-blur-xl border border-blue-100/80 shadow-[0_10px_28px_rgba(17,110,240,0.09)] rounded-full px-3 py-1.5 z-20 pointer-events-auto hover:scale-105 transition-all duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#116ef0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#116ef0]"></span>
            </span>
            <span className="text-[10.5px] font-bold text-slate-800 whitespace-nowrap">
              ⚡ 24 Discovery Calls Booked
            </span>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: 4 FLOATING CARDS (STAGGERED ORBITAL ALIGNMENT)
              ======================================================== */}
          
          {/* Card 5: Top-Right (Tilted gently, inset top corner) */}
          <motion.div 
            animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="hidden lg:flex items-center gap-2.5 absolute top-2 right-2 xl:right-6 2xl:right-12 rotate-2 hover:rotate-0 bg-white/95 backdrop-blur-xl border border-slate-100/90 shadow-[0_12px_32px_rgba(15,23,42,0.07)] rounded-2xl p-3 text-left w-[220px] xl:w-[245px] 2xl:w-[260px] z-20 pointer-events-auto hover:scale-105 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-white text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[11px] font-bold text-slate-900">Marcus Reed</span>
                <span className="text-[9px] text-slate-400">Founder</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                &ldquo;Site launched in <span className="font-bold text-purple-600">5 days</span>. Great ROI! 🚀&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Card 6: Upper-Mid-Right (Swung further outward to the right edge) */}
          <motion.div 
            animate={{ y: [0, 9, 0], x: [0, 5, 0] }}
            transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
            className="hidden lg:flex items-center gap-2.5 absolute top-[27%] -right-3 xl:right-0 2xl:right-6 -rotate-1 hover:rotate-0 bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_14px_36px_rgba(15,23,42,0.07)] rounded-2xl p-3 text-left w-[220px] xl:w-[245px] 2xl:w-[260px] z-20 pointer-events-auto hover:scale-105 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[11px] font-bold text-slate-900">Organic SEO Surge</span>
                <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">+185%</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                &ldquo;Ranked #1 on Google for all key targets! 📈&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Card 7: Lower-Mid-Right (Tucked slightly inward towards bottom center) */}
          <motion.div 
            animate={{ y: [0, -10, 0], x: [0, -4, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="hidden xl:flex items-center gap-2.5 absolute top-[55%] right-3 xl:right-8 2xl:right-14 rotate-1 hover:rotate-0 bg-white/95 backdrop-blur-xl border border-amber-50 shadow-[0_12px_32px_rgba(245,158,11,0.09)] rounded-2xl p-3 text-left w-[220px] xl:w-[245px] 2xl:w-[260px] z-20 pointer-events-auto hover:scale-105 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-4 h-4 fill-white text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[11px] font-bold text-slate-900">Campaign ROAS</span>
                <span className="text-[9px] text-amber-600 font-bold bg-amber-50 px-1 rounded">4.9x ROI</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                &ldquo;Ad returns scaled to <span className="font-bold text-slate-900">4.9x</span> with Ahmad! 🎯&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Card 8: Bottom-Right (Swung outward at bottom corner) */}
          <motion.div 
            animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="hidden lg:flex items-center gap-2 absolute bottom-2 right-0 xl:right-2 2xl:right-8 -rotate-2 hover:rotate-0 bg-white/90 backdrop-blur-xl border border-amber-100/80 shadow-[0_10px_28px_rgba(245,158,11,0.09)] rounded-full px-3 py-1.5 z-20 pointer-events-auto hover:scale-105 transition-all duration-300"
          >
            <div className="flex text-amber-400">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-[10.5px] font-bold text-slate-800 whitespace-nowrap">
              5.0 Star Agency Rating
            </span>
          </motion.div>

          {/* Ambient Frosted Floating Bubbles */}
          <motion.div
            animate={{ y: [-10, 10, -10], x: [-6, 6, -6], scale: [1, 1.05, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute -top-6 left-[22%] w-8 h-8 rounded-full bg-blue-400/10 backdrop-blur-md border border-white/80 shadow-sm pointer-events-none z-10"
          />
          <motion.div
            animate={{ y: [8, -8, 8], x: [5, -5, 5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:block absolute -bottom-4 right-[22%] w-8 h-8 rounded-full bg-purple-400/10 backdrop-blur-md border border-white/80 shadow-sm pointer-events-none z-10"
          />

          {/* ========================================================
              CENTERED HERO CONTENT (TIGHT CENTER + HUGE DISTANCE)
              ======================================================== */}
          <div className="relative z-10 w-full max-w-lg sm:max-w-xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 py-6 lg:py-10">
            
            {/* Top Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 backdrop-blur-sm border border-blue-100 mb-5 shadow-sm"
            >
              <span className="text-blue-500 text-xs">✨</span>
              <span className="text-xs font-semibold text-blue-700">
                Your Growth Partner in the Digital World
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-slate-900 leading-[1.14] mb-5 max-w-lg sm:max-w-xl min-h-[110px] sm:min-h-[130px] lg:min-h-[160px]"
            >
              More Leads. Stronger Brands. <br />
              <span className="inline-flex items-center justify-center mt-1">
                <span className="text-[#116ef0]">
                  {text}
                </span>
                <span className="w-1 lg:w-1.5 h-7 sm:h-9 lg:h-11 bg-[#116ef0] ml-1.5 animate-pulse rounded-full opacity-80" />
              </span>
            </motion.h1>

            {/* Centered Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium max-w-md mx-auto mb-8 leading-relaxed"
            >
              We help ambitious businesses generate high-quality leads, scale their online presence with strategic digital marketing, and build modern, high-converting websites.
            </motion.p>

            {/* Mini Services Pill Row (Centered) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 w-full max-w-lg"
            >
              <div className="flex items-center gap-2 bg-white/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
                  <MousePointerClick className="w-3 h-3 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900 leading-tight">Lead Generation</span>
                  <span className="text-[9px] text-slate-500">Quality Leads</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-indigo-500 flex items-center justify-center shadow-sm">
                  <Megaphone className="w-3 h-3 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900 leading-tight">Digital Marketing</span>
                  <span className="text-[9px] text-slate-500">More Reach</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/60 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-purple-500 flex items-center justify-center shadow-sm">
                  <Globe className="w-3 h-3 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900 leading-tight">Web Development</span>
                  <span className="text-[9px] text-slate-500">Fast & Scalable</span>
                </div>
              </div>
            </motion.div>

            {/* ENHANCED & COMPACT ACTION BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto mb-7"
            >
              {/* Primary Action: Start Project */}
              <a 
                href="#book-call"
                className="relative group px-5 py-2.5 rounded-full bg-gradient-to-r from-[#116ef0] via-blue-600 to-indigo-600 text-white font-bold text-xs sm:text-[13px] border border-white/20 shadow-[0_4px_16px_rgba(17,110,240,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_22px_rgba(17,110,240,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Your Project</span>
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-2.5 h-2.5 text-white" />
                </div>
              </a>

              {/* WhatsApp CTA Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group px-4.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-[13px] border border-white/20 shadow-[0_4px_14px_rgba(37,211,102,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>
              
              {/* Secondary Action */}
              <a
                href="#process"
                className="group px-4.5 py-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 font-bold text-xs sm:text-[13px] border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_4px_14px_rgba(15,23,42,0.08)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <div className="w-4 h-4 rounded-full bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                  <Play className="w-2 h-2 text-slate-700 group-hover:text-blue-600 fill-slate-700 group-hover:fill-blue-600 ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </a>
            </motion.div>

            {/* Social Proof Pill (Centered below CTAs) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-2 text-[11px] text-slate-600"
            >
              <div className="flex -space-x-1.5">
                <span className="w-5 h-5 rounded-full border-2 border-white bg-blue-600 text-white font-bold flex items-center justify-center text-[8px]">A</span>
                <span className="w-5 h-5 rounded-full border-2 border-white bg-indigo-600 text-white font-bold flex items-center justify-center text-[8px]">M</span>
                <span className="w-5 h-5 rounded-full border-2 border-white bg-purple-600 text-white font-bold flex items-center justify-center text-[8px]">S</span>
                <span className="w-5 h-5 rounded-full border-2 border-white bg-emerald-600 text-white font-bold flex items-center justify-center text-[8px]">R</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400 text-[10px]">
                  ★★★★★
                </div>
                <span className="font-bold text-slate-800">4.9/5 Rating</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 font-medium">50+ Projects</span>
              </div>
            </motion.div>

            {/* Mobile-Only Floating Highlight Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:hidden mt-5 flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-800"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>🔥 24+ Leads Booked This Week</span>
            </motion.div>

          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM STRIP: 4 TRUST FEATURES
          ========================================= */}
      <div className="relative z-10 container mx-auto px-5 lg:px-6 max-w-7xl mt-8 border-t border-slate-200/60 pt-7 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 text-left">
          
          <div className="flex items-start gap-4 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-2xl sm:rounded-none border border-slate-100 sm:border-none shadow-sm sm:shadow-none">
            <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Proven Results</h4>
              <p className="text-xs text-slate-600">Real businesses. Real growth.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-2xl sm:rounded-none border border-slate-100 sm:border-none shadow-sm sm:shadow-none">
            <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm shrink-0">
              <Zap className="w-5 h-5 text-indigo-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Fast Turnaround</h4>
              <p className="text-xs text-slate-600">Your goals, our priority.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-2xl sm:rounded-none border border-slate-100 sm:border-none shadow-sm sm:shadow-none">
            <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm shrink-0">
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Expert Team</h4>
              <p className="text-xs text-slate-600">Skilled. Creative. Dedicated.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-2xl sm:rounded-none border border-slate-100 sm:border-none shadow-sm sm:shadow-none">
            <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm shrink-0">
              <Star className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">100% Satisfaction</h4>
              <p className="text-xs text-slate-600">Your success is our success.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
