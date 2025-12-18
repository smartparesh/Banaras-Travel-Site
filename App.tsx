
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ItineraryPage from './pages/ItineraryPage';
import CityGuidePage from './pages/CityGuidePage';
import HotelsPage from './pages/HotelsPage';
import FoodPage from './pages/FoodPage';
import TaxisPage from './pages/TaxisPage';
import ContactPage from './pages/ContactPage';
import { tourData } from './constants';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'Itinerary':
        return <ItineraryPage />;
      case 'Varanasi':
        return <CityGuidePage city={tourData.cities[0]} />;
      case 'Ayodhya':
        return <CityGuidePage city={tourData.cities[1]} />;
      case 'Lucknow':
        return <CityGuidePage city={tourData.cities[2]} />;
      case 'Hotels':
        return <HotelsPage cities={tourData.cities} />;
      case 'Food':
        return <FoodPage cities={tourData.cities} />;
      case 'Taxis':
        return <TaxisPage taxis={tourData.taxis} />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
