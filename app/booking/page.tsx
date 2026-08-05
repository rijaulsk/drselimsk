import type { Metadata } from 'next';
import { BookingSection } from '@/components/sections/BookingSection';
import FloatingContacts from '@/components/FloatingContacts';
import { 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  Mail, 
  MapPin, 
  CalendarCheck,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book Veterinary Appointment | Dr. Selim SK',
  description: 'Book an appointment with Dr. Selim SK Veterinary Clinic. Instant WhatsApp confirmation, email confirmation, and appointments available across all clinic locations.',
  alternates: {
    canonical: 'https://www.drselimsk.com/booking',
  },
  openGraph: {
    title: 'Book Veterinary Appointment | Dr. Selim SK',
    description: 'Book an appointment with Dr. Selim SK Veterinary Clinic. Instant WhatsApp confirmation, email confirmation, and appointments available across all clinic locations.',
    url: 'https://www.drselimsk.com/booking',
    type: 'website',
  },
};

export default function BookingPage() {
  const trustBadges = [
    {
      icon: ShieldCheck,
      text: 'Professional Veterinary Care',
      color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    },
    {
      icon: Clock,
      text: 'Same Day Appointments (subject to availability)',
      color: 'border-teal-500/30 bg-teal-500/10 text-teal-300',
    },
    {
      icon: MessageCircle,
      text: 'Instant WhatsApp Confirmation',
      color: 'border-green-500/30 bg-green-500/10 text-green-300',
    },
    {
      icon: Mail,
      text: 'Email Confirmation',
      color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    },
    {
      icon: MapPin,
      text: '5 Clinic Locations',
      color: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    },
  ];

  return (
    <main className="pt-16 sm:pt-20 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-950 via-slate-900 to-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Ambient Decorative Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <CalendarCheck className="w-4 h-4 text-teal-400" />
            <span>Official Clinic Appointment Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-cyan-300">Veterinary Appointment</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed">
            Schedule an appointment with Dr. Selim SK in just a few minutes.
          </p>

          {/* Primary CTA */}
          <div className="mb-10 sm:mb-14">
            <a
              href="#booking"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Book Appointment</span>
              <ChevronDown className="w-5 h-5 animate-bounce text-slate-950" />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-xl border ${badge.color} text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md transition-transform hover:scale-105`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Booking Form & Clinic Trust Info Section */}
      <BookingSection />

      <FloatingContacts />
    </main>
  );
}
