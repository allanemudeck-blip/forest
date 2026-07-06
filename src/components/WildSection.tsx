/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { WILD_FEATURES } from '../data';
import PlaceholderImage from './PlaceholderImage';
import { Compass, Waves, Bird, Sparkles } from 'lucide-react';

export default function WildSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'pools':
        return <Waves className="w-5 h-5 text-accent" />;
      case 'bird-watching':
        return <Bird className="w-5 h-5 text-accent" />;
      case 'wellness':
        return <Sparkles className="w-5 h-5 text-accent" />;
      default:
        return <Compass className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section
      id="wild"
      className="bg-dark-section text-primary-bg py-24 md:py-32 border-y border-[#6B4A32]/40 scroll-mt-12 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="flex justify-center items-center gap-1.5 mb-3 text-accent">
            <Compass className="w-5 h-5 text-accent animate-spin-slow" />
            <span className="font-mono text-xs tracking-widest uppercase font-bold">The Canopy Experience</span>
          </div>
          <h2
            id="wild-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F1ECDC] mb-4"
          >
            A Sanctuary of the <span className="italic underline decoration-accent decoration-4 underline-offset-8">Senses</span>
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p
            id="wild-subtitle"
            className="font-sans text-sm sm:text-base text-secondary-text max-w-2xl mx-auto leading-relaxed"
          >
            Immerse yourself fully in Kampala's hidden rainforest. Discover pristine facilities designed to relax, restore, and connect you with the natural wonders of Naguru Hill.
          </p>
        </div>

        {/* Feature Blocks (Alternating layout) */}
        <div id="wild-features-list" className="space-y-24 md:space-y-36">
          {WILD_FEATURES.map((feat, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={feat.id}
                id={`wild-feature-${feat.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Grid Block (spanning 6 cols) */}
                <div
                  className={`lg:col-span-6 w-full aspect-video md:aspect-[4/3] relative rounded-sm overflow-hidden border border-[#6B4A32]/30 shadow-2xl group ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {feat.image ? (
                    <img
                      src={feat.image}
                      alt={feat.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <PlaceholderImage
                      title={feat.title}
                      category={feat.subtitle}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Text Content Block (spanning 6 cols) */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-white/5 border border-[#6B4A32]/30 rounded-sm">
                      {getIcon(feat.id)}
                    </div>
                    <span className="font-mono text-xs tracking-wider uppercase text-accent font-bold">
                      0{index + 1} / Activity Guide
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F1ECDC] tracking-tight italic">
                    {feat.title}
                  </h3>

                  <div className="w-12 h-[1px] bg-accent" />

                  <p className="font-sans text-sm md:text-base text-primary-bg/85 leading-relaxed">
                    {feat.description}
                  </p>

                  <div className="p-4 bg-white/5 border-l-2 border-accent rounded-r-sm">
                    <p className="font-mono text-[11px] sm:text-xs text-accent tracking-wide uppercase font-semibold leading-relaxed">
                      {feat.tagline}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
