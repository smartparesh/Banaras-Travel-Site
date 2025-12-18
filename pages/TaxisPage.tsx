
import React from 'react';
import { TaxiService } from '../types';
import { PhoneIcon, StarIcon } from '../components/Icons';

const TaxiCard: React.FC<{ service: TaxiService }> = ({ service }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
        <p className="text-sm text-gray-500 mb-4">Coverage: {service.coverage}</p>
        
        {service.rating && service.reviews && (
             <div className="flex items-center text-sm text-gray-600 mb-4">
                <StarIcon className="h-5 w-5 text-yellow-500 mr-1"/>
                <span className="font-semibold">{service.rating}</span>
                <span className="mx-2">|</span>
                <span>{service.reviews} reviews</span>
            </div>
        )}

        <div className="flex items-center justify-between mt-4 border-t pt-4">
             <div className="flex items-center text-gray-700">
                <PhoneIcon className="h-5 w-5 mr-2"/>
                <span className="font-mono">{service.contact}</span>
            </div>
            <a 
                href={`tel:${service.contact.replace(/[^0-9+]/g, '')}`}
                className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm"
            >
                Book Taxi
            </a>
        </div>
    </div>
);

interface TaxisPageProps {
  taxis: TaxiService[];
}

const TaxisPage: React.FC<TaxisPageProps> = ({ taxis }) => {
    const govServices = taxis.filter(t => t.category === 'Government Authorized');
    const privateServices = taxis.filter(t => t.category === 'Private Cab');

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Taxi & Cab Services</h1>
                <p className="text-gray-600 mt-2">Verified and highly-rated taxi services for your convenience.</p>
                <p className="text-sm text-red-500 mt-2">⚠️ Note: Always confirm fares before starting your trip. Contact numbers are for representation; please verify from official sources.</p>
            </div>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-3 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Government Authorized Services
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {govServices.map(service => <TaxiCard key={service.name} service={service} />)}
                    </div>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <StarIcon className="w-7 h-7 mr-3 text-yellow-500"/>
                        Popular Private Cab Drivers (4.2+ Rating)
                    </h2>
                     <div className="grid md:grid-cols-2 gap-8">
                        {privateServices.map(service => <TaxiCard key={service.name} service={service} />)}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TaxisPage;
