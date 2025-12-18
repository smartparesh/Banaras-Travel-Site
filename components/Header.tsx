
import React, { useState } from 'react';
import { Page } from '../types';
import { MapPinIcon, Bars3Icon, XMarkIcon } from './Icons';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
    page: Page;
    currentPage: Page;
    onNavigate: (page: Page) => void;
    children: React.ReactNode;
    isMobile?: boolean;
}> = ({ page, currentPage, onNavigate, children, isMobile = false }) => {
  const isActive = currentPage === page;
  const baseClasses = "cursor-pointer font-medium transition-colors duration-300";
  const mobileClasses = "block px-4 py-3 text-lg";
  const desktopClasses = "px-3 py-2 rounded-md";
  const activeClasses = "text-orange-500";
  const inactiveClasses = "text-gray-600 hover:text-orange-500";

  return (
    <a
      onClick={(e) => {
          e.preventDefault();
          onNavigate(page);
      }}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { page: Page; label: string }[] = [
    { page: 'Home', label: 'Home' },
    { page: 'Itinerary', label: 'Itinerary' },
    { page: 'Hotels', label: 'Hotels' },
    { page: 'Food', label: 'Food & Markets' },
    { page: 'Taxis', label: 'Taxis' },
    { page: 'Contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('Home')}
          >
            <MapPinIcon className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-800">Spiritual Triangle</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map(link => (
              <NavLink key={link.page} page={link.page} currentPage={currentPage} onNavigate={onNavigate}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden lg:block">
            <button 
              onClick={() => onNavigate('Contact')}
              className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-sm"
            >
              Enquire Now
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
              {isMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-4">
            {navLinks.map(link => (
              <NavLink 
                key={link.page} 
                page={link.page} 
                currentPage={currentPage} 
                onNavigate={(page) => {
                  onNavigate(page);
                  setIsMenuOpen(false);
                }} 
                isMobile
              >
                {link.label}
              </NavLink>
            ))}
             <div className="px-4 mt-4">
                <button 
                  onClick={() => {
                      onNavigate('Contact');
                      setIsMenuOpen(false);
                  }}
                  className="w-full bg-orange-500 text-white font-semibold px-5 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-sm text-center"
                >
                  Enquire Now
                </button>
             </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
