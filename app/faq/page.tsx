"use client";

import { useState } from "react";
import type { Metadata } from "next";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageCircle,
  Clock,
  DollarSign,
  MapPin,
  Heart,
} from "lucide-react";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const categories = [
    { id: "all", name: "All Questions", icon: Heart },
    { id: "services", name: "Services", icon: Clock },
    { id: "pricing", name: "Pricing", icon: DollarSign },
    { id: "emergency", name: "Emergency", icon: Phone },
    { id: "appointments", name: "Appointments", icon: MapPin },
  ];

  const faqs = [
    {
      category: "services",
      question: "Do you provide home visit services?",
      answer:
        "Yes, we offer home visit services for examinations, treatments, and emergency care across Kolkata. This service is particularly beneficial for pets who get stressed during travel or for emergency situations where transportation might be difficult.",
    },
    {
      category: "services",
      question: "What vaccinations does my puppy need?",
      answer:
        "We follow a comprehensive vaccination schedule starting at 6 weeks: First vaccine at 6 weeks, booster at 9 weeks (21 days after first), anti-rabies at 12 weeks (second vaccine), and Megavac CC at 16 weeks (third vaccine). Annual boosters are required to maintain immunity.",
    },
    {
      category: "services",
      question: "Do you treat street animals?",
      answer:
        "Absolutely. Dr. Selim provides free treatment for street dogs and cats as part of our community service commitment. We believe in compassionate care that extends beyond pet owners to help all animals in need.",
    },
    {
      category: "emergency",
      question: "What should I do in a pet emergency?",
      answer:
        "Call our emergency number +91 6291630297 immediately. Dr. Selim is available for genuine emergencies. Stay calm, move your pet to a safe area if possible, and be ready to describe the symptoms. We provide emergency home visits when transportation isn't safe.",
    },
    {
      category: "services",
      question: "What animals do you treat?",
      answer:
        "We provide comprehensive care for dogs, cats, small animals (rabbits, guinea pigs), birds, and large animals. Dr. Selim has multi-species expertise and can handle various animal healthcare needs across different species.",
    },
    {
      category: "pricing",
      question: "What factors determine the cost of veterinary treatment?",
      answer:
        "Treatment costs vary based on several factors: the complexity of the condition, diagnostic tests required, medications prescribed, duration of treatment, and whether emergency or after-hours care is needed. We always provide a treatment estimate upfront and discuss all options before proceeding.",
    },
    {
      category: "appointments",
      question: "What are your clinic hours?",
      answer:
        "Regular consultations are available daily from 10:00 AM to 10:00 PM at all our clinic locations. Emergency services are available. Home visits are scheduled by appointment and can be arranged during extended hours.",
    },
    {
      category: "services",
      question: "Do you perform surgeries?",
      answer:
        "Yes, Dr. Selim performs both general and specialized surgeries including tumor removal, bladder stone surgery, cherry eye operations, and orthopedic procedures. All surgeries are performed with proper anesthesia and post-operative care is provided.",
    },
    {
      category: "appointments",
      question: "How do I book an appointment?",
      answer:
        "You can book appointments by calling +91 6291630297 or sending a WhatsApp message. We also accept walk-ins during clinic hours, though appointments are preferred to reduce waiting time.",
    },
    {
      category: "services",
      question: "What should I expect during my pet's first visit?",
      answer:
        "During the first visit, Dr. Selim will conduct a comprehensive health examination, review your pet's medical history, discuss vaccination schedules, and create a personalized healthcare plan. Bring any previous medical records and a list of current medications.",
    },
    {
      category: "emergency",
      question: "When is it considered a veterinary emergency?",
      answer:
        "Emergency situations include difficulty breathing, unconsciousness, severe bleeding, seizures lasting more than 5 minutes, ingestion of toxic substances, severe trauma, inability to urinate or defecate, and extreme difficulty giving birth.",
    },
    {
      category: "pricing",
      question: "Do you offer payment plans or accept insurance?",
      answer:
        "We accept cash and UPI payments. While we don't currently offer formal payment plans, we understand financial constraints and may work with pet parents on payment arrangements for expensive treatments.",
    },
    {
      category: "services",
      question: "How often should my pet visit the vet?",
      answer:
        "Healthy adult pets should have annual checkups. Puppies and kittens need more frequent visits (every 3-4 weeks until 16 weeks old). Senior pets (7+ years) benefit from bi-annual checkups. Pets with chronic conditions may need more frequent monitoring.",
    },
    {
      category: "appointments",
      question: "Which locations do you serve?",
      answer:
        "We have three clinic locations: Baranagar (J9RF+MQ5, Gopal Lal Tagore Rd), Maheshtala (MORE, Nangi), and Parnasree (58, Kalimata Colony Rd). Home visits are available across all areas of Kolkata.",
    },
    {
      category: "services",
      question: "What should I do to prepare my pet for surgery?",
      answer:
        "Pre-surgical instructions include fasting for 8-12 hours (no food, small amounts of water until 2 hours before), ensuring your pet is comfortable, and bringing any recent medical records. We'll provide specific instructions based on the type of surgery.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const popularQuestions = [
    "What are your consultation fees?",
    "Do you provide home visit services?",
    "What should I do in a pet emergency?",
    "What vaccinations does my puppy need?",
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
              Questions
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Find answers to common questions about veterinary care, services,
            and appointments
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      {!searchTerm && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Popular Questions
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {popularQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(question)}
                  className="bg-slate-100 hover:bg-cyan-50 text-slate-700 hover:text-cyan-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories and FAQ Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-4 rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                      activeCategory === category.id
                        ? "bg-cyan-600 text-white"
                        : "bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <category.icon className="h-5 w-5" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-slate-400 text-lg">
                      No questions found matching your search.
                    </div>
                    <button
                      onClick={() => setSearchTerm("")}
                      className="text-cyan-600 hover:text-cyan-700 mt-2"
                    >
                      Clear search
                    </button>
                  </div>
                ) : (
                  filteredFAQs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm border border-slate-200"
                    >
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-slate-900 pr-8">
                            {faq.question}
                          </h3>
                          {openQuestions.includes(index) ? (
                            <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>

                      {openQuestions.includes(index) && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-slate-100 pt-4">
                            <p className="text-slate-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Quick Stats */}
              {!searchTerm && (
                <div className="mt-12 grid sm:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-2xl font-bold text-cyan-600 mb-2">
                      1000+
                    </div>
                    <div className="text-slate-600">Happy Pets Treated</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      200+
                    </div>
                    <div className="text-slate-600">Successful Surgeries</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-2">
                      3
                    </div>
                    <div className="text-slate-600">Clinic Locations</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-cyan-100">
            Can&apos;t find what you&apos;re looking for? Get in touch with Dr.
            Selim directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916291630297"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: +91 6291630297</span>
            </a>
            <a
              href="https://wa.me/916291630297?text=Hello%20Dr.%20Selim,%20I%20have%20a%20question%20about%20veterinary%20care"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Question</span>
            </a>
          </div>

          <div className="mt-8 text-cyan-100">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="h-4 w-4" />
              <span>Available for consultations daily 10:00 AM - 10:00 PM</span>
            </div>
            <p>Emergency services available</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
