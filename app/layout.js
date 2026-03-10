import { Inter, Courier_Prime } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import ThreeBackground from '@/components/ThreeBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const courier = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Futuristic Portfolio',
  description: 'A high-end futuristic portfolio for a software developer.',
  verification: {
    google: 'EY7ijag4RvMHD-xp9r_edj-hvvmysbwZZ3NAKlYWvs4',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${courier.variable} has-custom-cursor`}
      >
        {/* Preloader sits at very top */}
        <Preloader />

        {/* Smooth scroll root */}
        <SmoothScroll>
          {/* 3D HUMAN / BACKGROUND STAGE */}
          <ThreeBackground />

          {/* UI Layer */}
          <CustomCursor />
          <Navbar />

          {/* Content */}
          <main id="app-content" className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
