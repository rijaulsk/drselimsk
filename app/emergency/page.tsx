import type { Metadata } from 'next';
import { 
  Phone, 
  Clock, 
  AlertTriangle, 
  Heart, 
  Home, 
  Ambulance,
  Shield,
  Activity,
  CheckCircle,
  XCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Emergency Veterinary Services - Dr. Selim SK | Kolkata Pet Emergency Care',
  description: 'Emergency veterinary care available across Kolkata. Call +91 6291630297 for immediate pet emergency response. Home visits and critical care services.',
  keywords: 'emergency vet Kolkata, urgent pet emergency, emergency veterinary care, pet emergency services, veterinary emergency response',
};

const EmergencyPage = () => {
  const emergencyServices = [
    {
      icon: Home,
      title: "Home Visit Emergency Care",
      description: "Critical care delivered to your doorstep for urgent situations when transportation isn't safe",
      features: ["Immediate response", "Professional mobile equipment", "Stress-free environment"]
    },
    {
      icon: Heart,
      title: "Surgical Emergencies",
      description: "Immediate surgical interventions available for life-threatening conditions",
      features: ["Emergency surgery", "Post-operative monitoring", "Advanced anesthesia"]
    },
    {
      icon: Ambulance,
      title: "Trauma Care",
      description: "Accident and injury management with expert care and rapid stabilization",
      features: ["Wound management", "Fracture stabilization", "Pain management"]
    },
    {
      icon: AlertTriangle,
      title: "Critical Care Management",
      description: "ICU-level monitoring and treatment for severe cases requiring intensive care",
      features: ["Continuous monitoring", "IV therapy", "Oxygen support"]
    }
  ];

  const emergencySymptoms = [
    {
      category: "Immediate Emergency",
      color: "bg-red-100 border-red-500 text-red-900",
      icon: AlertTriangle,
      symptoms: [
        "Difficulty breathing or choking",
        "Unconsciousness or collapse", 
        "Severe bleeding that won't stop",
        "Seizures lasting more than 5 minutes",
        "Ingestion of toxic substances"
      ]
    },
    {
      category: "Urgent Care Needed",
      color: "bg-orange-100 border-orange-500 text-orange-900", 
      icon: Clock,
      symptoms: [
        "Severe injuries or trauma",
        "Extreme difficulty giving birth",
        "Severe abdominal pain or bloating",
        "Unable to urinate or defecate",
        "High fever with lethargy"
      ]
    },
    {
      category: "Monitor Closely",
      color: "bg-yellow-100 border-yellow-500 text-yellow-900",
      icon: Activity,
      symptoms: [
        "Persistent vomiting or diarrhea",
        "Loss of appetite for 24+ hours",
        "Difficulty walking or lameness",
        "Excessive drooling or panting",
        "Changes in behavior or hiding"
      ]
    }
  ];

  const preparationTips = [
    {
      category: "Keep Ready",
      icon: Shield,
      tips: [
        "Dr. Selim's emergency number saved: +91 6291630297",
        "Pet's medical history and current medications",
        "Emergency contact information",
        "Transport carrier or blanket for safe transport",
        "Recent photos of your pet for identification"
      ]
    },
    {
      category: "Before You Call",
      icon: CheckCircle,
      tips: [
        "Stay calm and assess the situation carefully",
        "Move pet to a safe area if possible",
        "Note symptoms, timing, and any potential causes",
        "Be ready to describe the emergency clearly",
        "Have your location ready for home visit"
      ]
    },
    {
      category: "What NOT to Do",
      icon: XCircle,
      tips: [
        "Don't induce vomiting unless instructed",
        "Don't give human medications to pets", 
        "Don't attempt to treat severe wounds yourself",
        "Don't panic - your calm presence helps your pet",
        "Don't delay calling for genuine emergencies"
      ]
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Emergency Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
              <AlertTriangle className="h-10 w-10 text-red-600 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Emergency Care</span> Veterinary Services
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8">
              Pet emergencies don&apos;t wait for business hours. Dr. Selim provides round-the-clock emergency services when you need them most.
            </p>

            {/* Emergency Contact Card */}
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Phone className="h-8 w-8 animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Emergency Contact</h2>
                <a
                  href="tel:+916291630297"
                  className="text-3xl md:text-4xl font-bold text-yellow-300 hover:text-yellow-200 transition-colors duration-200 block mb-4"
                >
                  +91 6291630297
                </a>
                <p className="text-red-100 mb-4">Available for genuine emergencies</p>
                <div className="flex items-center justify-center space-x-2 text-red-100">
                  <Clock className="h-5 w-5" />
                  <span>Available in Need • Immediate Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Emergency Services Available</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call Emergency */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">When to Call Emergency Services</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {emergencySymptoms.map((category, index) => (
              <div key={index} className={`bg-white p-6 rounded-2xl border-l-4 ${category.color} shadow-lg`}>
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="h-6 w-6" />
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.symptoms.map((symptom, symptomIndex) => (
                    <li key={symptomIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-current mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-red-100 border border-red-300 p-6 rounded-2xl inline-block">
              <h3 className="text-lg font-bold text-red-900 mb-2">Remember: When in Doubt, Call!</h3>
              <p className="text-red-800">It&apos;s better to be safe than sorry. Dr. Selim is always available to assess your pet&apos;s condition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Preparation */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Emergency Preparation Guide</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {preparationTips.map((section, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-cyan-600 w-10 h-10 rounded-lg flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400">{section.category}</h3>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Emergency Coverage Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Baranagar",
                address: "J9RF+MQ5, Gopal Lal Tagore Rd",
                responseTime: "15-20 minutes",
                color: "from-indigo-500 via-blue-500 to-cyan-500"
              },
              {
                name: "Maheshtala", 
                address: "MORE, Nangi, Budge Budge",
                responseTime: "15-25 minutes",
                color: "from-emerald-500 via-teal-500 to-green-500"
              },
              {
                name: "Parnasree",
                address: "58, Kalimata Colony Rd",
                responseTime: "10-20 minutes", 
                color: "from-violet-500 via-purple-500 to-fuchsia-500"
              }
            ].map((location, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-r ${location.color} p-6 rounded-2xl text-white mb-4`}>
                  <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{location.address}</p>
                  <div className="bg-white/20 p-3 rounded-lg">
                    <div className="text-sm opacity-90">Response Time</div>
                    <div className="text-lg font-bold">{location.responseTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 mb-4">
              Emergency home visits available across all service areas
            </p>
            <p className="text-slate-500">
              Response times may vary based on traffic conditions and emergency severity
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t Wait in an Emergency</h2>
          <p className="text-xl mb-8 text-red-100">
            Quick action can save your pets life. Dr. Selim is always ready to help when seconds matter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+916291630297"
              className="bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-red-50 transition-all duration-200 transform hover:scale-105 shadow-2xl flex items-center space-x-3"
            >
              <Phone className="h-7 w-7 animate-pulse" />
              <span>Call Emergency: +91 6291630297</span>
            </a>
            
            <a
              href="https://wa.me/916291630297?text=EMERGENCY:%20I%20need%20immediate%20veterinary%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Emergency WhatsApp
            </a>
          </div>

          <div className="mt-8 text-red-100">
            <p className="text-lg">Available in Need • Immediate Response • Home Visits Available</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmergencyPage;