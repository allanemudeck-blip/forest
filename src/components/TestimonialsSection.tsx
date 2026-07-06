/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { MessageSquare, Quote, Star, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Extend reviews with a premium placeholder
  const testimonials = [
    ...TESTIMONIALS_DATA,
    {
      id: 't-placeholder',
      name: 'Verified Forest Cottages Guest',
      country: 'International Traveler',
      rating: 5,
      text: 'Verified Guest Review Coming Soon',
      date: 'Future Stay',
      isPlaceholder: true,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12 select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Intended branding */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-1.5 text-secondary-text">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs tracking-widest uppercase font-bold">Guest Voices</span>
          </div>
          
          <h2
            id="testimonials-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text leading-tight"
          >
            Loved by Travellers <span className="italic underline decoration-accent decoration-4 underline-offset-8">Worldwide</span>
          </h2>
          
          <div className="w-20 h-[2px] bg-accent" />
          
          <p className="font-sans text-sm sm:text-base text-secondary-text leading-relaxed">
            From peaceful weekend getaways to international summits and forest weddings, hear directly from the people who call our eco-resort their home away from home.
          </p>

          {/* Quick Stats Block */}
          <div className="border border-[#6B4A32]/15 rounded-sm p-5 bg-white/40 flex items-center gap-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-accent text-primary-text font-serif font-black text-[10px] flex items-center justify-center border border-white">FC</div>
              <div className="w-8 h-8 rounded-full bg-dark-section text-primary-bg font-serif font-black text-[10px] flex items-center justify-center border border-white">FC</div>
              <div className="w-8 h-8 rounded-full bg-[#6E8266] text-primary-bg font-serif font-black text-[10px] flex items-center justify-center border border-white">FC</div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-mono text-base font-black text-accent">4.8/5</span>
                <div className="flex text-accent">
                  <Star className="w-3.5 h-3.5 fill-accent" />
                  <Star className="w-3.5 h-3.5 fill-accent" />
                  <Star className="w-3.5 h-3.5 fill-accent" />
                  <Star className="w-3.5 h-3.5 fill-accent" />
                  <Star className="w-3.5 h-3.5 fill-accent" opacity={0.8} />
                </div>
              </div>
              <p className="font-sans text-[11px] text-secondary-text tracking-wide uppercase font-semibold mt-0.5">
                Aggregate Rating across TripAdvisor & Google Maps
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Rotating Card */}
        <div className="lg:col-span-7 relative">
          
          {/* Main Card */}
          <div
            id="testimonial-rotator-card"
            className="bg-white border border-[#6B4A32]/20 border-t-4 border-t-accent rounded-sm p-8 sm:p-12 shadow-xl relative min-h-[350px] flex flex-col justify-between overflow-hidden"
          >
            {/* Massive Quote Icon Decorative Accent */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-accent/5 pointer-events-none" />

            {/* Testimonial Header / Rating */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex text-accent">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-[#6E8266] font-mono text-[10px] tracking-widest uppercase font-bold">
                <UserCheck className="w-4 h-4 text-accent" />
                Verified Guest
              </div>
            </div>

            {/* Testimonial body */}
            <div className="flex-grow flex items-center py-4">
              <p
                id={`testimonial-text-${testimonials[activeIndex].id}`}
                className={`font-serif text-lg sm:text-xl text-primary-text leading-relaxed tracking-wide ${
                  testimonials[activeIndex].isPlaceholder
                    ? 'italic text-secondary-text/80 font-semibold'
                    : 'font-medium'
                }`}
              >
                "{testimonials[activeIndex].text}"
              </p>
            </div>

            {/* Testimonial Footer / Details */}
            <div className="border-t border-[#6B4A32]/10 pt-6 mt-6 flex justify-between items-center flex-wrap gap-4">
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-primary-text leading-tight">
                  {testimonials[activeIndex].name}
                </span>
                <span className="font-sans text-xs text-[#6E8266] mt-0.5 font-medium">
                  {testimonials[activeIndex].country}
                </span>
              </div>

              {/* Navigation Indicators */}
              <div className="flex items-center gap-3">
                <button
                  id="testimonial-prev-btn"
                  onClick={handlePrev}
                  className="p-2.5 border border-[#6B4A32]/35 hover:border-accent text-primary-text hover:text-accent rounded-full transition-all cursor-pointer"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex gap-1.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      id={`testimonial-dot-${idx}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-5 bg-accent' : 'w-1.5 bg-[#6B4A32]/30'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  id="testimonial-next-btn"
                  onClick={handleNext}
                  className="p-2.5 border border-[#6B4A32]/35 hover:border-accent text-primary-text hover:text-accent rounded-full transition-all cursor-pointer"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
