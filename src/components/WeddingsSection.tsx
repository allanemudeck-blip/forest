/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import PlaceholderImage from './PlaceholderImage';
import { Heart, Sparkles, HelpCircle } from 'lucide-react';

interface WeddingsSectionProps {
  onEnquireClick: () => void;
}

export default function WeddingsSection({ onEnquireClick }: WeddingsSectionProps) {
  return (
    <section
      id="weddings"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12 select-none"
    >
      <div className="bg-[#1F3626] border border-[#6B4A32]/30 rounded-sm overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Large Romantic Placeholder */}
          <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[350px] lg:min-h-[500px]">
            <div className="absolute inset-0 h-full w-full overflow-hidden group">
              <img
                src="https://i.postimg.cc/65tYXYkp/154806.jpg"
                alt="Tropical Garden Wedding Altar"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Copy and wedding content */}
          <div className="lg:col-span-6 p-8 sm:p-12 md:p-16 flex flex-col justify-center text-primary-bg space-y-6">
            <div className="flex items-center gap-2 text-accent">
              <Heart className="w-5 h-5 text-accent fill-accent animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase font-bold">Unforgettable Celebrations</span>
            </div>

            <h2
              id="weddings-headline"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F1ECDC] leading-tight"
            >
              Say "I Do" in the <span className="italic underline decoration-accent decoration-4 underline-offset-8">Forest.</span>
            </h2>

            <div className="w-16 h-[2px] bg-accent" />

            <p
              id="weddings-copy"
              className="font-sans text-sm sm:text-base text-primary-bg/85 leading-relaxed font-medium"
            >
              Celebrate your special day surrounded by mature tropical gardens. From intimate ceremonies to grand receptions in Pappali Hall, Forest Cottages provides unforgettable wedding experiences indoors or beneath the trees.
            </p>

            {/* Quick value proposition block */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border border-[#6B4A32]/40 rounded-sm p-4 bg-[#16241C]/30">
                <span className="font-serif text-lg font-bold text-accent">200+</span>
                <p className="font-sans text-[11px] text-[#F1ECDC]/75 uppercase mt-1">Guest Capacity</p>
              </div>
              <div className="border border-[#6B4A32]/40 rounded-sm p-4 bg-[#16241C]/30">
                <span className="font-serif text-lg font-bold text-accent">Tropical</span>
                <p className="font-sans text-[11px] text-[#F1ECDC]/75 uppercase mt-1">Garden Settings</p>
              </div>
            </div>

            <button
              id="weddings-enquire-btn"
              onClick={onEnquireClick}
              className="w-full sm:w-fit px-8 py-4 bg-accent hover:bg-accent/90 text-primary-text font-sans text-xs tracking-widest uppercase font-black rounded-sm shadow-lg transition-all duration-300 transform hover:translate-y-[-1px] btn-glow cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Enquire About Weddings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
