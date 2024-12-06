import React from "react";
import {
  FaClock,
  FaUtensils,
  FaDumbbell,
  FaWifi,
  FaPlay,
  FaCheck,
} from "react-icons/fa";

const Facilities = () => {
  const facilities = [
    {
      icon: <FaClock className="text-yellow-500 text-4xl" />,
      title: "24 hours Room Service",
      description:
        "You have access to 24-hours a day room service at our hotel.",
    },
    {
      icon: <FaUtensils className="text-yellow-500 text-4xl" />,
      title: "Restaurant and Bars",
      description:
        "You have access to the world state of art restaurants and bars at our hotel",
    },
    {
      icon: <FaDumbbell className="text-yellow-500 text-4xl" />,
      title: "Fitness and Spa",
      description:
        "Access to fitness and Spa is part of our hotel package when you make a booking.",
    },
    {
      icon: <FaWifi className="text-yellow-500 text-4xl" />,
      title: "Free Wi-Fi Access",
      description:
        "You have access to 24-hours free Wi-Fi services irrespective of any room.",
    },
  ];

  const roomTypes = ["Standard Room", "Executive Room", "King Suite"];

  return (
    <>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Enjoy your stay
              <br />
              at our hotels
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              We are more than being a hotel because we are able to combine the
              quality standard of a hotel with the advantages of an apartment.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Side - Facilities List */}
            <div className="space-y-8">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{facility.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/img/video link.webp"
                alt="Hotel Facilities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-yellow-500 bg-opacity-20 flex items-center justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <FaPlay className="text-2xl ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplicity Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Simplicity is the ultimate
                <br />
                Watchword
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/img/hotel-1.webp"
                  alt="Room"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/img/hotel-2.webp"
                  alt="Room"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/img/hotel-4-large.webp"
                  alt="Room"
                  className="w-full h-64 object-cover rounded-lg col-span-2"
                />
                <img
                  src="/img/hotel-3.webp"
                  alt="Room"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/img/hotel-5.webp"
                  alt="Room"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Right Side - Content */}
              <div>
                <p className="text-gray-700 mb-8">
                  The fact that we are run by hospitality professionals and
                  equipped with the world best interior designers is why our
                  rooms and suites are second to none in the universe
                </p>

                <div className="space-y-4 mb-8">
                  {roomTypes.map((room, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FaCheck className="text-yellow-500" />
                      <span>{room}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-yellow-500 text-white px-8 py-3 rounded-md font-medium hover:bg-yellow-600 transition duration-300">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
