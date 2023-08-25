import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Fira_Code } from 'next/font/google';
import '../styles/custom.css';
import '../styles/globals.css';
const fira = Fira_Code({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition duration-500">
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
          themes={['light', 'dark', 'rock', 'disco', 'monochrome']}
        >
          <div
            className={cn(
              'font-fira-code my-10 px-8  md:mx-auto md:my-20 md:w-[750px] md:px-0',
              fira.className
            )}
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
