'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VelocityScroll() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    
    if (firstText.current && secondText.current) {
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
    }
    
    xPercent += 0.05 * direction; // Base speed
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    // Parallax speed based on scroll speed
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: e => {
           direction = e.direction * -1;
        }
      },
      x: "-=300px", // Standard scroll movement
    });
  }, []);

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap py-24 bg-black/20 backdrop-blur-sm border-y border-white/5">
      <div ref={slider} className="relative flex">
        <Phrase refProp={firstText} text="CREATIVE DEVELOPER • DESIGNER • INNOVATOR • " />
        <Phrase refProp={secondText} text="CREATIVE DEVELOPER • DESIGNER • INNOVATOR • " />
      </div>
    </div>
  );
}

function Phrase({ text, refProp }) {
  return (
    <p ref={refProp} className="text-[10vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 mr-4 tracking-tighter shadow-xl">
      {text}
    </p>
  )
}
