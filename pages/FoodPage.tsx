
import React, { useState } from 'react';
import { City, FoodItem, Restaurant } from '../types';

const FoodItemCard: React.FC<{ item: FoodItem }> = ({ item }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
        <h4 className="font-bold text-orange-700">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.description}</p>
    </div>
);

const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 ${
            restaurant.type === 'Veg' ? 'bg-green-500' : 
            restaurant.type === 'Non-Veg' ? 'bg-red-500' : 
            restaurant.type === 'Both' ? 'bg-blue-500' : 'bg-yellow-500'
        }`}>
            {restaurant.type.charAt(0)}
        </div>
        <div>
            <h4 className="font-semibold text-gray-800">{restaurant.name}</h4>
            <p className="text-sm text-gray-600">{restaurant.specialty}</p>
        </div>
    </div>
);

interface FoodPageProps {
  cities: City[];
}

const FoodPage: React.FC<FoodPageProps> = ({ cities }) => {
    const [selectedCity, setSelectedCity] = useState<string>(cities[0].name);

    const activeCity = cities.find(c => c.name === selectedCity);

    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Food & Markets Guide</h1>
                <p className="text-gray-600 mt-2">A culinary and shopping guide to the cities of the Spiritual Triangle.</p>
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

            {activeCity && (
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Must-Try Local Food</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeCity.food.mustTry.map(item => (
                                <FoodItemCard key={item.name} item={item} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Restaurants</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {activeCity.food.restaurants.map(restaurant => (
                                <RestaurantCard key={restaurant.name} restaurant={restaurant} />
                            ))}
                        </div>
                    </section>

                     <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Markets</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {activeCity.markets.map(market => (
                               <div key={market.name} className="bg-white p-4 rounded-lg shadow-sm border">
                                    <h4 className="font-semibold text-gray-800">{market.name}</h4>
                                    <p className="text-sm text-gray-600 mt-1">Known for: {market.knownFor.join(', ')}</p>
                                    <p className="text-xs text-gray-500 mt-2">Timings: {market.timings}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default FoodPage;
