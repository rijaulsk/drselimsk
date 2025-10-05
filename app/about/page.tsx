import type { Metadata } from "next";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  Heart,
  Users,
  Clock,
  MapPin,
  Stethoscope,
  Home,
  Shield,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "About Dr. Selim SK - Veterinary Doctor & Surgeon | Kolkata Pet Care Expert",
  description:
    "Meet Dr. Selim SK, experienced veterinary surgeon with BVSc & AH degree from WBUAFS Kolkata. 3+ years of dedicated animal healthcare with emergency services.",
  keywords:
    "Dr Selim SK veterinarian, BVSc veterinary doctor Kolkata, experienced pet doctor, animal surgeon Kolkata, veterinary qualifications",
};

const AboutPage = () => {
  const qualifications = [
    {
      degree: "BVSc & AH",
      institution: "West Bengal University of Animal & Fishery Sciences",
      location: "Kolkata Belgachia",
      year: "Graduate",
      description: "Bachelor of Veterinary Science and Animal Husbandry",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "3+ Years Experience",
      description:
        "Specialized veterinary practice with hundreds of successful treatments",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "1000+ Happy Clients",
      description:
        "Trusted by pet families across Kolkata for exceptional care",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Heart,
      title: "Community Service",
      description:
        "Free treatment for street animals showing compassion beyond boundaries",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Clock,
      title: "Emergency Care",
      description:
        "Available for critical situations and urgent medical needs",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const specialties = [
    {
      icon: Stethoscope,
      title: "Medical Excellence",
      points: [
        "Advanced diagnostic skills with comprehensive health assessments",
        "Expert vaccination programs following international protocols",
        "Preventive healthcare planning for optimal pet wellness",
        "Treatment of complex medical conditions across all pet species",
      ],
    },
    {
      icon: Home,
      title: "Convenient Care",
      points: [
        "Professional home visit services across Kolkata",
        "Stress-free examinations in familiar environment",
        "Emergency response at your doorstep",
        "Personalized care plans tailored to your pet's needs",
      ],
    },
    {
      icon: Shield,
      title: "Surgical Expertise",
      points: [
        "General and specialized surgical procedures",
        "Minimally invasive surgical techniques",
        "Advanced post-operative care and monitoring",
        "Complex case management including tumor removal",
      ],
    },
  ];

  const testimonialHighlights = [
    {
      quote:
        "Extremely talented and humble vet I have come across! Very trustworthy and professional person.",
      author: "Madhurima Dutta",
      rating: 5,
    },
    {
      quote:
        "Dr. Selim appeared as an Angel at 11:15 PM that night... I will never find such a caring, knowledgeable vet anywhere.",
      author: "Kaushik Dey",
      rating: 5,
    },
    {
      quote:
        "Very experienced and polite... my cats got better and back to normal activities in no time.",
      author: "Shabana Daptari",
      rating: 5,
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Meet{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                  Dr. Selim SK
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Your Trusted Veterinary Professional with a passion for animal
                healthcare and a commitment to compassionate care
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-cyan-600">3+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-slate-600">Pets Treated</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">200+</div>
                  <div className="text-sm text-slate-600">Successful Surgeries</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">3</div>
                  <div className="text-sm text-slate-600">Clinic Locations</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916291630297"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 text-center"
                >
                  Call: +91 6291630297
                </a>
                <a
                  href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20need%20veterinary%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 text-center"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <Image
                  src="/images/dr-selim-profile.webp"
                  alt="Dr. Selim SK - Professional Veterinary Doctor"
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover rounded-lg mb-4"
                  priority
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900">
                    Dr. Selim SK
                  </h3>
                  <p className="text-slate-600">
                    BVSc & AH, Veterinary Surgeon
                  </p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Professional Excellence You Can Trust
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dr. Selim SK is a dedicated veterinary surgeon with specialized
              experience in animal healthcare, known for his gentle approach and
              exceptional diagnostic skills.
            </p>
          </div>

          {/* Qualifications */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Educational Background
            </h3>
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyan-600 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cyan-400">
                      {qual.degree}
                    </h4>
                    <p className="text-slate-300">{qual.description}</p>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-slate-400">{qual.institution}</p>
                  <p className="text-slate-500 text-sm">{qual.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100"
              >
                <div
                  className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <achievement.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
            Areas of Expertise
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <specialty.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {specialty.title}
                </h3>
                <ul className="space-y-3">
                  {specialty.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Dr. Selim Apart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
            What Sets Dr. Selim Apart
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Care Available",
                description:
                  "Always ready to help your pets in critical situations, day or night",
                icon: Clock,
              },
              {
                title: "Home Visit Services",
                description:
                  "Bringing professional veterinary care to your doorstep for convenience",
                icon: Home,
              },
              {
                title: "Affordable Treatment",
                description:
                  "Quality care without breaking the bank, ensuring every pet gets the help they need",
                icon: Heart,
              },
              {
                title: "Community Service",
                description:
                  "Free treatment for street animals, showing compassion beyond boundaries",
                icon: Users,
              },
              {
                title: "Multi-species Expertise",
                description:
                  "From small animals to birds and large animals - comprehensive care",
                icon: Shield,
              },
              {
                title: "Gentle Approach",
                description:
                  "Known for compassionate handling that pets and parents love",
                icon: Heart,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-lg hover:bg-cyan-50 transition-colors duration-200"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Pet Parents Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-4">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <cite className="text-cyan-400 font-semibold">
                  - {testimonial.author}
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience Professional Veterinary Care
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Trust Dr. Selim SK with your beloved pet&apos;s health and wellness
            needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916291630297"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Call Now: +91 6291630297
            </a>
            <a
              href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20need%20veterinary%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-8 text-cyan-100">
            <p>
              Serving Baranagar, Budge Budge, and Parnasree Palli with home
              visits available
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
