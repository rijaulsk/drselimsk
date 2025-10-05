"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Star, Clock, MapPin } from "lucide-react";
import Image from 'next/image';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const texts = [
    "Compassionate Vet Care",
    "Emergency Services",
    "Expert Pet Healthcare",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 flex items-center justify-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-500 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                <span className="block transition-all duration-500 min-h-[3.5rem] sm:min-h-[4rem] lg:min-h-[5rem] flex items-center">
                  {texts[currentText]}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 mt-2">
                  for Your Beloved Pets
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Expert veterinary services by Dr. Selim SK - Your trusted
                companion for animal health and wellness across Kolkata
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Emergency
                  </div>
                  <div className="text-sm text-slate-600">Support & Visits</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Home Visits
                  </div>
                  <div className="text-sm text-slate-600">Convenient Care</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Star className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    3+ Years Exp
                  </div>
                  <div className="text-sm text-slate-600">Expert Care</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+916291630297"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Emergency Call
              </a>
              <a
                href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20need%20veterinary%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                WhatsApp
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center sm:justify-start space-x-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">1000+</div>
                <div className="text-sm text-slate-600">Happy Pets Treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">3</div>
                <div className="text-sm text-slate-600">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">200+</div>
                <div className="text-sm text-slate-600">Successful Surgeries</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">

                <Image
                  src="/images/hero-veterinary.webp"
                  alt="Dr. Selim SK with pets in veterinary clinic"
                  width={500}
                  height={384}
                  className="w-full h-96 object-cover rounded-lg"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-900">
                      4.9 Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
