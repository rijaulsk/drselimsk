"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Clock, ShieldCheck, Heart, Award, CheckCircle2, 
  MapPin, AlertCircle, Sparkles, MessageCircle, Navigation, ExternalLink
} from 'lucide-react';
import { BookingForm } from '../booking/BookingForm';
import { CLINIC_LOCATIONS } from '@/lib/booking/types';

export const BookingSection: React.FC = () => {
  const [selectedQuickLocation, setSelectedQuickLocation] = useState<string>('Maheshtala');

  return (
    <section id="booking" className="py-16 lg:py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-200/30 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-200/30 rounded-full filter blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>PRACTO & APOLLO QUALITY BOOKING EXPERIENCE</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Book Your Pet&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">Appointment</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Professional, compassionate veterinary care by <strong>Dr. Selim SK</strong>. Reserve your slot online for fast confirmation at any of our Kolkata clinics.
            </p>
          </motion.div>
        </div>

        {/* Main Grid Layout: Left Info + Right Form */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (Desktop 5 cols) - Clinic Info, Emergency & Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Emergency Notice Card */}
            <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                  <Phone className="w-7 h-7 text-white animate-bounce" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-1">
                    🚨 Emergency Service Notice
                  </span>
                  <h3 className="text-xl font-bold">Need Immediate Care?</h3>
                  <p className="text-white/90 text-xs sm:text-sm mt-1">
                    Critical or life-threatening pet condition? Call our emergency line directly without waiting.
                  </p>
                  <a
                    href="tel:+916291630297"
                    className="inline-flex items-center space-x-2 mt-4 bg-white text-red-700 font-extrabold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-100 transition-colors shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +91 6291630297 Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Clinic Info & Quick Location Selector */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span>Clinic Locations & Hours</span>
                </h3>
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  {CLINIC_LOCATIONS.length} Clinics
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {CLINIC_LOCATIONS.map((clinic) => (
                  <button
                    key={clinic.id}
                    onClick={() => setSelectedQuickLocation(clinic.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border ${
                      selectedQuickLocation === clinic.id
                        ? 'bg-teal-50 border-teal-600 text-teal-800 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold">{clinic.id}</div>
                    <div className="text-[11px] opacity-75 truncate">{clinic.shortAddress.split(',')[1] || clinic.shortAddress}</div>
                  </button>
                ))}
              </div>

              {/* Location Details Box */}
              {(() => {
                const active = CLINIC_LOCATIONS.find((c) => c.id === selectedQuickLocation) || CLINIC_LOCATIONS[0];
                return (
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70 text-xs sm:text-sm space-y-2 mt-3">
                    <p className="font-bold text-slate-900">{active.name}</p>
                    <p className="text-slate-600">{active.address}</p>
                    <div className="flex items-center space-x-2 text-slate-700 pt-1">
                      <Clock className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>{active.timing}</span>
                    </div>
                    <div className="pt-2">
                      <a
                        href={active.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs text-teal-700 hover:text-teal-800 font-bold underline"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Open Directions on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Trust Badges & Metrics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/80 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Why Pet Parents Trust Us</span>
              </h3>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                  <div className="text-xl sm:text-2xl font-black text-emerald-700">1,000+</div>
                  <div className="text-[11px] font-medium text-emerald-900 mt-0.5">Pets Treated</div>
                </div>

                <div className="bg-teal-50/70 p-3 rounded-xl border border-teal-100">
                  <div className="text-xl sm:text-2xl font-black text-teal-700">200+</div>
                  <div className="text-[11px] font-medium text-teal-900 mt-0.5">Surgeries</div>
                </div>

                <div className="bg-cyan-50/70 p-3 rounded-xl border border-cyan-100">
                  <div className="text-xl sm:text-2xl font-black text-cyan-700">10+ Yrs</div>
                  <div className="text-[11px] font-medium text-cyan-900 mt-0.5">Experience</div>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Dr. Selim SK</strong> (B.V.Sc & A.H. Veterinary Surgeon)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>State-of-the-art diagnostic & surgical facilities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Home Visit & Emergency Treatment options</span>
                </div>
              </div>
            </div>

            {/* Response Time & Privacy Guarantee */}
            <div className="bg-gradient-to-r from-teal-900 to-emerald-900 text-white rounded-2xl p-5 shadow-lg space-y-3">
              <div className="flex items-center space-x-3 text-xs sm:text-sm">
                <Clock className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <div>
                  <span className="font-bold text-amber-300">Estimated Response Time</span>
                  <p className="text-slate-200 text-xs">Usually confirmed within 15 minutes during clinic hours.</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center space-x-2 text-[12px] text-emerald-100">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Your information is kept confidential and is used only for appointment scheduling.</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column (Desktop 7 cols) - The Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <BookingForm />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default BookingSection;
