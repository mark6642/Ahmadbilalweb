"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  ArrowRight, Play, TrendingUp, Megaphone, Globe, 
  ShieldCheck, Zap, Star, CheckCircle2,
  MousePointerClick, Sparkles, DollarSign, Send,
  Mail
} from "lucide-react";

// WhatsApp Contact Configuration
// Tip: Yahan apna WhatsApp number daalein (country code k sath, bina '+' ya space k, eg: "923001234567")
const WHATSAPP_NUMBER = "923107718742"; 
const WHATSAPP_MESSAGE = "Hi Ahmad Bilal, I am interested in your agency services and would like to discuss a project.";

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.86 0 1.55-.7 1.55-1.55a1.55 1.55 0 0 0-3.1 0c0 .85.69 1.55 1.55 1.55m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
    </svg>
  );
}


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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="home" className="relative flex flex-col overflow-hidden bg-[#f8fafc] font-sans pt-10 sm:pt-12 lg:pt-14 pb-8 lg:pb-6">
      
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
      <div className="relative z-10 w-full max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex-1 flex flex-col justify-start items-center py-0">
        
        {/* HERO WRAPPER WITH ORBITAL STAGGERED ALIGNMENT */}
        <div className="relative w-full flex flex-col items-center justify-start lg:min-h-[500px]">

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
                &ldquo;Pipeline up <span className="font-bold text-[#116ef0]">+320%</span> in 30 days! 🔥&rdquo;
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
                &ldquo;Hi Ahmad! Ready to launch our outreach engine.&rdquo;
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
                &ldquo;<span className="font-bold text-slate-900">$48,500</span> in qualified pipeline! 💰&rdquo;
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
              ⚡ 24 Qualified Meetings Booked
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
                &ldquo;Site launched in <span className="font-bold text-purple-600">5 days</span>. Conversion up 4.2x! 🚀&rdquo;
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
                <span className="text-[11px] font-bold text-slate-900">Inbox Deliverability</span>
                <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">99.4%</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                &ldquo;SPF, DKIM & DMARC zero-spam shield active! 🛡️&rdquo;
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
                <span className="text-[11px] font-bold text-slate-900">Positive Reply Rate</span>
                <span className="text-[9px] text-amber-600 font-bold bg-amber-50 px-1 rounded">+24.8%</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                &ldquo;Human-led personalization outperforming bots! 🎯&rdquo;
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
              CENTERED HERO CONTENT (BOLD, ATTRACTIVE & IMPACTFUL)
              ======================================================== */}
          <div className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 pt-0 sm:pt-1 pb-3 sm:pb-5">
            
            {/* Elite Compact Floating Animated Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.94 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [-4, 4, -4],
                x: [-2, 2, -2],
                rotate: [-0.6, 0.6, -0.6]
              }}
              transition={{ 
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6.2, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="relative mb-4 sm:mb-5 inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-blue-200/80 shadow-[0_6px_22px_rgba(17,110,240,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] ring-1 ring-blue-500/10 cursor-default group transition-all duration-300 hover:shadow-[0_10px_28px_rgba(17,110,240,0.22)] hover:border-blue-400/80"
            >
              {/* Compact Glowing Icon Capsule */}
              <div className="relative flex items-center justify-center w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-[#116ef0] via-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/30 shrink-0">
                <Globe className="w-3 h-3 text-white group-hover:rotate-45 transition-transform duration-500" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 border border-white rounded-full animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 border border-white rounded-full" />
              </div>

              {/* Text Content */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[11.5px] sm:text-[12.5px] font-bold text-slate-800 tracking-tight whitespace-nowrap">
                  AISMA — Human-Led B2B Lead Gen & Web Agency
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-blue-700 bg-blue-50 border border-blue-200/70 px-1.5 py-0.5 rounded-full leading-none">
                  <Sparkles className="w-2.5 h-2.5 text-blue-500 animate-pulse" />
                  Verified
                </span>
              </div>
            </motion.div>

            {/* Main Headline - Bold, Punchy & Attractive */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.65rem] font-black tracking-[-0.035em] text-slate-950 leading-[1.12] mb-3.5 sm:mb-4 max-w-2xl sm:max-w-3xl lg:max-w-4xl"
            >
              Build Your Pipeline. <br className="hidden sm:inline" />
              Book More Qualified Meetings. <br className="hidden sm:inline" />
              <span className="relative inline-block mt-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#116ef0] via-indigo-600 to-purple-600 font-black">
                  Build a Powerful Website.
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#116ef0]/0 via-indigo-500/60 to-purple-500/0" />
              </span>
            </motion.h1>

            {/* Centered Subtext - Human-Led B2B Positioning */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-[1.05rem] text-slate-700 font-semibold max-w-2xl mx-auto mb-5 sm:mb-6 leading-relaxed"
            >
              Human-led strategies help businesses generate high-quality leads, strengthen their online presence, and convert prospects into loyal clients.
            </motion.p>

            {/* Mini Services Pill Row (4 Core AISMA Capabilities) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-nowrap items-center justify-start sm:justify-center gap-2 sm:gap-2.5 lg:gap-3 mb-5 sm:mb-6 w-full max-w-full overflow-x-auto sm:overflow-visible px-2 sm:px-0 py-1"
            >
              {/* 1. LinkedIn Engine */}
              <a 
                href="#services" 
                className="shrink-0 group flex items-center gap-2 sm:gap-2.5 bg-white/90 backdrop-blur-md px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-sm hover:border-[#116ef0] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-lg bg-[#0077b5] flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform shrink-0">
                  <LinkedInIcon className="w-3.5 h-3.5 fill-white text-white" />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-xs sm:text-[12.5px] font-extrabold text-slate-900 leading-tight whitespace-nowrap">LinkedIn Engine</span>
                  <span className="text-[9.5px] text-slate-500 font-medium block whitespace-nowrap">B2B Decision Makers</span>
                </div>
              </a>

              {/* 2. Cold Email Engine */}
              <a 
                href="#services" 
                className="shrink-0 group flex items-center gap-2 sm:gap-2.5 bg-white/90 backdrop-blur-md px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-sm hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-xs sm:text-[12.5px] font-extrabold text-slate-900 leading-tight whitespace-nowrap">Cold Email Engine</span>
                  <span className="text-[9.5px] text-slate-500 font-medium block whitespace-nowrap">99% Inbox Delivery</span>
                </div>
              </a>

              {/* 3. Instagram Engine */}
              <a 
                href="#services" 
                className="shrink-0 group flex items-center gap-2 sm:gap-2.5 bg-white/90 backdrop-blur-md px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-sm hover:border-pink-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center shadow-md shadow-pink-600/20 group-hover:scale-105 transition-transform shrink-0">
                  <Send className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-xs sm:text-[12.5px] font-extrabold text-slate-900 leading-tight whitespace-nowrap">Instagram Engine</span>
                  <span className="text-[9.5px] text-slate-500 font-medium block whitespace-nowrap">Organic DM Funnels</span>
                </div>
              </a>

              {/* 4. Modern Web Development */}
              <a 
                href="#services" 
                className="shrink-0 group flex items-center gap-2 sm:gap-2.5 bg-white/90 backdrop-blur-md px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-sm hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-lg bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform shrink-0">
                  <Globe className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-xs sm:text-[12.5px] font-extrabold text-slate-900 leading-tight whitespace-nowrap">High-Converting Web</span>
                  <span className="text-[9.5px] text-slate-500 font-medium block whitespace-nowrap">Fast & Scalable</span>
                </div>
              </a>
            </motion.div>

            {/* ENHANCED & COMPACT ACTION BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 w-full sm:w-auto mb-5"
            >
              {/* Primary Action: Book Strategy Call */}
              <a 
                href="#book-call"
                className="relative group px-5 py-2.5 rounded-full bg-gradient-to-r from-[#116ef0] via-blue-600 to-indigo-600 text-white font-bold text-xs sm:text-[13px] border border-white/20 shadow-[0_4px_16px_rgba(17,110,240,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_22px_rgba(17,110,240,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Strategy Call</span>
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-2.5 h-2.5 text-white" />
                </div>
              </a>

              {/* Secondary Action */}
              <a
                href="#services"
                className="group px-4.5 py-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 font-bold text-xs sm:text-[13px] border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_4px_14px_rgba(15,23,42,0.08)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <div className="w-4 h-4 rounded-full bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                  <Play className="w-2 h-2 text-slate-700 group-hover:text-blue-600 fill-slate-700 group-hover:fill-blue-600 ml-0.5" />
                </div>
                <span>Explore Core Engines</span>
              </a>
            </motion.div>

            {/* Social Proof Pill (Centered below CTAs) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center divide-x divide-slate-200 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm px-1 py-2"
            >
              {[
                { value: "4.9/5", label: "Client Rating" },
                { value: "50+", label: "Projects" },
                { value: "99%", label: "Inbox Rate" },
                { value: "24+", label: "Meetings/Mo" },
              ].map((stat) => (
                <div key={stat.label} className="px-3 sm:px-6 text-center">
                  <div className="text-sm sm:text-lg font-extrabold text-slate-900 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[9.5px] sm:text-[11px] font-medium text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Mobile-Only Floating Highlight Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:hidden mt-4 flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-800"
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
      <div className="relative z-10 container mx-auto px-5 lg:px-6 max-w-7xl mt-4 sm:mt-6 border-t border-slate-200/60 pt-5 sm:pt-6 pb-3 sm:pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 text-left">
          
          <div className="flex items-start gap-4 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-2xl sm:rounded-none border border-slate-100 sm:border-none shadow-sm sm:shadow-none">
            <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Human-Led Personalization</h4>
              <p className="text-xs text-slate-600">Zero generic spam. 100% bespoke outreach.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-2xl sm:rounded-none border border-slate-100 sm:border-none shadow-sm sm:shadow-none">
            <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm shrink-0">
              <Zap className="w-5 h-5 text-indigo-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Verified Decision-Makers</h4>
              <p className="text-xs text-slate-600">Direct access to Founders, CEOs & VPs.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-2xl sm:rounded-none border border-slate-100 sm:border-none shadow-sm sm:shadow-none">
            <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm shrink-0">
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">99% Inbox Deliverability</h4>
              <p className="text-xs text-slate-600">SPF, DKIM & DMARC domain shield.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-2xl sm:rounded-none border border-slate-100 sm:border-none shadow-sm sm:shadow-none">
            <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm shrink-0">
              <Star className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Predictable Pipeline</h4>
              <p className="text-xs text-slate-600">Qualified meetings booked every month.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
