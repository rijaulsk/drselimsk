"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Emergency', href: '/emergency' },
    { name: 'Locations', href: '/locations' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-cyan-600 to-teal-600 p-2 rounded-lg group-hover:scale-105 transition-transform duration-200">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">Dr. Selim SK</div>
              <div className="text-sm text-slate-600">Veterinary Care</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-600 relative ${
                  pathname === item.href ? 'text-cyan-600' : 'text-slate-700'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Emergency Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+916291630297"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span>Emergency Call</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-slate-700 hover:text-cyan-600 transition-colors duration-200 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                  pathname === item.href
                    ? 'text-cyan-600 bg-cyan-50'
                    : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+916291630297"
              className="block w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-4 w-4 inline mr-2" />
              Emergency Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;