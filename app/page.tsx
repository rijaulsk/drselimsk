"use client";

import { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Locations from '@/components/sections/Locations';
import Emergency from '@/components/sections/Emergency';
import FloatingContacts from '@/components/FloatingContacts';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Locations />
      <Emergency />
      <FloatingContacts />
    </main>
  );
}