/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Room {
  id: string;
  title: string;
  description: string;
  rate: number;
  features: string[];
  image?: string;
}

export interface GalleryItem {
  id: string;
  category: 'gardens' | 'rooms' | 'restaurant' | 'pools' | 'conference' | 'wildlife' | 'weddings';
  title: string;
  description: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: string;
  date: string;
  isPlaceholder?: boolean;
}

export interface VenueCapacity {
  name: string;
  boardroom: string;
  uShape: string;
  classroom: string;
  theater: string;
}

export interface ProposalFormInput {
  name: string;
  phone: string;
  email: string;
  eventType: 'business' | 'conference' | 'wedding' | 'other';
  preferredDate: string;
  guests: string;
  message: string;
}
