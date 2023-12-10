import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
  facilityHighlights = [
    {
      category: 'Accommodation Types',
      details: [
        { name: 'Dormitories', icon: 'hotel' },
        { name: 'Private Rooms', icon: 'meeting_room' },
        { name: 'Suites', icon: 'room_service' },
        { name: 'Unique Lodging (Pods, Themed Rooms)', icon: 'emoji_objects' }
      ]
    },
    {
      category: 'Common Areas',
      details: [
        { name: 'Lounge Areas', icon: 'meeting_room' },
        { name: 'TV Rooms', icon: 'tv' },
        { name: 'Reading Corners', icon: 'book' }
      ]
    },
    {
      category: 'Kitchen Facilities',
      details: [
        { name: 'Fully equipped communal kitchens', icon: 'kitchen' }
      ]
    },
    {
      category: 'Laundry Services',
      details: [
        { name: 'Self-service or on-site laundry facilities', icon: 'local_laundry_service' }
      ]
    },
    {
      category: 'Security Measures',
      details: [
        { name: 'Lockers', icon: 'lock' },
        { name: '24/7 Staff', icon: 'security' },
        { name: 'CCTV Surveillance', icon: 'visibility' }
      ]
    },
    {
      category: 'Connectivity',
      details: [
        { name: 'Free Wi-Fi', icon: 'wifi' },
        { name: 'Internet Access', icon: 'public' }
      ]
    },
    {
      category: 'Parking and Bike Storage',
      details: [
        { name: 'On-site Parking', icon: 'local_parking' },
        { name: 'Bicycle Storage or Rentals', icon: 'directions_bike' }
      ]
    },
    {
      category: 'Accessibility Features',
      details: [
        { name: 'Wheelchair Accessible Rooms', icon: 'accessible' },
        { name: 'Ramps', icon: 'accessible_forward' }
      ]
    }
  ];
  
  socialSpacesActivities = [
    {
      category: 'Communal Areas',
      details: [
        { name: 'Inviting common spaces for socializing', icon: 'people' }
      ]
    },
    {
      category: 'Events and Gatherings',
      details: [
        { name: 'Regularly organized social events', icon: 'event' },
        { name: 'Movie nights', icon: 'local_movies' },
        { name: 'Cultural gatherings', icon: 'public' }
      ]
    },
    {
      category: 'Tours and Activities',
      details: [
        { name: 'Guided tours', icon: 'tour' },
        { name: 'City walks', icon: 'directions_walk' },
        { name: 'Adventure outings', icon: 'directions_bike' }
      ]
    },
    {
      category: 'Workshops or Classes',
      details: [
        { name: 'Language classes', icon: 'language' },
        { name: 'Cooking workshops', icon: 'restaurant' },
        { name: 'Local cultural activities', icon: 'public' }
      ]
    },
    {
      category: 'Outdoor Spaces',
      details: [
        { name: 'Garden', icon: 'grass' },
        { name: 'Terrace', icon: 'terrain' },
        { name: 'BBQ area for social gatherings', icon: 'local_bar' }
      ]
    },
    {
      category: 'Games and Entertainment',
      details: [
        { name: 'Board games', icon: 'casino' },
        { name: 'Pool table', icon: 'brightness_1' },
        { name: 'Gaming consoles', icon: 'sports_esports' }
      ]
    },
    {
      category: 'Community Engagement',
      details: [
        { name: 'Volunteering opportunities', icon: 'volunteer_activism' },
        { name: 'Partnerships with local organizations', icon: 'group' }
      ]
    }
  ];
  
  services = [
    {
      category: 'Breakfast Options',
      details: [
        { name: 'Continental', icon: 'free_breakfast' },
        { name: 'Buffet', icon: 'restaurant' },
        { name: 'Grab-and-Go Breakfast', icon: 'fastfood' }
      ]
    },
    {
      category: 'Luggage Storage',
      details: [
        { name: 'Secure storage facilities for luggage before check-in or after check-out', icon: 'lock' }
      ]
    },
    {
      category: 'Airport Transfers',
      details: [
        { name: 'Shuttle services or arrangements for airport transfers', icon: 'airport_shuttle' }
      ]
    },
    {
      category: 'Bike Rentals',
      details: [
        { name: 'Rental services for exploring the city on bikes', icon: 'pedal_bike' }
      ]
    },
    {
      category: '24/7 Reception Desk',
      details: [
        { name: 'Round-the-clock assistance and information', icon: 'support_agent' }
      ]
    },
    {
      category: 'Concierge Services',
      details: [
        { name: 'Recommendations, bookings, or assistance for local attractions', icon: 'local_play' }
      ]
    },
    {
      category: 'Cleaning and Hygiene',
      details: [
        { name: 'Enhanced cleaning protocols', icon: 'cleaning_services' },
        { name: 'Sanitation measures', icon: 'sanitizer' },
        { name: 'Hygiene practices', icon: 'line_style' }
      ]
    },
    {
      category: 'Additional Amenities',
      details: [
        { name: 'Towel Rentals', icon: 'local_laundry_service' },
        { name: 'Hairdryers', icon: 'dry' },
        { name: 'Ironing Facilities', icon: 'iron' }
      ]
    }
  ];
  constructor() { }

  get getHighLights() {
    return this.facilityHighlights;
  }

  get getSocialSpacesActivities() {
    return this.socialSpacesActivities;
  }

  get getServices() {
    return this.services;
  }
}
