import Footer from '@/copmonents/Footer/Footer';
import Header from '@/copmonents/Header/Header';
import React from 'react';
import './globals.css';
import { Arimo } from 'next/font/google';
import Container from '@/copmonents/container/container';

const arimo = Arimo({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={arimo.className}
    >
      <body className="bg-black text-white font-arimo text-base font-normal">
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
