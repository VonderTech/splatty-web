import type { Metadata } from 'next';
import React from 'react';

import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import ClientThemeWrapper from '../context/ClientThemeWrapper';
import Navbar from '@/components/Navbar/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Splatty',
  description: 'Generates splats for your projects',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <div className="min-h-screen">
              <div className="flex flex-col min-h-screen">
                <header className="bg-base-100 shadow">
                  <Navbar />
                </header>
                <main className="flex-grow bg-base-200">
                  <div className="container mx-auto px-4 py-8">{children}</div>
                </main>
                <footer className="bg-base-100 py-4">
                  <div className="container mx-auto px-4">
                    <p className="text-center">
                      &copy; {new Date().getFullYear()} Splatty. All rights
                      reserved.
                    </p>
                  </div>
                </footer>
              </div>
            </div>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
