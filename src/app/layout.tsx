import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BottomNav from '@/components/layout/BottomNav';
import WhatsAppFloating from '@/components/layout/WhatsAppFloating';
import CookieBanner from '@/components/ui/CookieBanner';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2E6199' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1B2E' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rasfama.com.br'),
  title: {
    default: 'RASFAMA | Rede de Apoio Social e Familiar do Maranhão',
    template: '%s | RASFAMA',
  },
  description: 'Defendemos direitos, fortalecemos famílias e transformamos realidades no Maranhão. Orientação gratuita em saúde, educação, assistência social e direitos humanos.',
  keywords: [
    'RASFAMA',
    'Apoio Social Maranhão',
    'São Luís',
    'Direitos Humanos',
    'Defensoria Pública',
    'Assistência Social Maranhão',
    'CadÚnico São Luís',
    'Orientação Jurídica Comunitária',
  ],
  authors: [{ name: 'RASFAMA' }],
  creator: 'RASFAMA',
  publisher: 'RASFAMA',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/assets/favicon.ico' },
      { url: '/assets/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/favicon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.rasfama.com.br',
    siteName: 'RASFAMA',
    title: 'RASFAMA | Rede de Apoio Social e Familiar do Maranhão',
    description: 'Defendemos direitos, fortalecemos famílias e transformamos realidades no Maranhão.',
    images: [
      {
        url: '/assets/hero.png',
        width: 1200,
        height: 630,
        alt: 'Rede de Apoio Social e Familiar do Maranhão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RASFAMA | Rede de Apoio Social e Familiar do Maranhão',
    description: 'Defendemos direitos, fortalecemos famílias e transformamos realidades no Maranhão.',
    images: ['/assets/hero.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'RASFAMA - Rede de Apoio Social e Familiar do Maranhão',
    alternateName: 'RASFAMA',
    url: 'https://www.rasfama.com.br',
    logo: 'https://www.rasfama.com.br/assets/logo-light.svg',
    image: 'https://www.rasfama.com.br/assets/hero.png',
    description: 'Defendemos direitos, fortalecemos famílias e transformamos realidades no Maranhão.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua do Sol, s/n',
      addressLocality: 'São Luís',
      addressRegion: 'MA',
      postalCode: '65020-590',
      addressCountry: 'BR',
    },
    telephone: '+55-98-98437-4350',
    email: 'rasfama1@gmail.com',
    nonprofitStatus: 'Nonprofit501c3',
    sameAs: [
      'https://instagram.com',
      'https://facebook.com',
      'https://youtube.com',
    ],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('rasfama-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-background text-body selection:bg-accent selection:text-[#0F2740]">
        <ThemeProvider>
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <BottomNav />
          <WhatsAppFloating />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
