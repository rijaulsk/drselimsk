import type { Metadata } from 'next';
import { 
  Stethoscope, 
  Scissors, 
  Shield, 
  Clock, 
  Home, 
  Heart,
  Syringe,
  Camera,
  Pill,
  Activity,
  CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Veterinary Services - Dr. Selim SK | Complete Pet Healthcare Kolkata',
  description: 'Comprehensive veterinary services including health checkups, vaccinations, surgery, emergency care, home visits, and diagnostic services. Expert pet care across Kolkata.',
  keywords: 'veterinary services Kolkata, pet health checkup, vaccination programs, veterinary surgery, emergency pet care, home visit vet, diagnostic services',
};

const ServicesPage = () => {
  const mainServices = [
    {
      category: "Medical Services",
      icon: Stethoscope,
      color: "from-blue-500 to-blue-600",
      services: [
        {
          name: "Complete Health Checkups",
          description: "Thorough examinations to ensure your pet's wellbeing with comprehensive assessment of vital signs, body condition, and overall health status."
        },
        {
          name: "Vaccination Programs", 
          description: "Complete immunization schedules for optimal protection following international veterinary guidelines for all age groups."
        },
        {
          name: "Emergency Care",
          description: "Round-the-clock emergency services for critical situations with immediate response and life-saving interventions."
        },
        {
          name: "Diagnostic Services",
          description: "Advanced veterinary pathology, biochemistry, and radiology services for accurate diagnosis and treatment planning."
        }
      ]
    },
    {
      category: "Surgical Excellence",
      icon: Scissors,
      color: "from-red-500 to-red-600",
      services: [
        {
          name: "General Surgery",
          description: "From routine procedures to complex operations performed with precision and care in sterile conditions."
        },
        {
          name: "Specialized Surgeries",
          description: "Including tumor removal, bladder stone surgery, cherry eye operations with advanced surgical techniques."
        },
        {
          name: "Orthopedic Procedures",
          description: "Expert care for bone and joint conditions including fracture repair and mobility restoration."
        },
        {
          name: "Post-Operative Care",
          description: "Comprehensive recovery support and monitoring to ensure optimal healing and comfort."
        }
      ]
    },
    {
      category: "Additional Services",
      icon: Heart,
      color: "from-purple-500 to-purple-600",
      services: [
        {
          name: "Grooming Services",
          description: "Professional pet grooming for health and hygiene including bathing, nail trimming, and coat care."
        },
        {
          name: "Animal Boarding",
          description: "Safe and caring temporary accommodation with supervised care and attention to individual needs."
        },
        {
          name: "Travel Certificates",
          description: "Health certificates for pet travel with proper documentation for domestic and international requirements."
        },
        {
          name: "Deworming Programs",
          description: "Systematic parasite prevention plans tailored to your pet's age, lifestyle, and risk factors."
        }
      ]
    }
  ];

  const vaccinationSchedule = {
    puppyKitten: [
      { age: "6 weeks onwards", vaccine: "First Vaccine", description: "Primary immunization series begins" },
      { age: "9 weeks", vaccine: "Booster", description: "21 days after first vaccine" },
      { age: "12 weeks", vaccine: "Anti-Rabies", description: "Second vaccine with annual boosters" },
      { age: "16 weeks", vaccine: "Megavac CC", description: "Third vaccine with annual maintenance" }
    ],
    deworming: [
      { age: "21 days to 3 months", frequency: "Every 15 days", description: "Critical early protection period" },
      { age: "3 to 6 months", frequency: "Monthly intervals", description: "Growing pet protection phase" },
      { age: "6 months onwards", frequency: "Every 3 months", description: "Lifelong maintenance schedule" }
    ]
  };

  const complexCases = [
    {
      title: "Bladder Stone Removal in Cats",
      description: "Minimally invasive surgical techniques for urological conditions",
      icon: Scissors
    },
    {
      title: "Tumor Operations in Senior Animals",
      description: "Specialized care for aged pets with oncological conditions",
      icon: Heart
    },
    {
      title: "Cherry Eye Corrections",
      description: "Precise surgical interventions for ophthalmic conditions",
      icon: Activity
    },
    {
      title: "Amputation Surgeries",
      description: "When necessary for pet's quality of life and pain management",
      icon: Pill
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Veterinary Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete healthcare solutions for your beloved pets with expert care, modern facilities, and compassionate treatment across Kolkata
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Emergency Care", subtitle: "Available in Need" },
              { icon: Home, title: "Home Visits", subtitle: "Convenient Care" },
              { icon: Shield, title: "Expert Care", subtitle: "3+ Years Experience" },
              { icon: CheckCircle, title: "Affordable", subtitle: "Value for Money" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Our Core Services</h2>
          
          <div className="space-y-16">
            {mainServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-200">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">{service.name}</h4>
                      <p className="text-slate-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccination & Prevention */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Vaccination & Prevention Programs</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive immunization schedules to keep your pets protected throughout their lives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vaccination Schedule */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Syringe className="h-6 w-6 text-green-600 mr-3" />
                Puppy/Kitten Vaccination Timeline
              </h3>
              
              <div className="space-y-4">
                {vaccinationSchedule.puppyKitten.map((vaccine, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <Shield className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{vaccine.vaccine}</div>
                      <div className="text-sm text-green-600 font-medium">{vaccine.age}</div>
                      <div className="text-sm text-slate-600">{vaccine.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deworming Schedule */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Pill className="h-6 w-6 text-blue-600 mr-3" />
                Deworming Protocol
              </h3>
              
              <div className="space-y-4">
                {vaccinationSchedule.deworming.map((schedule, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <Pill className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{schedule.frequency}</div>
                      <div className="text-sm text-blue-600 font-medium">{schedule.age}</div>
                      <div className="text-sm text-slate-600">{schedule.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complex Cases */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Specialized Surgical Expertise</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Dr. Selim has successfully handled challenging cases requiring advanced surgical techniques and specialized care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complexCases.map((case_, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <case_.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{case_.title}</h3>
                <p className="text-slate-300 text-sm">{case_.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-slate-800 p-6 rounded-xl inline-block">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Multi-Animal Expertise</h3>
              <p className="text-slate-300 mb-4">Specialized care for dogs, cats, birds, small animals, and large animals</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Dogs & Cats", "Small Animals", "Birds", "Large Animals"].map((animal, index) => (
                  <span key={index} className="bg-slate-700 px-3 py-1 rounded-full text-sm">{animal}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Veterinary Care?</h2>
          <p className="text-xl mb-8 text-cyan-100">
            Contact Dr. Selim for expert consultation and treatment. Whether it&apos;s a routine checkup or an emergency, we&apos;re here to help your pets live healthy and happy lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916291630297"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Clock className="h-5 w-5" />
              <span>Emergency Call: +91 6291630297</span>
            </a>
            <a
              href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20need%20veterinary%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>

          <div className="mt-8 text-cyan-100">
            <p>Available for home visits across Baranagar, Budge Budge, and Parnasree Palli</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;