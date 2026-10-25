/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import process from 'node:process';
import type { ReactNode } from 'react';
import '../index.compiled.css';

export const metadata: Metadata = {
  title: 'College of Project Controls',
  description: 'Professional project controls education, apprenticeships and employer capability support.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={`${(process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || "").replace(/\/$/, "")}/assets/fonts/fonts.css`} />
        <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

