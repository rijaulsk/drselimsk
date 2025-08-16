"use client";

import { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

const FloatingContacts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Floating Button */}
      <div className="relative flex flex-col items-end">
        {/* WhatsApp Button */}
        <div className={`transition-all duration-300 ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-x-8 opacity-0 pointer-events-none'} mb-3`}>
          <a
            href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20need%20veterinary%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>

        {/* Call Button */}
        <div className={`transition-all duration-300 ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-x-8 opacity-0 pointer-events-none'} mb-3`}>
          <a
            href="tel:+916291630297"
            className="flex items-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">Call Now</span>
          </a>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Close contact menu" : "Open contact menu"}
          className={`w-14 h-14 ${isExpanded ? 'bg-slate-600' : 'bg-cyan-600'} hover:bg-opacity-90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center`}
        >
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <Phone className="h-6 w-6 animate-pulse" />
          )}
        </button>

        {/* Emergency Pulse Ring */}
        {!isExpanded && (
          <div className="absolute inset-0 w-14 h-14 bg-red-400 rounded-full animate-ping opacity-[.05]"></div>
        )}
      </div>
    </div>
  );
};

export default FloatingContacts;