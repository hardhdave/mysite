import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import VelocityScroll from '@/components/VelocityScroll';

export const metadata = {
  title: 'Hardh Dave | Python Backend Developer Portfolio',
  description: 'Hardh Dave is a dedicated Python backend developer. This portfolio showcases robust backend API projects, emphasizing Python backend development and architecture.',
  keywords: ['Hardh Dave', 'Hardh Dave portfolio', 'FastAPI backend developer', 'Python backend developer', 'Django backend developer', 'Python API developer', 'Python'],
};

export default function PythonBackendDeveloper() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <div className="sr-only">
        <h1>Python Backend Developer</h1>
        <p>Hardh Dave is a Python backend developer specializing in robust, scalable backend systems. This portfolio showcases backend API projects built using Python, FastAPI, and Django. I am an expert Python API developer dedicated to high-performance applications.</p>
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
