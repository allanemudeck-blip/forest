/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { VENUES_DATA } from '../data';
import PlaceholderImage from './PlaceholderImage';
import { Users, FileText, CheckCircle, HelpCircle, Calendar, CalendarCheck } from 'lucide-react';

interface MeetSectionProps {
  preselectedEventType: 'business' | 'conference' | 'wedding' | 'other';
  setPreselectedEventType: (type: 'business' | 'conference' | 'wedding' | 'other') => void;
}

export default function MeetSection({ preselectedEventType, setPreselectedEventType }: MeetSectionProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'business' as 'business' | 'conference' | 'wedding' | 'other',
    preferredDate: '',
    guests: '',
    message: ''
  });

  // Validation State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Sync state with parent override (e.g. from weddings click)
  useEffect(() => {
    setFormData((prev) => ({ ...prev, eventType: preselectedEventType }));
  }, [preselectedEventType]);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Please enter a valid email address.';
    } else if (name === 'phone' && !/^\+?[0-9\s-]{7,15}$/.test(value)) {
      error = 'Please enter a valid phone number.';
    } else if (name === 'guests' && (isNaN(Number(value)) || Number(value) <= 0)) {
      error = 'Guests must be a positive number.';
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    const fieldsToValidate = ['name', 'phone', 'email', 'preferredDate', 'guests'];
    
    fieldsToValidate.forEach((field) => {
      const value = formData[field as keyof typeof formData] as string;
      const err = validateField(field, value);
      if (err) {
        newErrors[field] = err;
      }
    });

    setErrors(newErrors);
    
    // Mark all as touched
    const touchedAll: Record<string, boolean> = {};
    Object.keys(formData).forEach((key) => {
      touchedAll[key] = true;
    });
    setTouched(touchedAll);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Save to localStorage for robust offline backup
        const key = `proposal-${Date.now()}`;
        localStorage.setItem(key, JSON.stringify(formData));

        // Submit to Formspree
        const response = await fetch('https://formspree.io/f/xbdvvlrw', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          const resData = await response.json();
          if (resData && resData.errors) {
            setSubmitError(resData.errors.map((err: any) => err.message).join(', '));
          } else {
            setSubmitError('Failed to send details to Formspree. Please try again.');
          }
        }
      } catch (err) {
        console.error('Error submitting form to Formspree', err);
        setSubmitError('A network error occurred. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: 'business',
      preferredDate: '',
      guests: '',
      message: ''
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
    setSubmitError('');
    setPreselectedEventType('business');
  };

  return (
    <section
      id="meet"
      className="py-24 md:py-32 bg-dark-section text-primary-bg border-y border-[#6B4A32]/40 scroll-mt-12 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex justify-center items-center gap-1.5 mb-3 text-accent">
            <Users className="w-5 h-5 text-accent" />
            <span className="font-mono text-xs tracking-widest uppercase font-bold">Venues & Events</span>
          </div>
          <h2
            id="meet-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F1ECDC] mb-4"
          >
            Four Venues. One Forest <span className="italic underline decoration-accent decoration-4 underline-offset-8">Setting.</span>
          </h2>
          <div className="w-20 h-[2px] bg-accent mx-auto mb-6" />
          <p
            id="meet-copy"
            className="font-sans text-sm sm:text-base text-secondary-text leading-relaxed font-medium"
          >
            Forest Cottages offers flexible conference and meeting venues suitable for executive meetings, workshops, conferences, seminars and receptions for up to 200 guests.
          </p>
        </div>

        {/* 2-Column Split: Table on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Column: Capacity Table */}
          <div id="meet-table-container" className="lg:col-span-6 space-y-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F1ECDC] mb-6 flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-accent rounded-sm inline-block" />
              Seating Capacity Guide
            </h3>

            <div className="overflow-x-auto rounded-sm border border-[#6B4A32]/40 shadow-xl">
              <table className="w-full text-left border-collapse bg-[#16241C]/50 backdrop-blur-sm">
                <thead>
                  <tr className="border-b border-[#6B4A32]/40 bg-[#16241C]/80 font-serif text-[#F1ECDC] text-xs sm:text-sm tracking-wide">
                    <th className="py-4 px-4 font-semibold">Venue Name</th>
                    <th className="py-4 px-3 text-center font-semibold">Boardroom</th>
                    <th className="py-4 px-3 text-center font-semibold">U-Shape</th>
                    <th className="py-4 px-3 text-center font-semibold">Classroom</th>
                    <th className="py-4 px-3 text-center font-semibold">Theater</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#6B4A32]/20 font-sans text-xs sm:text-sm text-primary-bg/90">
                  {VENUES_DATA.map((venue, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/5 transition-colors duration-300"
                    >
                      <td className="py-4 px-4 font-serif font-bold text-[#F1ECDC]">
                        {venue.name}
                      </td>
                      <td className="py-4 px-3 text-center font-mono text-accent font-medium">
                        {venue.boardroom}
                      </td>
                      <td className="py-4 px-3 text-center font-mono text-[#F1ECDC]/80">
                        {venue.uShape}
                      </td>
                      <td className="py-4 px-3 text-center font-mono text-[#F1ECDC]/80">
                        {venue.classroom}
                      </td>
                      <td className="py-4 px-3 text-center font-mono text-accent font-semibold">
                        {venue.theater}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick image to frame the left column beautifully */}
            <div className="rounded-sm overflow-hidden border border-[#6B4A32]/30 shadow-2xl group">
              <img
                src="https://i.postimg.cc/44bgJ2Sz/153906.jpg"
                alt="Pappali Hall Setup"
                referrerPolicy="no-referrer"
                className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Proposal Form Card */}
          <div
            id="proposal-form-card"
            className="lg:col-span-6 bg-white border border-[#6B4A32]/30 rounded-sm p-6 sm:p-8 md:p-10 shadow-2xl text-primary-text relative"
          >
            {/* Header decor */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent rounded-t-sm" />

            {!isSubmitted ? (
              <form id="proposal-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-accent" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-text">
                    Request Proposal
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-sans text-[11px] font-bold tracking-wider uppercase text-secondary-text mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full p-3 border rounded-sm font-sans text-xs bg-primary-bg/30 text-primary-text focus:outline-none focus:ring-1 ${
                        errors.name && touched.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#6B4A32]/30 focus:border-accent focus:ring-accent'
                      }`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && touched.name && (
                      <span className="text-red-500 font-sans text-[10px] mt-1">{errors.name}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-sans text-[11px] font-bold tracking-wider uppercase text-secondary-text mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full p-3 border rounded-sm font-sans text-xs bg-primary-bg/30 text-primary-text focus:outline-none focus:ring-1 ${
                        errors.phone && touched.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#6B4A32]/30 focus:border-accent focus:ring-accent'
                      }`}
                      placeholder="+256 752 711746"
                    />
                    {errors.phone && touched.phone && (
                      <span className="text-red-500 font-sans text-[10px] mt-1">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-sans text-[11px] font-bold tracking-wider uppercase text-secondary-text mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full p-3 border rounded-sm font-sans text-xs bg-primary-bg/30 text-primary-text focus:outline-none focus:ring-1 ${
                        errors.email && touched.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#6B4A32]/30 focus:border-accent focus:ring-accent'
                      }`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && touched.email && (
                      <span className="text-red-500 font-sans text-[10px] mt-1">{errors.email}</span>
                    )}
                  </div>

                  {/* Event Type */}
                  <div className="flex flex-col">
                    <label htmlFor="eventType" className="font-sans text-[11px] font-bold tracking-wider uppercase text-secondary-text mb-1">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-[#6B4A32]/30 rounded-sm font-sans text-xs bg-white text-primary-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="business">Business Meeting</option>
                      <option value="conference">Conference</option>
                      <option value="wedding">Wedding Ceremony</option>
                      <option value="other">Other Celebration</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="flex flex-col">
                    <label htmlFor="preferredDate" className="font-sans text-[11px] font-bold tracking-wider uppercase text-secondary-text mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full p-3 border rounded-sm font-sans text-xs bg-primary-bg/30 text-primary-text focus:outline-none focus:ring-1 ${
                        errors.preferredDate && touched.preferredDate
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#6B4A32]/30 focus:border-accent focus:ring-accent'
                      }`}
                    />
                    {errors.preferredDate && touched.preferredDate && (
                      <span className="text-red-500 font-sans text-[10px] mt-1">{errors.preferredDate}</span>
                    )}
                  </div>

                  {/* Guests */}
                  <div className="flex flex-col">
                    <label htmlFor="guests" className="font-sans text-[11px] font-bold tracking-wider uppercase text-secondary-text mb-1">
                      Expected Guests *
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full p-3 border rounded-sm font-sans text-xs bg-primary-bg/30 text-primary-text focus:outline-none focus:ring-1 ${
                        errors.guests && touched.guests
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#6B4A32]/30 focus:border-accent focus:ring-accent'
                      }`}
                      placeholder="150"
                    />
                    {errors.guests && touched.guests && (
                      <span className="text-red-500 font-sans text-[10px] mt-1">{errors.guests}</span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-sans text-[11px] font-bold tracking-wider uppercase text-secondary-text mb-1">
                    Special Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border border-[#6B4A32]/30 rounded-sm font-sans text-xs bg-primary-bg/30 text-primary-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                    placeholder="Tell us about food, technology, or layout wishes..."
                  />
                </div>

                {submitError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 font-sans text-xs rounded-sm">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  id="proposal-submit-btn"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-accent hover:bg-accent/90 text-primary-text font-sans text-xs tracking-widest uppercase font-black rounded-sm shadow-md transition-all duration-300 btn-glow cursor-pointer ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending Proposal...' : 'Request Proposal'}
                </button>
              </form>
            ) : (
              /* Success confirmation Screen */
              <div id="proposal-success-card" className="text-center py-8 px-4 flex flex-col items-center animate-fade-in text-primary-text">
                <div className="w-16 h-16 bg-accent/20 border border-accent rounded-full flex items-center justify-center mb-6 text-accent">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold tracking-tight mb-2">Proposal Requested!</h3>
                <p className="font-sans text-sm text-secondary-text mb-6">
                  Thank you for planning with Forest Cottages. Your proposal for a{' '}
                  <span className="font-bold text-[#16241C] capitalize">{formData.eventType}</span> for{' '}
                  <span className="font-semibold font-mono text-xs">{formData.guests}</span> guests on{' '}
                  <span className="font-semibold font-mono text-xs">{formData.preferredDate}</span> has been received.
                </p>
                <div className="w-full bg-[#F1ECDC] border border-[#6B4A32]/25 rounded-sm p-4 text-left space-y-2 mb-8">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-secondary-text font-bold">Contact Saved Details:</p>
                  <p className="font-sans text-xs"><span className="font-bold text-secondary-text">Name:</span> {formData.name}</p>
                  <p className="font-sans text-xs"><span className="font-bold text-secondary-text">Phone:</span> {formData.phone}</p>
                  <p className="font-sans text-xs"><span className="font-bold text-secondary-text">Email:</span> {formData.email}</p>
                </div>
                <p className="font-sans text-xs text-secondary-text leading-relaxed mb-6">
                  Our event manager will contact you within 24 business hours. If you need immediate assistance, call us at{' '}
                  <span className="font-bold text-[#16241C] font-mono">+256 752 711746</span>.
                </p>
                <button
                  id="proposal-back-btn"
                  onClick={resetForm}
                  className="px-6 py-3 border border-[#6B4A32]/40 text-primary-text hover:bg-accent/10 hover:border-accent font-sans text-xs tracking-widest uppercase font-bold rounded-sm transition-all duration-300 cursor-pointer"
                >
                  Request Another Venue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
