import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jacinta Nthenya Nzomo - Public Health Professional',
  description: 'Experienced public health professional and healthcare manager with expertise in community health programs, data-driven strategies, and operational excellence.',
  keywords: ['Public Health', 'Healthcare Management', 'Community Health', 'Jacinta Nzomo', 'Kenya Health Information System'],
  authors: [{ name: 'Jacinta Nthenya Nzomo' }],
  openGraph: {
    title: 'Jacinta Nthenya Nzomo - Portfolio',
    description: 'Public Health Professional & Healthcare Manager',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
