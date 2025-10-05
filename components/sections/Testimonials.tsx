"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: "Madhurima Dutta",
      rating: 5,
      text: "Extremely talented and humble vet I have come across! Excellent diagnosis... Very trustworthy and professional person.",
      location: "Kolkata",
    },
    {
      name: "Kaushik Dey",
      rating: 5,
      text: "When we rescued Pushu, she was extremely weak with little chance to survive. Dr. Selim appeared as an Angel at 11:15 PM that night at my home... I will never find such a heart-warming, caring, gentle, knowledgeable and amazing Vet like you anywhere in this world.",
      location: "Kolkata",
    },
    {
      name: "Shabana Daptari",
      rating: 5,
      text: "Very experienced and polite... got my cats operated from him and my cats got better and back to normal activities in no time.",
      location: "Kolkata",
    },
    {
      name: "Sabnam Sultana",
      rating: 5,
      text: "He is one of the best doctors that I ever seen... He is very polite with his patients. He gives proper treatment with less medication. Must recommend.",
      location: "Kolkata",
    },
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Pet Parents Say
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real experiences from families who trust Dr. Selim with their
              beloved pets
            </p>
          </div>

          {/* Main Testimonial Display */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
              <Quote className="h-12 w-12 text-cyan-400 mb-6" />

              <div className="mb-8">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-6">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                    <div className="text-lg font-bold text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <p className="text-slate-400">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation Dots */}
              <div className="flex justify-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentTestimonial
                        ? "bg-cyan-400 scale-125"
                        : "bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-600 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  index === currentTestimonial
                    ? "border-cyan-600 bg-slate-700"
                    : ""
                } ${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  &quot;{testimonial.text.substring(0, 100)}...&quot;
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <p className="text-slate-400 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="bg-slate-800 px-4 sm:px-8 py-6 rounded-2xl mx-4 sm:mx-0">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">4.9</div>
                  <div className="flex justify-center mt-1">
                    {renderStars(5)}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">
                    Average Rating
                  </div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-slate-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">1000+</div>
                  <div className="text-slate-400 text-sm">Happy Clients</div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-slate-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">200+</div>
                  <div className="text-slate-400 text-sm">Successful Surgeries</div>
                </div>
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
