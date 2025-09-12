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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dr. Selim Sk (Veterinary Doctor & Surgeon) in Parnasree | Vet Clinic Kolkata",
  description: "Expert veterinary care at Dr. Selim Sk's clinic in Parnasree, Kolkata. We offer 24/7 emergency services, pet grooming, and advanced diagnostics. Call +91 6291630297 to book an appointment.",
  keywords: "Dr Selim Sk veterinary doctor Parnasree, pet doctor Behala, animal hospital Kalimata Colony Road, vet near Parnasree club, veterinary clinic Kolkata, pet grooming Parnasree",
  openGraph: {
    title: "Dr. Selim Sk (Veterinary Doctor & Surgeon) in Parnasree | Vet Clinic Kolkata",
    description: "Expert veterinary care at Dr. Selim Sk's clinic in Parnasree, Kolkata. We offer 24/7 emergency services, pet grooming, and advanced diagnostics.",
    url: "https://www.drselimsk.com/locations/parnasree",
    type: "website",
    locale: "en_IN",
  },
};

const ParnasreePalliPage = () => {
  const locationDetails = {
    businessName: "Dr. Selim Sk (Veterinary Doctor & Surgeon)",
    name: "Parnasree Clinic",
    address: "58, Kalimata Colony Rd, Parnasree Palli, Kolkata, West Bengal 700060",
    streetAddress: "58, Kalimata Colony Rd",
    addressLocality: "Parnasree Palli, Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700060",
    addressCountry: "IN",
    phoneNumber: "+916291630297",
    websiteUrl: "https://www.drselimsk.com/locations/parnasree",
    plusCode: "G852+2F",
    geoCoordinates: {
      latitude: 22.502578,
      longitude: 88.301167
    },
    mapUrl: "https://maps.app.goo.gl/RFjVhRT4btQzLtwK7",
    area: "South Kolkata",
    pincode: "700060",
  };

  const services = [
    {
      icon: Camera,
      title: "Advanced Diagnostic Services",
      description: "Our Parnasree clinic features state-of-the-art diagnostic equipment including in-house blood testing, digital X-rays, ultrasound, and comprehensive pathology services for accurate diagnosis of your pet's health conditions.",
    },
    {
      icon: Scissors,
      title: "Professional Pet Grooming",
      description: "Complete grooming services including bathing, nail trimming, ear cleaning, dental care, and stylish cuts. Our professional groomers ensure your pet looks and feels their best in our modern grooming facility.",
    },
    {
      icon: Home,
      title: "Safe Boarding Facilities",
      description: "Going out of town? Our clean, comfortable, and secure pet boarding facilities provide a home-away-from-home experience with 24/7 supervision, regular exercise, and personalized care for your beloved companion.",
    },
    {
      icon: Stethoscope,
      title: "Comprehensive Health Checkups",
      description: "Regular wellness examinations including vaccination updates, parasite screening, dental health assessment, and early disease detection to keep your pet healthy throughout their life.",
    },
  ];

  const landmarks = [
    "Near Parnasree Club",
    "Close to Kalimata Colony",
    "Behala Chowrasta nearby",
    "Thakurpukur accessible",
  ];

  const transportation = [
    {
      icon: Bus,
      mode: "Bus Routes",
      details: "Multiple Behala routes, Thakurpukur buses, direct connectivity",
    },
    {
      icon: Train,
      mode: "Metro Access",
      details: "Joka Metro Line - Thakurpukur Station nearby",
    },
    {
      icon: Car,
      mode: "By Car",
      details: "Easy access via Kalimata Colony Road with ample parking",
    },
  ];

  const specialFeatures = [
    "Modern diagnostic equipment",
    "Professional grooming station",
    "Comfortable boarding facilities",
    "Specialized surgical suite",
    "24/7 emergency care",
    "In-house pharmacy",
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

  const faqs = [
    {
      question: "Do you provide emergency veterinary services in Parnasree?",
      answer: "Yes, we offer 24/7 emergency services for pets in Parnasree and surrounding areas including Behala and Thakurpukur. Please call us at +91 6291630297 for immediate assistance."
    },
    {
      question: "What are your clinic hours?",
      answer: "Our Parnasree clinic is open daily from 10:00 AM to 10:00 PM. Emergency services are available 24/7."
    },
    {
      question: "Is parking available at your clinic?",
      answer: "Yes, we have ample parking space available for our clients at our Kalimata Colony Road location."
    },
    {
      question: "Do you offer pet grooming services?",
      answer: "Yes, we provide comprehensive pet grooming services including bathing, nail trimming, ear cleaning, and styling. Please call to schedule an appointment."
    },
    {
      question: "Which areas do you serve from the Parnasree location?",
      answer: "We serve Parnasree, Behala, Thakurpukur, Joka, and surrounding South Kolkata areas. Home visits are also available."
    },
    {
      question: "Do you have boarding facilities for pets?",
      answer: "Yes, we offer safe and comfortable boarding facilities with 24/7 supervision, regular exercise, and personalized care for your pets."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Excellent care for my cat at the Parnasree clinic. Dr. Selim Sk is very knowledgeable and caring. The grooming service is also top-notch!",
      location: "Parnasree"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Best veterinary clinic in South Kolkata. The diagnostic facilities are modern and the staff is very professional. Highly recommended!",
      location: "Behala"
    },
    {
      name: "Anita Das",
      rating: 5,
      text: "Dr. Selim Sk saved my dog's life during an emergency. The 24/7 service is a blessing for pet owners in Parnasree area.",
      location: "Thakurpukur"
    }
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
                  Dr. Selim Sk (Veterinary Doctor & Surgeon) - Parnasree, Kolkata
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Welcome to our state-of-the-art veterinary clinic in Parnasree, serving pet owners in Behala, Thakurpukur, and surrounding South Kolkata areas. We offer comprehensive veterinary care including advanced diagnostics, professional pet grooming, safe boarding facilities, and 24/7 emergency services.
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
                  href={locationDetails.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero-veterinary.webp"
                  alt="Dr. Selim Sk's Veterinary Clinic in Parnasree, Kolkata - Modern pet care facility"
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
                    Complete pet care under one roof in Parnasree
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Veterinary Services in Parnasree */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Veterinary Services in Parnasree
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
                  alt="Dr. Selim Sk - Veterinary Doctor & Surgeon at Parnasree clinic"
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
                  Experienced Veterinary Care in Parnasree
                </h3>
                <p className="text-slate-600 mb-6">
                  Dr. Selim Sk brings years of dedicated experience in veterinary medicine to the Parnasree community. As a qualified Veterinary Doctor & Surgeon, he specializes in comprehensive pet healthcare, from routine wellness exams to complex surgical procedures.
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
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <item.icon className="h-4 w-4 text-purple-600" />
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

          <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-6">
              Why Choose Our Parnasree Clinic?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {specialFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                What types of diagnostic services do you offer?
              </h3>
              <p className="text-slate-600">
                Our Parnasree clinic features advanced diagnostic equipment including in-house blood testing, digital X-rays, ultrasound, and comprehensive pathology services for accurate diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Find Our Parnasree Vet Clinic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Find Our Parnasree Vet Clinic
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
                  Plus Code Location
                </h4>
                <p className="text-sm text-slate-600 mb-2">
                  {locationDetails.plusCode} - Use this code for precise navigation
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Parking Available
                </h4>
                <p className="text-sm text-slate-600">
                  Ample parking space available for cars and two-wheelers at our Kalimata Colony Road location.
                </p>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Find Us on Map
              </h3>
              
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789!2d88.298167!3d22.502578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027ae8c0000001%3A0x7d6b8b1b8b8b8b8b!2sDr.%20Selim%20Sk%20(Veterinary%20Doctor%20%26%20Surgeon)!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing location of Dr. Selim Sk (Veterinary Doctor & Surgeon) in Parnasree"
                ></iframe>
              </div>

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

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Plus Code Location
                </h4>
                <p className="text-sm text-slate-600 mb-2">
                  {locationDetails.plusCode} - Use this code for precise navigation
                </p>
                <h4 className="font-semibold text-slate-900 mb-4">
                  Parking Available
                </h4>
                <p className="text-sm text-slate-600">
                  Ample parking space available for cars and two-wheelers at our Kalimata Colony Road location.
                </p>
              </div>
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

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-4">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-cyan-400 font-semibold">
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
              href="https://www.google.com/search?q=Dr.+Selim+Sk+Veterinary+Doctor+Surgeon+Parnasree+reviews"
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Visit Our Parnasree Veterinary Clinic
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Expert veterinary care with modern facilities including diagnostics, grooming, and boarding. Serving Parnasree, Behala, Thakurpukur, and surrounding areas.
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
              href={`https://wa.me/${locationDetails.phoneNumber.replace('+', '')}?text=Hello%20Dr.%20Selim%20Sk,%20I%20need%20consultation%20at%20Parnasree%20clinic`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-8 text-purple-100">
            <p>
              Located on Kalimata Colony Road • Near Parnasree Club • Plus Code: {locationDetails.plusCode}
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
            "@id": "https://www.drselimsk.com/locations/parnasree",
            "url": "https://www.drselimsk.com/locations/parnasree",
            "telephone": "+916291630297",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "58, Kalimata Colony Rd",
              "addressLocality": "Parnasree Palli, Kolkata",
              "postalCode": "700060",
              "addressRegion": "WB",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "22.502578",
              "longitude": "88.301167"
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
              "Parnasree",
              "Behala", 
              "Thakurpukur",
              "Joka",
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
                "name": "Plus Code",
                "value": "G852+2F"
              }
            ],
            "hasMap": "https://maps.app.goo.gl/RFjVhRT4btQzLtwK7"
          })
        }}
      />
    </main>
  );
};

export default ParnasreePalliPage;