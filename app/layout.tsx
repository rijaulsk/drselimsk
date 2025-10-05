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
  metadataBase: new URL('https://drselimsk.com'),
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
      <body className={`font-sans bg-slate-50 text-slate-900 antialiased ${inter.className}`}>
        <Navigation />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "name": "Dr. Selim SK - Veterinary Doctor & Surgeon",
              "description": "Expert veterinary services with emergency care",
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
      </body>
    </html>
  );
}