/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ROOMS_DATA } from '../data';
import PlaceholderImage from './PlaceholderImage';
import { Bed, CalendarDays, CheckCircle2 } from 'lucide-react';

export default function StaySection() {
  return (
    <section
      id="stay"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12 select-none"
    >
      {/* Title block with generous negative space */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <div className="flex justify-center items-center gap-1.5 mb-3 text-secondary-text">
          <Bed className="w-4 h-4 text-accent" />
          <span className="font-mono text-xs tracking-widest uppercase font-bold">Accommodation</span>
        </div>
        <h2
          id="stay-title"
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text mb-4"
        >
          Stay Among the <span className="italic underline decoration-accent decoration-4 underline-offset-8">Trees</span>
        </h2>
        <div className="w-20 h-[2px] bg-accent mx-auto mb-6" />
        <p
          id="stay-subtitle"
          className="font-sans text-sm sm:text-base text-secondary-text leading-relaxed font-medium"
        >
          All rooms and cottages are designed with a safari-style feel—relaxing, peaceful, and fully equipped for business and leisure travellers.
        </p>
      </div>

      {/* Grid of premium room cards */}
      <div
        id="rooms-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {ROOMS_DATA.map((room) => (
          <div
            key={room.id}
            id={`room-card-${room.id}`}
            className="flex flex-col bg-white border border-[#6B4A32]/20 border-t-2 border-t-transparent hover:border-t-accent rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
          >
            {/* Room Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-dark-section">
              {room.image ? (
                <img
                  src={room.image}
                  alt={room.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <PlaceholderImage
                  title={room.title}
                  category="Accommodations"
                  className="h-full absolute inset-0"
                />
              )}
            </div>

            {/* Room Info */}
            <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-primary-text leading-tight group-hover:text-accent transition-colors duration-300">
                  {room.title}
                </h3>
              </div>

              <p className="font-sans text-xs md:text-sm text-secondary-text leading-relaxed mb-6 flex-grow">
                {room.description}
              </p>

              {/* Room Feature Bullets */}
              <div className="mb-6">
                <ul className="grid grid-cols-2 gap-y-2 gap-x-2">
                  {room.features.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-primary-text/80 text-[11px] font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider line in safari style */}
              <div className="w-full h-[1px] bg-[#6B4A32]/10 mb-6" />

              {/* Price and CTA Booking Action */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] tracking-wider uppercase text-secondary-text font-bold leading-none">
                    Nightly Rate
                  </span>
                  <div className="flex items-baseline mt-1 gap-1">
                    <span className="font-mono text-xl sm:text-2xl font-black text-accent">
                      USD {room.rate}
                    </span>
                    <span className="font-sans text-[10px] text-secondary-text">/ night</span>
                  </div>
                </div>

                <a
                  id={`room-book-${room.id}`}
                  href="https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=13398"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-5 py-3 bg-accent hover:bg-accent/90 text-primary-text font-sans text-[10px] tracking-widest uppercase font-black rounded-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-y-[-1px] btn-glow"
                >
                  Book Room
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rates disclaimer */}
      <div className="text-center mt-12 md:mt-16">
        <p
          id="stay-disclaimer"
          className="font-mono text-xs tracking-wide text-secondary-text bg-white/50 border border-[#6B4A32]/15 inline-block py-2.5 px-6 rounded-sm"
        >
          * Rates include full breakfast and applicable taxes.
        </p>
      </div>
    </section>
  );
}
