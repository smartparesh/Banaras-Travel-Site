
import React from 'react';
import { Page, City } from '../types';
import { tourData } from '../constants';
import { MapPinIcon, CalendarDaysIcon, StarIcon } from '../components/Icons';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex justify-center items-center mb-4 text-orange-500">
            {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const CityPreviewCard: React.FC<{ city: City, onNavigate: (page: Page) => void }> = ({ city, onNavigate }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
        <img src={`https://picsum.photos/400/250?random=${city.name}`} alt={city.name} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{city.name}</h3>
            <p className="text-gray-600 mb-4">{city.tagline}</p>
            <button
                onClick={() => onNavigate(city.name)}
                className="text-orange-500 font-semibold group-hover:text-orange-600 transition-colors"
            >
                Explore City →
            </button>
        </div>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section 
        className="relative text-white text-center py-20 md:py-32 rounded-lg overflow-hidden"
        style={{ backgroundImage: 'url(https://picsum.photos/1200/500?image=1074)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Discover the Spiritual Triangle
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Embark on a 5-day journey through Varanasi, Ayodhya, and Lucknow – a tour of faith, history, and culture.
          </p>
          <button
            onClick={() => onNavigate('Itinerary')}
            className="bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
          >
            View 5-Day Itinerary
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section>
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Why Plan Your Trip With Us?</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We provide accurate, verified, and user-friendly information to make your spiritual journey seamless and memorable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                  icon={<CalendarDaysIcon className="h-12 w-12"/>}
                  title="Detailed Itinerary" 
                  description="A step-by-step 5-day plan with timings, tips, and suggestions for a hassle-free tour."
              />
              <FeatureCard 
                  icon={<StarIcon className="h-12 w-12"/>}
                  title="Verified Information" 
                  description="Handpicked hotels and taxi services with high ratings (4.0+) to ensure quality and safety."
              />
              <FeatureCard 
                  icon={<MapPinIcon className="h-12 w-12"/>}
                  title="In-Depth City Guides" 
                  description="Comprehensive guides on places to visit, local food, and markets for each city."
              />
          </div>
      </section>

      {/* City Previews Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Explore the Cities</h2>
          <p className="text-gray-600 mt-2">Discover the unique charm of each destination.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {tourData.cities.map(city => (
                <CityPreviewCard key={city.name} city={city} onNavigate={onNavigate} />
            ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-orange-100 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let us help you plan an unforgettable trip. Get in touch with our experts for a customized tour plan.
          </p>
          <button
            onClick={() => onNavigate('Contact')}
            className="bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
          >
            Plan My Trip
          </button>
      </section>
    </div>
  );
};

export default HomePage;
