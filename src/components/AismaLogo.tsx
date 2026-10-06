"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function AismaLogo({ className = "", size = "md" }: LogoProps) {
  const dimensions = {
    sm: { width: 180, height: 54, heightClass: "h-10 sm:h-11 md:h-12" },
    md: { width: 220, height: 65, heightClass: "h-12 md:h-14" },
    lg: { width: 280, height: 82, heightClass: "h-16 md:h-20" },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      <div className="relative flex items-center justify-center">
        <Image
          src="/aisma-logo-v2.png"
          alt="AiSMA Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className={`${dimensions.heightClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
        />
      </div>
    </div>
  );
}
