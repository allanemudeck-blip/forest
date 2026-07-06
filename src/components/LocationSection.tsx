/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Map, MapPin, PhoneCall, MessageCircle, Navigation, Clock } from 'lucide-react';

export default function LocationSection() {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Forest+Cottages+Bukoto+Naguru+Hill+Kampala+Uganda';
  const iframeEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7438459468945!2d32.600645674317135!3d0.350025999646468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbd76bf423a5%3A0xe6719b4efb3df4c2!2sForest%20Cottages!5e0!3m2!1sen!2sug!4v1719888888888!5m2!1sen!2sug';

  return (
    <section
      id="location"
      className="py-20 md:py-28 bg-[#1F3626] text-[#F1ECDC] border-y border-[#6B4A32]/40 scroll-mt-12 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-1.5 mb-3 text-accent">
            <Map className="w-5 h-5 text-accent" />
            <span className="font-mono text-xs tracking-widest uppercase font-bold">Directions</span>
          </div>
          <h2
            id="location-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F1ECDC] mb-4"
          >
            Find Us on <span className="italic underline decoration-accent decoration-4 underline-offset-8">Naguru Hill</span>
          </h2>
          <div className="w-20 h-[2px] bg-accent mx-auto" />
        </div>

        {/* 2-Column Map Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Map Frame Panel (spanning 7 cols) */}
          <div className="lg:col-span-7 bg-[#16241C] border border-[#6B4A32]/40 p-2.5 rounded-sm shadow-2xl relative group">
            {/* Embedded interactive Google Map iframe */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-dark-section">
              <iframe
                title="Forest Cottages Google Map Location"
                src={iframeEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            {/* Elegant compass coordinate badge inside map border */}
            <div className="absolute bottom-5 right-5 bg-dark-section/90 border border-[#6B4A32]/50 py-1.5 px-3 rounded-sm font-mono text-[9px] tracking-wider text-accent pointer-events-none hidden sm:block">
              0°21'00.1"N • 32°36'02.3"E
            </div>
          </div>

          {/* Details Panel (spanning 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold">
                The Address
              </span>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-[#6B4A32]/40 rounded-sm mt-1 shrink-0 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div id="location-address" className="font-serif text-base sm:text-lg leading-relaxed text-[#F1ECDC]/95 font-medium space-y-0.5">
                  <p>Plot 17–18</p>
                  <p>Naguru Hill, Old Kira Road</p>
                  <p>Bukoto, Kampala</p>
                  <p className="text-accent">Uganda</p>
                </div>
              </div>
            </div>

            {/* Quick access info details */}
            <div className="space-y-4 border-y border-[#6B4A32]/25 py-6">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-[#F1ECDC]/85">Front Desk Open: <span className="font-bold">24 / 7</span></span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Navigation className="w-4 h-4 text-accent" />
                <span className="text-[#F1ECDC]/85">Bukoto Suburb • <span className="text-accent font-semibold">30 mins to Kampala CBD</span></span>
              </div>
            </div>

            {/* CTA Direction & Comm Buttons */}
            <div className="flex flex-col gap-3">
              <a
                id="location-btn-open-maps"
                href={googleMapsUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 py-4 bg-accent hover:bg-accent/90 text-[#16241C] font-sans text-xs tracking-widest uppercase font-black rounded-sm shadow-md transition-all duration-300 transform hover:translate-y-[-1px] btn-glow"
              >
                <Navigation className="w-4 h-4" />
                Open in Google Maps
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  id="location-btn-call"
                  href="tel:+256752711746"
                  className="flex items-center justify-center gap-2 py-3.5 border border-primary-bg/40 text-[#F1ECDC] hover:text-accent hover:border-accent font-sans text-[11px] tracking-wider uppercase font-bold rounded-sm transition-all duration-300"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call Hotel
                </a>

                <a
                  id="location-btn-whatsapp"
                  href="https://wa.me/256752711746"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 py-3.5 border border-primary-bg/40 text-[#F1ECDC] hover:text-accent hover:border-accent font-sans text-[11px] tracking-wider uppercase font-bold rounded-sm transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-accent" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
