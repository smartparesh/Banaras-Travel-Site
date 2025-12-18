
import React, { useState } from 'react';
import { City, Hotel } from '../types';
import { StarIcon, MapPinIcon } from '../components/Icons';

const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <div className="p-6">
            <div className="flex justify-between items-start">
                <div>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        hotel.category === 'Budget' ? 'bg-green-100 text-green-800' :
                        hotel.category === 'Mid-Range' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                    }`}>{hotel.category}</span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2">{hotel.name}</h3>
                </div>
                <div className="flex items-center bg-yellow-400 text-white px-2 py-1 rounded-md text-sm font-bold">
                    <StarIcon className="h-4 w-4 mr-1"/>
                    <span>{hotel.rating.toFixed(1)}</span>
                </div>
            </div>
            
            <div className="text-sm text-gray-500 mt-3 space-y-2">
                <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    <span>{hotel.location}</span>
                </div>
                <div className="flex items-center">
                    <span className="font-bold text-lg mr-2">₹</span>
                    <span>Price Range: {hotel.priceRange}</span>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <span>Suitable for: {hotel.suitableFor}</span>
                </div>
            </div>
        </div>
    </div>
);


interface HotelsPageProps {
  cities: City[];
}

const HotelsPage: React.FC<HotelsPageProps> = ({ cities }) => {
    const [selectedCity, setSelectedCity] = useState<string>(cities[0].name);

    const activeCity = cities.find(c => c.name === selectedCity);
    const hotels = activeCity ? activeCity.hotels : [];

    const budgetHotels = hotels.filter(h => h.category === 'Budget');
    const midRangeHotels = hotels.filter(h => h.category === 'Mid-Range');
    const premiumHotels = hotels.filter(h => h.category === 'Premium');

    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Hotels & Stay Options</h1>
                <p className="text-gray-600 mt-2">Verified hotels with 4.0+ ratings for a comfortable stay.</p>
            </div>

            <div className="flex justify-center mb-8 bg-gray-100 p-2 rounded-full">
                {cities.map(city => (
                    <button
                        key={city.name}
                        onClick={() => setSelectedCity(city.name)}
                        className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                            selectedCity === city.name ? 'bg-orange-500 text-white shadow' : 'text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {city.name}
                    </button>
                ))}
            </div>

            <div className="space-y-12">
                {budgetHotels.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-400 pb-2">Budget Hotels</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {budgetHotels.map(hotel => <HotelCard key={hotel.name} hotel={hotel} />)}
                        </div>
                    </section>
                )}

                {midRangeHotels.length > 0 && (
                     <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-400 pb-2">Mid-Range Hotels</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {midRangeHotels.map(hotel => <HotelCard key={hotel.name} hotel={hotel} />)}
                        </div>
                    </section>
                )}
                
                {premiumHotels.length > 0 && (
                     <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-purple-400 pb-2">Premium Hotels</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {premiumHotels.map(hotel => <HotelCard key={hotel.name} hotel={hotel} />)}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default HotelsPage;
