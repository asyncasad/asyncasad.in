"use client"
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Fira_Code } from 'next/font/google';
import '../styles/custom.css';
import '../styles/globals.css';
const fira = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AsadKhan Pathan',
  description: 'Developer, designer and creator.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition duration-200">
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
          themes={['light', 'dark']}
        >
          <div
            className={cn(
              'font-fira-code my-10 px-8  md:mx-auto md:my-20 md:w-[750px] md:px-0',
              fira.className
            )}
          >
            {children}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
