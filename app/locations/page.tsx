import type { Metadata } from 'next';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Car,
  Train,
  Bus,
  Star,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Veterinary Clinics in Kolkata | 4 Locations | Dr. Selim SK',
  description: 'Dr. Selim SK provides expert veterinary care across Kolkata with clinics in Baranagar (North), Parnasree, Maheshtala & New Alipore (South). Open daily. Call for appointments.',
  keywords: 'veterinary clinic locations Kolkata, pet doctor Baranagar, vet clinic Budge Budge, animal hospital Parnasree Palli, veterinary services near me',
};

const LocationsPage = () => {
  const locations = [
    {
      name: "Baranagar Clinic",
      address: "J9RF+MQ5, Gopal Lal Tagore Rd, Neogipara, Joyshree, Ashokgarh, Baranagar, West Bengal 700035",
      shortAddress: "Baranagar, West Bengal 700035",
      time: "Online Consultation Available",
      slug: "baranagar",
      mapUrl: "https://maps.app.goo.gl/73JM5BbWbpVeeVqH9",
      color: "from-indigo-500 via-blue-500 to-cyan-500",
      area: "North Kolkata",
      landmarks: ["Near Barrackpore Trunk Road", "Close to Gopal Lal Tagore Road", "Accessible from Dum Dum"],
      specialties: ["Emergency Care", "Surgical Procedures", "Vaccination Programs"]
    },
    {
      name: "Maheshtala Clinic",
      address: "MORE, Nangi, Budge Budge, Maheshtala, West Bengal 700140",
      shortAddress: "Budge Budge, West Bengal 700140",
      time: "Daily 10:00 AM - 10:00 PM",
      slug: "maheshtala",
      mapUrl: "https://maps.app.goo.gl/Y4G6CeGeBuj2Ff8D9",
      color: "from-emerald-500 via-teal-500 to-green-500",
      area: "South Kolkata",
      landmarks: ["Near Nangi Railway Station", "Close to Budge Budge Trunk Road", "Nangi Market Area"],
      specialties: ["Home Visits", "Large Animal Care", "Community Service"]
    },
    {
      name: "Parnasree Clinic",
      address: "58, Kalimata Colony Rd, Parnasree Palli, Kolkata, West Bengal 700060",
      shortAddress: "Parnasree Palli, Kolkata 700060",
      time: "Daily 10:00 AM - 10:00 PM",
      slug: "parnasree",
      mapUrl: "from-violet-500 via-purple-500 to-fuchsia-500",
      color: "from-violet-500 via-purple-500 to-fuchsia-500",
      area: "South Kolkata",
      landmarks: ["Near Parnasree Club", "Close to Kalimata Colony", "Behala Chowrasta nearby"],
      specialties: ["Diagnostic Services", "Pet Grooming", "Boarding Facilities"]
    },
    {
      name: "New Alipore Clinic",
      address: "Pet's Need, 10/1D, Diamond Harbour Rd, Alipore, Kolkata, West Bengal 700027",
      shortAddress: "New Alipore, Kolkata 700027",
      time: "Daily 10:00 AM - 10:00 PM",
      slug: "new_alipore",
      mapUrl: "https://maps.app.goo.gl/iZGX3h3VJqqn5sgKA",
      color: "from-amber-500 via-orange-500 to-red-500",
      area: "South Kolkata",
      landmarks: ["Near Majherhat Railway Station", "Close to Taratala, D. H. Road", "Alipore Zoo nearby"],
      specialties: ["Home Visits", "Large Animal Care", "Surgical Procedures"]
    }
  ];

  const serviceFeatures = [
    {
      icon: Clock,
      title: "Consistent Hours",
      description: "Daily 10:00 AM - 10:00 PM & online consultations"
    },
    {
      icon: Phone,
      title: "Same Contact",
      description: "+91 6291630297 for all locations"
    },
    {
      icon: CheckCircle,
      title: "Quality Care",
      description: "Same high standards across all clinics"
    },
    {
      icon: Car,
      title: "Easy Access",
      description: "Convenient location and transportation"
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Trusted Local Vet: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Serving North & South Kolkata</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Finding expert and compassionate veterinary care in Kolkata has never been easier. With four strategically located clinics in Baranagar, Maheshtala, Parnasree, and New Alipore, Dr. Selim SK ensures your beloved pet is always close to professional help.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 overflow-hidden">
                {/* Location Header */}
                <div className={`bg-gradient-to-r ${location.color} p-6 text-white`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{location.name}</h3>
                      <p className="text-white/90">{location.area}</p>
                    </div>
                  </div>
                </div>

                {/* Location Content */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
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

                  {/* Landmarks */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Nearby Landmarks</h4>
                    <ul className="space-y-1">
                      {location.landmarks.map((landmark, landmarkIndex) => (
                        <li key={landmarkIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                          <span className="text-slate-600 text-sm">{landmark}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
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
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Coverage Across Kolkata</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our four strategically located clinics ensure that quality veterinary care is always within reach
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Areas We Serve</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-slate-900">North Kolkata</div>
                      <div className="text-sm text-slate-600">Baranagar, Dunlop, Sodepur, Khardaha</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-slate-900">South Kolkata (Maheshtala)</div>
                      <div className="text-sm text-slate-600">Budge Budge, Maheshtala, Pujali, Sankrail</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-slate-900">South Kolkata (Parnasree)</div>
                      <div className="text-sm text-slate-600">Parnasree, Behala, Thakurpukur, Joka</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-slate-900">South Kolkata (New Alipore)</div>
                      <div className="text-sm text-slate-600">New Alipore, Alipore, Taratala, Diamond Harbour Road</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-cyan-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Home Visit Coverage</h4>
                  <p className="text-sm text-slate-600">
                    We provide home visit services across all areas of Kolkata. Contact us to check availability in your specific location.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-100 to-cyan-50 p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">4</div>
                  <div className="text-slate-700 mb-4">Strategic Locations</div>
                  
                  <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                  <div className="text-slate-700 mb-4">Successful Surgeries</div>
                  
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-slate-700">Kolkata Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Services at All Locations</h2>
          <p className="text-xl mb-8 text-cyan-100">
            Dr. Selim is available for emergency care at any of our four locations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916291630297"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Emergency Call: +91 6291630297</span>
            </a>
            <a
              href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20need%20veterinary%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-8 text-cyan-100">
            <p>Available at Baranagar • Maheshtala • Parnasree • New Alipore</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LocationsPage;