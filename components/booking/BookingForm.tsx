"use client";

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Phone, Mail, CheckSquare, Square, Dog, Cat, Bird, Rabbit, HelpCircle, 
  Calendar as CalendarIcon, Clock, MapPin, Stethoscope, FileText, Upload, 
  X, AlertTriangle, ArrowRight, ArrowLeft, Loader2, Sparkles, CheckCircle2, ShieldCheck
} from 'lucide-react';

import { bookingFormSchema, BookingFormSchemaValues } from '@/lib/booking/schema';
import { 
  ANIMAL_TYPES, CLINIC_LOCATIONS, SERVICE_OPTIONS, TIME_SLOTS, 
  BookingRecord, ClinicLocation, AnimalType 
} from '@/lib/booking/types';
import { SuccessCard } from './SuccessCard';
import { LocationMapCard } from './LocationMapCard';

export const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedBooking, setSubmittedBooking] = useState<BookingRecord | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    trigger,
    reset,
    formState: { errors }
  } = useForm<BookingFormSchemaValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      ownerName: '',
      mobile: '',
      email: '',
      sameAsMobile: true,
      whatsappNumber: '',
      petName: '',
      animalType: 'Dog',
      breed: '',
      age: '',
      gender: 'Male',
      weight: '',
      petPhotoUrl: '',
      preferredDate: todayStr,
      preferredTime: TIME_SLOTS[0],
      clinicLocation: 'Maheshtala',
      serviceRequired: 'General Checkup',
      reasonForVisit: '',
      isEmergency: false
    }
  });

  const watchSameAsMobile = watch('sameAsMobile');
  const watchSelectedLocation = watch('clinicLocation');
  const watchAnimalType = watch('animalType');
  const watchIsEmergency = watch('isEmergency');
  const watchMobile = watch('mobile');

  // Format mobile number automatically
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    let formatted = raw;
    if (raw.length > 10) {
      formatted = raw.slice(0, 10);
    }
    setValue('mobile', formatted, { shouldValidate: true });
  };

  // Image Upload Handler
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be under 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setPhotoPreview(base64);
        setValue('petPhotoUrl', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoPreview(null);
    setValue('petPhotoUrl', '');
  };

  // Step validation check before proceeding
  const validateStep = async (step: number) => {
    if (step === 1) {
      const valid = await trigger(['ownerName', 'mobile', 'email']);
      return valid;
    } else if (step === 2) {
      const valid = await trigger(['petName', 'animalType']);
      return valid;
    }
    return true;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Submission handler
  const onSubmit = async (data: BookingFormSchemaValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to submit appointment request.');
      }

      setSubmittedBooking(resData.booking);

      // Open WhatsApp automatically in a new tab if URL is provided
      if (resData.whatsappUrl) {
        setTimeout(() => {
          window.open(resData.whatsappUrl, '_blank');
        }, 600);
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setServerError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    reset();
    setPhotoPreview(null);
    setSubmittedBooking(null);
    setCurrentStep(1);
    setServerError(null);
  };

  if (submittedBooking) {
    return <SuccessCard booking={submittedBooking} onReset={handleResetForm} />;
  }

  const getAnimalIcon = (type: AnimalType) => {
    switch (type) {
      case 'Dog': return <Dog className="w-5 h-5" />;
      case 'Cat': return <Cat className="w-5 h-5" />;
      case 'Bird': return <Bird className="w-5 h-5" />;
      case 'Rabbit': return <Rabbit className="w-5 h-5" />;
      default: return <HelpCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-10 pointer-events-none">
          <Dog className="w-48 h-48" />
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="bg-emerald-500/30 text-emerald-100 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                🔒 Official Appointment Portal
              </span>
              {watchIsEmergency && (
                <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full animate-pulse flex items-center space-x-1">
                  <AlertTriangle className="w-3 h-3" />
                  <span>EMERGENCY</span>
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Schedule Your Visit</h3>
            <p className="text-emerald-100 text-xs sm:text-sm">Instant confirmation via WhatsApp & SMS</p>
          </div>

          {/* Response time pill */}
          <div className="hidden sm:flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Avg Response: <strong>~15 Mins</strong></span>
          </div>
        </div>

        {/* Step Indicator Bar */}
        <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-white/15">
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className={`flex items-center space-x-2 text-left transition-all ${
              currentStep === 1 ? 'opacity-100 font-bold' : 'opacity-60 hover:opacity-90'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
              currentStep === 1 ? 'bg-white text-teal-800 font-bold' : 'bg-white/20 text-white'
            }`}>
              1
            </div>
            <span className="hidden sm:inline text-xs">Owner Info</span>
          </button>

          <button
            type="button"
            onClick={() => validateStep(1).then((valid) => valid && setCurrentStep(2))}
            className={`flex items-center space-x-2 text-left transition-all ${
              currentStep === 2 ? 'opacity-100 font-bold' : 'opacity-60 hover:opacity-90'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
              currentStep === 2 ? 'bg-white text-teal-800 font-bold' : 'bg-white/20 text-white'
            }`}>
              2
            </div>
            <span className="hidden sm:inline text-xs">Pet Details</span>
          </button>

          <button
            type="button"
            onClick={() => validateStep(1).then((valid1) => valid1 && validateStep(2).then((valid2) => valid2 && setCurrentStep(3)))}
            className={`flex items-center space-x-2 text-left transition-all ${
              currentStep === 3 ? 'opacity-100 font-bold' : 'opacity-60 hover:opacity-90'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
              currentStep === 3 ? 'bg-white text-teal-800 font-bold' : 'bg-white/20 text-white'
            }`}>
              3
            </div>
            <span className="hidden sm:inline text-xs">Schedule & Service</span>
          </button>
        </div>
      </div>

      {/* Form Content Area */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-6">
        {serverError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
            <div>
              <p className="font-semibold">Booking Error</p>
              <p>{serverError}</p>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: OWNER INFORMATION */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <User className="w-5 h-5 text-teal-600" />
                  <span>1. Owner Information</span>
                </h4>
                <span className="text-xs text-slate-500">* Required fields</span>
              </div>

              {/* Owner Full Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Enter your full name (e.g. Rahul Sen)"
                    {...register('ownerName')}
                    className={`w-full pl-11 pr-4 py-2.5 rounded-xl border ${
                      errors.ownerName ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-teal-600 focus:ring-teal-600'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-20 text-slate-900 placeholder:text-slate-400 text-sm transition-all`}
                  />
                </div>
                {errors.ownerName && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{errors.ownerName.message}</p>
                )}
              </div>

              {/* Mobile Number & Email Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Mobile Number (Indian) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-xs font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={watchMobile}
                      onChange={handleMobileChange}
                      className={`w-full pl-16 pr-4 py-2.5 rounded-xl border ${
                        errors.mobile ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-teal-600 focus:ring-teal-600'
                      } focus:outline-none focus:ring-2 focus:ring-opacity-20 text-slate-900 placeholder:text-slate-400 text-sm transition-all`}
                    />
                  </div>
                  {errors.mobile ? (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.mobile.message}</p>
                  ) : (
                    <p className="mt-1 text-[11px] text-slate-500">10-digit mobile number for SMS & WhatsApp update</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      {...register('email')}
                      className={`w-full pl-11 pr-4 py-2.5 rounded-xl border ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-teal-600 focus:ring-teal-600'
                      } focus:outline-none focus:ring-2 focus:ring-opacity-20 text-slate-900 placeholder:text-slate-400 text-sm transition-all`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* WhatsApp Checkbox & Extra Number */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer text-sm font-medium text-slate-800 select-none">
                  <input
                    type="checkbox"
                    {...register('sameAsMobile')}
                    className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500 cursor-pointer"
                  />
                  <span>WhatsApp number is same as Mobile Number</span>
                </label>

                {!watchSameAsMobile && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-2"
                  >
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Separate WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter WhatsApp mobile number"
                      {...register('whatsappNumber')}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-teal-600"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 2: PET INFORMATION */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <Dog className="w-5 h-5 text-teal-600" />
                  <span>2. Pet Details</span>
                </h4>
                <span className="text-xs text-slate-500">Step 2 of 3</span>
              </div>

              {/* Animal Type Radio Cards */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Animal Type *
                </label>
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {ANIMAL_TYPES.map((type) => {
                    const isSelected = watchAnimalType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setValue('animalType', type, { shouldValidate: true })}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-teal-50 border-teal-600 text-teal-800 ring-2 ring-teal-600 ring-opacity-20 font-bold shadow-sm'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg mb-1 ${isSelected ? 'bg-teal-600 text-white' : 'text-slate-500'}`}>
                          {getAnimalIcon(type)}
                        </div>
                        <span>{type}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.animalType && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{errors.animalType.message}</p>
                )}
              </div>

              {/* Pet Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Pet Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tommy, Bruno, Luna, Charlie"
                  {...register('petName')}
                  className={`w-full px-4 py-2.5 rounded-xl border ${
                    errors.petName ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-teal-600 focus:ring-teal-600'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-20 text-slate-900 text-sm transition-all`}
                />
                {errors.petName && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{errors.petName.message}</p>
                )}
              </div>

              {/* Breed & Age */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Breed <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Labrador, Persian, Indian Pariah"
                    {...register('breed')}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 text-slate-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Age <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2 Years, 6 Months"
                    {...register('age')}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 text-slate-900 text-sm"
                  />
                </div>
              </div>

              {/* Gender & Weight */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Gender
                  </label>
                  <select
                    {...register('gender')}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 text-slate-900 text-sm bg-white"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown / Not sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Weight <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4.5 kg"
                    {...register('weight')}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 text-slate-900 text-sm"
                  />
                </div>
              </div>

              {/* Pet Photo Upload */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Upload Pet Photo <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                {photoPreview ? (
                  <div className="relative inline-block mt-2">
                    <img
                      src={photoPreview}
                      alt="Pet preview"
                      className="w-24 h-24 object-cover rounded-xl border-2 border-teal-600 shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 shadow hover:bg-red-700"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-teal-600 hover:bg-teal-50/50 transition-all">
                    <div className="flex items-center space-x-2 text-slate-500 text-xs sm:text-sm">
                      <Upload className="w-4 h-4 text-teal-600" />
                      <span>Click or drag photo to upload (JPG, PNG)</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 3: APPOINTMENT INFORMATION */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5 text-teal-600" />
                  <span>3. Appointment & Location</span>
                </h4>
                <span className="text-xs text-slate-500">Final Step</span>
              </div>

              {/* Clinic Location & Map Preview */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Select Clinic Location *
                </label>
                <select
                  {...register('clinicLocation')}
                  className={`w-full px-4 py-2.5 rounded-xl border ${
                    errors.clinicLocation ? 'border-red-500' : 'border-slate-200 focus:border-teal-600'
                  } text-slate-900 text-sm font-medium bg-white`}
                >
                  {CLINIC_LOCATIONS.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name} — ({loc.shortAddress})
                    </option>
                  ))}
                </select>
                {errors.clinicLocation && (
                  <p className="mt-1 text-xs text-red-600">{errors.clinicLocation.message}</p>
                )}

                {/* Dynamic Google Maps Location Card */}
                <div className="mt-3">
                  <LocationMapCard selectedLocation={watchSelectedLocation} />
                </div>
              </div>

              {/* Preferred Date & Preferred Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Date Picker */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <CalendarIcon className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      min={todayStr}
                      {...register('preferredDate')}
                      className={`w-full pl-11 pr-4 py-2.5 rounded-xl border ${
                        errors.preferredDate ? 'border-red-500' : 'border-slate-200 focus:border-teal-600'
                      } text-slate-900 text-sm`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-red-600">{errors.preferredDate.message}</p>
                  )}
                </div>

                {/* Time Picker / Slots */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
                    <select
                      {...register('preferredTime')}
                      className={`w-full pl-11 pr-4 py-2.5 rounded-xl border ${
                        errors.preferredTime ? 'border-red-500' : 'border-slate-200 focus:border-teal-600'
                      } text-slate-900 text-sm bg-white`}
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.preferredTime && (
                    <p className="mt-1 text-xs text-red-600">{errors.preferredTime.message}</p>
                  )}
                </div>
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Service Required *
                </label>
                <div className="relative">
                  <Stethoscope className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
                  <select
                    {...register('serviceRequired')}
                    className={`w-full pl-11 pr-4 py-2.5 rounded-xl border ${
                      errors.serviceRequired ? 'border-red-500' : 'border-slate-200 focus:border-teal-600'
                    } text-slate-900 text-sm font-medium bg-white`}
                  >
                    {SERVICE_OPTIONS.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.serviceRequired && (
                  <p className="mt-1 text-xs text-red-600">{errors.serviceRequired.message}</p>
                )}
              </div>

              {/* Reason for Visit */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Reason for Visit *
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your pet's condition, symptoms, or purpose of visit..."
                  {...register('reasonForVisit')}
                  className={`w-full p-3.5 rounded-xl border ${
                    errors.reasonForVisit ? 'border-red-500' : 'border-slate-200 focus:border-teal-600'
                  } text-slate-900 text-sm placeholder:text-slate-400`}
                />
                {errors.reasonForVisit && (
                  <p className="mt-1 text-xs text-red-600">{errors.reasonForVisit.message}</p>
                )}
              </div>

              {/* Emergency Switch Badge */}
              <div className="p-3.5 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-orange-950 font-medium">
                  <AlertTriangle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>Is this an urgent medical emergency?</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('isEmergency')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation / Action Buttons Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-colors text-sm flex items-center space-x-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-7 py-3 rounded-xl transition-all shadow-md hover:shadow-lg text-sm flex items-center space-x-2 ml-auto"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto ml-auto bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all text-base flex items-center justify-center space-x-2 disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Booking Appointment...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Book Appointment</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Privacy Note */}
        <div className="flex items-center justify-center space-x-2 text-[12px] text-slate-500 text-center pt-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Your information is kept confidential and is used only for appointment scheduling.</span>
        </div>
      </form>
    </div>
  );
};
