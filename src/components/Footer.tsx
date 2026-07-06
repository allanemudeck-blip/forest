/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  TreePine,
  Sparkles,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

interface FooterProps {
  setActiveSection: (sec: string) => void;
  onWeddingClick: () => void;
}

export default function Footer({ setActiveSection, onWeddingClick }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  const scrollToSec = (id: string) => {
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
      setActiveSection(id);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    }
  };

  return (
    <>
      <footer id="contact" className="bg-dark-section text-primary-bg border-t border-accent/20 pt-20 pb-8 select-none relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-accent/15">
            
            {/* Column 1: Brand & Speke Group Credit (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-accent/40 bg-dark-section shrink-0 flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/0yGMHjzb/153907.jpg"
                    alt="Forest Cottages Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl tracking-widest font-black uppercase text-white">
                    Forest Cottages
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-accent leading-none -mt-1 uppercase">
                    Kampala, Uganda
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-primary-bg/80 leading-relaxed font-medium">
                A forest hides in the middle of the city. Experience Kampala's premier eco-friendly boutique resort, combining pristine tropical nature with modern safari hospitality.
              </p>

              <div className="p-4 bg-white/5 border border-accent/25 rounded-sm">
                <p className="font-mono text-[10px] tracking-widest uppercase text-accent font-bold leading-none mb-1">
                  Hotel Affiliation
                </p>
                <p className="font-serif text-xs font-semibold text-primary-bg/90">
                  Part of the Speke Group of Hotels.
                </p>
              </div>

              {/* Social Icons */}
              <div className="space-y-2.5">
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent font-bold block">
                  Follow the Canopy
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2 bg-white/5 border border-accent/20 text-white hover:text-accent hover:border-accent rounded-sm transition-all duration-300"
                    aria-label="Facebook Link"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2 bg-white/5 border border-accent/20 text-white hover:text-accent hover:border-accent rounded-sm transition-all duration-300"
                    aria-label="Instagram Link"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2 bg-white/5 border border-accent/20 text-white hover:text-accent hover:border-accent rounded-sm transition-all duration-300"
                    aria-label="LinkedIn Link"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/256752711746"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2 bg-white/5 border border-accent/20 text-white hover:text-accent hover:border-accent rounded-sm transition-all duration-300"
                    aria-label="WhatsApp Link"
                  >
                    <MessageCircle className="w-4 h-4 text-accent" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Direct Contact Coordinates (4 cols) */}
            <div id="footer-contact-details" className="lg:col-span-4 space-y-6">
              <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-accent/25 pb-3">
                Contact Details
              </h4>

              <div className="space-y-4">
                {/* Mobile Phones */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent mt-1 shrink-0" />
                  <div className="font-mono text-xs text-primary-bg/90 space-y-1">
                    <p className="font-sans text-[11px] text-accent tracking-wide uppercase font-bold">Mobile Reservations</p>
                    <p><a href="tel:+256752711746" className="hover:text-accent transition-colors">+256 752 711746</a></p>
                    <p><a href="tel:+256707780371" className="hover:text-accent transition-colors">+256 707 780371</a></p>
                  </div>
                </div>

                {/* Landline */}
                <div className="flex items-start gap-3 border-t border-accent/10 pt-4">
                  <Phone className="w-4 h-4 text-accent mt-1 shrink-0" />
                  <div className="font-mono text-xs text-primary-bg/90 space-y-1">
                    <p className="font-sans text-[11px] text-accent tracking-wide uppercase font-bold">Hotel Landline</p>
                    <p><a href="tel:+256200999952" className="hover:text-accent transition-colors">+256 200 999 952</a></p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 border-t border-accent/10 pt-4">
                  <Mail className="w-4 h-4 text-accent mt-1 shrink-0" />
                  <div className="font-sans text-xs text-primary-bg/90 space-y-1">
                    <p className="font-sans text-[11px] text-accent tracking-wide uppercase font-bold">Email Communications</p>
                    <p className="font-mono"><a href="mailto:gm@forest-cottages.com" className="hover:text-accent transition-colors">gm@forest-cottages.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Links & Newsletter Sign-up (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Navigation */}
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-accent/25 pb-3">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                  <button onClick={() => scrollToSec('stay')} className="text-left font-sans text-xs hover:text-accent transition-colors cursor-pointer">Stay Among Trees</button>
                  <button onClick={() => scrollToSec('dine')} className="text-left font-sans text-xs hover:text-accent transition-colors cursor-pointer">Avocado Restaurant</button>
                  <button onClick={() => scrollToSec('meet')} className="text-left font-sans text-xs hover:text-accent transition-colors cursor-pointer">Venues & Meetings</button>
                  <button onClick={onWeddingClick} className="text-left font-sans text-xs hover:text-accent transition-colors cursor-pointer">Forest Weddings</button>
                  <button onClick={() => scrollToSec('gallery')} className="text-left font-sans text-xs hover:text-accent transition-colors cursor-pointer">Art Gallery</button>
                  <button onClick={() => scrollToSec('location')} className="text-left font-sans text-xs hover:text-accent transition-colors cursor-pointer">Find Directions</button>
                </div>
              </div>

              {/* Newsletter Sign Up */}
              <div className="space-y-4">
                <h4 className="font-serif text-sm font-bold text-white tracking-widest uppercase">
                  Newsletter Signup
                </h4>
                <p className="font-sans text-xs text-primary-bg/75 leading-relaxed">
                  Join our mailing list to receive seasonal hotel offers, eco-retreat updates, and birdwatching reports.
                </p>

                {!newsletterSuccess ? (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="flex-grow p-3 bg-dark-section border border-accent/40 text-white font-sans text-xs rounded-sm focus:outline-none focus:border-accent"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="px-4 bg-accent hover:bg-accent/90 text-primary-text font-sans text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
                    >
                      Join
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-2.5 p-3.5 bg-accent/15 border border-accent/30 rounded-sm text-accent">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span className="font-sans text-xs font-semibold">Thank you! You are subscribed.</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sub-footer Copyright and branding stamps */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="font-sans text-[11px] text-primary-bg/60">
              © 2026 Forest Cottages Kampala. All rights reserved. • Built with premium eco-friendly materials.
            </p>
            <p className="font-sans text-[10px] tracking-widest uppercase text-accent/80 font-bold">
              Kampala's True Forest Sanctuary • Naguru Hill
            </p>
          </div>
        </div>
      </footer>

      {/* 4. FLOATING WHATSAPP BUTTON (Always available, microinteraction) */}
      <a
        id="floating-whatsapp-trigger"
        href="https://wa.me/256752711746"
        target="_blank"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 border border-[#16241C]/10"
        title="WhatsApp Forest Cottages"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="absolute right-full mr-2.5 bg-dark-section border border-accent/30 py-1.5 px-3 rounded-sm font-sans text-[10px] uppercase tracking-widest text-white font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-xl whitespace-nowrap hidden lg:inline">
          Chat With Us
        </span>
      </a>

      {/* 5. BACK TO TOP BUTTON (Microinteraction) */}
      <button
        id="floating-back-to-top"
        onClick={handleScrollToTop}
        className="fixed bottom-6 left-6 sm:left-auto sm:right-24 z-40 bg-accent hover:bg-accent/90 text-primary-text p-3 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 border border-[#16241C]/10 cursor-pointer"
        title="Scroll back to canopy top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
