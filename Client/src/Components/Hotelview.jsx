import React from "react";
import { FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hotelview = () => {
  const navigate = useNavigate();

  const handleViewMore = (id) => {
    navigate(`/hotel/${id}`);
  };

  const rooms = [
    {
      id: 1,
      image: "/img/hotel-3.webp",
      title: "Greenslade Hotel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Adimali",
      price: "Starting from 3,300 Per Night",
    },
    {
      id: 2,
      image: "/img/hotel-1.webp",
      title: "WildMist Homestay",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Sabarimala",
      price: "Starting from 3,200 Per Night",
    },
    {
      id: 3,
      image: "/img/hotel-4-large.webp",
      title: "WildMist Homestay",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Sabarimala",
      price: "Starting from 3,200 Per Night",
    },
    {
      id: 4,
      image: "/img/hotel-6.webp",
      title: "Greenslade Hotel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Adimali",
      price: "Starting from 3,300 Per Night",
    },
  ];

  const features = [
    "Free Wi-Fi Service",
    "Best Rate Guarantee",
    "Free DSTV Access",
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Our Hotels Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Hotels
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience luxury and comfort in our carefully curated selection of
          rooms
        </p>
      </div>
      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
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
                  <FaMapMarkerAlt className="text-yellow-500" />
                  <span className="text-gray-600">{room.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  {room.price}
                </span>
                <div className="space-x-4">
                  <button
                    onClick={() => handleViewMore(room.id)}
                    className="text-yellow-500 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-50 transition-colors duration-300"
                  >
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
          Get 10% discount off this city view: standard room.
          <br />
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

export default Hotelview;
