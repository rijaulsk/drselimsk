"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, RefreshCw, Home, MapPin, Calendar, Clock, Phone, AlertCircle } from 'lucide-react';
import { BookingRecord, CLINIC_LOCATIONS } from '@/lib/booking/types';
import Link from 'next/link';

interface SuccessCardProps {
  booking: BookingRecord;
  onReset: () => void;
}

export const SuccessCard: React.FC<SuccessCardProps> = ({ booking, onReset }) => {
  const clinicInfo = CLINIC_LOCATIONS.find((c) => c.id === booking.clinicLocation) || CLINIC_LOCATIONS[0];

  const handleOpenWhatsApp = () => {
    if (booking.whatsappUrl) {
      window.open(booking.whatsappUrl, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-100"
    >
      {/* Animated Success Checkmark Header */}
      <div className="text-center space-y-3 mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="mx-auto w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner"
        >
          <CheckCircle2 className="w-12 h-12 text-emerald-600 stroke-[2.5]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 tracking-wide mb-2">
            Reference: {booking.id}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Appointment Request Submitted
          </h3>
          <p className="text-slate-600 mt-2 text-base max-w-md mx-auto">
            Thank you for choosing <span className="font-semibold text-teal-700">Dr. Selim SK Veterinary Care</span>. Our team will contact you shortly to confirm your appointment.
          </p>
        </motion.div>
      </div>

      {/* Response time notice */}
      <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 sm:p-4 mb-6 flex items-start space-x-3 text-amber-900 text-sm">
        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold">Fast Confirmation</p>
          <p className="text-amber-800 text-xs sm:text-sm mt-0.5">
            We usually confirm appointments within 15 minutes during clinic hours (10:00 AM - 10:00 PM).
          </p>
        </div>
      </div>

      {/* Booking Summary Box */}
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/70 mb-8 space-y-4 text-sm text-slate-700">
        <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
          <span className="font-semibold text-slate-900">Pet & Owner</span>
          <span className="font-medium text-teal-700">🐾 {booking.petName} ({booking.animalType})</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <div>
              <div className="text-xs text-slate-500">Date</div>
              <div className="font-medium text-slate-900">{booking.preferredDate}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <div>
              <div className="text-xs text-slate-500">Time Slot</div>
              <div className="font-medium text-slate-900">{booking.preferredTime}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <div>
              <div className="text-xs text-slate-500">Clinic Location</div>
              <div className="font-medium text-slate-900">{booking.clinicLocation}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <div>
              <div className="text-xs text-slate-500">Owner Contact</div>
              <div className="font-medium text-slate-900">{booking.mobile}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200/80 pt-3 flex justify-between items-center text-xs text-slate-500">
          <span>Service Requested: <strong className="text-slate-800">{booking.serviceRequired}</strong></span>
          <span>Submitted: {new Date(booking.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleOpenWhatsApp}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-200 flex items-center justify-center space-x-2 text-base group"
        >
          <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span>Confirm Immediately via WhatsApp</span>
        </button>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={onReset}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Book Another</span>
          </button>

          <Link
            href="/"
            className="w-full bg-teal-50 hover:bg-teal-100 text-teal-700 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 text-sm text-center"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
