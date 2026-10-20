import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  SERVICES_DATA,
  ServiceDetail,
} from "@/data/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Target,
  ShieldCheck,
  Users,
  Compass,
  ArrowLeft,
  Mail,
  Zap,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Generate static parameters for all 16 service pages
export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | AISMA",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | ${service.categoryLabel} | AISMA`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} — AISMA Growth Engine`,
      description: service.shortDescription,
      type: "website",
    },
  };
}

export default async function DynamicServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Sibling services in the same category
  const siblingServices = SERVICES_DATA.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  );

  const isInstagram = service.category === "instagram";
  const isEmail = service.category === "email";

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-violet-500/20 selection:text-[#653897]">
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            HERO & BREADCRUMBS SECTION
            ======================================================== */}
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200/70 overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-5xl h-[350px] bg-gradient-to-r from-[#653897]/15 via-violet-500/10 to-[#431D70]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
              <Link
                href="/"
                className="hover:text-[#653897] transition-colors flex items-center gap-1 font-medium"
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link
                href="/#services"
                className="hover:text-[#653897] transition-colors font-medium"
              >
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-slate-400 font-medium">
                {service.categoryLabel}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
                {service.title}
              </span>
            </nav>

            <div className={`grid grid-cols-1 ${service.image ? "lg:grid-cols-12 gap-10 lg:gap-12 items-center" : ""}`}>
              {/* Left Column: Content */}
              <div className={service.image ? "lg:col-span-7 xl:col-span-6" : ""}>
                {/* Badge & Category */}
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-50 border border-violet-200/80 text-[#653897] shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#653897]" />
                    {service.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200/60">
                    {service.categoryLabel}
                  </span>
                </div>

                {/* Main Headline & Tagline */}
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-5">
                  {service.title}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#653897] via-[#7c3aed] to-[#431D70] bg-clip-text text-transparent mb-6 leading-snug">
                  {service.tagline}
                </p>

                {/* Overview Descriptions */}
                <div
                  className={`space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-8 ${
                    service.image ? "max-w-xl lg:max-w-lg lg:pr-2" : "max-w-3xl"
                  }`}
                >
                  {service.overviewDescription.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href="/#book-call"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-gradient-to-r from-[#653897] via-[#7c3aed] to-[#431D70] hover:opacity-95 text-white shadow-lg shadow-[#653897]/25 transition-all active:scale-95 border border-white/20"
                  >
                    <span>Schedule Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#sub-services"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm transition-all"
                  >
                    <span>Explore {service.subServices.length} Sub-Services</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Image Asset */}
              {service.image && (
                <div className="lg:col-span-5 xl:col-span-6 mt-6 lg:mt-0 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-xl lg:max-w-[560px] group">
                    {/* Ambient Glow */}
                    <div
                      className={`absolute -inset-2.5 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 ${
                        isInstagram
                          ? "bg-gradient-to-tr from-pink-500/35 via-purple-500/25 to-amber-500/30"
                          : isEmail
                          ? "bg-gradient-to-tr from-indigo-600/35 via-violet-500/25 to-cyan-500/30"
                          : "bg-gradient-to-tr from-[#0077b5]/30 via-indigo-500/25 to-purple-500/30"
                      }`}
                    />

                    {/* Image Card Frame */}
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white/90 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm">
                      <div className="relative aspect-[16/11] min-h-[300px] sm:min-h-[360px] lg:min-h-[390px] w-full overflow-hidden bg-slate-100">
                        <Image
                          src={service.image}
                          alt={`${service.title} - Outreach Showcase`}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 560px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Card Info Footer Bar */}
                      <div className="p-4 sm:p-5 bg-white/95 backdrop-blur-md border-t border-slate-100 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          {isInstagram ? (
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center text-white shadow-sm shadow-pink-500/30 shrink-0">
                              <InstagramIcon className="w-4 h-4 fill-white" />
                            </div>
                          ) : isEmail ? (
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-sm shadow-indigo-600/30 shrink-0">
                              <Mail className="w-4 h-4 text-white" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-lg bg-[#0077b5] flex items-center justify-center text-white font-bold text-xs shadow-sm shadow-[#0077b5]/30 shrink-0">
                              in
                            </div>
                          )}
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                              {isInstagram
                                ? "Instagram DM Engine"
                                : isEmail
                                ? "Cold Email Outbound Engine"
                                : "LinkedIn Outreach Engine"}
                            </div>
                            <div className="text-[11px] text-slate-500 font-medium">
                              {isInstagram
                                ? "High-Converting DM Funnels"
                                : isEmail
                                ? "99% Inbox Delivery & Sequences"
                                : "Targeted Decision-Maker Pipeline"}
                            </div>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Active</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Accent Badge */}
                    <div className="absolute -top-3 -right-2 sm:-right-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-3.5 py-1.5 shadow-lg flex items-center gap-2 text-xs font-bold text-slate-800">
                      <span
                        className={`w-2 h-2 rounded-full animate-ping ${
                          isInstagram
                            ? "bg-pink-500"
                            : isEmail
                            ? "bg-cyan-500"
                            : "bg-indigo-600"
                        }`}
                      />
                      <span>
                        {isInstagram
                          ? "20–35 Leads/Mo"
                          : isEmail
                          ? "99% Inbox Rate"
                          : "15–25 Meetings/Mo"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================
            SUB-SERVICES DETAILED BREAKDOWN
            ======================================================== */}
        <section
          id="sub-services"
          className="py-20 lg:py-28 bg-white border-b border-slate-200/70"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#653897] mb-2">
                <Target className="w-3.5 h-3.5 text-[#653897]" />
                <span>What We Deliver</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Full Breakdown of Capabilities & Deliverables
              </h2>
              <p className="text-slate-600 text-base">
                Every sub-service is engineered for transparent execution,
                high-reply rates, and verified pipeline growth.
              </p>
            </div>

            {/* Sub-Services Cards Grid */}
            <div className="space-y-8">
              {service.subServices.map((sub, index) => (
                <div
                  key={sub.id}
                  className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-7 h-7 rounded-lg bg-[#653897] text-white text-xs font-bold flex items-center justify-center shrink-0">
                          0{index + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {sub.title}
                        </h3>
                      </div>
                      {sub.description && (
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-10">
                          {sub.description}
                        </p>
                      )}
                    </div>

                    {/* Benefit Highlight Pill */}
                    <div className="lg:w-80 shrink-0 bg-white rounded-2xl p-4 sm:p-5 border border-violet-100 shadow-sm">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#653897] uppercase tracking-wider mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#653897]" />
                        <span>Core Benefit</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                        {sub.benefit}
                      </p>
                    </div>
                  </div>

                  {/* "What We Do" Bullet Checklist */}
                  <div className="pt-6 border-t border-slate-200/70">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Execution Steps & Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sub.whatWeDo.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/60"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            APPROACH & METHODOLOGY SECTION
            ======================================================== */}
        <section className="py-20 lg:py-24 bg-slate-50/60 border-b border-slate-200/70">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column Heading */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#653897] mb-2">
                  <Compass className="w-3.5 h-3.5 text-[#653897]" />
                  <span>Strategic Methodology</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                  {service.approach.heading}
                </h2>
                <div className="w-16 h-1 bg-[#653897] rounded-full mb-6" />
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our framework is rooted in human psychology and verified B2B
                  buyer behavior—designed to protect your brand while driving
                  consistent booked revenue.
                </p>
              </div>

              {/* Right Column Content */}
              <div className="lg:col-span-7 space-y-4">
                {service.approach.description.map((paragraph, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-violet-50 border border-violet-200 text-[#653897] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {pIdx + 1}
                      </span>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {paragraph}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            WHO CAN BENEFIT SECTION
            ======================================================== */}
        <section className="py-20 lg:py-24 bg-white border-b border-slate-200/70">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#653897] mb-2">
                <Users className="w-3.5 h-3.5 text-[#653897]" />
                <span>Ideal Client Profiles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Who Can Benefit Most From {service.title}?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Tailored for organizations looking for sustainable, predictable
                pipeline without spam or wasted ad spend.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.whoCanBenefit.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70 shadow-sm hover:border-violet-300 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0 text-[#653897]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">
                        {item}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Pre-screened alignment for high-ticket outbound
                        conversion and rapid pipeline traction.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SIBLING / RELATED SERVICES IN THIS PILLAR
            ======================================================== */}
        {siblingServices.length > 0 && (
          <section className="py-16 lg:py-20 bg-slate-50/60 border-b border-slate-200/70">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Explore Other {service.categoryLabel}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Complementary outbound solutions to compound your growth
                  </p>
                </div>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#653897] hover:text-[#532d7e]"
                >
                  <span>View all service pillars</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {siblingServices.slice(0, 6).map((sibling) => (
                  <Link
                    key={sibling.slug}
                    href={`/services/${sibling.slug}`}
                    className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-violet-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-[#653897] bg-violet-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                        {sibling.badge}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-[#653897] transition-colors mb-1.5">
                        {sibling.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {sibling.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-[#653897]">
                      <span>Learn more</span>
                      <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            BOTTOM CONVERSION CTA BANNER
            ======================================================== */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#653897]/25 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violet-300 bg-violet-950/80 border border-violet-800/80 px-3.5 py-1.5 rounded-full mb-6">
              <Zap className="w-3.5 h-3.5 text-violet-400" />
              Direct Outbound Activation
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {service.cta.headline}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              {service.cta.subtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#book-call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-[#653897] via-[#7c3aed] to-[#431D70] hover:opacity-95 text-white shadow-xl shadow-[#653897]/30 transition-all active:scale-95 border border-white/20"
              >
                <span>{service.cta.buttonText}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Homepage</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
