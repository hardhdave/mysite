'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const containerRef = useRef(null);
  const percentRef = useRef(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setComplete(true)
    });

    // 1. Counter Animation (0 to 100)
    let progress = { value: 0 };
    tl.to(progress, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (percentRef.current) {
          percentRef.current.textContent = Math.round(progress.value);
        }
      }
    });

    // 2. Premium Exit Animation (Curtain/Shutter)
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.2
    });

    // Optional: Hide overflow on body during load? 
    // Usually handled by logic, but for now we essentially block view.
  }, []);

  if (complete) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-black text-white flex items-end justify-end p-12 md:p-24 overflow-hidden"
    >
      <div className="relative z-10">
        <div className="text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter flex">
          <span ref={percentRef}>0</span>
          <span className="text-4xl md:text-6xl self-start mt-4">%</span>
        </div>
      </div>
      
      {/* Background ambient light for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
}
