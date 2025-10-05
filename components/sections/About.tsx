"use client";

import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Heart, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: GraduationCap,
      title: "BVSc & AH Degree",
      description: "Graduate from WBUAFS Kolkata Belgachia",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Award,
      title: "3+ Years Experience",
      description: "Specialized veterinary practice",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Free treatment for street animals",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Users,
      title: "1000+ Happy Clients",
      description: "Trusted by pet families across Kolkata",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const specialties = [
    "Emergency Care Available",
    "Home Visit Services",
    "Affordable Treatment",
    "Multi-species Expertise",
    "Advanced Diagnostic Services",
    "Surgical Excellence"
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Dr. Selim SK</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional Excellence You Can Trust
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="prose prose-lg">
                <p className="text-slate-700 leading-relaxed">
                  Dr. Selim SK is a dedicated veterinary surgeon with 3+ years of specialized experience in animal healthcare. Armed with a BVSc & AH degree from WBUAFS Kolkata Belgachia, he has established himself as one of Kolkata&apos;s most trusted veterinarians, known for his gentle approach and exceptional diagnostic skills.
                </p>
              </div>

              {/* Specialties Grid */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">What Sets Dr. Selim Apart:</h3>
                <div className="grid gap-3">
                  {specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-cyan-50 transition-colors duration-200 ${isVisible ? `animate-fade-in-up` : ''}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-cyan-600 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-800 font-medium">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 ${
                    isVisible ? `animate-fade-in-up` : ''
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center mb-4`}>
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{achievement.title}</h3>
                  <p className="text-slate-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Stats */}
          <div className="mt-16 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-cyan-100">Pets Treated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-cyan-100">Clinic Locations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-cyan-100">Successful Surgeries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;