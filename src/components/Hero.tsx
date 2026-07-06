/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CalendarRange, MessageSquare, ArrowDown, MapPin, ChevronRight, Award } from 'lucide-react';

interface HeroProps {
  onCheckAvailabilityClick?: () => void;
}

export default function Hero({ onCheckAvailabilityClick }: HeroProps) {
  
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
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
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-primary-bg text-primary-text select-none py-12 lg:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Editorial Decorative Outlines (Corner Stamps) */}
      <div className="absolute top-24 left-6 right-6 bottom-12 border border-divider/20 pointer-events-none hidden md:block z-20">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40" />
      </div>

      {/* Main Composite Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10 pt-16 lg:pt-20">
        
        {/* Left/Middle Column: Cinematic Banner & Overlaid Content (8 of 12 cols) */}
        <div className="lg:col-span-8 flex flex-col relative rounded-sm overflow-hidden bg-dark-section min-h-[480px] md:min-h-[580px] lg:min-h-[620px] shadow-2xl group border border-divider/20">
          
          {/* Background image & Slow Zoom Animation */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#16241C]/65 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-section via-transparent to-transparent opacity-90 z-10" />
            
            <img
              src="https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1200&auto=format&fit=crop"
              alt="Forest Cottages Canopy Retreat"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-105 animate-zoom-slow origin-center"
            />
          </div>

          {/* Core Content Layer */}
          <div className="relative z-10 flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-12">
            
            {/* Header Mini Label */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-[1px] bg-accent" />
              <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase font-bold">
                KAMPALA'S TRUE SANCTUARY
              </span>
            </div>

            {/* Main Editorial Hero Headline */}
            <div className="max-w-2xl my-auto py-8">
              <h1
                id="hero-headline"
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              >
                A forest hides in the middle of <span className="italic underline decoration-accent decoration-4 underline-offset-8">the city.</span>
              </h1>
              
              <p
                id="hero-subheadline"
                className="font-sans text-xs sm:text-sm md:text-base text-primary-bg/90 leading-relaxed max-w-lg tracking-wide"
              >
                27 Cottages and safari-style rooms situated on Naguru Hill, Bukoto. A 30-minute scenic drive from Kampala's busy CBD, but an absolute world away.
              </p>

              {/* Booking CTA Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=13398"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-6 py-3.5 bg-accent hover:bg-accent/90 text-[#16241C] font-sans text-xs tracking-widest uppercase font-black rounded-sm shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] btn-glow text-center"
                >
                  Check Availability
                </a>
                <a
                  href="https://wa.me/256752711746"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-6 py-3.5 border-2 border-white/80 hover:border-accent hover:text-accent text-white font-sans text-xs tracking-widest uppercase font-bold rounded-sm transition-all duration-300 transform hover:translate-y-[-2px] text-center"
                >
                  WhatsApp +256 752 711746
                </a>
              </div>
            </div>

            {/* Bottom Coordinates stamp */}
            <div className="flex items-center gap-2.5 text-white/55 font-mono text-[9px] tracking-widest uppercase">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>NAGURU HILL, BUKOTO, KAMPALA, UGANDA</span>
            </div>
          </div>

          {/* EDITORIAL FLOATING ROOM CARD (Shown on medium and larger screens) */}
          <div className="absolute top-8 right-8 w-72 bg-primary-bg p-5 shadow-2xl border-t-4 border-accent z-20 hidden md:block border border-divider/10 rounded-sm">
            <span className="font-mono text-[9px] text-accent uppercase tracking-widest font-bold block mb-1">
              Spotlight Experience
            </span>
            <h3 className="font-serif text-xl font-bold text-primary-text mb-1.5">
              Standard Double
            </h3>
            <p className="font-sans text-[11px] text-secondary-text leading-relaxed mb-4">
              A serene tropical space overlooking mature tree canopies. Ideal for travelers desiring natural quiet.
            </p>
            <div className="flex items-center justify-between border-t border-divider/20 pt-3">
              <div>
                <span className="font-serif text-base font-black text-primary-text">
                  USD 75
                </span>
                <span className="text-[9px] text-secondary-text font-mono block uppercase leading-none mt-0.5">
                  Per Night
                </span>
              </div>
              <button
                onClick={() => scrollToSection('stay')}
                className="w-8 h-8 bg-primary-text hover:bg-accent text-primary-bg hover:text-primary-text rounded-full flex items-center justify-center transition-all cursor-pointer"
                aria-label="View room details"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Details Panel (4 of 12 cols, grid structured) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-8 border-l border-divider/20 lg:pl-8">
          
          {/* Section 1: Wild Heritage bullet journal */}
          <div>
            <h4 className="font-serif text-lg font-bold italic mb-5 border-b border-divider/20 pb-2 flex items-center gap-2 text-primary-text">
              <Award className="w-4 h-4 text-accent" />
              Wild Heritage
            </h4>
            <ul className="space-y-6">
              <li className="group">
                <span className="block font-mono text-[10px] uppercase tracking-widest font-extrabold text-accent mb-1 transition-all group-hover:translate-x-1 inline-block">
                  01. Birding Oasis
                </span>
                <p className="font-sans text-xs leading-relaxed text-secondary-text">
                  Witness over 20 species of native tropical birds and vibrant butterlies without leaving our quiet garden terraces.
                </p>
              </li>
              <li className="group">
                <span className="block font-mono text-[10px] uppercase tracking-widest font-extrabold text-accent mb-1 transition-all group-hover:translate-x-1 inline-block">
                  02. Sauna & Solitude
                </span>
                <p className="font-sans text-xs leading-relaxed text-secondary-text">
                  Rebalance your senses with our cozy wood-fired forest sauna, completely enclosed by tropical flora.
                </p>
              </li>
              <li className="group">
                <span className="block font-mono text-[10px] uppercase tracking-widest font-extrabold text-accent mb-1 transition-all group-hover:translate-x-1 inline-block">
                  03. Garden Dining
                </span>
                <p className="font-sans text-xs leading-relaxed text-secondary-text">
                  Dine under avocado branches at our iconic restaurant, serving delicious local Ugandan stews & global classics.
                </p>
              </li>
            </ul>
          </div>

          {/* Section 2: Special Weddings card */}
          <div className="bg-dark-section p-6 rounded-sm text-primary-bg border border-divider/20 shadow-md">
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent font-bold block mb-1">
              Events
            </span>
            <span className="font-serif text-lg italic font-bold block mb-2 text-white">
              Forest Weddings
            </span>
            <p className="font-sans text-[11px] leading-relaxed text-primary-bg/80 mb-4">
              Host your intimate ceremony surrounded by mature trees, pathways, and beautiful natural backdrops.
            </p>
            <button
              onClick={() => scrollToSection('weddings')}
              className="text-[10px] uppercase font-bold tracking-widest border-b-2 border-accent pb-1 text-accent hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Bounce scroll down helper */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => scrollToSection('stay')}
          className="flex flex-col items-center gap-1.5 text-secondary-text hover:text-accent transition-colors duration-300 animate-bounce cursor-pointer group"
        >
          <span className="font-mono text-[9px] tracking-widest uppercase">Explore Oasis</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1.02); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1.02); }
        }
        .animate-zoom-slow {
          animation: zoomSlow 24s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
