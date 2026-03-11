import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import VelocityScroll from '@/components/VelocityScroll';

export const metadata = {
  title: 'Hardh Dave | FastAPI Backend Developer Portfolio',
  description: 'Hardh Dave is a Python backend developer specializing in FastAPI framework. This portfolio showcases backend API projects built using FastAPI, Python, and modern backend technologies.',
  keywords: ['Hardh Dave', 'Hardh Dave portfolio', 'FastAPI backend developer', 'Python backend developer', 'Django backend developer', 'Python API developer', 'FastAPI'],
};

export default function FastApiDeveloper() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <div className="sr-only">
        <h1>FastAPI Backend Developer</h1>
        <p>Hardh Dave is a Python backend developer specializing in FastAPI framework. This portfolio showcases backend API projects built using FastAPI, Python, and modern backend technologies. Explore my work as a Python API developer.</p>
      </div>
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
