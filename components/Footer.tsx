
import React from 'react';
import { Page } from '../types';
import { MapPinIcon } from './Icons';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const FooterLink: React.FC<{ page: Page, onNavigate: (page: Page) => void, children: React.ReactNode }> = ({ page, onNavigate, children }) => (
    <a
        href="#"
        onClick={(e) => { e.preventDefault(); onNavigate(page); }}
        className="text-gray-500 hover:text-orange-500 transition-colors duration-300"
    >
        {children}
    </a>
);


const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
             <div 
                className="flex items-center space-x-2 cursor-pointer mb-4"
                onClick={() => onNavigate('Home')}
            >
                <MapPinIcon className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold text-gray-800">Spiritual Triangle</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Your trusted guide to exploring the spiritual heart of India. Plan your perfect 5-day trip to Varanasi, Ayodhya, and Lucknow.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><FooterLink page="Home" onNavigate={onNavigate}>Home</FooterLink></li>
              <li><FooterLink page="Itinerary" onNavigate={onNavigate}>Itinerary</FooterLink></li>
              <li><FooterLink page="Hotels" onNavigate={onNavigate}>Hotels</FooterLink></li>
              <li><FooterLink page="Taxis" onNavigate={onNavigate}>Taxi Services</FooterLink></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">City Guides</h3>
            <ul className="space-y-2">
              <li><FooterLink page="Varanasi" onNavigate={onNavigate}>Varanasi</FooterLink></li>
              <li><FooterLink page="Ayodhya" onNavigate={onNavigate}>Ayodhya</FooterLink></li>
              <li><FooterLink page="Lucknow" onNavigate={onNavigate}>Lucknow</FooterLink></li>
              <li><FooterLink page="Contact" onNavigate={onNavigate}>Contact Us</FooterLink></li>
            </ul>
          </div>

        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Spiritual Triangle Tours. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
