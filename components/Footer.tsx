import Link from 'next/link';
import { Heart, Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-cyan-600 to-teal-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Dr. Selim SK</div>
                <div className="text-sm text-slate-400">Veterinary Doctor & Surgeon</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              Providing compassionate veterinary care across Kolkata with emergency services and expert treatment.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Emergency services available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors duration-200">
                  About Dr. Selim
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-400">Health Checkups</li>
              <li className="text-slate-400">Vaccinations</li>
              <li className="text-slate-400">Surgery</li>
              <li className="text-slate-400">Emergency Care</li>
              <li className="text-slate-400">Home Visits</li>
              <li className="text-slate-400">Diagnostic Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-cyan-400 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Emergency & Appointments</div>
                  <a 
                    href="tel:+916291630297" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    +91 6291630297
                  </a>
                  <div className="text-sm text-slate-400">Available in Need</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <a 
                    href="mailto:contact@drselimsk.com" 
                    className="text-green-400 hover:text-green-300 transition-colors duration-200 break-all"
                  >
                    contact@drselimsk.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Locations</div>
                  <div className="text-slate-400 text-sm">
                    <div>Baranagar</div>
                    <div>Budge Budge</div>
                    <div>Parnasree Palli</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm">
              Copyright © {currentYear} Dr. Selim SK | Powered by{' '}
                <a
                  href="https://debugswift.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 font-medium transition-colors inline-flex items-center gap-1"
                >
                  Debugswift
                  <ExternalLink className="h-3 w-3" />
                </a>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="tel:+916291630297"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Emergency Call</span>
              </a>
              <a
                href="https://wa.me/916291630297"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;