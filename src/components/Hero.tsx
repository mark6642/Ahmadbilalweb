"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  ArrowRight, Play, TrendingUp, Megaphone, Globe, 
  ShieldCheck, Zap, Users, Star, CheckCircle2,
  MousePointerClick, BarChart3
} from "lucide-react";

// WhatsApp Contact Configuration
// Tip: Yahan apna WhatsApp number daalein (country code k sath, bina '+' ya space k, eg: "923001234567")
const WHATSAPP_NUMBER = "923000000000"; 
const WHATSAPP_MESSAGE = "Hi Ahmad Bilal, I am interested in your agency services and would like to discuss a project.";

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
  const animatedWords = ["Bigger Growth.", "Higher Revenue.", "Viral Reach.", "Top Rankings."];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      const currentWord = animatedWords[wordIndex];
      
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
          setWordIndex((prev) => (prev + 1) % animatedWords.length);
          return;
        }
      }
    }, isDeleting ? 30 : 80); // Typing speed

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, isMounted]);

  if (!isMounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#f8fafc] font-sans pt-28 lg:pt-24 pb-12 lg:pb-8">
      
      {/* =========================================
          BACKGROUND: VISIBLE IMAGE + MESH
          ========================================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Transparent Image of person using computer (Opacity increased to make it visible) */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop" 
            alt="Agency working on computers"
            className="w-full h-full object-cover opacity-[0.18]" 
          />
          {/* Gradients to keep the text readable while image is visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-[#f8fafc]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc]/90 lg:from-[#f8fafc]/80 via-transparent to-[#f8fafc]/90 lg:to-[#f8fafc]/80" />
        </div>

        {/* Soft abstract lighting */}
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[35vw] h-[35vw] bg-purple-400/20 rounded-full blur-[100px]"></div>
        
        {/* Subtle dot grid for tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* =========================================
          MAIN HERO CONTENT (RESPONSIVE GRID)
          ========================================= */}
      <div className="relative z-10 container mx-auto px-5 lg:px-6 max-w-7xl flex-1 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
        
        {/* LEFT COLUMN: TEXT & CTAS */}
        <div className="flex-1 flex flex-col items-start text-left w-full">
          
          {/* Top Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 mb-6 shadow-sm"
          >
            <span className="text-blue-500">✨</span>
            <span className="text-xs sm:text-sm font-semibold text-blue-700">
              Your Growth Partner in the Digital World
            </span>
          </motion.div>

          {/* Headline (Responsive min-height to fix layout jumps) */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.15] lg:leading-[1.05] mb-4 lg:mb-6 min-h-[140px] sm:min-h-[160px] lg:min-h-[220px]"
          >
            More Leads. <br />
            Stronger Brands. <br />
            <span className="inline-flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {text}
              </span>
              <span className="w-1 lg:w-1.5 h-8 sm:h-10 lg:h-16 bg-purple-500 ml-1.5 animate-pulse rounded-full opacity-70" />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium max-w-xl mb-8 leading-relaxed"
          >
            We help businesses generate high-quality leads, grow their online presence with strategic digital marketing, and build modern, high-performing websites.
          </motion.p>

          {/* Mini Services Row (Responsive wrapping) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5 mb-10 w-full"
          >
            <div className="flex items-center gap-2 sm:gap-3 bg-white/50 backdrop-blur-md pr-4 py-1.5 rounded-xl border border-slate-100 shadow-sm">
              <div className="w-8 sm:w-10 h-8 sm:h-10 ml-1.5 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20">
                <MousePointerClick className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Lead Generation</span>
                <span className="text-[9px] sm:text-[10px] text-slate-500">Quality Leads. Real Results.</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-white/50 backdrop-blur-md pr-4 py-1.5 rounded-xl border border-slate-100 shadow-sm">
              <div className="w-8 sm:w-10 h-8 sm:h-10 ml-1.5 rounded-lg bg-indigo-500 flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Megaphone className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Digital Marketing</span>
                <span className="text-[9px] sm:text-[10px] text-slate-500">More Reach. More Sales.</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-white/50 backdrop-blur-md pr-4 py-1.5 rounded-xl border border-slate-100 shadow-sm">
              <div className="w-8 sm:w-10 h-8 sm:h-10 ml-1.5 rounded-lg bg-purple-500 flex items-center justify-center shadow-md shadow-purple-500/20">
                <Globe className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Web Development</span>
                <span className="text-[9px] sm:text-[10px] text-slate-500">Fast. Modern. Scalable.</span>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            {/* Primary Action: Start Project */}
            <a 
              href="#book-call"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* WhatsApp CTA Button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
              <span>Chat on WhatsApp</span>
            </a>
            
            {/* Secondary Action */}
            <a
              href="#process"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-white/80 backdrop-blur-md text-slate-800 font-bold text-sm border border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Play className="w-3 h-3 text-slate-700 group-hover:text-blue-600 ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: RESPONSIVE FLOATING DASHBOARD CARDS */}
        {/* On mobile: flex-col stack, On desktop: absolute floating */}
        <div className="flex-1 w-full lg:h-[600px] flex flex-col lg:block items-center justify-center mt-12 lg:mt-0 perspective-1000 z-20">
          
          <div className="relative w-full max-w-sm lg:max-w-lg mx-auto flex flex-col gap-6 lg:block h-full">
            
            {/* Card 1: Qualified Leads */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative lg:absolute lg:top-8 lg:-left-4 w-full lg:w-64 bg-white/90 backdrop-blur-2xl border border-white rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-20 mx-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Qualified Leads</span>
              </div>
              <div className="flex items-end gap-3 mb-2">
                <h3 className="text-3xl font-bold text-slate-900">2,842</h3>
                <span className="text-xs font-bold text-emerald-500 mb-1 flex items-center">
                  ↑ 128%
                </span>
              </div>
              <div className="w-full h-10 flex items-end gap-1 opacity-80 mt-2">
                {[15, 25, 20, 40, 30, 50, 40, 60, 55, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </motion.div>

            {/* Card 2: Your Growth (Main) */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative lg:absolute lg:top-32 lg:-right-6 w-full lg:w-72 bg-white/95 backdrop-blur-2xl border border-white rounded-3xl p-6 shadow-[0_16px_48px_rgba(0,0,0,0.12)] z-30 mx-auto"
            >
              <h3 className="text-sm font-semibold text-slate-500 mb-6">Your Growth</h3>
              
              <div className="flex flex-row items-center justify-between sm:justify-start sm:gap-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="35" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                    <circle cx="50%" cy="50%" r="35" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="220" strokeDashoffset="50" className="text-blue-600" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center mt-1">
                    <span className="text-lg sm:text-xl font-black text-slate-900">+320%</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">More Leads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">Higher Traffic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">Better Sales</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Website Traffic */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="relative lg:absolute lg:bottom-12 lg:left-4 w-full lg:w-60 bg-white/90 backdrop-blur-2xl border border-white rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-20 mx-auto"
            >
               <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Website Traffic</span>
              </div>
              <div className="flex items-end gap-3 mb-2">
                <h3 className="text-3xl font-bold text-slate-900">125K</h3>
                <span className="text-xs font-bold text-emerald-500 mb-1 flex items-center">
                  ↑ 95%
                </span>
              </div>
              <div className="w-full h-10 mt-2 relative overflow-hidden">
                <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d">
                  <path d="M0 40 Q 10 30, 20 20 T 40 25 T 60 10 T 80 15 T 100 0 L 100 40 Z" fill="url(#gradient)" opacity="0.2" />
                  <path d="M0 40 Q 10 30, 20 20 T 40 25 T 60 10 T 80 15 T 100 0" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM STRIP: 4 TRUST FEATURES
          ========================================= */}
      <div className="relative z-10 container mx-auto px-5 lg:px-6 max-w-7xl mt-16 border-t border-slate-200/60 pt-8 pb-4">
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
              <Users className="w-5 h-5 text-cyan-500" />
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
