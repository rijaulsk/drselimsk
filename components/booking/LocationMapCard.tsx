"use client";

import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';
import { ClinicLocation, CLINIC_LOCATIONS } from '@/lib/booking/types';

interface LocationMapCardProps {
  selectedLocation: ClinicLocation;
}

export const LocationMapCard: React.FC<LocationMapCardProps> = ({ selectedLocation }) => {
  const location = CLINIC_LOCATIONS.find((c) => c.id === selectedLocation) || CLINIC_LOCATIONS[0];

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 border border-emerald-100/80 shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base">{location.name}</h4>
            <p className="text-xs text-slate-500">{location.shortAddress}</p>
          </div>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Selected
        </span>
      </div>

      <div className="space-y-2 text-xs sm:text-sm text-slate-600 mb-4">
        <div className="flex items-start space-x-2">
          <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
          <span>{location.address}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span className="font-medium text-slate-700">{location.timing}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <a href={`tel:${location.phone}`} className="text-teal-600 hover:underline font-semibold">
            {location.phone}
          </a>
        </div>
      </div>

      <a
        href={location.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 border border-slate-200 group"
      >
        <Navigation className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
        <span>Open Directions on Google Maps</span>
        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
      </a>
    </div>
  );
};
