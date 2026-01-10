'use client';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,          // premium smoothness (not floaty)
        smoothWheel: true,    // desktop only
        smoothTouch: false,   // touch should feel native
        wheelMultiplier: 1,   // natural scroll speed
        touchMultiplier: 1,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
