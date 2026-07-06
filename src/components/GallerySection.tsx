/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data';
import PlaceholderImage from './PlaceholderImage';
import { Image, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);

  // Filter items based on active tab
  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIdx === null) return;
      if (e.key === 'Escape') {
        setSelectedItemIdx(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIdx, filteredItems]);

  const handlePrev = () => {
    if (selectedItemIdx === null) return;
    setSelectedItemIdx((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    if (selectedItemIdx === null) return;
    setSelectedItemIdx((prev) => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  };

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'gardens', label: 'Gardens' },
    { id: 'rooms', label: 'Rooms & Cottages' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'pools', label: 'Swimming Pools' },
    { id: 'conference', label: 'Conference' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'weddings', label: 'Weddings' },
  ];

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-dark-section text-primary-bg border-y border-[#6B4A32]/40 scroll-mt-12 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center items-center gap-1.5 mb-3 text-accent">
            <Image className="w-5 h-5 text-accent" />
            <span className="font-mono text-xs tracking-widest uppercase font-bold">Visual Tour</span>
          </div>
          <h2
            id="gallery-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F1ECDC] mb-4"
          >
            The Forest <span className="italic underline decoration-accent decoration-4 underline-offset-8">Canvas</span>
          </h2>
          <div className="w-20 h-[2px] bg-accent mx-auto mb-6" />
          <p
            id="gallery-subtitle"
            className="font-sans text-sm sm:text-base text-secondary-text max-w-xl mx-auto leading-relaxed"
          >
            Explore our curated gallery documenting the tranquility and wild beauty of Bukoto's premier forest resort.
          </p>
        </div>

        {/* Category Filters */}
        <div
          id="gallery-filters"
          className="flex flex-wrap justify-center items-center gap-2 mb-12 md:mb-16 border-b border-[#6B4A32]/20 pb-6 max-w-4xl mx-auto"
        >
          <Filter className="w-4 h-4 text-accent hidden sm:inline mr-2" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-btn-${cat.id}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedItemIdx(null);
              }}
              className={`font-sans text-[11px] tracking-widest uppercase font-bold py-2.5 px-4 rounded-sm border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-accent border-accent text-primary-text'
                  : 'bg-white/5 border-[#6B4A32]/30 text-primary-bg/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid Layout */}
        <div
          id="gallery-grid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-tile-${item.id}`}
              onClick={() => setSelectedItemIdx(index)}
              className="group relative cursor-zoom-in rounded-sm overflow-hidden aspect-square border border-[#6B4A32]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <PlaceholderImage
                  title={item.title}
                  category={item.category}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#16241C]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                <span className="font-mono text-[9px] tracking-widest uppercase text-accent mb-1.5">
                  {item.category}
                </span>
                <h4 className="font-serif text-base font-bold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-[#F1ECDC]/75 mt-1 truncate">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {selectedItemIdx !== null && filteredItems[selectedItemIdx] && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between p-4 md:p-8 animate-fade-in">
          {/* Top Bar controls */}
          <div className="flex justify-between items-center text-white z-10">
            <span className="font-mono text-xs tracking-widest text-[#F1ECDC]/70 uppercase">
              Photo {selectedItemIdx + 1} / {filteredItems.length}
            </span>
            <button
              id="close-lightbox"
              onClick={() => setSelectedItemIdx(null)}
              className="p-2 hover:bg-white/10 rounded-sm transition-all text-white cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Center Image/Placeholder Carousel */}
          <div className="flex-grow flex items-center justify-between gap-4 py-8 relative max-w-5xl mx-auto w-full">
            {/* Left navigation arrow */}
            <button
              id="lightbox-prev"
              onClick={handlePrev}
              className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 shadow-lg cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Custom Interactive Placeholder Card centered inside Lightbox */}
            <div id="lightbox-center-card" className="flex-grow flex items-center justify-center h-full max-h-[60vh] aspect-video sm:aspect-square md:aspect-video rounded-sm overflow-hidden border border-[#6B4A32] shadow-2xl relative">
              {filteredItems[selectedItemIdx].image ? (
                <img
                  src={filteredItems[selectedItemIdx].image}
                  alt={filteredItems[selectedItemIdx].title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <PlaceholderImage
                  title={filteredItems[selectedItemIdx].title}
                  category={filteredItems[selectedItemIdx].category.toUpperCase()}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>

            {/* Right navigation arrow */}
            <button
              id="lightbox-next"
              onClick={handleNext}
              className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 shadow-lg cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Captions */}
          <div className="text-center text-white max-w-2xl mx-auto space-y-2 pb-4 z-10">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent font-bold">
              {filteredItems[selectedItemIdx].category}
            </span>
            <h3 className="font-serif text-lg md:text-2xl font-bold tracking-wide">
              {filteredItems[selectedItemIdx].title}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#F1ECDC]/80 max-w-xl mx-auto">
              {filteredItems[selectedItemIdx].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
