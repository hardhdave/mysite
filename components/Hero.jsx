'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from './TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const photoRef = useRef(null); // Restored photo ref
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Text
      gsap.from(textContainerRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
      });
      
      // Entrance Photo
      gsap.from(photoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: 'power3.out',
        delay: 0.2
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div ref={textContainerRef} className="order-2 lg:order-1 flex flex-col items-start text-left z-10">
           <div className="overflow-hidden mb-6">
              <span className="inline-block px-4 py-2 border border-purple-500/50 rounded-full text-purple-200 text-xs tracking-[0.2em] font-mono bg-purple-900/20 backdrop-blur-sm">
                OPEN TO WORK
              </span>
           </div>

           {/* High Contrast Text (No blend mode) */}
           <div className="flex flex-col mb-8">
             <TextReveal type="chars" className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
               HARDH
             </TextReveal>
             <TextReveal type="chars" className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
               DAVE
             </TextReveal>
           </div>

           <div className="space-y-6 max-w-xl">
              <TextReveal type="words" className="text-xl md:text-3xl text-gray-100 font-light leading-snug">
                Web developer specializing in creating responsive, high-performance web applications.
              </TextReveal>
              
              <TextReveal delay={0.4} className="text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                Passionate about clean code, smooth user experiences, and practical problem-solving.
              </TextReveal>
           </div>
           
           <div className="mt-12 flex flex-wrap gap-4 md:gap-6">
              <a href="#work" className="px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-purple-400 transition-colors rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm md:text-base">
                VIEW WORK
              </a>
              <a href="#contact" className="px-8 py-4 border border-white/40 text-white font-bold tracking-widest hover:bg-white/10 transition-colors rounded-full text-sm md:text-base">
                CONTACT
              </a>
           </div>
        </div>

        {/* Right: Photo Insert Space */}
        <div className="order-1 lg:order-2 relative h-[500px] w-full flex justify-center items-center">
             {/* Circular Shape container for photo */}
             <div 
                ref={photoRef}
                className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-white/5 shadow-[0_0_60px_rgba(140,100,255,0.2)] bg-neutral-900"
             >
                {/* PROFILE PHOTO */}
                <img 
                  src="/profile.png" 
                  alt="Hardh Dave" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '55% center' }}
                />
                
                {/* Fallback Text (only visible if image missing) - utilizing absolute positioning to sit behind transparent/broken img if needed, or we just trust user to add image. */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center bg-neutral-800">
                    <span className="text-white/20 font-bold text-center px-4">
                        ADD "profile.png"<br/>TO /public/images/
                    </span>
                </div>
                
                {/* Overlay Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
             </div>
             
             {/* Decorative rings behind */}
             <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-30">
                <div className="w-[500px] h-[500px] border border-purple-500/30 rounded-full animate-spin-slow" />
             </div>
        </div>

      </div>
    </section>
  );
}
