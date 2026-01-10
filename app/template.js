'use client';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Template({ children }) {
  useEffect(() => {
    // Premium Curtain Reveal
    const tl = gsap.timeline();
    
    tl.set('#page-curtain', { scaleY: 1 })
      .to('#page-curtain', {
        scaleY: 0,
        duration: 1.2,
        ease: 'power4.inOut',
        transformOrigin: 'top',
        delay: 0.2
      });
      
  }, []);

  return (
    <>
      <div 
        id="page-curtain" 
        className="fixed inset-0 bg-primary z-[9999] pointer-events-none origin-top"
        style={{ transform: 'scaleY(1)' }} 
      />
      {children}
    </>
  );
}
