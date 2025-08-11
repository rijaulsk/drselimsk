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
  Camera,
  Scissors,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Parnasree Location - Dr. Selim SK | Veterinary Services South Kolkata",
  description:
    "Visit Dr. Selim SK at Parnasree on Kalimata Colony Road. Professional veterinary care with diagnostic services, grooming, and boarding facilities.",
  keywords:
    "veterinary clinic Parnasree, pet doctor Behala, animal hospital Kalimata Colony Road, vet near Parnasree club",
};

const ParnasreePalliPage = () => {
  const locationDetails = {
    name: "Parnasree Clinic",
    address:
      "58, Kalimata Colony Rd, Parnasree Palli, Kolkata, West Bengal 700060",
    mapUrl:
      "https://maps.app.goo.gl/RFjVhRT4btQzLtwK7",
    area: "South Kolkata",
    pincode: "700060",
  };

  const services = [
    {
      icon: Camera,
      title: "Diagnostic Services",
      description: "Advanced pathology and radiology",
    },
    {
      icon: Scissors,
      title: "Pet Grooming",
      description: "Professional grooming services",
    },
    {
      icon: Home,
      title: "Boarding Facilities",
      description: "Safe and caring pet accommodation",
    },
    {
      icon: Stethoscope,
      title: "Health Checkups",
      description: "Comprehensive wellness exams",
    },
  ];

  const landmarks = [
    "Near Parnasree Club",
    "Close to Kalimata Colony",
    "Behala Chowrasta nearby",
  ];

  const transportation = [
    {
      icon: Bus,
      mode: "Bus Routes",
      details: "Multiple Behala routes, Thakurpukur buses",
    },
    {
      icon: Train,
      mode: "Metro Access",
      details: "Joka Metro Line - Thakurpukur Station nearby",
    },
    {
      icon: Car,
      mode: "By Car",
      details: "Easy access via Kalimata Colony Road",
    },
  ];

  const specialFeatures = [
    "Modern diagnostic equipment",
    "Professional grooming station",
    "Comfortable boarding facilities",
    "Specialized surgical suite",
  ];

  const facilities = [
    {
      title: "Diagnostic Lab",
      description: "In-house pathology and biochemistry testing",
      icon: Camera,
    },
    {
      title: "Grooming Station",
      description: "Professional pet grooming and hygiene services",
      icon: Scissors,
    },
    {
      title: "Boarding Area",
      description: "Clean, comfortable accommodation for pets",
      icon: Home,
    },
    {
      title: "Surgery Suite",
      description: "Modern surgical facilities with monitoring",
      icon: Stethoscope,
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="h-4 w-4" />
                <span>South Kolkata Location</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Parnasree Clinic
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Full-service veterinary facility in Parnasree offering
                diagnostic services, grooming, and boarding facilities
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
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
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">

                <Image
                  src="/images/hero-veterinary.webp"
                  alt="Parnasree Veterinary Clinic"
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover rounded-lg"
                  priority
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    Full-Service Facility
                  </h3>
                  <p className="text-slate-600">
                    Complete pet care under one roof
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
            Services Available at Parnasree
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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

      {/* Facilities Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Modern Facilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                    <facility.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-slate-600">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Transportation */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                How to Reach
              </h3>

              <div className="space-y-6">
                {transportation.map((transport, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <transport.icon className="h-6 w-6 text-purple-600" />
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

              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Convenient Location
                </h4>
                <p className="text-sm text-slate-600">
                  Easily accessible from Behala, Thakurpukur, and Joka areas
                  with ample parking space.
                </p>
              </div>
            </div>

            {/* Landmarks & Features */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Location Highlights
              </h3>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-slate-900">
                  Nearby Landmarks
                </h4>
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Visit Our Parnasree Palli Location
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Complete veterinary care with modern facilities including
            diagnostics, grooming, and boarding
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
              href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20need%20consultation%20at%20Parnasree%20Palli%20location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-8 text-purple-100">
            <p>
              Located on Kalimata Colony Road • Near Parnasree Club •
              Full-service facility
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ParnasreePalliPage;
