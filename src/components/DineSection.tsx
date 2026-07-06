/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';
import { Utensils, PhoneCall, BookOpen, Beer, Check, ChevronRight, X } from 'lucide-react';

export default function DineSection() {
  const [activeMenuTab, setActiveMenuTab] = useState<'food' | 'bar'>('food');
  const [showMenuModal, setShowMenuModal] = useState(false);

  const foodMenu = [
    { name: 'Traditional Beef Luwombo', desc: 'Slow-cooked beef stew in fresh banana leaves with aromatic spices.', price: 'UGX 38,000' },
    { name: 'Fresh Tilapia Whole Fish', desc: 'Pan-fried whole lake Victoria tilapia served with lemon garlic butter sauce and dodo.', price: 'UGX 45,000' },
    { name: 'The Forest Rolex', desc: 'Ugandan classic—rolled chapati with triple eggs, shredded cabbage, tomato, and peppers.', price: 'UGX 18,000' },
    { name: 'Naguru Grilled Pork Ribs', desc: 'Sticky honey glazed pork ribs smoked over indigenous wood charcoal.', price: 'UGX 42,000' },
    { name: 'Bukoto Avocado Salad', desc: 'Organic avocado slices with cherry tomatoes, fresh mango, red onions, and wild honey dressing.', price: 'UGX 22,000' }
  ];

  const barMenu = [
    { name: 'Kampala Mule', desc: 'Ugandan Uganda Waragi, fresh ginger beer, lime juice, and a slice of organic cucumber.', price: 'UGX 24,000' },
    { name: 'Nile Gold Premium', desc: 'Kampala\'s favorite premium lager beer served ice cold.', price: 'UGX 10,000' },
    { name: 'Tropical Forest Breeze', desc: 'Fresh passionfruit pulp, fresh pineapple juice, dark rum, and wild forest honey.', price: 'UGX 26,000' },
    { name: 'Avocado Cream Shake (Non-alc)', desc: 'Thick, creamy blend of organic avocado, condensed coconut milk, and vanilla bean.', price: 'UGX 16,000' }
  ];

  return (
    <section
      id="dine"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12 select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
        
        {/* Left column: Mosaic of placeholders */}
        <div id="dine-media-grid" className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="col-span-2 relative aspect-video overflow-hidden bg-dark-section border border-[#6B4A32]/40 rounded-sm group">
            <img
              src="https://i.postimg.cc/13Z7bPGp/153898.jpg"
              alt="The Avocado Restaurant Interior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden bg-dark-section border border-[#6B4A32]/40 rounded-sm group">
            <img
              src="https://i.postimg.cc/C1C9zXLM/154614.jpg"
              alt="Traditional & International Cuisine"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden bg-dark-section border border-[#6B4A32]/40 rounded-sm group">
            <img
              src="https://i.postimg.cc/kG0MqLTz/153896.jpg"
              alt="The Avocado Cocktail Bar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right column: Copywriting and interactive buttons */}
        <div id="dine-content" className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-secondary-text">
              <Utensils className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs tracking-widest uppercase font-bold">Gastronomy</span>
            </div>
            <h2
              id="dine-headline"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text"
            >
              The Avocado <span className="italic underline decoration-accent decoration-4 underline-offset-8">Restaurant</span>
            </h2>
            <div className="w-20 h-[2px] bg-accent" />
          </div>

          <p
            id="dine-copy"
            className="font-sans text-sm sm:text-base text-secondary-text leading-relaxed font-medium"
          >
            Enjoy traditional Ugandan favourites alongside international cuisine prepared by experienced chefs.
            Whether it's lunch with colleagues or a romantic dinner, The Avocado Restaurant provides a relaxed forest atmosphere complemented by a fully stocked bar.
          </p>

          {/* Quick list of highlights */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-primary-text">
              <Check className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold">Al-fresco garden seating & indoor tables</span>
            </div>
            <div className="flex items-center gap-2.5 text-primary-text">
              <Check className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold">Authentic Luwombo & Lake Victoria Whole Tilapia</span>
            </div>
            <div className="flex items-center gap-2.5 text-primary-text">
              <Check className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold">Premium local drafts, spirits, and craft mocktails</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              id="dine-btn-reserve"
              href="tel:+256752711746"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-accent hover:bg-accent/90 text-primary-text font-sans text-xs tracking-widest uppercase font-black rounded-sm shadow-md transition-all duration-300 btn-glow"
            >
              <PhoneCall className="w-4 h-4" />
              Reserve a Table
            </a>

            <button
              id="dine-btn-menu"
              onClick={() => setShowMenuModal(true)}
              className="flex items-center justify-center gap-2 px-6 py-4 border border-[#6B4A32] text-primary-text hover:bg-accent/10 hover:border-accent font-sans text-xs tracking-widest uppercase font-bold rounded-sm transition-all duration-300 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              Browse Restaurant Menus
            </button>
          </div>
        </div>
      </div>

      {/* MENU MODAL */}
      {showMenuModal && (
        <div className="fixed inset-0 bg-[#16241C]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            id="menu-explorer-modal"
            className="bg-primary-bg w-full max-w-2xl rounded-sm border border-[#6B4A32] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-slide-up"
          >
            {/* Header */}
            <div className="bg-dark-section p-6 text-primary-bg flex justify-between items-center border-b border-[#6B4A32]/40">
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-accent animate-pulse" />
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-tight text-white">The Avocado Restaurant</h3>
                  <span className="font-mono text-[9px] tracking-widest text-accent uppercase">Kampala, Naguru Hill</span>
                </div>
              </div>
              <button
                id="close-menu-modal"
                onClick={() => setShowMenuModal(false)}
                className="text-primary-bg/70 hover:text-white p-1 hover:bg-white/5 rounded transition-all"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Tabs */}
            <div className="flex bg-[#16241C]/5 border-b border-[#6B4A32]/10">
              <button
                id="tab-food-menu"
                onClick={() => setActiveMenuTab('food')}
                className={`flex-1 py-4 text-center font-sans text-xs font-bold uppercase tracking-widest transition-all ${
                  activeMenuTab === 'food'
                    ? 'border-b-2 border-accent text-accent bg-white/50'
                    : 'text-secondary-text hover:text-primary-text'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Utensils className="w-3.5 h-3.5" /> Food Selection
                </span>
              </button>
              <button
                id="tab-bar-menu"
                onClick={() => setActiveMenuTab('bar')}
                className={`flex-1 py-4 text-center font-sans text-xs font-bold uppercase tracking-widest transition-all ${
                  activeMenuTab === 'bar'
                    ? 'border-b-2 border-accent text-accent bg-white/50'
                    : 'text-secondary-text hover:text-primary-text'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Beer className="w-3.5 h-3.5" /> Beverages & Bar
                </span>
              </button>
            </div>

            {/* Content List */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 bg-primary-bg flex-grow">
              {activeMenuTab === 'food' ? (
                <div id="food-menu-items" className="space-y-6">
                  {foodMenu.map((item, index) => (
                    <div key={index} className="flex justify-between items-start gap-4 border-b border-[#6B4A32]/10 pb-4 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-serif text-base font-semibold text-primary-text">{item.name}</h4>
                        <p className="font-sans text-xs text-secondary-text mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="font-mono text-xs font-black text-accent bg-dark-section/5 px-2.5 py-1 rounded border border-[#6B4A32]/20 shrink-0">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div id="bar-menu-items" className="space-y-6">
                  {barMenu.map((item, index) => (
                    <div key={index} className="flex justify-between items-start gap-4 border-b border-[#6B4A32]/10 pb-4 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-serif text-base font-semibold text-primary-text">{item.name}</h4>
                        <p className="font-sans text-xs text-secondary-text mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="font-mono text-xs font-black text-accent bg-dark-section/5 px-2.5 py-1 rounded border border-[#6B4A32]/20 shrink-0">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-dark-section border-t border-[#6B4A32]/40 text-center">
              <p className="font-sans text-[11px] text-[#F1ECDC]/70">
                To reserve a table or place a pre-order, call us directly at <span className="text-accent font-bold font-mono">+256 752 711746</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
