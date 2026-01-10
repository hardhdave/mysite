'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from './TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const projects = [
    {
      title: 'Social App',
      desc: 'Comprehensive social media platform with real-time interactions.',
      link: 'https://socialapp-eulh.onrender.com/explore?filter=recent',
      index: '01',
    },
    {
      title: 'Resume Builder',
      desc: 'Intuitive tool for crafting professional resumes with real-time preview.',
      link: 'https://resume-builder-vf6d.onrender.com/builder',
      index: '02',
    },
    {
      title: 'Coming Soon',
      desc: 'Exciting new project currently in development.',
      link: '#',
      index: '03',
    },
  ];

  useEffect(() => {
    // Animation removed for instant visibility
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-40 px-6 z-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <div className="mb-24 flex justify-between items-end">
          <TextReveal type="lines" className="text-5xl md:text-6xl font-extrabold text-white">
            Selected Work
          </TextReveal>
          <span className="text-sm text-neutral-400 tracking-widest">
            03 Projects
          </span>
        </div>

        {/* list */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (itemsRef.current[index] = el)}
              className="group relative p-10 rounded-3xl bg-neutral-900/90 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-neutral-800 hover:border-purple-500/40 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-lg"
            >
              {/* index */}
              <div className="md:col-span-2 text-5xl font-bold text-white/20 group-hover:text-purple-500/60 transition-colors">
                {project.index}
              </div>

              {/* content */}
              <div className="md:col-span-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* link */}
              <div className="md:col-span-2 flex justify-end">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold tracking-widest transition-all hover:bg-purple-400 hover:scale-105"
                >
                  VIEW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
