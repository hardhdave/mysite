'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 80);
      setLastScroll(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between backdrop-blur-xl bg-black/40 border-b border-white/10">
        {/* logo */}
        <Link
          href="#home"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Portfolio
        </Link>

        {/* links */}
        <ul className="flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                href={item.href}
                className="text-xs uppercase tracking-widest text-neutral-400 transition-colors group-hover:text-white"
              >
                {item.name}
              </Link>

              {/* animated underline */}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

          {/* resume */}
          <li>
            <a
              href="/hardh rsume.pdf"
              download
              className="ml-4 rounded-full border border-purple-400/40 px-6 py-2 text-xs uppercase tracking-widest text-purple-300 transition-all hover:bg-purple-400 hover:text-black hover:border-purple-400"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
