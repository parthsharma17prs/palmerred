import type { Metadata } from 'next';
import { Inter, Bebas_Neue, Space_Grotesk } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

import CustomCursor from '@/components/CustomCursor';
import PageReveal from '@/components/PageReveal';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas'
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
});

export const metadata: Metadata = {
  title: 'CompliLedger - Provable Compliance. Zero Data Exposure.',
  description: 'A blockchain-native platform that automates regulatory compliance using Zero-Knowledge Proofs, Agentic AI, OSCAL, and SBOM.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${bebas.variable} ${spaceGrotesk.variable} font-sans bg-black text-white antialiased`}>
        <PageReveal />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}


