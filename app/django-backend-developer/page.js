import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import VelocityScroll from '@/components/VelocityScroll';

export const metadata = {
  title: 'Hardh Dave | Django Backend Developer Portfolio',
  description: 'Hardh Dave is an experienced Django backend developer. Review this portfolio for web applications and backend API projects created with the Django framework and Python.',
  keywords: ['Hardh Dave', 'Hardh Dave portfolio', 'FastAPI backend developer', 'Python backend developer', 'Django backend developer', 'Python API developer', 'Django'],
};

export default function DjangoBackendDeveloper() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <div className="sr-only">
        <h1>Django Backend Developer</h1>
        <p>Hardh Dave is a Python backend developer with deep expertise as a Django backend developer. This portfolio highlights full-stack and backend API projects crafted with Django, showcasing my skills as a Python API developer.</p>
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
