import React from "react";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaWifi,
  FaCar,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hoteldetail = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const hotelDetails = {
    title: "Greenslade Hotel",
    location: "Adimali",
    description:
      "Experience luxury redefined at Greenslade Hotel, where traditional Kerala hospitality meets modern comfort. Nestled in the scenic hills of Adimali, our hotel offers breathtaking views of the Western Ghats. Each room is thoughtfully designed to provide the perfect blend of elegance and comfort, making your stay truly memorable.",
    images: [
      "/img/hotel-1.webp",
      "/img/hotel-2.webp",
      "/img/hotel-3.webp",
      "/img/hotel-4-large.webp",
    ],
    features: [
      "Premium Location with Mountain Views",
      "Award-winning Restaurant",
      "24/7 Room Service",
      "Complimentary Breakfast",
    ],
    amenities: [
      { icon: <FaWifi />, name: "Free WiFi" },
      { icon: <FaCar />, name: "Free Parking" },
      { icon: <FaSwimmingPool />, name: "Swimming Pool" },
      { icon: <FaUtensils />, name: "Restaurant" },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="container mx-auto px-4 mt-16 relative z-0">
      {/* Carousel with Overlay Title Section */}
      <div className="relative mb-8">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[1] bg-black bg-opacity-50">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {hotelDetails.title}
            </h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <FaMapMarkerAlt className="text-yellow-500" />
              <span>{hotelDetails.location}</span>
            </div>
          </div>
        </div>

        <div className="h-[550px] overflow-hidden">
          <Slider {...settings}>
            {hotelDetails.images.map((image, index) => (
              <div key={index} className="relative h-[550px]">
                <img
                  src={image}
                  alt={`Hotel View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Description and Features Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              About {hotelDetails.title}
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {hotelDetails.description}
            </p>

            {/* Features List */}
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-3">
              {hotelDetails.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-yellow-500">•</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Amenities */}
          <div>
            {/* Amenities */}
            <h3 className="text-xl font-bold mb-4">Premium Amenities</h3>
            <div className="grid grid-cols-1 gap-4">
              {hotelDetails.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg transition-all hover:shadow-md"
                >
                  <span className="text-yellow-500 text-xl">
                    {amenity.icon}
                  </span>
                  <span className="text-gray-700 font-medium">
                    {amenity.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Navigation Dots Styling */}
      <style jsx>{`
        .slick-dots {
          bottom: 25px;
          z-index: 2;
        }
        .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.7;
        }
        .slick-dots li.slick-active button:before {
          color: #fcd34d;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Hoteldetail;
