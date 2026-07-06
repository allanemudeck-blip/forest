/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FactStrip from './components/FactStrip';
import StaySection from './components/StaySection';
import WildSection from './components/WildSection';
import DineSection from './components/DineSection';
import MeetSection from './components/MeetSection';
import WeddingsSection from './components/WeddingsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [preselectedEventType, setPreselectedEventType] = useState<'business' | 'conference' | 'wedding' | 'other'>('business');

  // Automatic scroll-spy intersection observer to highlight current section
  useEffect(() => {
    const sections = ['hero', 'stay', 'dine', 'meet', 'wild', 'weddings', 'gallery', 'testimonials', 'location', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // For weddings & contact section, highlight correctly
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -40% 0px' } // triggers when section is active in the viewport middle
      );
      observer.observe(el);
      return { observer, el, id };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleWeddingClick = () => {
    setPreselectedEventType('wedding');
    const el = document.getElementById('meet');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection('meet');
    }
  };

  return (
    <div id="hotel-app-root" className="min-h-screen flex flex-col selection:bg-accent selection:text-primary-text bg-primary-bg text-primary-text scroll-smooth">
      {/* 1. Global navigation engine (Header and Field Guide Tabs) */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onWeddingClick={handleWeddingClick}
      />

      {/* 2. Main content pipeline */}
      <main className="flex-grow lg:pl-[56px]"> {/* Left padding matches vertical navigation bar width */}
        <Hero />
        <FactStrip />
        <StaySection />
        <WildSection />
        <DineSection />
        <MeetSection
          preselectedEventType={preselectedEventType}
          setPreselectedEventType={setPreselectedEventType}
        />
        <WeddingsSection onEnquireClick={handleWeddingClick} />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
      </main>

      {/* 3. Footer containing Contacts & Signups */}
      <div className="lg:pl-[56px]">
        <Footer
          setActiveSection={setActiveSection}
          onWeddingClick={handleWeddingClick}
        />
      </div>
    </div>
  );
}
