"use client";

import { useEffect, useRef, useState } from 'react';
import { Phone, Clock, AlertTriangle, Heart, Home, Ambulance } from 'lucide-react';

const Emergency = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const emergencyServices = [
    {
      icon: Home,
      title: "Home Visit Emergency Care",
      description: "Critical care delivered to your doorstep for urgent situations",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Heart,
      title: "Surgical Emergencies",
      description: "Immediate surgical interventions available",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Ambulance,
      title: "Trauma Care",
      description: "Accident and injury management with expert care",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: AlertTriangle,
      title: "Critical Care Management",
      description: "ICU-level monitoring and treatment for severe cases",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section ref={sectionRef} id="emergency" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Emergency Services</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Pet emergencies don&apos;t wait for business hours. Dr. Selim provides round-the-clock emergency services when you need them most.
            </p>
          </div>

          {/* Emergency Contact Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <Phone className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Emergency Contact</h3>
                <a
                  href="tel:+916291630297"
                  className="text-4xl font-bold text-yellow-300 hover:text-yellow-200 transition-colors duration-200 block mb-4"
                >
                  +91 6291630297
                </a>
                <p className="text-red-100 mb-6">Available for genuine emergencies</p>
                <div className="flex items-center justify-center space-x-2 text-red-100">
                  <Clock className="h-5 w-5" />
                  <span>Available in Need • Immediate Response</span>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* When to Call Emergency */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">When to Call Emergency Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Difficulty breathing or choking",
                "Severe injuries or trauma",
                "Unconsciousness or collapse",
                "Severe bleeding that won't stop",
                "Ingestion of toxic substances",
                "Extreme difficulty giving birth",
                "Seizures lasting more than 5 minutes",
                "Severe abdominal pain or bloating",
                "Unable to urinate or defecate"
              ].map((emergency, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{emergency}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Preparation Tips */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Emergency Preparation Tips</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Keep Ready:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Dr. Selim&apos;s emergency number saved</li>
                  <li>• Pet&apos;s medical history and medications</li>
                  <li>• Emergency contact information</li>
                  <li>• Transport carrier or blanket</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-4">Before You Call:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Stay calm and assess the situation</li>
                  <li>• Move pet to a safe area if possible</li>
                  <li>• Note symptoms and timing</li>
                  <li>• Be ready to describe the emergency</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-orange-100 p-8 rounded-2xl border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Don&apos;t Wait in an Emergency</h3>
              <p className="text-slate-700 mb-6">
                Quick action can save your pet&apos;s life. Dr. Selim is always ready to help when seconds matter.
              </p>
              <a
                href="tel:+916291630297"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Phone className="h-6 w-6 animate-pulse" />
                <span>Call Emergency: +91 6291630297</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Emergency;