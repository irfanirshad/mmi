import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mmirshad.com'),
  title: {
    default: 'M.M. Irshad - Business Coach & Public Speaker',
    template: '%s | M.M. Irshad'
  },
  description: 'Empowering Leaders, Transforming Teams - Professional business coaching, sales training, and public speaking services.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mmirshad.com',
    title: 'M.M. Irshad - Business Coach & Public Speaker',
    description: 'Empowering Leaders, Transforming Teams - Professional business coaching and speaking services.',
    siteName: 'M.M. Irshad',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.M. Irshad - Business Coach & Public Speaker',
    description: 'Empowering Leaders, Transforming Teams - Professional business coaching and speaking services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}