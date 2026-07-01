"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContacts() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20would%20like%20to%20book%20a%20consultation%20for%20my%20pet."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-green-600"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>

      {/* Call */}
      <a
        href="tel:+916291630297"
        aria-label="Call Now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-orange-600"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}