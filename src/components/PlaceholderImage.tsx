/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Camera, TreePine } from 'lucide-react';

interface PlaceholderImageProps {
  className?: string;
  title?: string;
  category?: string;
}

export default function PlaceholderImage({
  className = '',
  title,
  category,
}: PlaceholderImageProps) {
  return (
    <div
      id={`placeholder-${title ? title.toLowerCase().replace(/\s+/g, '-') : 'img'}`}
      className={`relative w-full overflow-hidden bg-dark-section flex flex-col justify-between p-6 md:p-8 text-primary-bg border border-[#6B4A32]/40 rounded-sm transition-all duration-700 ease-out group select-none ${className}`}
    >
      {/* Background Subtle Organic Texture SVG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-1000 group-hover:scale-105">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M30 10 C35 20, 45 25, 30 50 C15 25, 25 20, 30 10 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M30 15 L30 45" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M30 22 L35 25" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M30 30 L25 33" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M30 38 L35 41" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent/60 pointer-events-none" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent/60 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent/60 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent/60 pointer-events-none" />

      {/* Category Tag */}
      <div className="flex justify-between items-center z-10">
        {category ? (
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/90 bg-[#16241C]/80 px-2 py-0.5 rounded border border-[#6B4A32]/30">
            {category}
          </span>
        ) : (
          <div />
        )}
        <TreePine className="w-4 h-4 text-[#6E8266]" />
      </div>

      {/* Central Visual Block */}
      <div className="my-auto py-8 flex flex-col items-center text-center z-10 transition-transform duration-500 group-hover:translate-y-[-2px]">
        <Camera className="w-8 h-8 text-accent mb-3 animate-pulse" />
        <p className="font-serif text-sm md:text-base tracking-wide font-medium text-[#F1ECDC] mb-1">
          {title || "Forest Cottages"}
        </p>
        <div className="w-12 h-[1px] bg-[#6B4A32] my-2" />
        <p className="font-sans text-[11px] md:text-xs tracking-wider uppercase text-secondary-text font-medium">
          Official Photography Coming Soon
        </p>
      </div>

      {/* Bottom coordinates / brand stamp */}
      <div className="flex justify-between items-end z-10 mt-auto">
        <span className="font-mono text-[9px] tracking-wider text-secondary-text/80">
          NAGURU HILL • BUKOTO
        </span>
        <span className="font-mono text-[9px] tracking-wider text-accent/80">
          KAMPALA, UG
        </span>
      </div>
    </div>
  );
}
