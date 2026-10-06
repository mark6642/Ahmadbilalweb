"use client";

import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

interface LottiePlayerProps {
  animationData?: any;
  src?: string;
  className?: string;
  loop?: boolean;
}

export default function LottiePlayer({
  animationData,
  src,
  className,
  loop = true,
}: LottiePlayerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={`flex items-center justify-center min-h-[300px] ${className || "w-full"}`}>
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
          <div className="absolute w-6 h-6 rounded-full bg-cyan-500/20 blur-sm animate-pulse" />
        </div>
      </div>
    );
  }

  const animSource = src || animationData;

  return (
    <div className={className}>
      <Lottie
        src={animSource}
        loop={loop}
        autoplay={true}
        className="w-full h-full"
      />
    </div>
  );
}
