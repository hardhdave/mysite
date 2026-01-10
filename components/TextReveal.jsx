'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({
  children,
  className = '',
  stagger = 0.06,
  delay = 0,
  type = 'lines', // 'lines' | 'words' | 'chars'
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const split = new SplitType(elementRef.current, {
      types: type,
      tagName: 'span',
    });

    const targets =
      type === 'chars'
        ? split.chars
        : type === 'words'
        ? split.words
        : split.lines;

    gsap.fromTo(
      targets,
      {
        y: type === 'chars' ? 40 : 24,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          once: true, // IMPORTANT: no replay spam
        },
      }
    );

    return () => split.revert();
  }, [stagger, delay, type]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  );
}
