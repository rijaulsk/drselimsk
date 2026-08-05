import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Car,
  Train,
  Bus,
  CheckCircle,
  Home,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dr. Selim SK (VETERINARY DOCTOR & SURGEON) | Vet in Newtown Kolkata",
  description: "Official page for Dr. Selim SK (VETERINARY DOCTOR & SURGEON) in Newtown Action Area III. Offering expert pet care, surgery, and emergency services. Call +91 6291630297.",
  keywords:
    "Dr Selim SK veterinarian Newtown, veterinary doctor Action Area 3 Newtown, pet doctor East Kolkata, animal hospital Newtown 700160",
  openGraph: {
    title: "Dr. Selim SK (VETERINARY DOCTOR & SURGEON) | Vet in Newtown",
    description: "Official page for Dr. Selim SK (VETERINARY DOCTOR & SURGEON) in Newtown. Expert pet care, surgery, and emergency services.",
    url: "https://www.drselimsk.com/locations/newtown",
    type: "website",
    locale: "en_IN",
  },
};

const NewtownPage = () => {
  const locationDetails = {
    businessName: "Dr. Selim SK (VETERINARY DOCTOR & SURGEON) - Newtown Clinic",
    fullAddress: "Action Area III, Newtown, Kolkata, West Bengal 700160",
    streetAddress: "Action Area III",
    addressLocality: "Newtown",
    addressRegion: "West Bengal",
    postalCode: "700160",
    addressCountry: "IN",
    phoneNumber: "+916291630297",
    websiteUrl: "https://www.drselimsk.com/locations/newtown",
    mapUrl: "https://maps.app.goo.gl/3ZCDUmmd3ZBC4Trc9"
  };

  const services = [
    {
      icon: Stethoscope,
      title: "Complete Health Checkups",
      description: "Comprehensive examinations for dogs, cats, and other pets to detect issues early and ensure your companion stays healthy in Newtown & Salt Lake.",
    },
    {
      icon: CheckCircle,
      title: "Vaccination Programs",
      description: "Complete immunization schedules tailored to your pet's age and lifestyle, protecting them from common diseases in the Newtown region.",
    },
    {
      icon: Phone,
      title: "Emergency Care",
      description: "Emergency veterinary services available at our Newtown clinic. Critical care when you need it most in East Kolkata.",
    },
    {
      icon: Home,
      title: "Home Visits",
      description: "Convenient home visit services in Newtown, Rajarhat, Salt Lake, and nearby East Kolkata areas. Expert veterinary care at your doorstep.",
    },
  ];

  const landmarks = [
    "Action Area III, Newtown",
    "Close to Major Arterial Road",
    "Accessible from Rajarhat & Salt Lake",
  ];

  const transportation = [
    {
      icon: Train,
      mode: "Metro/Train",
      details: "Newtown Metro / Salt Lake Sector V Metro",
    },
    {
      icon: Bus,
      mode: "Bus Routes",
      details: "Multiple bus routes connecting Newtown Action Area III",
    },
    {
      icon: Car,
      mode: "By Car",
      details: "Easy access via Major Arterial Road Newtown",
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-teal-100 text-teal-800 font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
              📍 East Kolkata Location
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Newtown Clinic
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Dr. Selim SK (VETERINARY DOCTOR & SURGEON)
            </p>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              Providing compassionate, expert veterinary care, routine checkups, vaccinations, and emergency services in Newtown Action Area III.
            </p>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Clinic Overview</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Address</div>
                      <div className="text-slate-600 text-sm">{locationDetails.fullAddress}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Opening Hours</div>
                      <div className="text-slate-600 text-sm">Daily 10:00 AM - 10:00 PM</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Contact Number</div>
                      <a href={`tel:${locationDetails.phoneNumber}`} className="text-teal-600 hover:underline text-sm font-semibold">
                        +91 6291630297
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap gap-4">
                  <a
                    href={locationDetails.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors inline-flex items-center space-x-2 shadow-md"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions on Google Maps</span>
                  </a>

                  <Link
                    href="/booking"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Book Appointment at Newtown</span>
                  </Link>
                </div>
              </div>

              {/* Key Services */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Services at Newtown Clinic</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((srv, idx) => (
                    <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
                      <div className="p-2 bg-teal-50 w-max rounded-lg text-teal-600">
                        <srv.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-base">{srv.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">{srv.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Transportation & Landmarks */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Nearby Landmarks</h3>
                <ul className="space-y-2">
                  {landmarks.map((lm, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-teal-600 rounded-full" />
                      <span>{lm}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">How to Reach Us</h3>
                <div className="space-y-3">
                  {transportation.map((tr, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="p-2 bg-teal-100 rounded-lg text-teal-700 flex-shrink-0 mt-0.5">
                        <tr.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{tr.mode}</div>
                        <div className="text-slate-600 text-xs">{tr.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Box */}
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-lg space-y-3">
                <h4 className="font-extrabold text-lg">Emergency Service Notice</h4>
                <p className="text-xs sm:text-sm text-white/90">
                  Critical medical emergency in Newtown or East Kolkata? Call our helpline immediately.
                </p>
                <a
                  href="tel:+916291630297"
                  className="inline-flex items-center space-x-2 bg-white text-red-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 6291630297</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewtownPage;
