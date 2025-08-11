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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Baranagar Clinic - Dr. Selim SK | Veterinary Services North Kolkata",
  description:
    "Visit Dr. Selim SK at Baranagar clinic on Gopal Lal Tagore Road. Professional veterinary care in North Kolkata with emergency services and home visits.",
  keywords:
    "veterinary clinic Baranagar, pet doctor North Kolkata, animal hospital Gopal Lal Tagore Road, vet near Baranagar station",
};

const BaranagarPage = () => {
  const locationDetails = {
    name: "Baranagar Clinic",
    address:
      "J9RF+MQ5, Gopal Lal Tagore Rd, Neogipara, Joyshree, Ashokgarh, Baranagar, West Bengal 700035",
    mapUrl: "https://maps.app.goo.gl/73JM5BbWbpVeeVqH9",
    area: "North Kolkata",
    pincode: "700035",
  };

  const services = [
    {
      icon: Stethoscope,
      title: "Complete Health Checkups",
      description: "Comprehensive examinations for all pets",
    },
    {
      icon: CheckCircle,
      title: "Vaccination Programs",
      description: "Full immunization schedules",
    },
    {
      icon: Phone,
      title: "Emergency Care",
      description: "24/7 emergency services available",
    },
    {
      icon: Home,
      title: "Home Visits",
      description: "Convenient care at your location",
    },
  ];

  const landmarks = [
    "Near Barrackpore Trunk Road",
    "Close to Gopal Lal Tagore Road",
    "Accessible from Dum Dum",
  ];

  const transportation = [
    {
      icon: Train,
      mode: "Metro/Train",
      details: "Baranagar Station on Sealdah-Ranaghat line",
    },
    {
      icon: Bus,
      mode: "Bus Routes",
      details: "Multiple bus routes from Shyambazar, Dunlop",
    },
    {
      icon: Car,
      mode: "By Car",
      details: "Easy access via Gopal Lal Tagore Road",
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="h-4 w-4" />
                <span>North Kolkata Location</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Baranagar Clinic
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Professional veterinary care in the heart of North Kolkata,
                conveniently located on Gopal Lal Tagore Road
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">
                    {locationDetails.address}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
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
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero-veterinary.webp"
                  alt="Baranagar Veterinary Clinic"
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover rounded-lg"
                  priority
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    Professional Veterinary Care
                  </h3>
                  <p className="text-slate-600">
                    Serving North Kolkata with excellence
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
            Services Available at Baranagar
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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

      {/* Location Details */}
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
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <transport.icon className="h-6 w-6 text-blue-600" />
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

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Parking Available
                </h4>
                <p className="text-sm text-slate-600">
                  Convenient parking space available for cars and two-wheelers
                  near the clinic.
                </p>
              </div>
            </div>

            {/* Landmarks */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Nearby Landmarks
              </h3>

              <div className="space-y-3">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700">{landmark}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Area Coverage
                </h4>
                <p className="text-sm text-slate-600">
                  We serve pets from Baranagar, Dunlop, Sodepur, Khardaha, and
                  surrounding North Kolkata areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Visit Our Baranagar Clinic
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Professional veterinary care in North Kolkata with emergency
            services available 24/7
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
              href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20need%20consultation%20at%20Baranagar%20clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-8 text-blue-100">
            <p>
              Located on Gopal Lal Tagore Road • Easy access from Baranagar
              Station
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BaranagarPage;
