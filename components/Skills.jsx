'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from './TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Logo-Only SVGs
  const PythonLogo = () => (
    <svg viewBox="0 0 256 256" className="w-16 h-16 transition-transform duration-300 group-hover:scale-110">
       <defs>
          <linearGradient id="pyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#387EB8" />
             <stop offset="100%" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="pyYellow" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#FFE052" />
             <stop offset="100%" stopColor="#FFC331" />
          </linearGradient>
       </defs>
       <path fill="url(#pyBlue)" d="M126.9 14.9c-24.8 0-46.3 10.8-46.3 27.2v12.2h47.4v4.3H68.8c-26.1 0-47.5 12.5-47.5 31.6v45.2c0 19.3 16 28.5 38.6 28.5h8.6v-16.7h-17.6c-10.7 0-16-6.4-16-16V98.2c0-9.6 8.5-16.1 20.3-16.1h75.5c11.9 0 20.4 6.5 20.4 16.1v17.7H198c25.9 0 46.5 11.2 46.5 28.8V170c0 19-21.4 31.5-47.4 31.5h-47.4v-4.3h59.1c26.1 0 47.5-12.5 47.5-31.6v-45.2c0-19.3-16-28.5-38.6-28.5h-8.6v16.7h17.6c10.7 0 16 6.4 16 16v33.1c0 9.6-8.5 16.1-20.3 16.1h-75.5c-11.9 0-20.4-6.5-20.4-16.1v-17.7H60.4c-25.9 0-46.5-11.2-46.5-28.8V86.1c0-19 21.4-31.5 47.4-31.5h47.4V50c0-11 11.3-16.1 24-16.1h29.5c12.7 0 24 5.2 24 16.1l.1 19h12.6v-21.6c0-16.4-21.6-27.2-46.5-27.2h-25.5zm19 14.7a10.9 10.9 0 1 0 0 21.8 10.9 10.9 0 0 0 0-21.8z" />
       <path fill="url(#pyYellow)" d="M128.3 229.5c24.8 0 46.3-10.8 46.3-27.2v-12.2h-47.4v-4.3h59.1c26.1 0 47.5-12.5 47.5-31.6v-45.2c0-19.3-16-28.5-38.6-28.5h-8.6v16.7h17.6c10.7 0 16 6.4 16 16v31.6c0 9.6-8.5 16.1-20.3 16.1h-75.5c-11.9 0-20.4-6.5-20.4-16.1v-17.7h-36.4c-25.9 0-46.5-11.2-46.5-28.8v-39.2c0-19 21.4-31.5 47.4-31.5h47.4v4.3H60.4c-26.1 0-47.5 12.5-47.5 31.6v45.2c0 19.3 16 28.5 38.6 28.5h8.6v-16.7h-17.6c-10.7 0-16-6.4-16-16V46.6c0-9.6 8.5-16.1 20.3-16.1h75.5c11.9 0 20.4 6.5 20.4 16.1v17.7h36.4c25.9 0 46.5 11.2 46.5 28.8v39.2c0 19-21.4 31.5-47.4 31.5h-47.4v-4.3h59.1c26.1 0 47.5 12.5 47.5 31.6v45.2zM143 198a10.9 10.9 0 1 0 0 21.8 10.9 10.9 0 0 0 0-21.8z" />
    </svg>
  );

  const FlaskLogo = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:stroke-purple-400">
       <path d="M9 3h6M10 9l-4 8h12l-4-8V3h-4v6z" />
       <path d="M12 11v-2" />
    </svg>
  );

  const skills = [
    { name: 'Python', icon: '/images/skills/python.png', type: 'image', invert: false },
    { name: 'Django', icon: '/images/skills/django.png', type: 'image', invert: false },
    { name: 'Flask', icon: FlaskLogo, type: 'component' },
    { name: 'MySQL', icon: '/images/skills/mysql.png', type: 'image', invert: false },
    { name: 'Prompting', icon: '/images/skills/prompting.png', type: 'image', invert: true },
  ];

  // Removed GSAP entrance to ensure full availability
  useEffect(() => {
     // No animation
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-40 px-6 z-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="mb-24 text-center">
          <TextReveal className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl">
            Core Skills
          </TextReveal>
          <p className="mt-4 text-sm text-gray-300 tracking-wide font-medium">
            Tools & technologies I use to build reliable products
          </p>
        </div>

        {/* grid - COMPACT SIZE as requested */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center p-4 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-3 relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                 {skill.type === 'component' ? (
                    <skill.icon />
                 ) : (
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 ${skill.invert ? 'invert' : ''}`} 
                    />
                 )}
              </div>

              {/* Name */}
              <h3 className="text-sm font-bold tracking-wide text-white group-hover:text-purple-300 transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
