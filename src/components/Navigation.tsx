/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, CheckSquare, MessageCircle, Menu, X, TreePine } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onWeddingClick: () => void;
}

export default function Navigation({ activeSection, setActiveSection, onWeddingClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const navLinks = [
    { id: 'stay', label: 'Stay' },
    { id: 'dine', label: 'Dine' },
    { id: 'meet', label: 'Meet' },
    { id: 'wild', label: 'Wild' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'contact', label: 'Contact' },
  ];

  const desktopVerticalTabs = [
    { id: 'stay', label: 'Stay' },
    { id: 'dine', label: 'Dine' },
    { id: 'meet', label: 'Meet' },
    { id: 'wild', label: 'Wild' },
    { id: 'book', label: 'Book Now', isAction: true },
  ];

  return (
    <>
      {/* 1. MAIN HEADER */}
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-section text-primary-bg shadow-lg py-3 border-b border-[#6B4A32]/20'
            : 'bg-gradient-to-b from-[#16241C]/80 to-transparent text-primary-bg py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            id="header-logo"
            className="flex items-center gap-2 group select-none cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-accent/40 bg-dark-section shrink-0 flex items-center justify-center">
              <img
                src="https://i.postimg.cc/0yGMHjzb/153907.jpg"
                alt="Forest Cottages Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl tracking-widest font-black uppercase text-primary-bg">
                Forest Cottages
              </span>
              <span className="font-mono text-[9px] tracking-widest uppercase text-accent leading-none -mt-0.5">
                Naguru Hill • Kampala
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => {
                  if (link.id === 'weddings') {
                    onWeddingClick();
                  } else {
                    scrollToSection(link.id);
                  }
                }}
                className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors hover:text-accent relative py-1 cursor-pointer ${
                  activeSection === link.id ? 'text-accent' : 'text-primary-bg/90'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="header-whatsapp-btn"
              href="https://wa.me/256752711746"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-1.5 px-4 py-2 border border-accent/40 rounded-sm font-sans text-xs tracking-wider uppercase font-semibold text-primary-bg hover:bg-accent/10 transition-all duration-300 btn-glow"
            >
              <MessageCircle className="w-4 h-4 text-accent" />
              WhatsApp
            </a>
            <a
              id="header-book-btn"
              href="https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=13398"
              target="_blank"
              referrerPolicy="no-referrer"
              className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-primary-text font-sans text-xs tracking-wider uppercase font-bold rounded-sm shadow-md transition-all duration-300 transform hover:translate-y-[-1px] btn-glow"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="mobile-header-book-btn"
              href="https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=13398"
              target="_blank"
              referrerPolicy="no-referrer"
              className="px-3 py-1.5 bg-accent text-primary-text font-sans text-[10px] tracking-wider uppercase font-bold rounded-sm"
            >
              Book Now
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-primary-bg/90 hover:text-accent transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu-dropdown" className="md:hidden bg-dark-section border-t border-[#6B4A32]/30 py-4 px-4 shadow-2xl animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => {
                    if (link.id === 'weddings') {
                      onWeddingClick();
                    } else {
                      scrollToSection(link.id);
                    }
                  }}
                  className={`text-left font-sans text-sm tracking-widest uppercase font-semibold py-2.5 px-3 rounded-sm transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-accent/10 text-accent border-l-2 border-accent'
                      : 'text-primary-bg/85 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="h-[1px] bg-[#6B4A32]/30 my-2" />
              <div className="grid grid-cols-2 gap-3">
                <a
                  id="mobile-menu-whatsapp"
                  href="https://wa.me/256752711746"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 py-3 border border-accent/40 rounded-sm font-sans text-xs tracking-wider uppercase font-semibold text-primary-bg hover:bg-accent/10 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-accent" />
                  WhatsApp
                </a>
                <a
                  id="mobile-menu-book"
                  href="https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=13398"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center py-3 bg-accent text-primary-text font-sans text-xs tracking-wider uppercase font-bold rounded-sm shadow-md"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. DESKTOP LEFT VERTICAL TABS (FIELD GUIDE STYLE) */}
      <div
        id="desktop-vertical-tabs"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col bg-dark-section/95 border-r border-t border-b border-[#6B4A32]/40 rounded-r shadow-2xl overflow-hidden"
      >
        <div className="px-1.5 py-4 flex flex-col gap-2 bg-[#16241C]/20">
          <div className="flex flex-col items-center pb-2 mb-2 border-b border-[#6B4A32]/30">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-accent/40 bg-dark-section mb-1">
              <img
                src="https://i.postimg.cc/0yGMHjzb/153907.jpg"
                alt="Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-mono text-[6px] tracking-widest mt-1 opacity-70 text-accent">GUIDE</span>
          </div>
          {desktopVerticalTabs.map((tab) => {
            const isActive = activeSection === tab.id;
            if (tab.isAction) {
              return (
                <a
                  key={tab.id}
                  id={`field-guide-tab-${tab.id}`}
                  href="https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=13398"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="group relative flex flex-col items-center py-3 px-2.5 bg-accent hover:bg-accent/90 rounded-sm text-primary-text transition-all duration-300 shadow-sm"
                  title="Book Your Stay"
                >
                  <CheckSquare className="w-4 h-4" />
                  <span className="font-mono text-[9px] uppercase tracking-wider font-extrabold rotate-180 write-vertical mt-1.5">
                    BOOK
                  </span>
                </a>
              );
            }
            return (
              <button
                key={tab.id}
                id={`field-guide-tab-${tab.id}`}
                onClick={() => scrollToSection(tab.id)}
                className={`group relative flex flex-col items-center py-4 px-2.5 rounded-sm transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'bg-accent/15 text-accent border-l-2 border-accent'
                    : 'text-primary-bg/70 hover:text-primary-bg hover:bg-white/5'
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest font-semibold vertical-text">
                  {tab.label}
                </span>
                {/* Micro-dot Indicator */}
                <span
                  className={`w-1 h-1 rounded-full mt-1.5 transition-all duration-300 ${
                    isActive ? 'bg-accent scale-125' : 'bg-[#6E8266]/40 group-hover:bg-primary-bg'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MOBILE STICKY HORIZONTAL BAR (Sticky below header) */}
      <div
        id="mobile-sticky-nav-bar"
        className="sticky top-[56px] left-0 right-0 z-30 md:hidden bg-primary-bg border-b border-[#6B4A32]/25 overflow-x-auto scrollbar-none"
      >
        <div className="flex px-4 py-3 gap-5 min-w-max">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`mobile-subnav-${link.id}`}
              onClick={() => {
                if (link.id === 'weddings') {
                  onWeddingClick();
                } else {
                  scrollToSection(link.id);
                }
              }}
              className={`font-sans text-[11px] tracking-widest uppercase font-bold pb-1 transition-all cursor-pointer ${
                activeSection === link.id
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-primary-text/75 hover:text-primary-text'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* Add CSS for vertical text inside guide */}
      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
        .write-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        /* Hide scrollbars but keep functionality */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
