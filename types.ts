
export type Page = 'Home' | 'Itinerary' | 'Varanasi' | 'Ayodhya' | 'Lucknow' | 'Hotels' | 'Food' | 'Taxis' | 'Contact';

export interface Place {
  name: string;
  description: string;
  bestTimeToVisit: string;
  visitingTime: string;
  image: string;
}

export interface Market {
  name: string;
  knownFor: string[];
  timings: string;
  image: string;
}

export interface FoodItem {
  name: string;
  description: string;
  type: 'dish' | 'street-food' | 'sweet';
}

export interface Restaurant {
    name: string;
    specialty: string;
    type: 'Veg' | 'Non-Veg' | 'Both' | 'Sweet Shop';
}

export interface FoodGuide {
    mustTry: FoodItem[];
    restaurants: Restaurant[];
}

export interface Hotel {
  name: string;
  location: string;
  priceRange: string;
  rating: number;
  suitableFor: string;
  category: 'Budget' | 'Mid-Range' | 'Premium';
}

export interface ItineraryDay {
  day: number;
  title: string;
  city: string;
  schedule: {
    time: string;
    activity: string;
    details: string;
  }[];
  tip: string;
}

export interface TaxiService {
    name: string;
    contact: string;
    coverage: string;
    rating?: string;
    reviews?: string;
    category: 'Government Authorized' | 'Private Cab';
}

export interface City {
  name: 'Varanasi' | 'Ayodhya' | 'Lucknow';
  tagline: string;
  duration: string;
  places: Place[];
  markets: Market[];
  food: FoodGuide;
  hotels: Hotel[];
}

export interface TourData {
    itinerary: ItineraryDay[];
    cities: City[];
    taxis: TaxiService[];
}
