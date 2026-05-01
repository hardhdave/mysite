'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      // Only hide if menu is NOT open
      if (!isOpen) {
        setHidden(current > lastScroll && current > 80);
      }
      setLastScroll(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll, isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        hidden && !isOpen ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between backdrop-blur-xl bg-black/40 border-b border-white/10 relative z-50">
        {/* logo */}
        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-lg font-semibold tracking-tight text-white"
        >
          Portfolio
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                href={item.href}
                className="text-xs uppercase tracking-widest text-neutral-400 transition-colors group-hover:text-white"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

          <li>
            <a
              href="/hardh d resume.pdf"
              download="Hardh_Dave_Resume.pdf"
              className="ml-4 rounded-full border border-purple-400/40 px-6 py-2 text-xs uppercase tracking-widest text-purple-300 transition-all hover:bg-purple-400 hover:text-black hover:border-purple-400"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
             <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
             <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
             <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-neutral-950/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-12'
        }`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }} 
      >
         <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                 <Link
                   href={item.href}
                   onClick={() => setIsOpen(false)}
                   className="text-2xl font-light tracking-widest text-white hover:text-purple-400 transition-colors"
                 >
                   {item.name}
                 </Link>
              </li>
            ))}
            
            <li className="mt-8">
               <a
                  href="/hardh d resume.pdf"
                  download="Hardh_Dave_Resume.pdf"
                  className="px-8 py-3 rounded-full bg-purple-500 text-black font-bold tracking-widest hover:bg-purple-400 transition-colors"
               >
                 RESUME
               </a>
            </li>
         </ul>
      </div>
    </nav>
  );
}
