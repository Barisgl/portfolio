import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Barış Gül | Supply Chain Analyst & Data Analytics Portfolio',
  description:
    'Personal portfolio and interactive CV of Barış Gül. Demonstrating supply chain analytics, interactive Power BI dashboards, SQL query optimization, and Python statistical simulations.',
  keywords: [
    'Barış Gül',
    'Supply Chain Analyst',
    'Data Analytics',
    'Power BI',
    'SQL',
    'Python',
    'Ingolstadt',
    'Rohde & Schwarz',
    'Siemens',
    'adidas',
  ],
  authors: [{ name: 'Barış Gül' }],
  openGraph: {
    title: 'Barış Gül | Supply Chain & Data Analytics Portfolio',
    description:
      'Explore real Power BI dashboards, SQL scripts, and Python analyses directly on site.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060B14] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
