/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Room, GalleryItem, Testimonial, VenueCapacity } from './types';

export const ROOMS_DATA: Room[] = [
  {
    id: 'std-single',
    title: 'Standard Single Room',
    description: 'Decorated in African style, well equipped, delivering tranquillity and peace. Features high-speed Wi-Fi and a workspace.',
    rate: 65,
    features: ['African-style decor', 'Complimentary Breakfast', 'High-speed Wi-Fi', 'En-suite bathroom', 'Satellite TV'],
    image: 'https://i.postimg.cc/FHPz8Cj3/153888.jpg'
  },
  {
    id: 'std-double',
    title: 'Standard Double Room',
    description: 'Comfortable, spacious rooms ideal for couples or solo travellers. Includes premium bedding and tranquil garden views.',
    rate: 75,
    features: ['King-sized bed', 'Complimentary Breakfast', 'High-speed Wi-Fi', 'Tranquil garden view', 'Writing desk'],
    image: 'https://i.postimg.cc/FHPz8Cj3/153888.jpg'
  },
  {
    id: 'one-bed-cottage',
    title: 'One Bedroom Cottage',
    description: 'Private self-catering getaway surrounded by lush nature. Enjoy the perfect balance of independence and luxury.',
    rate: 90,
    features: ['Self-catering kitchen', 'Private entrance', 'Complimentary Breakfast', 'Living area', 'Garden veranda'],
    image: 'https://i.postimg.cc/FHPz8Cj3/153888.jpg'
  },
  {
    id: 'two-bed-cottage',
    title: 'Two Bedroom Cottage',
    description: 'Perfect for business or leisure travellers seeking extra space. Includes a separate lounge and shared living areas.',
    rate: 120,
    features: ['Two separate bedrooms', 'Equipped kitchenette', 'Complimentary Breakfast', 'Spacious living room', 'Private balcony'],
    image: 'https://i.postimg.cc/qvcXKrV9/154609.jpg'
  },
  {
    id: 'three-bed-cottage',
    title: 'Three Bedroom Cottage',
    description: 'Unique wooden self-catering cottage for families and groups. Completely immersed in the peaceful canopy.',
    rate: 165,
    features: ['Unique wooden architecture', 'Three full bedrooms', 'Full-sized kitchen', 'Complimentary Breakfast', 'Expansive forest veranda'],
    image: 'https://i.postimg.cc/SKrkPDHd/154618.jpg'
  }
];

export const WILD_FEATURES = [
  {
    id: 'pools',
    title: 'Swimming Pools',
    subtitle: 'Oasis of Calm',
    description: 'Two solar-heated swimming pools open daily from 6:00 AM–8:00 PM. The family pool includes a shaded toddler splash pool, making it perfect for guests of all ages. Enjoy refreshing afternoon dips in pristine, naturally heated water.',
    tagline: 'Complimentary for all residential guests.',
    image: 'https://i.postimg.cc/BnFPb09h/154620.jpg'
  },
  {
    id: 'bird-watching',
    title: 'Bird Watching',
    subtitle: 'Nature\'s Symphony',
    description: 'Forest Cottages is home to selectively planted indigenous trees attracting coloured turacos, hornbills, and more than twenty bird species. Awake to the sweet songs of nature and enjoy birdwatching directly from your veranda.',
    tagline: 'Experience birdwatching without leaving the hotel grounds.',
    image: 'https://i.postimg.cc/zBpqHV0j/154612.jpg'
  },
  {
    id: 'wellness',
    title: 'Wellness & Sauna',
    subtitle: 'Recharge Your Soul',
    description: 'Book a relaxing, therapeutic sauna session. Guests may enjoy specialized treatments inside the cosy woodland sauna or in the absolute privacy and comfort of their own room, designed to completely melt away stress.',
    tagline: 'Custom herbal treatments and massage therapies available.',
    image: 'https://i.postimg.cc/7LfRnbHc/154613.jpg'
  }
];

export const VENUES_DATA: VenueCapacity[] = [
  {
    name: 'Committee Room',
    boardroom: '10',
    uShape: '12',
    classroom: '25',
    theater: '—'
  },
  {
    name: 'Mango Hall',
    boardroom: '22',
    uShape: '30',
    classroom: '50',
    theater: '30'
  },
  {
    name: 'Ahorka Hall',
    boardroom: '50',
    uShape: '70',
    classroom: '100',
    theater: '70'
  },
  {
    name: 'Pappali Hall',
    boardroom: '140',
    uShape: '170',
    classroom: '200',
    theater: '130'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-garden-1',
    category: 'gardens',
    title: 'Lush Forest Pathway',
    description: 'Winding stone paths through mature tropical trees.',
    image: 'https://i.postimg.cc/7hjzjxjN/154616.jpg'
  },
  {
    id: 'gal-garden-2',
    category: 'gardens',
    title: 'Canopy Deck',
    description: 'An elevated wooden deck looking out into the dense green trees.',
    image: 'https://i.postimg.cc/ydM9b1Mj/154617.jpg'
  },
  {
    id: 'gal-room-1',
    category: 'rooms',
    title: 'Standard Single Room Interior',
    description: 'Warm African decor with modern, premium details.',
    image: 'https://i.postimg.cc/FHPz8Cj3/153888.jpg'
  },
  {
    id: 'gal-room-2',
    category: 'rooms',
    title: 'Three Bedroom Wooden Cottage',
    description: 'Distinctive wooden structure nestled fully in the canopy.',
    image: 'https://i.postimg.cc/SKrkPDHd/154618.jpg'
  },
  {
    id: 'gal-rest-1',
    category: 'restaurant',
    title: 'The Avocado Restaurant Patio',
    description: 'Al-fresco dining surrounded by hanging plants and warm lanterns.',
    image: 'https://i.postimg.cc/cH3yShzW/153905.jpg'
  },
  {
    id: 'gal-rest-2',
    category: 'restaurant',
    title: 'The Avocado Cocktail Bar',
    description: 'A fully stocked bar serving fresh tropical juices and signature cocktails.',
    image: 'https://i.postimg.cc/kG0MqLTz/153896.jpg'
  },
  {
    id: 'gal-pool-1',
    category: 'pools',
    title: 'Solar-Heated Main Pool',
    description: 'Crystal clear water sparkling under the Bukoto sun.',
    image: 'https://i.postimg.cc/BnFPb09h/154620.jpg'
  },
  {
    id: 'gal-pool-2',
    category: 'pools',
    title: 'Toddler Splash Pool',
    description: 'Safe, shaded, heated water for our youngest explorers.',
    image: 'https://i.postimg.cc/Dw7mvb63/154802.jpg'
  },
  {
    id: 'gal-conf-1',
    category: 'conference',
    title: 'Pappali Hall Setup',
    description: 'Spacious 200-capacity conference setting with natural light.',
    image: 'https://i.postimg.cc/44bgJ2Sz/153906.jpg'
  },
  {
    id: 'gal-wild-1',
    category: 'wildlife',
    title: 'Eastern Plantain-eater',
    description: 'One of the twenty indigenous bird species frequently spotted.',
    image: 'https://i.postimg.cc/vBb0XhLh/153904.jpg'
  },
  {
    id: 'gal-wild-2',
    category: 'wildlife',
    title: 'Sunbird in the Gardens',
    description: 'Nectar feeding birds visiting the hotel\'s blooming flora.',
    image: 'https://i.postimg.cc/rpJ1ykx7/154803.jpg'
  },
  {
    id: 'gal-wed-1',
    category: 'weddings',
    title: 'Garden Ceremony Altar',
    description: 'Romantic floral setup beneath a 100-year-old forest canopy.',
    image: 'https://i.postimg.cc/65tYXYkp/154806.jpg'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Michelle Rynearson',
    country: 'South Africa',
    rating: 5,
    text: 'An absolute oasis in Kampala. You can\'t hear the city noise at all, just birds chirping and the wind rustling through the trees. The cottages are extremely cosy and the Avocado Restaurant serves incredible fresh fish.',
    date: 'June 2026'
  },
  {
    id: 't-2',
    name: 'David Ochieng',
    country: 'Kenya',
    rating: 5,
    text: 'Hosted a 3-day workshop at Pappali Hall. Excellent conference amenities, very stable internet, and the forest setting provided an amazing breakout environment for our team. Unbeatable value in Kampala.',
    date: 'May 2026'
  },
  {
    id: 't-3',
    name: 'Sarah & Arthur Kato',
    country: 'Uganda',
    rating: 5,
    text: 'We had our wedding reception in the gardens here. Truly magical! The staff was highly professional, the food was exquisite, and the mature forest trees made for breathtaking wedding photos. Highly recommend!',
    date: 'April 2026'
  }
];
