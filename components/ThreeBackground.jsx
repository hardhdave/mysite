'use client';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    /* -------------------------------------------------------------------------- */
    /*                                 SCENE SETUP                                */
    /* -------------------------------------------------------------------------- */
    const scene = new THREE.Scene();
    // Deep dark background for high contrast
    scene.background = new THREE.Color('#050505');
    // slight fog for depth
    scene.fog = new THREE.FogExp2(0x050505, 0.002);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    /* -------------------------------------------------------------------------- */
    /*                                  PARTICLES                                 */
    /* -------------------------------------------------------------------------- */
    const geometry = new THREE.BufferGeometry();
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Color Palette: Purple, Blue, White
    const colorPalette = [
      new THREE.Color('#a855f7'), // Purple
      new THREE.Color('#3b82f6'), // Blue
      new THREE.Color('#ffffff'), // White
    ];

    for (let i = 0; i < count; i++) {
        // Random spread
        positions[i * 3] = (Math.random() - 0.5) * 80;     // x
        positions[i * 3 + 1] = (Math.random() - 0.5) * 80; // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 80; // z

        // Random color
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    /* -------------------------------------------------------------------------- */
    /*                               ANIMATION LOOP                               */
    /* -------------------------------------------------------------------------- */
    let frameId;
    const clock = new THREE.Clock();
    
    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Constant gentle rotation
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = elapsedTime * 0.02;

      // Mouse influence (Parallax)
      particles.rotation.x += mouseY * 0.1;
      particles.rotation.y += mouseX * 0.1;

      // Scroll Influence: Move camera based on scrollY
      // This gives the "Live Movable Scrollable" effect user asked for
      const scrollY = window.scrollY;
      camera.position.y = -scrollY * 0.01; 
      // Also slight zoom out on deep scroll
      camera.position.z = 30 + scrollY * 0.005;

      renderer.render(scene, camera);
    };
    animate();

    /* -------------------------------------------------------------------------- */
    /*                                   RESIZE                                   */
    /* -------------------------------------------------------------------------- */
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[-1] pointer-events-none" 
      style={{ background: '#050505' }} // Fallback/Base
    />
  );
}
