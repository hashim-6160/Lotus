import React from "react";
import { FaBed, FaUser } from "react-icons/fa";

const Detailedroom = () => {
  const rooms = [
    {
      id: 1,
      image: "/img/hotel-3.webp",
      title: "Deluxe King Room",
      description: "Spacious room with modern amenities and city view",
      persons: 2,
      bedType: "1 King bed",
      price: "₹3,300 Per Night",
    },
    {
      id: 2,
      image: "/img/hotel-1.webp",
      title: "Premium Double Room",
      description: "Comfortable room with twin beds and garden view",
      persons: 2,
      bedType: "2 Single beds",
      price: "₹3,800 Per Night",
    },
    {
      id: 3,
      image: "/img/hotel-4-large.webp",
      title: "Executive Suite",
      description: "Luxury suite with separate living area and panoramic view",
      persons: 3,
      bedType: "1 King bed + 1 Sofa bed",
      price: "₹4,500 Per Night",
    },
    {
      id: 4,
      image: "/img/hotel-6.webp",
      title: "Family Room",
      description: "Spacious room perfect for families, with mountain view",
      persons: 4,
      bedType: "2 Queen beds",
      price: "₹5,000 Per Night",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Rooms Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Available Rooms
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-600">
          Choose from our selection of comfortable rooms
        </p>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
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
                  <span className="text-gray-600">
                    {room.persons} {room.persons === 1 ? "Person" : "Persons"}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBed className="text-yellow-500" />
                  <span className="text-gray-600">{room.bedType}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  {room.price}
                </span>
                <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition-colors duration-300">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detailedroom;
