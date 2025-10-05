"use client";

import { useEffect, useRef, useState } from 'react';
import { 
  Stethoscope, 
  Scissors, 
  Shield, 
  Clock, 
  Home, 
  Heart,
  Syringe,
  Camera,
  Pill,
  Activity
} from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      category: "Medical Services",
      icon: Stethoscope,
      color: "from-blue-500 to-blue-600",
      services: [
        "Complete Health Checkups",
        "Vaccination Programs", 
        "Emergency Care",
        "Diagnostic Services"
      ]
    },
    {
      category: "Surgical Excellence",
      icon: Scissors,
      color: "from-red-500 to-red-600",
      services: [
        "General Surgery",
        "Specialized Surgeries",
        "Orthopedic Procedures",
        "Post-Operative Care"
      ]
    },
    {
      category: "Additional Services",
      icon: Heart,
      color: "from-purple-500 to-purple-600",
      services: [
        "Grooming Services",
        "Animal Boarding",
        "Travel Certificates",
        "Deworming Programs"
      ]
    }
  ];

  const specializedServices = [
    {
      icon: Syringe,
      title: "Vaccination Programs",
      description: "Complete immunization schedules for optimal protection",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Camera,
      title: "Diagnostic Services",
      description: "Advanced veterinary pathology, biochemistry, and radiology",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Clock,
      title: "Emergency Care",
      description: "Round-the-clock emergency services for critical situations",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Home,
      title: "Home Visit Services",
      description: "Professional veterinary care at your doorstep",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Pill,
      title: "Complex Surgeries",
      description: "Tumor removal, bladder stone surgery, cherry eye operations",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Activity,
      title: "Multi-Species Care",
      description: "Dogs, cats, birds, and other beloved companions",
      color: "bg-teal-100 text-teal-600"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Veterinary Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete healthcare solutions for your beloved pets with expert care and modern facilities
            </p>
          </div>

          {/* Main Services Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.category}</h3>
                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Specialized Services Grid */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Specialized Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Complex Cases Highlight */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Complex Case Management</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Dr. Selim has successfully handled challenging cases requiring specialized surgical expertise
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Bladder Stone Removal in Cats",
                "Tumor Operations in Senior Animals", 
                "Cherry Eye Corrections",
                "Amputation Surgeries"
              ].map((procedure, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center mb-3">
                    <Scissors className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{procedure}</h4>
                  <p className="text-slate-400 text-sm">Specialized surgical intervention</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Need Veterinary Care?</h3>
              <p className="text-slate-600 mb-6">Professional veterinary consultation - contact us for expert pet care</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+916291630297"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
                >
                  Call Now: +91 6291630297
                </a>
                <a
                  href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20need%20veterinary%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
                >
                  WhatsApp Consultation
                </a>
              </div>
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

export default Services;