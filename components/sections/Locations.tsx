"use client";

import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import Link from 'next/link';

const Locations = () => {
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

  const locations = [
    {
      name: "Baranagar Clinic",
      address: "J9RF+MQ5, Gopal Lal Tagore Rd, Neogipara, Joyshree, Ashokgarh, Baranagar, West Bengal 700035",
      shortAddress: "Baranagar, West Bengal 700035",
      time: "Saturday and Online Consultation",
      slug: "baranagar",
      mapUrl: "https://maps.app.goo.gl/73JM5BbWbpVeeVqH9",
      color: "from-indigo-500 via-blue-500 to-cyan-500"
    },
    {
      name: "Maheshtala Clinic",
      address: "MORE, Nangi, Budge Budge, Maheshtala, West Bengal 700140",
      shortAddress: "Maheshtala, West Bengal 700140",
      time: "Daily 10:00 AM - 10:00 PM",
      slug: "maheshtala",
      mapUrl: "https://maps.app.goo.gl/Y4G6CeGeBuj2Ff8D9",
      color: "from-emerald-500 via-teal-500 to-green-500"
    },
    {
      name: "Parnasree Clinic",
      address: "58, Kalimata Colony Rd, Parnasree Palli, Kolkata, West Bengal 700060",
      shortAddress: "Parnasree, Kolkata 700060",
      time: "Daily 10:00 AM - 10:00 PM",
      slug: "parnasree",
      mapUrl: "https://maps.app.goo.gl/RFjVhRT4btQzLtwK7",
      color: "from-violet-500 via-purple-500 to-fuchsia-500"
    },
    {
      name: "New Alipore Clinic",
      address: "Pet's Need, 10/1D, Diamond Harbour Rd, Alipore, Kolkata, West Bengal 700027",
      shortAddress: "New Alipore, Kolkata 700027",
      time: "Daily 10:00 AM - 10:00 PM",
      slug: "new_alipore",
      mapUrl: "https://maps.app.goo.gl/iZGX3h3VJqqn5sgKA",
      color: "from-amber-500 via-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Locations</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Convenient access to professional veterinary care across Kolkata
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Location Header */}
                <div className={`bg-gradient-to-r ${location.color} p-6 text-white`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{location.name}</h3>
                  </div>
                  <p className="text-white/90">{location.shortAddress}</p>
                </div>

                {/* Location Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 text-sm">{location.address}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-slate-400" />
                      <p className="text-slate-600 text-sm">{location.time}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-slate-400" />
                      <a 
                        href="tel:+916291630297"
                        className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
                      >
                        +91 6291630297
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Navigation className="h-4 w-4" />
                      <span>Get Directions</span>
                    </a>

                    <Link
                      href={`/locations/${location.slug}`}
                      className={`w-full bg-gradient-to-r ${location.color} text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2`}
                    >
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Areas */}
          <div className="bg-gradient-to-r from-slate-50 to-cyan-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Serving Areas Across Kolkata
              </h3>
              <p className="text-slate-600">
                Each location offers the same high-quality veterinary services with convenient access for pet parents
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <div className="text-2xl font-bold text-blue-600">Baranagar</div>
                  <div className="text-sm text-slate-600">North Kolkata</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <div className="text-2xl font-bold text-green-600">Maheshtala</div>
                  <div className="text-sm text-slate-600">South Kolkata</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <div className="text-2xl font-bold text-purple-600">Parnasree</div>
                  <div className="text-sm text-slate-600">South Kolkata</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <div className="text-2xl font-bold text-amber-600">New Alipore</div>
                  <div className="text-sm text-slate-600">South Kolkata</div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl shadow-lg">
              <div>
                <div className="text-sm opacity-90">Emergency Services</div>
                <div className="text-lg font-bold">Service available at all locations</div>
              </div>
              <a
                href="tel:+916291630297"
                className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
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

export default Locations;