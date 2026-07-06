/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';

export default function FactStrip() {
  const [roomsCount, setRoomsCount] = useState(0);
  const [timeCount, setTimeCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate Rooms Count (0 to 27)
          let roomsStart = 0;
          const roomsTarget = 27;
          const roomsDuration = 1500; // ms
          const roomsStepTime = Math.abs(Math.floor(roomsDuration / roomsTarget));
          
          const roomsTimer = setInterval(() => {
            roomsStart += 1;
            setRoomsCount(roomsStart);
            if (roomsStart >= roomsTarget) {
              clearInterval(roomsTimer);
            }
          }, roomsStepTime);

          // Animate Time Count (0 to 30)
          let timeStart = 0;
          const timeTarget = 30;
          const timeDuration = 1500; // ms
          const timeStepTime = Math.abs(Math.floor(timeDuration / timeTarget));

          const timeTimer = setInterval(() => {
            timeStart += 1;
            setTimeCount(timeStart);
            if (timeStart >= timeTarget) {
              clearInterval(timeTimer);
            }
          }, timeStepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  const facts = [
    {
      value: `${roomsCount}`,
      label: 'Cottages & Rooms',
      desc: 'Individually Crafted',
    },
    {
      value: 'Naguru Hill',
      label: 'Bukoto, Kampala',
      desc: 'Exclusive Location',
    },
    {
      value: `${timeCount} min`,
      label: 'To Kampala CBD',
      desc: 'Easy Access',
    },
    {
      value: 'Speke Group',
      label: 'Hotel',
      desc: 'Heritage & Hospitality',
    },
  ];

  return (
    <div
      ref={containerRef}
      id="fact-strip"
      className="bg-dark-section border-y border-[#6B4A32]/30 py-8 text-primary-bg select-none relative overflow-hidden"
    >
      {/* Decorative vertical divider line behind */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[15%] w-[1px] bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:divide-x md:divide-[#6B4A32]/40">
          {facts.map((fact, index) => (
            <div
              key={index}
              id={`fact-item-${index}`}
              className="flex flex-col items-center text-center px-4 transition-transform duration-500 hover:scale-102"
            >
              {/* Animated / styled value in IBM Plex Mono */}
              <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent mb-2 tracking-tight">
                {fact.value}
              </span>
              
              {/* Heading */}
              <span className="font-serif text-sm sm:text-base font-semibold text-[#F1ECDC] leading-tight">
                {fact.label}
              </span>
              
              {/* Optional tiny descriptive text */}
              <span className="font-sans text-[10px] tracking-wider uppercase text-secondary-text mt-1">
                {fact.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
