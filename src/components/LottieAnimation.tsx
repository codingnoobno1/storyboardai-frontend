"use client";

import Lottie from "lottie-react";

type Props = {
  animationData: any;
  className?: string;
};

export default function LottieAnimation({ animationData, className }: Props) {
  if (!animationData) return <div className={className} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />;
  
  return (
    <Lottie
      animationData={animationData}
      loop
      className={className}
    />
  );
}
