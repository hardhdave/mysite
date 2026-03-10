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
  title: 'Hardh Dave | Futuristic Web Developer Portfolio',
  description: 'High-end futuristic portfolio of Hardh Dave, a software developer specializing in modern, responsive, and high-performance web applications.',
  keywords: ['Hardh Dave', 'Web Developer', 'Software Engineer', 'Frontend Developer', 'Full Stack Developer', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Hardh Dave' }],
  creator: 'Hardh Dave',
  publisher: 'Hardh Dave',
  openGraph: {
    title: 'Hardh Dave | Software Developer',
    description: 'High-end futuristic portfolio showcasing modern web applications and software development skills.',
    url: 'https://hardh-dave.dev', // Ensure the actual domain is used once known, this will do for general SEO
    siteName: 'Hardh Dave Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hardh Dave | Futuristic Web Developer',
    description: 'Explore my high-end futuristic portfolio showcasing innovative web applications.',
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
