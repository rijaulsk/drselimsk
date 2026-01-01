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
  Heart,
  Shield,
  Users,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dr. Selim Sk (Veterinary Doctor & Surgeon) in New Alipore | Vet Clinic Kolkata",
  description: "Expert veterinary care at Dr. Selim Sk's clinic in New Alipore, Kolkata. We offer 24/7 emergency services, pet grooming, advanced diagnostics, and boarding facilities. Call +91 6291630297 to book an appointment.",
  keywords: "Dr Selim Sk veterinary doctor New Alipore, pet doctor Alipore, animal hospital Diamond Harbour Road, vet near Majherhat Station, veterinary clinic Kolkata, pet grooming New Alipore, large animal care South Kolkata, boarding facilities Alipore",
  openGraph: {
    title: "Dr. Selim Sk (Veterinary Doctor & Surgeon) in New Alipore | Vet Clinic Kolkata",
    description: "Expert veterinary care at Dr. Selim Sk's clinic in New Alipore, Kolkata. We offer 24/7 emergency services, pet grooming, advanced diagnostics, and boarding facilities.",
    url: "https://www.drselimsk.com/locations/new_alipore",
    type: "website",
    locale: "en_IN",
  },
};

const NewAliporePage = () => {
  const locationDetails = {
    businessName: "Dr. Selim SK (VETERINARY DOCTOR & SURGEON)",
    fullAddress: "Pet's Need, 10/1D, Diamond Harbour Rd, Alipore, Kolkata, West Bengal 700027",
    streetAddress: "Pet's Need, 10/1D, Diamond Harbour Rd, Alipore",
    addressLocality: "New Alipore",
    addressRegion: "West Bengal",
    postalCode: "700027",
    addressCountry: "IN",
    phoneNumber: "+916291630297",
    websiteUrl: "https://www.drselimsk.com/locations/new_alipore",
    geoCoordinates: {
      latitude: 22.5141,
      longitude: 88.3201
    },
    // Note: This embed URL is a placeholder. The actual Google Maps embed URL should be obtained from:
    // https://maps.app.goo.gl/iZGX3h3VJqqn5sgKA -> Share -> Embed a map
    gmbUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d88.3201!3d22.5141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMwJzUwLjgiTiA4OMKwMTknMTIuNCJF!5e0!3m2!1sen!2sin!4v1735028889000!5m2!1sen!2sin"
  };

  const services = [
    {
      icon: Stethoscope,
      title: "Comprehensive Health Checkups",
      description: "Regular wellness examinations including vaccination updates, parasite screening, dental health assessment, and early disease detection to keep your pet healthy throughout their life.",
    },
    {
      icon: Activity,
      title: "Emergency Response",
      description: "24/7 emergency veterinary services available at our New Alipore clinic. Critical care when you need it most in South Kolkata, with immediate response for life-threatening situations.",
    },
    {
      icon: Camera,
      title: "Advanced Diagnostic Services",
      description: "Our New Alipore clinic features state-of-the-art diagnostic equipment including in-house blood testing, digital X-rays, ultrasound, and comprehensive pathology services for accurate diagnosis.",
    },
    {
      icon: Scissors,
      title: "Professional Pet Grooming",
      description: "Complete grooming services including bathing, nail trimming, ear cleaning, dental care, and stylish cuts. Our professional groomers ensure your pet looks and feels their best.",
    },
    {
      icon: Home,
      title: "Safe Boarding Facilities",
      description: "Going out of town? Our clean, comfortable, and secure pet boarding facilities provide a home-away-from-home experience with 24/7 supervision, regular exercise, and personalized care.",
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Dedicated to serving the New Alipore community with affordable veterinary care, community outreach programs, and educational workshops for responsible pet ownership.",
    },
  ];

  const specialFeatures = [
    "Modern diagnostic equipment",
    "Professional grooming station",
    "Comfortable boarding facilities",
    "Specialized surgical suite",
    "24/7 emergency care",
    "Large animal care expertise",
  ];

  const facilities = [
    {
      title: "Advanced Diagnostic Lab",
      description: "In-house pathology, biochemistry testing, and digital radiography",
      icon: Camera,
    },
    {
      title: "Professional Grooming Station",
      description: "Complete pet grooming and hygiene services with modern equipment",
      icon: Scissors,
    },
    {
      title: "Comfortable Boarding Area",
      description: "Clean, spacious accommodation with 24/7 supervision",
      icon: Home,
    },
    {
      title: "Modern Surgery Suite",
      description: "Fully equipped surgical facilities with advanced monitoring systems",
      icon: Stethoscope,
    },
  ];

  const testimonials = [
    {
      name: "Gayatri Rai",
      rating: 5,
      text: "It was great experience of home visit as I have shifted recently lots of vet are only into money making. Dr. Selim is now added on my list from my fur babies.. Thanks doc for your service and consult.",
      location: "New Alipore"
    },
    {
      name: "Madhuparna Dalui",
      rating: 5,
      text: "From very past days we heard that DOCTOR IS NEXT TO GOD. when we were fully misguided by a group of people, that time Dr. Selim came to us just like a GOD to save our DOG. He is just like a GOD for us. Very very good Doctor. Thanks a lot, we always thankful to him. He is a very helpful person. Whenever you will be in a problem, Dr. Selim is always there to help you. Thank you very much sir. Thank you again. 🙏🏽🙏🏽🙏🏽. Highly recommended DR. SELIM SK.",
      location: "Alipore"
    },
    {
      name: "Touhid Zafar",
      rating: 5,
      text: "Dr Selim sir as very experienced and skilled dr in our town with nice behaviour easily affordable and reasonable fees also examined pets very carefully",
      location: "Diamond Harbour Road"
    },
    {
      name: "Arti Tandon",
      rating: 5,
      text: "Dr Selim is an excellent vet. As caregivers we have got our community furries treated by him, many whose lives he has saved. We have even got treatment for our other rescues like cats, birds and rabbits. What's wonderful about Dr Selim, is that he actually responds to emergencies which is a rarity in Kolkata. He has come early morning before work and even at midnight. Never let his patients down.",
      location: "South Kolkata"
    }
  ];

  const landmarks = [
    "Near Majherhat Railway Station",
    "Close to Taratala, D. H. Road",
    "Alipore Zoo nearby",
  ];

  const transportation = [
    {
      icon: Train,
      mode: "Metro/Train",
      details: "Majherhat Railway Station - 5 minutes walk",
    },
    {
      icon: Bus,
      mode: "Bus Routes",
      details: "Multiple routes via Diamond Harbour Road, Taratala",
    },
    {
      icon: Car,
      mode: "By Car",
      details: "Easy access via Diamond Harbour Road (D. H. Road)",
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="h-4 w-4" />
                <span>South Kolkata Location</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Dr. Selim Sk (Veterinary Doctor & Surgeon) - New Alipore, Kolkata
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Welcome to our state-of-the-art veterinary clinic in New Alipore, serving pet owners in Alipore, Taratala, and surrounding South Kolkata areas. We offer comprehensive veterinary care including advanced diagnostics, professional pet grooming, safe boarding facilities, large animal care, and 24/7 emergency services.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="text-slate-700">
                    {locationDetails.fullAddress}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">
                    Daily 10:00 AM - 10:00 PM | 24/7 Emergency Services
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
                  href="https://maps.app.goo.gl/iZGX3h3VJqqn5sgKA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${locationDetails.phoneNumber}`}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero-veterinary.webp"
                  alt="Dr. Selim Sk's Veterinary Clinic in New Alipore, Kolkata - Modern pet care facility"
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover rounded-lg"
                  priority
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    Full-Service Veterinary Facility
                  </h3>
                  <p className="text-slate-600">
                    Complete pet care under one roof in New Alipore
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
            Our Veterinary Services in New Alipore
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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

      {/* Meet Dr. Selim Sk - Your Local Veterinarian */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Meet Dr. Selim Sk - Your Local Veterinarian
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Image
                  src="/images/dr-selim-profile.webp"
                  alt="Dr. Selim Sk - Veterinary Doctor & Surgeon at New Alipore clinic"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Dr. Selim Sk
                  </h3>
                  <p className="text-slate-600 mb-4">Veterinary Doctor & Surgeon</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm">
                    BVSc & AH Graduate with 3+ years of specialized experience
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Experienced Veterinary Care in New Alipore
                </h3>
                <p className="text-slate-600 mb-6">
                  Dr. Selim Sk brings years of dedicated experience in veterinary medicine to the New Alipore community. As a qualified Veterinary Doctor & Surgeon, he specializes in comprehensive pet healthcare, from routine wellness exams to complex surgical procedures and large animal care.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "3+ Years Experience", desc: "Proven expertise in veterinary care" },
                  { icon: Heart, title: "Compassionate Care", desc: "Gentle approach with all animals" },
                  { icon: Users, title: "1000+ Happy Clients", desc: "Trusted by pet families" },
                  { icon: Clock, title: "24/7 Emergency", desc: "Always available when needed" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-amber-100 p-2 rounded-lg">
                        <item.icon className="h-4 w-4 text-amber-600" />
                      </div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Pet Clinic Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Modern Pet Clinic Facilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-lg">
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

          <div className="mt-12 bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-6">
              Why Choose Our New Alipore Clinic?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {specialFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Find Our New Alipore Vet Clinic
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Transportation */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                How to Reach Our Clinic
              </h3>

              <div className="space-y-6">
                {transportation.map((transport, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <transport.icon className="h-6 w-6 text-amber-600" />
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

              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Parking Available
                </h4>
                <p className="text-sm text-slate-600">
                  Convenient parking space available for cars and two-wheelers
                  near the clinic on Diamond Harbour Road.
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
                  src={locationDetails.gmbUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${locationDetails.businessName} in New Alipore`}
                ></iframe>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Nearby Landmarks
                </h4>
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-slate-700">{landmark}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Pet&apos;s Need
                </h4>
                <p className="text-sm text-slate-600">
                  Located at Pet&apos;s Need pet shop on Diamond Harbour Road for easy identification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-2xl p-8">
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
                    <h4 className="font-semibold text-slate-700">Area</h4>
                    <p className="text-slate-600">New Alipore, South Kolkata</p>
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
                What are your clinic hours at the New Alipore location?
              </h3>
              <p className="text-slate-600">
                Our New Alipore clinic is open daily from 10:00 AM to 10:00 PM. We also provide emergency services for urgent pet care needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Do you provide home visit services in South Kolkata?
              </h3>
              <p className="text-slate-600">
                Yes, we offer comprehensive home visit services throughout South Kolkata including New Alipore, Alipore, Taratala, and surrounding areas along Diamond Harbour Road. This is especially beneficial for pets who get stressed during travel or for large animal care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Where exactly is Dr. Selim SK&apos;s New Alipore clinic located?
              </h3>
              <p className="text-slate-600">
                Our clinic is located at {locationDetails.fullAddress}. We are situated at Pet&apos;s Need pet shop, making it easy to find. The clinic is near Majherhat Railway Station and easily accessible via Diamond Harbour Road.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Do you provide emergency services at this New Alipore location?
              </h3>
              <p className="text-slate-600">
                Yes, we offer emergency services at our New Alipore clinic. If your pet needs urgent care in South Kolkata, please call us immediately at <a href={`tel:${locationDetails.phoneNumber}`} className="text-orange-600 hover:text-orange-700 font-medium">{locationDetails.phoneNumber}</a>.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                What types of animals do you treat at the New Alipore clinic?
              </h3>
              <p className="text-slate-600">
                We provide comprehensive care for dogs, cats, birds, small animals (rabbits, guinea pigs), and specialize in large animal care including cattle and horses. Dr. Selim has multi-species expertise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Is parking available at the clinic?
              </h3>
              <p className="text-slate-600">
                Yes, convenient parking is available for both cars and two-wheelers near our clinic on Diamond Harbour Road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-4 text-sm">
                  &quot;{testimonial.text}&quot;
                </blockquote>
                <cite className="text-cyan-400 font-semibold text-sm">
                  - {testimonial.name}, {testimonial.location}
                </cite>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-6 bg-slate-800 px-8 py-6 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">4.9</div>
                <div className="text-slate-400 text-sm">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">1000+</div>
                <div className="text-slate-400 text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-slate-400 text-sm">Emergency Care</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=Dr.+Selim+Sk+Veterinary+Doctor+Surgeon+New+Alipore+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Star className="h-5 w-5" />
              <span>Find us on Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Visit Our New Alipore Veterinary Clinic
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Expert veterinary care with modern facilities including diagnostics, grooming, boarding, and large animal care. Serving New Alipore, Alipore, Taratala, and surrounding areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${locationDetails.phoneNumber}`}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: {locationDetails.phoneNumber}</span>
            </a>
            <a
              href={`https://wa.me/${locationDetails.phoneNumber.replace('+', '')}?text=Hello%20Dr.%20Selim,%20I%20need%20consultation%20at%20New%20Alipore%20clinic`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-8 text-amber-100">
            <p>
              Located at Pet&apos;s Need, Diamond Harbour Road • Easy access from Majherhat Station • Postal Code: {locationDetails.postalCode}
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
            "name": "Dr. Selim Sk (Veterinary Doctor & Surgeon)",
            "image": "https://www.drselimsk.com/images/hero-veterinary.webp",
            "@id": "https://www.drselimsk.com/locations/new_alipore",
            "url": locationDetails.websiteUrl,
            "telephone": locationDetails.phoneNumber,
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": locationDetails.streetAddress,
              "addressLocality": locationDetails.addressLocality,
              "addressRegion": "WB",
              "postalCode": locationDetails.postalCode,
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
              "New Alipore",
              "Alipore", 
              "Taratala",
              "Diamond Harbour Road",
              "South Kolkata"
            ],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Pet Grooming",
                "value": "Professional grooming services available"
              },
              {
                "@type": "PropertyValue", 
                "name": "Pet Boarding",
                "value": "Safe boarding facilities available"
              },
              {
                "@type": "PropertyValue",
                "name": "Diagnostic Lab",
                "value": "In-house pathology and radiology services"
              },
              {
                "@type": "PropertyValue",
                "name": "Emergency Services",
                "value": "24/7 emergency care available"
              },
              {
                "@type": "PropertyValue",
                "name": "Large Animal Care",
                "value": "Specialized veterinary care for cattle, horses, and livestock"
              },
              {
                "@type": "PropertyValue",
                "name": "Community Service",
                "value": "Affordable care and educational workshops"
              }
            ],
            "hasMap": "https://maps.app.goo.gl/iZGX3h3VJqqn5sgKA"
          })
        }}
      />
    </main>
  );
};

export default NewAliporePage;
