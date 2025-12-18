
import { TourData } from './types';

export const tourData: TourData = {
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Varanasi & Spiritual Immersion',
      city: 'Varanasi',
      schedule: [
        { time: '12:00 PM', activity: 'Arrival & Hotel Check-in', details: 'Arrive at Varanasi Airport/Railway Station and transfer to your hotel.' },
        { time: '02:00 PM', activity: 'Lunch', details: 'Enjoy a traditional lunch at a local restaurant.' },
        { time: '04:00 PM', activity: 'Sarnath Visit', details: 'Explore the Dhamek Stupa, Chaukhandi Stupa, and the Sarnath Museum where Buddha gave his first sermon.' },
        { time: '06:00 PM', activity: 'Ganga Aarti Ceremony', details: 'Witness the spectacular Ganga Aarti at Dashashwamedh Ghat. A mesmerizing spiritual experience.' },
        { time: '08:30 PM', activity: 'Dinner', details: 'Dine at a restaurant overlooking the Ganges.' },
      ],
      tip: 'Book a boat ride for a stunning view of the Aarti from the river. Arrive early to get a good spot.'
    },
    {
      day: 2,
      title: 'Varanasi Ghats, Temples & Culture',
      city: 'Varanasi',
      schedule: [
        { time: '05:30 AM', activity: 'Sunrise Boat Ride', details: 'Experience a serene boat ride on the Ganges, witnessing morning rituals along the ghats.' },
        { time: '08:00 AM', activity: 'Temple Visits', details: 'Visit the Kashi Vishwanath Temple (one of the 12 Jyotirlingas), Annapurna Temple, and Sankat Mochan Hanuman Temple.' },
        { time: '12:00 PM', activity: 'Lunch', details: 'Savor some local Varanasi cuisine.' },
        { time: '02:00 PM', activity: 'Banaras Hindu University (BHU)', details: 'Explore the sprawling campus and visit the New Vishwanath Temple (Birla Temple).' },
        { time: '05:00 PM', activity: 'Explore Local Markets', details: 'Walk through the narrow lanes, visit Vishwanath Gali and Thatheri Bazar for silk sarees and handicrafts.' },
        { time: '08:00 PM', activity: 'Dinner', details: 'Enjoy dinner at a specialty restaurant.' },
      ],
      tip: 'Dress modestly when visiting temples. Be prepared for crowds, especially at Kashi Vishwanath Temple.'
    },
    {
        day: 3,
        title: 'Varanasi Exploration & Departure Prep',
        city: 'Varanasi',
        schedule: [
            { time: '08:00 AM', activity: 'Breakfast & Ghat Walk', details: 'After breakfast, take a leisurely walk along the different ghats like Assi Ghat and Manikarnika Ghat (from a distance).' },
            { time: '11:00 AM', activity: 'Ramnagar Fort', details: 'Visit the 18th-century fort and palace on the eastern bank of the Ganges. It houses a museum with a rare collection.' },
            { time: '01:30 PM', activity: 'Lunch', details: 'Have lunch near the fort area or back in the city.' },
            { time: '03:00 PM', activity: 'Free Time / Shopping', details: 'Last-minute souvenir shopping or relax at the hotel.' },
            { time: '07:00 PM', activity: 'Classical Music/Dance Performance', details: 'Optional: Attend a classical performance to experience Varanasi\'s cultural heritage.' },
            { time: '08:30 PM', activity: 'Dinner', details: 'Enjoy your final dinner in the holy city.' },
        ],
        tip: 'Bargaining is common in local markets. Check the authenticity of silk products before buying.'
    },
    {
      day: 4,
      title: 'Journey to Ayodhya, the Birthplace of Lord Ram',
      city: 'Ayodhya',
      schedule: [
        { time: '07:00 AM', activity: 'Travel to Ayodhya', details: 'After an early breakfast, check out and drive to Ayodhya (approx. 4-5 hours).' },
        { time: '12:00 PM', activity: 'Hotel Check-in & Lunch', details: 'Check into your hotel in Ayodhya and have lunch.' },
        { time: '02:00 PM', activity: 'Ram Janmabhoomi', details: 'Visit the sacred site of Ram Janmabhoomi and the magnificent new temple.' },
        { time: '04:00 PM', activity: 'Hanuman Garhi', details: 'A 10th-century temple dedicated to Lord Hanuman, located in a fortress. Climb the 76 steps for a panoramic view.' },
        { time: '06:00 PM', activity: 'Saryu River Aarti', details: 'Witness the serene Aarti ceremony on the banks of the Saryu River.' },
        { time: '08:00 PM', activity: 'Dinner', details: 'Dine and rest for the night.' },
      ],
      tip: 'Photography might be restricted in some areas of Ram Janmabhoomi. Follow all security guidelines.'
    },
    {
      day: 5,
      title: 'Ayodhya Sights & Travel to Lucknow',
      city: 'Lucknow',
      schedule: [
        { time: '08:00 AM', activity: 'Kanak Bhawan & Other Temples', details: 'Visit Kanak Bhawan, said to be a gift from Kaikeyi to Sita, and other local temples.' },
        { time: '10:00 AM', activity: 'Travel to Lucknow', details: 'Check out from the hotel and drive to Lucknow (approx. 2-3 hours).' },
        { time: '01:00 PM', activity: 'Lunch in Lucknow', details: 'Arrive in Lucknow and savor the famous Awadhi cuisine for lunch.' },
        { time: '02:30 PM', activity: 'Bara Imambara & Bhulbhulaiya', details: 'Explore the architectural marvel of Bara Imambara and its intriguing labyrinth, Bhulbhulaiya.' },
        { time: '05:00 PM', activity: 'Chota Imambara', details: 'Visit the "Palace of Lights," known for its beautiful chandeliers.' },
        { time: '06:30 PM', activity: 'Departure', details: 'Transfer to Lucknow Airport/Railway Station for your onward journey, concluding the tour.' },
      ],
      tip: 'Hire a guide at Bhulbhulaiya to navigate the maze and learn about its history. Don\'t miss trying the Tunday Kababi in Lucknow.'
    }
  ],
  cities: [
    {
      name: 'Varanasi',
      tagline: 'The Spiritual Capital of India',
      duration: '3 Days',
      places: [
        { name: 'Kashi Vishwanath Temple', description: 'One of the most famous Hindu temples dedicated to Lord Shiva, located on the western bank of the river Ganga.', bestTimeToVisit: 'Early morning', visitingTime: '2-3 Hours', image: 'https://picsum.photos/400/300?random=1' },
        { name: 'Dashashwamedh Ghat', description: 'The main ghat in Varanasi, famous for its spectacular evening Ganga Aarti ceremony.', bestTimeToVisit: 'Evening (for Aarti)', visitingTime: '1-2 Hours', image: 'https://picsum.photos/400/300?random=2' },
        { name: 'Sarnath', description: 'A significant Buddhist pilgrimage site where Lord Buddha delivered his first sermon after attaining enlightenment.', bestTimeToVisit: 'October to March', visitingTime: '3-4 Hours', image: 'https://picsum.photos/400/300?random=3' },
        { name: 'Assi Ghat', description: 'A vibrant ghat known for its morning yoga sessions and cultural events, located at the confluence of rivers Ganga and Assi.', bestTimeToVisit: 'Early morning or evening', visitingTime: '1 Hour', image: 'https://picsum.photos/400/300?random=4' },
      ],
      markets: [
        { name: 'Vishwanath Gali', knownFor: ['Religious items', 'Sweets', 'Wooden toys'], timings: '10 AM - 9 PM', image: 'https://picsum.photos/400/300?random=5' },
        { name: 'Thatheri Bazar', knownFor: ['Banarasi Silk Sarees', 'Brocades', 'Copperware'], timings: '11 AM - 9 PM', image: 'https://picsum.photos/400/300?random=6' },
        { name: 'Godowlia Market', knownFor: ['Clothing', 'Home decor', 'Hardware'], timings: '10 AM - 10 PM', image: 'https://picsum.photos/400/300?random=7' },
      ],
      food: {
          mustTry: [
              { name: 'Kachori Sabzi', description: 'A popular breakfast dish of crispy kachoris served with a spicy potato curry.', type: 'street-food'},
              { name: 'Lassi', description: 'Thick, creamy yogurt-based drink, often served in an earthen pot (kulhad).', type: 'dish'},
              { name: 'Banarasi Paan', description: 'A special betel leaf preparation famous throughout India.', type: 'street-food'},
          ],
          restaurants: [
              { name: 'Kashi Chat Bhandar', specialty: 'Famous for its chaat items like Tamatar Chaat.', type: 'Veg'},
              { name: 'Deena Chaat Bhandar', specialty: 'Another legendary spot for authentic Varanasi chaat.', type: 'Veg'},
              { name: 'Blue Lassi Shop', specialty: 'Offers over 80 varieties of lassi.', type: 'Veg'},
              { name: 'Shree Cafe', specialty: 'Known for vegetarian thalis and a calm atmosphere.', type: 'Veg'}
          ]
      },
      hotels: [
        { name: 'GoStops Varanasi', location: 'Near Dashashwamedh Ghat', priceRange: '₹800 - ₹2,000', rating: 4.3, suitableFor: 'Budget / Solo', category: 'Budget' },
        { name: 'Hotel Alka', location: 'Meer Ghat', priceRange: '₹3,000 - ₹5,000', rating: 4.1, suitableFor: 'Family / Mid-Range', category: 'Mid-Range' },
        { name: 'Brijrama Palace', location: 'Darbhanga Ghat', priceRange: '₹25,000+', rating: 4.6, suitableFor: 'Premium / Luxury', category: 'Premium' },
      ]
    },
    {
      name: 'Ayodhya',
      tagline: 'The Sacred Birthplace of Lord Rama',
      duration: '1 Day',
      places: [
        { name: 'Ram Janmabhoomi Temple', description: 'The site of the magnificent temple dedicated to Lord Ram, a major pilgrimage site for Hindus.', bestTimeToVisit: 'Morning or Afternoon', visitingTime: '2-3 Hours', image: 'https://picsum.photos/400/300?random=8' },
        { name: 'Hanuman Garhi', description: 'A 10th-century temple of Lord Hanuman. It is customary to visit here before visiting the Ram Temple.', bestTimeToVisit: 'Anytime', visitingTime: '1 Hour', image: 'https://picsum.photos/400/300?random=9' },
        { name: 'Kanak Bhawan', description: 'Known as the "Golden House", this temple was gifted to Goddess Sita by Queen Kaikeyi and houses beautiful idols of Ram and Sita.', bestTimeToVisit: 'Anytime', visitingTime: '1 Hour', image: 'https://picsum.photos/400/300?random=10' },
        { name: 'Saryu Ghat', description: 'The banks of the sacred Saryu River, where devotees take holy dips. The evening Aarti is a peaceful experience.', bestTimeToVisit: 'Evening (for Aarti)', visitingTime: '1 Hour', image: 'https://picsum.photos/400/300?random=11' },
      ],
      markets: [
        { name: 'Terhi Bazar', knownFor: ['Religious idols', 'Pooja items', 'Local sweets'], timings: '9 AM - 8 PM', image: 'https://picsum.photos/400/300?random=12' },
      ],
      food: {
        mustTry: [
            { name: 'Tehri', description: 'A simple yet flavorful one-pot rice dish cooked with vegetables and spices.', type: 'dish'},
            { name: 'Laddoo', description: 'Classic Indian sweets are a popular offering and Prasad in Ayodhya.', type: 'sweet'},
        ],
        restaurants: [
            { name: 'Chandra Marwadi Bhojnalaya', specialty: 'Authentic vegetarian Rajasthani and North Indian thalis.', type: 'Veg'},
            { name: 'The Ramayana Hotel Restaurant', specialty: 'Multi-cuisine vegetarian dining.', type: 'Veg'},
            { name: 'Amma Ki Rasoi', specialty: 'Homely vegetarian food.', type: 'Veg'}
        ]
      },
      hotels: [
        { name: 'Hotel Ramprastha', location: 'Near Ram Janmabhoomi', priceRange: '₹2,000 - ₹4,000', rating: 4.0, suitableFor: 'Budget / Family', category: 'Budget' },
        { name: 'The Ramayana Hotel', location: 'Bypass Road', priceRange: '₹5,000 - ₹8,000', rating: 4.2, suitableFor: 'Family / Mid-Range', category: 'Mid-Range' },
        { name: 'Cygnett Collection Hotel', location: 'Deokali', priceRange: '₹8,000+', rating: 4.5, suitableFor: 'Premium', category: 'Premium' },
      ]
    },
    {
      name: 'Lucknow',
      tagline: 'The City of Nawabs',
      duration: '1 Day',
      places: [
        { name: 'Bara Imambara', description: 'A grand complex including a large mosque, courtyards, and the famous Bhulbhulaiya (labyrinth). Known for its unsupported vaulted hall.', bestTimeToVisit: 'Morning or Afternoon', visitingTime: '2-3 Hours', image: 'https://picsum.photos/400/300?random=13' },
        { name: 'Chota Imambara', description: 'Also known as the "Palace of Lights," this monument is adorned with beautiful chandeliers and silver thrones.', bestTimeToVisit: 'Morning or Evening', visitingTime: '1 Hour', image: 'https://picsum.photos/400/300?random=14' },
        { name: 'Rumi Darwaza', description: 'An imposing 60-feet tall gateway in Lucknow, an icon of Awadhi architecture.', bestTimeToVisit: 'Anytime', visitingTime: '15-20 Mins', image: 'https://picsum.photos/400/300?random=15' },
        { name: 'The Residency', description: 'A historic site that was a refuge during the 1857 Sepoy Mutiny. The ruins are a poignant reminder of the city\'s past.', bestTimeToVisit: 'October to March', visitingTime: '1-2 Hours', image: 'https://picsum.photos/400/300?random=16' },
      ],
      markets: [
        { name: 'Hazratganj', knownFor: ['Chikankari clothing', 'Branded stores', 'Food'], timings: '11 AM - 10 PM', image: 'https://picsum.photos/400/300?random=17' },
        { name: 'Aminabad Market', knownFor: ['Jewelry', 'Books', 'Spices', 'Street Food'], timings: '11 AM - 11 PM', image: 'https://picsum.photos/400/300?random=18' },
      ],
      food: {
        mustTry: [
            { name: 'Tunday Kebab', description: 'World-famous melt-in-the-mouth kebabs with a secret blend of over 100 spices.', type: 'dish'},
            { name: 'Lucknawi Biryani', description: 'Aromatic and subtly flavored biryani, distinct from its Hyderabadi counterpart.', type: 'dish'},
            { name: 'Makhan Malai', description: 'A light, airy, and creamy winter dessert that melts in your mouth.', type: 'sweet'},
        ],
        restaurants: [
            { name: 'Tunday Kababi', specialty: 'The original and most famous place for Galouti kebabs.', type: 'Non-Veg'},
            { name: 'Dastarkhwan', specialty: 'Renowned for its Mughlai and Awadhi cuisine.', type: 'Both'},
            { name: 'Royal Cafe', specialty: 'Famous for its Basket Chaat and other delicacies in Hazratganj.', type: 'Veg'},
            { name: 'Ram Asrey', specialty: 'A legendary sweet shop established in 1805.', type: 'Sweet Shop'},
        ]
      },
      hotels: [
        { name: 'Hotel Levana', location: 'Hazratganj', priceRange: '₹3,000 - ₹5,000', rating: 4.1, suitableFor: 'Budget / Business', category: 'Budget' },
        { name: 'Clarks Avadh', location: 'Mahatma Gandhi Marg', priceRange: '₹6,000 - ₹10,000', rating: 4.2, suitableFor: 'Family / Mid-Range', category: 'Mid-Range' },
        { name: 'Taj Mahal Lucknow', location: 'Gomti Nagar', priceRange: '₹12,000+', rating: 4.6, suitableFor: 'Premium / Luxury', category: 'Premium' },
      ]
    }
  ],
  taxis: [
    { name: 'UP Tourism Pre-paid Taxi', contact: '1800-XXX-XXXX (Verification Required)', coverage: 'Varanasi, Lucknow', category: 'Government Authorized' },
    { name: 'Varanasi Taxi Service', contact: '+91-9XXXX-XXXXX', coverage: 'Varanasi & nearby areas', rating: '4.8', reviews: '200+', category: 'Private Cab' },
    { name: 'Lucknow City Cabs', contact: '+91-8XXXX-XXXXX', coverage: 'Lucknow, Ayodhya', rating: '4.5', reviews: '150+', category: 'Private Cab' },
    { name: 'Ayodhya Tour & Travels', contact: '+91-7XXXX-XXXXX', coverage: 'Ayodhya, Local Sightseeing', rating: '4.3', reviews: '80+', category: 'Private Cab' },
  ]
};
