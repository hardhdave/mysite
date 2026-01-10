'use client';
import { useEffect, useRef, useState } from 'react';

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on mobile
    if (window.innerWidth < 768) {
      setEnabled(false);
      return;
    }

    // Respect reduced motion
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setEnabled(false);
      return;
    }

    const handleVisibility = () => {
      if (!videoRef.current) return;
      document.hidden
        ? videoRef.current.pause()
        : videoRef.current.play();
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  if (!enabled) {
    // Static premium fallback
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#140b24] via-[#1a0b2e] to-black" />
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover opacity-35"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* readability + luxury tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
    </div>
  );
}
