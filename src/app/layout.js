// File: src/app/layout.js
'use client';

import './globals.css';
import Header from './components/Header';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        {pathname !== '/register' && pathname !== '/login' ? <Header /> : null}
        {children}
      </body>
    </html>
  );
}