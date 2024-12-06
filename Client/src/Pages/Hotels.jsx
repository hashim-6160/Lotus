import React, { useState } from 'react';
import { FaUser, FaBed, FaCheck } from 'react-icons/fa';

const Hotels = () => {
  const [activeCategory, setActiveCategory] = useState('Standard Rooms');

  const roomImages = [
    '/img/hotel-1.webp',
    '/img/hotel-2.webp',
    '/img/hotel-3.webp',
    '/img/hotel-4-large.webp',
    '/img/hotel-5.webp',
    '/img/hotel-6.webp',
  ];

  const features = [
    'Free Wi-Fi Service',
    'Best Rate Guarantee',
    'Free DSTV Access'
  ];

  const categories = [
    'Standard Rooms',
    'Executive Rooms',
    'King Suites'
  ];

  const rooms = [
    {
      id: 1,
      image: '/img/hotel-3.webp',
      title: 'Standard Economic Single',
      description: 'Designed specifically for Practicality and comfort',
      persons: 2,
      bedType: '1 Kingsize bed',
      price: 'NGN25,000 Per Night'
    },
    {
      id: 2,
      image: '/img/hotel-1.webp',
      title: 'Standard Economic Single',
      description: 'Designed specifically for Practicality and comfort',
      persons: 2,
      bedType: '1 Kingsize bed',
      price: 'NGN35,000 Per Night'
    },
    {
      id: 3,
      image: '/img/hotel-4-large.webp',
      title: 'Standard Economic Single',
      description: 'Designed specifically for Practicality and comfort',
      persons: 2,
      bedType: '1 Kingsize bed',
      price: 'NGN45,000 Per Night'
    },
    {
      id: 4,
      image: '/img/hotel-6.webp',
      title: 'Standard Economic Single',
      description: 'Designed specifically for Practicality and comfort',
      persons: 2,
      bedType: '1 Kingsize bed',
      price: 'NGN50,000 Per Night'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Lotus Hotel Rooms</h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get the most of our hotel specials. Enjoy the modern comfort and panoramic view
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        <div className="col-span-1">
          <img src="/img/hotel-1.webp" alt="Hotel Room" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <div className="col-span-1">
          <img src="/img/hotel-2.webp" alt="Hotel Room" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <div className="col-span-1">
          <img src="/img/hotel-3.webp" alt="Hotel Room" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <div className="col-span-1">
          <img src="/img/hotel-4-large.webp" alt="Hotel Room" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <div className="col-span-1">
          <img src="/img/hotel-5.webp" alt="Hotel Room" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <div className="col-span-1">
          <img src="/img/hotel-6.webp" alt="Hotel Room" className="w-full h-48 object-cover rounded-lg" />
        </div>
      </div>

      {/* Room Categories */}
      <div className="flex justify-center space-x-8 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-lg font-medium pb-2 border-b-2 transition-colors duration-300 ${
              activeCategory === category
                ? 'text-yellow-500 border-yellow-500'
                : 'text-gray-500 border-transparent hover:text-yellow-500'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
              <p className="text-gray-600 mb-4">{room.description}</p>
              
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                  <FaUser className="text-yellow-500" />
                  <span className="text-gray-600">{room.persons} Persons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBed className="text-yellow-500" />
                  <span className="text-gray-600">{room.bedType}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">{room.price}</span>
                <div className="space-x-4">
                  <button className="text-yellow-500 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-50 transition-colors duration-300">
                    VIEW MORE
                  </button>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Offers Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
        <p className="text-gray-600 mb-6">
          Get 10% discount off this city view: standard room.<br />
          Offers valid till june 31st 2020
        </p>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <FaCheck className="text-yellow-500" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <button className="mt-8 bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default Hotels;