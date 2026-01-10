import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

import VelocityScroll from '@/components/VelocityScroll';

export default function Home() {
  return (
    // Removed bg-black, let global background show through
    <div className="min-h-screen text-white overflow-x-hidden">
      <Hero />
      <VelocityScroll />
      <Skills />
      <Work />
      <Contact />
      
      <footer className="py-8 text-center text-gray-400 text-xs font-mono uppercase border-t border-white/10 bg-white/5 backdrop-blur-sm">
        &copy; hardh dave. All rights reserved.
      </footer>
    </div>
  );
}
