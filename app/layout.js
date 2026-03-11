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
  title: 'Hardh Dave | Python & FastAPI Backend Developer Portfolio',
  description: 'Hardh Dave portfolio. Expert Python backend developer, FastAPI backend developer, flask backend developer, Django backend developer, and Python API developer.',
  keywords: ['Hardh Dave', 'Hardh Dave portfolio', 'FastAPI backend developer', 'Python backend developer', 'flask backend developer', 'Django backend developer', 'Python API developer', 'Web Developer', 'Software Engineer', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Hardh Dave' }],
  creator: 'Hardh Dave',
  publisher: 'Hardh Dave',
  openGraph: {
    title: 'Hardh Dave | Python Backend Developer',
    description: 'Hardh Dave portfolio showcasing expertise as a FastAPI, Flask, and Django backend developer.',
    url: 'https://hardh-dave.dev', // Ensure the actual domain is used once known, this will do for general SEO
    siteName: 'Hardh Dave Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hardh Dave | Python API Developer',
    description: 'Explore the Hardh Dave portfolio highlighting high-performance backend systems and Python API development.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
