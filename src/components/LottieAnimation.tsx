"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

type Props = {
  animationData?: any;
  animationPath?: string;
  className?: string;
};

export default function LottieAnimation({ animationData: initialData, animationPath, className }: Props) {
  const [data, setData] = useState<any>(initialData);

  useEffect(() => {
    if (animationPath) {
      fetch(animationPath)
        .then(res => res.json())
        .then(json => setData(json))
        .catch(err => console.error("Failed to load lottie:", err));
    }
  }, [animationPath]);

  if (!data) return <div className={className} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />;

  return (
    <Lottie
      animationData={data}
      loop
      style={{ width: '100%', height: '100%' }}
      className={className}
    />
  );
}
