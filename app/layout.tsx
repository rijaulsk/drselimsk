import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Dr. Selim SK - Veterinary Doctor & Surgeon | Kolkata Pet Care',
  description: 'Expert veterinary services by Dr. Selim SK - 24/7 emergency care, home visits, vaccination, surgery. Trusted pet doctor serving Baranagar, Budge Budge, Parnasree Palli.',
  keywords: 'veterinary doctor Kolkata, pet doctor near me, emergency vet service, animal surgeon Kolkata, pet vaccination Kolkata, veterinary clinic Baranagar',
  authors: [{ name: 'Dr. Selim SK' }],
  openGraph: {
    title: 'Dr. Selim SK - Veterinary Doctor & Surgeon',
    description: 'Compassionate veterinary care for your beloved pets. Emergency services, home visits, and expert treatment across Kolkata.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Selim SK - Veterinary Doctor & Surgeon',
    description: 'Expert veterinary services with 24/7 emergency care across Kolkata',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "name": "Dr. Selim SK - Veterinary Doctor & Surgeon",
              "description": "Expert veterinary services with 24/7 emergency care",
              "url": "https://drselimsk.com",
              "telephone": "+916291630297",
              "email": "mstgunahar@gmail.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "J9RF+MQ5, Gopal Lal Tagore Rd, Neogipara, Joyshree, Ashokgarh",
                  "addressLocality": "Baranagar",
                  "addressRegion": "West Bengal",
                  "postalCode": "700035",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "MORE, Nangi, Budge Budge",
                  "addressLocality": "Maheshtala",
                  "addressRegion": "West Bengal", 
                  "postalCode": "700140",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "58, Kalimata Colony Rd",
                  "addressLocality": "Parnasree Palli, Kolkata",
                  "addressRegion": "West Bengal",
                  "postalCode": "700060", 
                  "addressCountry": "IN"
                }
              ],
              "openingHours": "Mo-Su 09:00-20:00",
              "priceRange": "₹₹",
              "paymentAccepted": "Cash, UPI",
              "emergencyService": true
            })
          }}
        />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23059669'/%3E%3Cstop offset='100%25' style='stop-color:%230891b2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23grad)'/%3E%3Cpath d='m23 18c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 20.5 7c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 6 12.5c0 2.29 1.51 4.04 3 5.5l7 7z' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"></link>
      </head>
      <body className={`font-sans bg-slate-50 text-slate-900 antialiased ${inter.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}