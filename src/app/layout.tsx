import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AhmadBilal AI | Elite AI Web Dev, Client Hunting & Growth Agency",
  description: "Next-generation AI Agency delivering ultra high-converting web applications, automated B2B client hunting pipelines, and AI-driven performance marketing systems.",
  keywords: ["AI Agency", "AI Web Development", "B2B Client Hunting", "Lead Generation Automation", "AI Marketing", "Next.js Development"],
  authors: [{ name: "Ahmad Bilal" }],
  openGraph: {
    title: "AhmadBilal AI | Elite AI Web Dev, Client Hunting & Growth Agency",
    description: "Next-gen AI agency delivering high-converting web platforms, automated B2B client pipelines, and AI marketing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-500/20 selection:text-blue-700">
        {/* Ambient Backdrop */}
        <div className="ambient-glow">
          <div className="glow-orb-1" />
          <div className="glow-orb-2" />
          <div className="glow-orb-3" />
        </div>
        
        {/* Main Content Viewport */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
