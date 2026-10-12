"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function AismaLogo({ className = "", size = "md" }: LogoProps) {
  // Logo aspect ratio is 991:288 (~3.44:1)
  const dimensions = {
    sm: { width: 172, height: 50, heightClass: "h-7 sm:h-8 md:h-9" },
    md: { width: 241, height: 70, heightClass: "h-12 md:h-14" },
    lg: { width: 344, height: 100, heightClass: "h-16 md:h-20" },
  }[size];

  return (
    <div className={`flex items-center select-none group ${className}`}>
      <Image
        src="/aisma-logo.png"
        alt="AiSMA"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className={`${dimensions.heightClass} w-auto object-contain drop-shadow-[0_2px_8px_rgba(109,40,217,0.18)] transition-all duration-300 group-hover:scale-[1.04] group-hover:drop-shadow-[0_4px_14px_rgba(109,40,217,0.32)]`}
      />
    </div>
  );
}
