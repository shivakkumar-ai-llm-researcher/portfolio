import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Sivakumar — AI/ML Engineer | Agentic Systems & Full-Stack Architect',
  description: 'AI/ML Engineer at Coolgen Solutions specializing in Agentic Multi-Agent Systems, Fin360 AI inference cost optimization, and full-stack React Native & enterprise web architectures.',
  keywords: [
    'Sivakumar',
    'Sivakumar G',
    'Shivakumar',
    'AI Engineer',
    'Agentic AI',
    'Multi-Agent Systems',
    'LangGraph',
    'Fin360 Cost Optimization',
    'React Native',
    'Credit Risk Prediction'
  ],
  authors: [{ name: 'Sivakumar' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} dark scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('shiv_theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen relative overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          {/* Ambient Background Glows */}
          <div className="fixed inset-0 bg-ambient-vibrant pointer-events-none z-0" />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
