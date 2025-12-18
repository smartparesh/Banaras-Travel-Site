
import React from 'react';
import { City, Place, Market } from '../types';
import { ClockIcon, CalendarDaysIcon, MapPinIcon } from '../components/Icons';

const PlaceCard: React.FC<{ place: Place }> = ({ place }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{place.name}</h3>
            <p className="text-gray-600 mb-4 text-sm">{place.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
                <div className="flex items-center">
                    <CalendarDaysIcon className="h-4 w-4 mr-1" />
                    <span>{place.bestTimeToVisit}</span>
                </div>
                <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{place.visitingTime}</span>
                </div>
            </div>
        </div>
    </div>
);

const MarketCard: React.FC<{ market: Market }> = ({ market }) => (
     <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <img src={market.image} alt={market.name} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{market.name}</h3>
            <p className="text-gray-600 text-sm mb-2"><span className="font-semibold">What to buy:</span> {market.knownFor.join(', ')}</p>
            <div className="flex items-center text-sm text-gray-500">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>Timings: {market.timings}</span>
            </div>
        </div>
    </div>
);


interface CityGuidePageProps {
  city: City;
}

const CityGuidePage: React.FC<CityGuidePageProps> = ({ city }) => {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">{city.name}</h1>
        <p className="text-xl text-gray-500 mt-2">{city.tagline}</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <MapPinIcon className="h-8 w-8 mr-3 text-orange-500"/>
            Tourist Places to Visit
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {city.places.map(place => (
            <PlaceCard key={place.name} place={place} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-3 text-orange-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A.75.75 0 0 1 14.25 12h.75c.414 0 .75.336.75.75v7.5m0 0a.75.75 0 0 0 .75-.75V12a3 3 0 0 0-3-3H9.75a3 3 0 0 0-3 3v8.25a.75.75 0 0 0 .75.75h3.75a.75.75 0 0 0 .75-.75Zm-3.75 0h3.75M9 12.75h.008v.008H9v-.008Zm1.5 0h.008v.008H10.5v-.008Zm1.5 0h.008v.008H12v-.008Zm1.5 0h.008v.008H13.5v-.008Zm1.5 0h.008v.008H15v-.008Zm1.5 0h.008v.008H16.5v-.008Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-7.5a.75.75 0 0 1 .75-.75h.75c.414 0 .75.336.75.75v7.5m0 0a.75.75 0 0 0 .75-.75V12a3 3 0 0 0-3-3H3.75a3 3 0 0 0-3 3v8.25a.75.75 0 0 0 .75.75h3.75a.75.75 0 0 0 .75-.75Zm-3.75 0h3.75" />
            </svg>
            Popular Markets & Shopping
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.markets.map(market => (
                <MarketCard key={market.name} market={market} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default CityGuidePage;
