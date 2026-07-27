import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/shared/Navbar';
import VisitorLogger from '@/components/VisitorLogger';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Subrahmanya K P — Backend Software Engineer',
  description: 'Backend Software Engineer with 5 years of experience in API design, system architecture, and PostgreSQL-backed multi-tenant platforms. Currently building LLM agent tooling and backend systems at Qure.ai.',
  metadataBase: new URL('https://whoissubbu.vercel.app'),
  openGraph: {
    title: 'Subrahmanya K P — Backend Software Engineer',
    description: 'Backend Software Engineer — projects, writing, and what I\'m currently building.',
    url: 'https://whoissubbu.vercel.app',
    siteName: 'Subrahmanya K P',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subrahmanya K P — Backend Software Engineer',
    description: 'Backend Software Engineer — projects, writing, and what I\'m currently building.',
    creator: '@subrahmanya11',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <VisitorLogger />
          <Navbar />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
} 