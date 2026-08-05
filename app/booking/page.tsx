import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookingSection } from '@/components/sections/BookingSection';
import FloatingContacts from '@/components/FloatingContacts';

export const metadata: Metadata = {
  title: 'Book Appointment | Dr. Selim SK Veterinary Care Kolkata',
  description: 'Book online appointment for your dog, cat, or pet with Dr. Selim SK. Locations in Baranagar, Maheshtala, Parnasree, New Alipore, and Newtown.',
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-16 sm:pt-20">
      <Navigation />
      <main className="flex-grow">
        <BookingSection />
      </main>
      <Footer />
      <FloatingContacts />
    </div>
  );
}
