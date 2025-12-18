
import React, { useState } from 'react';
import { ItineraryDay } from '../types';
import { tourData } from '../constants';

const ItineraryDayCard: React.FC<{ day: ItineraryDay, isOpen: boolean, onToggle: () => void }> = ({ day, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 focus:outline-none"
      >
        <div className="flex items-center">
          <div className="bg-orange-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-4">
            {day.day}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Day {day.day}: {day.title}</h3>
            <p className="text-sm text-gray-500">{day.city}</p>
          </div>
        </div>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      
      {isOpen && (
        <div className="p-6 border-t border-gray-200">
          <div className="space-y-4">
            {day.schedule.map((item, index) => (
              <div key={index} className="flex">
                <div className="w-1/4 md:w-1/6 font-semibold text-gray-700">{item.time}</div>
                <div className="w-3/4 md:w-5/6">
                  <p className="font-medium text-gray-800">{item.activity}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-lg">
            <p className="font-semibold text-orange-800">Travel Tip:</p>
            <p className="text-orange-700 text-sm">{day.tip}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ItineraryPage: React.FC = () => {
    const [openDay, setOpenDay] = useState<number | null>(1);

    const toggleDay = (dayNumber: number) => {
        setOpenDay(openDay === dayNumber ? null : dayNumber);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">5-Day Spiritual Tour Itinerary</h1>
                <p className="text-gray-600 mt-2">A detailed plan for your journey through Varanasi, Ayodhya, and Lucknow.</p>
            </div>
            <div className="space-y-4">
                {tourData.itinerary.map(day => (
                    <ItineraryDayCard 
                        key={day.day} 
                        day={day} 
                        isOpen={openDay === day.day}
                        onToggle={() => toggleDay(day.day)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ItineraryPage;
