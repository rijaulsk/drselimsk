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
  title: "Dr. SELIM SK (VETERINARY DOCTOR) in Maheshtala | Vet Clinic",
  description: "Visit Dr. SELIM SK (VETERINARY DOCTOR) in Nangi, Maheshtala for expert pet and large animal care. Compassionate veterinary services. Call +91 6291630297 for emergencies.",
  keywords: "Dr SELIM SK veterinary doctor Maheshtala, vet clinic Nangi, animal hospital Maheshtala, veterinary services West Bengal 700140",
  openGraph: {
    title: "Dr. SELIM SK (VETERINARY DOCTOR) in Maheshtala | Vet Clinic",
    description: "Visit Dr. SELIM SK (VETERINARY DOCTOR) in Nangi, Maheshtala for expert pet and large animal care. Compassionate veterinary services.",
    url: "https://www.drselimsk.com/locations/maheshtala",
    type: "website",
    locale: "en_IN",
  },
};

const MaheshtalePage = () => {
  const locationDetails = {
    businessName: "Dr. SELIM SK (VETERINARY DOCTOR)",
    fullAddress: "MORE, Nangi, Maheshtala, West Bengal 700140",
    streetAddress: "MORE, Nangi",
    addressLocality: "Maheshtala",
    addressRegion: "West Bengal",
    postalCode: "700140",
    addressCountry: "IN",
    phoneNumber: "+916291630297",
    websiteUrl: "https://www.drselimsk.com/locations/maheshtala",
    geoCoordinates: {
      latitude: 22.4964,
      longitude: 88.2734
    },
    gmbUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.092721118671!2d88.2708354149582!3d22.49984688521946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279e8c0000001%3A0x7d6b8b1b8b8b8b8b!2sDr.%20SELIM%20SK%20(VETERINARY%20DOCTOR)!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin"
  };

  const services = [
    {
      icon: Home,
      title: "Home Visit Services",
      description: "We understand it's not always easy to bring your pet to the clinic. That's why we offer extensive home visit services throughout Maheshtala, and nearby areas.",
    },
    {
      icon: Stethoscope,
      title: "Large Animal Care",
      description: "Dr. SELIM SK has expertise in treating large animals. If you have farm animals in the South Kolkata rural belt needing care, our Maheshtala center is your trusted partner.",
    },
    {
      icon: CheckCircle,
      title: "Community Service",
      description: "We are committed to animal welfare and proudly run community treatment programs to help stray and community animals in the Nangi and Maheshtala region.",
    },
    {
      icon: Phone,
      title: "Emergency Response",
      description: "Our team is ready to respond to emergencies for both pets and large animals. We provide prompt and effective care to the entire Maheshtala area.",
    },
  ];

  const landmarks = [
    "Near Nangi Railway Station",
    "Close to Maheshtala Trunk Road",
    "Nangi Market Area",
  ];

  const transportation = [
    {
      icon: Train,
      mode: "Railway",
      details: "Nangi Station on Sealdah-Diamond Harbour line",
    },
    {
      icon: Bus,
      mode: "Bus Routes",
      details: "Diamond Harbour Road bus routes",
    },
    {
      icon: Ship,
      mode: "Ferry",
      details: "River transport connections available",
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
                  Dr. SELIM SK (VETERINARY DOCTOR) - Vet in Maheshtala
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Serving the Maheshtala and Nangi communities, our clinic is dedicated to providing accessible and compassionate veterinary care for all animals, including specialized services for large farm animals.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">
                    {locationDetails.fullAddress}
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
                    href={`tel:${locationDetails.phoneNumber}`}
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    {locationDetails.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={locationDetails.gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${locationDetails.phoneNumber}`}
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
                  alt="Dr. SELIM SK (VETERINARY DOCTOR) Maheshtala Clinic"
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
                  Convenient Access
                </h4>
                <p className="text-sm text-slate-600">
                  Easily accessible veterinary clinic in Maheshtala with convenient transportation options.
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Find Us on Map
              </h3>
              
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.092721118671!2d88.2708354149582!3d22.49984688521946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279e8c0000001%3A0x7d6b8b1b8b8b8b8b!2sDr.%20SELIM%20SK%20(VETERINARY%20DOCTOR)!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${locationDetails.businessName} in Maheshtala`}
                ></iframe>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Nearby Landmarks
                </h4>
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">{landmark}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Location Details
                </h4>
                <p className="text-sm text-slate-600">
                  {locationDetails.fullAddress}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-50 to-green-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
              Contact Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Business Details</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-700">Business Name</h4>
                    <p className="text-slate-600">{locationDetails.businessName}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Complete Address</h4>
                    <p className="text-slate-600">{locationDetails.fullAddress}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Phone Number</h4>
                    <a
                      href={`tel:${locationDetails.phoneNumber}`}
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      {locationDetails.phoneNumber}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Location Details</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-700">Postal Code</h4>
                    <p className="text-slate-600">{locationDetails.postalCode}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Region</h4>
                    <p className="text-slate-600">{locationDetails.addressRegion}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Coordinates</h4>
                    <p className="text-slate-600">
                      {locationDetails.geoCoordinates.latitude}, {locationDetails.geoCoordinates.longitude}
                    </p>
                  </div>
                </div>
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
              <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-slate-300">Successful Surgeries</div>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                What are your clinic hours at the Maheshtala location?
              </h3>
              <p className="text-slate-600">
                Our Maheshtala clinic is open daily from 10:00 AM to 10:00 PM. Emergency services are available for urgent pet care needs.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Do you provide home visit services in South Kolkata?
              </h3>
              <p className="text-slate-600">
                Yes, we offer extensive home visit services throughout South Kolkata including Maheshtala, Pujali, Sankrail, and surrounding rural areas. This is particularly beneficial for large animals and farm animals.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Where exactly is Dr. SELIM SK&apos;s Maheshtala clinic located?
              </h3>
              <p className="text-slate-600">
                Our clinic is located at {locationDetails.fullAddress}. You can find us easily near Nangi Railway Station.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Do you treat farm animals like goats or cows?
              </h3>
              <p className="text-slate-600">
                Yes, our Maheshtala clinic specializes in large animal care. Dr. SELIM SK has extensive experience treating farm and rural animals.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Do you offer emergency services for large animals?
              </h3>
              <p className="text-slate-600">
                Yes, we provide emergency response for both pets and large animals. Our team is equipped to handle farm animal emergencies throughout the South Kolkata rural belt.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                What do your community service programs involve?
              </h3>
              <p className="text-slate-600">
                We work with local communities and animal lovers to provide occasional free or subsidized treatment, vaccination, and spaying/neutering for stray animals in the Maheshtala area.
              </p>
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
              href={`tel:${locationDetails.phoneNumber}`}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: {locationDetails.phoneNumber}</span>
            </a>
            <a
              href={`https://wa.me/${locationDetails.phoneNumber.replace('+', '')}?text=Hello%20Dr.%20SELIM%20SK,%20I%20need%20consultation%20at%20Maheshtala%20center`}
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
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": locationDetails.businessName,
            "image": "https://www.drselimsk.com/images/hero-veterinary.webp",
            "@id": locationDetails.websiteUrl,
            "url": locationDetails.websiteUrl,
            "telephone": locationDetails.phoneNumber,
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": locationDetails.streetAddress,
              "addressLocality": locationDetails.addressLocality,
              "postalCode": locationDetails.postalCode,
              "addressRegion": locationDetails.addressRegion,
              "addressCountry": locationDetails.addressCountry
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": locationDetails.geoCoordinates.latitude.toString(),
              "longitude": locationDetails.geoCoordinates.longitude.toString()
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "10:00",
              "closes": "22:00"
            },
            "areaServed": [
              locationDetails.addressLocality,
              "Nangi",
              "South Kolkata",
              "Pujali",
              "Sankrail"
            ],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Large Animal Care",
                "value": "Specialized care for farm animals and livestock"
              },
              {
                "@type": "PropertyValue",
                "name": "Community Service",
                "value": "Free treatment programs for stray animals"
              },
              {
                "@type": "PropertyValue",
                "name": "Home Visits",
                "value": "Extensive home visit coverage in rural areas"
              }
            ]
          })
        }}
      />
    </main>
  );
};

export default MaheshtalePage;