import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Car,
  Train,
  Bus,
  Star,
  CheckCircle,
  Home,
  Stethoscope,
  Ship,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Maheshtala Clinic - Dr. Selim SK | Veterinary Services South Kolkata",
  description:
    "Visit Dr. Selim SK at Maheshtala center in Nangi. Professional veterinary care in South Kolkata with emergency services and community animal care.",
  keywords:
    "veterinary clinic Maheshtala, pet doctor South Kolkata, animal hospital Nangi, vet near Nangi station",
};

const BudgeBudgePage = () => {
  const locationDetails = {
    name: "Maheshtala Clinic",
    address: "MORE, Nangi, Budge Budge, Maheshtala, West Bengal 700140",
    mapUrl:
      "https://maps.app.goo.gl/Y4G6CeGeBuj2Ff8D9",
    area: "South Kolkata",
    pincode: "700140",
  };

  const services = [
    {
      icon: Home,
      title: "Home Visit Services",
      description: "Convenient care at your doorstep",
    },
    {
      icon: Stethoscope,
      title: "Large Animal Care",
      description: "Specialized care for farm animals",
    },
    {
      icon: CheckCircle,
      title: "Community Service",
      description: "Community Treatment Programs",
    },
    {
      icon: Phone,
      title: "Emergency Response",
      description: "24/7 emergency care available",
    },
  ];

  const landmarks = [
    "Near Nangi Railway Station",
    "Close to Budge Budge Trunk Road",
    "Nangi Market Area",
  ];

  const transportation = [
    {
      icon: Train,
      mode: "Railway",
      details: "Budge Budge Station on Sealdah-Diamond Harbour line",
    },
    {
      icon: Bus,
      mode: "Bus Routes",
      details: "Diamond Harbour Road bus routes",
    },
    {
      icon: Ship,
      mode: "Ferry",
      details: "Budge Budge Ghat for river transport",
    },
  ];

  const specialFeatures = [
    "Rural and farm animal expertise",
    "Community animal welfare programs",
    "Extended home visit coverage",
    "Emergency response for large animals",
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="h-4 w-4" />
                <span>South Kolkata Location</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                  Maheshtala Clinic
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Comprehensive veterinary care serving South Kolkata,
                specializing in community service and large animal care
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">
                    {locationDetails.address}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">
                    Daily 10:00 AM - 10:00 PM
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-600" />
                  <a
                    href="tel:+916291630297"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    +91 6291630297
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={locationDetails.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href="tel:+916291630297"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero-veterinary.webp"
                  alt="Maheshtala Veterinary Clinic"
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover rounded-lg"
                  priority
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    Community-Focused Care
                  </h3>
                  <p className="text-slate-600">
                    Serving South Kolkata with compassion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Services Available at Maheshtala
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Transportation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                How to Reach
              </h3>

              <div className="space-y-6">
                {transportation.map((transport, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <transport.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {transport.mode}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {transport.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Unique Access
                </h4>
                <p className="text-sm text-slate-600">
                  Only veterinary clinic in the area accessible by both road and
                  river transport via Budge Budge Ghat.
                </p>
              </div>
            </div>

            {/* Landmarks & Features */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Location Highlights
              </h3>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-slate-900">
                  Nearby Landmarks
                </h4>
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">{landmark}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">
                  Special Features
                </h4>
                {specialFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Service Highlight */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Service Hub</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our Maheshtala center supports community animal welfare and free
              treatment programs occasionally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Free</div>
              <div className="text-slate-300">Community Treatment Programs</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-slate-300">Emergency Response</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                Extended
              </div>
              <div className="text-slate-300">Home Visit Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Visit Our Maheshtala Center
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Comprehensive veterinary care with special focus on community
            service and large animal care
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916291630297"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: +91 6291630297</span>
            </a>
            <a
              href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20need%20consultation%20at%20Budge%20Budge%20center"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-8 text-green-100">
            <p>
              Located in Nangi • Near Nangi Station • Community-focused care
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BudgeBudgePage;
