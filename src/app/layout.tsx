import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'K Siddeshwar Reddy - Full Stack Developer Portfolio',
  description: 'K Siddeshwar Reddy is a Full Stack Developer specializing in MERN stack, AWS, and mobile development. View my projects, skills, and experience.',
  keywords: 'K Siddeshwar Reddy, Portfolio, Full Stack Developer, MERN Stack, AWS Developer, React Native Developer, Web Developer in Hyderabad',
  authors: [{ name: 'K Siddeshwar Reddy' }],
  creator: 'K Siddeshwar Reddy',
  publisher: 'K Siddeshwar Reddy',
  metadataBase: new URL('https://k-siddeshwar-reddy.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'K Siddeshwar Reddy - Full Stack Developer Portfolio',
    description: 'K Siddeshwar Reddy is a Full Stack Developer specializing in MERN stack, AWS, and mobile development. View my projects, skills, and experience.',
    url: 'https://k-siddeshwar-reddy.vercel.app',
    siteName: 'K Siddeshwar Reddy Portfolio',
    images: [
      {
        url: '/1721486773846.jpg',
        width: 800,
        height: 600,
        alt: 'K Siddeshwar Reddy - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
    google: 'cRxlcq_PWY5YsaofXeE7c0rn-wJ8y2xpK8y8l5lTjao',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K Siddeshwar Reddy - Full Stack Developer Portfolio',
    description: 'K Siddeshwar Reddy is a Full Stack Developer specializing in MERN stack, AWS, and mobile development. View my projects, skills, and experience.',
    creator: '@yourtwitterhandle',
    images: ['/1721486773846.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-300 text-gray-100 antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
