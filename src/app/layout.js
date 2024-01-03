'use client';

import Nav from './components/Nav/Nav';
import StyledComponentsRegistry from './lib/registry'
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname !== '/' ? <Nav /> : null}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry></body>
    </html>
  )
}
