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
  title: "Dr. Selim SK (VETERINARY DOCTOR & SURGEON) | Vet in Baranagar",
  description: "Official page for Dr. Selim SK (VETERINARY DOCTOR & SURGEON) in Baranagar. Offering expert pet care, surgery, and emergency services. Call +91 6291630297.",
  keywords:
    "Dr Selim SK veterinarian Baranagar, veterinary doctor Gopal Lal Tagore Road, pet doctor North Kolkata, animal hospital Baranagar 700036",
  openGraph: {
    title: "Dr. Selim SK (VETERINARY DOCTOR & SURGEON) | Vet in Baranagar",
    description: "Official page for Dr. Selim SK (VETERINARY DOCTOR & SURGEON) in Baranagar. Expert pet care, surgery, and emergency services.",
    url: "https://www.drselimsk.com/locations/baranagar",
    type: "website",
    locale: "en_IN",
  },
};

const BaranagarPage = () => {
  const locationDetails = {
    businessName: "Dr. Selim SK (VETERINARY DOCTOR & SURGEON)",
    fullAddress: "Gopal Lal Tagore Rd, Neogipara, Joyshree, Ashokgarh, Baranagar, West Bengal 700036",
    streetAddress: "Gopal Lal Tagore Rd, Neogipara, Joyshree, Ashokgarh",
    addressLocality: "Baranagar",
    addressRegion: "West Bengal",
    postalCode: "700036",
    addressCountry: "IN",
    plusCode: "J9RF+MQ5",
    phoneNumber: "+916291630297",
    websiteUrl: "https://www.drselimsk.com/locations/baranagar",
    geoCoordinates: {
      latitude: 22.6291628,
      longitude: 88.3744686
    },
    gmbUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235668.86200693302!2d88.0696047!3d22.641632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d007814382d%3A0xe1dcd3431694b948!2sDr.%20Selim%20SK%20(VETERINARY%20DOCTOR%20%26%20SURGEON)!5e0!3m2!1sen!2sin!4v1756927513578!5m2!1sen!2sin"
  };

  const services = [
    {
      icon: Stethoscope,
      title: "Complete Health Checkups",
      description: "Comprehensive examinations for dogs, cats, and other pets to detect issues early and ensure your companion stays healthy. Serving Baranagar and North Kolkata area.",
    },
    {
      icon: CheckCircle,
      title: "Vaccination Programs",
      description: "Complete immunization schedules tailored to your pet's age and lifestyle, protecting them from common diseases in the Baranagar region.",
    },
    {
      icon: Phone,
      title: "Emergency Care",
      description: "emergency veterinary services available at our Baranagar clinic. Critical care when you need it most in North Kolkata.",
    },
    {
      icon: Home,
      title: "Home Visits",
      description: "Convenient home visit services in Baranagar, Dum Dum, and nearby North Kolkata areas. Expert veterinary care at your doorstep.",
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
                  Dr. Selim SK (VETERINARY DOCTOR & SURGEON) in Baranagar
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Professional and compassionate veterinary care from the heart of North Kolkata. Our Baranagar clinic, conveniently located on Gopal Lal Tagore Road, is fully equipped to handle everything from routine checkups to emergencies.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">
                    {locationDetails.fullAddress}
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
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero-veterinary.webp"
                  alt="Dr. Selim SK (VETERINARY DOCTOR & SURGEON) Baranagar Clinic"
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

            {/* Google Maps Embed */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Find Us on Map
              </h3>
              
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235668.86200693302!2d88.0696047!3d22.641632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d007814382d%3A0xe1dcd3431694b948!2sDr.%20Selim%20SK%20(VETERINARY%20DOCTOR%20%26%20SURGEON)!5e0!3m2!1sen!2sin!4v1756927513578!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${locationDetails.businessName} in Baranagar`}
                ></iframe>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Nearby Landmarks
                </h4>
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700">{landmark}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Plus Code Location
                </h4>
                <p className="text-sm text-slate-600">
                  {locationDetails.plusCode} - Use this code for precise navigation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8">
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
                    <h4 className="font-semibold text-slate-700">Plus Code</h4>
                    <p className="text-slate-600">{locationDetails.plusCode}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Postal Code</h4>
                    <p className="text-slate-600">{locationDetails.postalCode}</p>
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

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                What are your clinic hours at the Baranagar location?
              </h3>
              <p className="text-slate-600">
                Our Baranagar clinic is open daily from 10:00 AM to 10:00 PM. We also provide emergency services for urgent pet care needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Do you provide home visit services in North Kolkata?
              </h3>
              <p className="text-slate-600">
                Yes, we offer comprehensive home visit services throughout North Kolkata including Baranagar, Dum Dum, Sodepur, and surrounding areas. This is especially beneficial for pets who get stressed during travel.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Where exactly is Dr. Selim SK&apos;s Baranagar clinic located?
              </h3>
              <p className="text-slate-600">
                Our clinic is located at {locationDetails.fullAddress}. You can find us using the Plus Code {locationDetails.plusCode} for precise navigation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Do you provide emergency services at this Baranagar location?
              </h3>
              <p className="text-slate-600">
                Yes, we offer emergency services at our Baranagar clinic. If your pet needs urgent care in North Kolkata, please call us immediately at <a href={`tel:${locationDetails.phoneNumber}`} className="text-orange-600 hover:text-orange-700 font-medium">{locationDetails.phoneNumber}</a>.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                What types of animals do you treat at the Baranagar clinic?
              </h3>
              <p className="text-slate-600">
                We provide comprehensive care for dogs, cats, birds, small animals (rabbits, guinea pigs), and can also handle emergency care for other pets. Dr. Selim has multi-species expertise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Is parking available at the clinic?
              </h3>
              <p className="text-slate-600">
                Yes, convenient parking is available for both cars and two-wheelers near our clinic on Gopal Lal Tagore Road.
              </p>
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
            services available
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
              href={`https://wa.me/${locationDetails.phoneNumber.replace('+', '')}?text=Hello%20Dr.%20Selim,%20I%20need%20consultation%20at%20Baranagar%20clinic`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-8 text-blue-100">
            <p>
              Located on Gopal Lal Tagore Road • Easy access from Baranagar Station • Postal Code: {locationDetails.postalCode}
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
            "description": "Professional veterinary care in Baranagar, North Kolkata with emergency services",
            "url": locationDetails.websiteUrl,
            "telephone": locationDetails.phoneNumber,
            "email": "mstgunahar@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": locationDetails.streetAddress,
              "addressLocality": locationDetails.addressLocality,
              "addressRegion": locationDetails.addressRegion,
              "postalCode": locationDetails.postalCode,
              "addressCountry": locationDetails.addressCountry
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": locationDetails.geoCoordinates.latitude.toString(),
              "longitude": locationDetails.geoCoordinates.longitude.toString()
            },
            "openingHours": "Mo-Su 10:00-22:00",
            "priceRange": "₹₹",
            "paymentAccepted": ["Cash", "UPI"],
            "emergencyService": true,
            "hasMap": locationDetails.gmbUrl,
            "areaServed": [
              locationDetails.addressLocality,
              "Dum Dum", 
              "North Kolkata", 
              "Sodepur", 
              "Khardaha"
            ],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Plus Code",
                "value": locationDetails.plusCode
              },
              {
                "@type": "PropertyValue",
                "name": "Emergency Services",
                "value": "Available in Need"
              },
              {
                "@type": "PropertyValue",
                "name": "Home Visits",
                "value": "Available in North Kolkata area"
              }
            ]
          })
        }}
      />
    </main>
  );
};

export default BaranagarPage;