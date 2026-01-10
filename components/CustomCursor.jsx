'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // performance-optimized setters
    const moveCursor = gsap.quickTo(cursor, 'x', {
      duration: 0.15,
      ease: 'power3.out',
    });
    const moveCursorY = gsap.quickTo(cursor, 'y', {
      duration: 0.15,
      ease: 'power3.out',
    });

    const moveFollower = gsap.quickTo(follower, 'x', {
      duration: 0.4,
      ease: 'power3.out',
    });
    const moveFollowerY = gsap.quickTo(follower, 'y', {
      duration: 0.4,
      ease: 'power3.out',
    });

    const onMove = (e) => {
      moveCursor(e.clientX);
      moveCursorY(e.clientY);
      moveFollower(e.clientX);
      moveFollowerY(e.clientY);
    };

    window.addEventListener('mousemove', onMove);

    // hover interactions
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 0.5, duration: 0.2 });
        gsap.to(follower, {
          scale: 1.8,
          opacity: 0.2,
          duration: 0.3,
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(follower, {
          scale: 1,
          opacity: 0.4,
          duration: 0.3,
        });
      });
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {});
        el.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <>
      {/* core dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />

      {/* soft follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/40 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm"
      />
    </>
  );
}
