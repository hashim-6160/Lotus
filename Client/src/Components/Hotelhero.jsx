import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hotelhero = () => {
  const images = [
    "/img/hotel-1.webp",
    "/img/hotel-2.webp",
    "/img/hotel-3.webp",
    "/img/hotel-4-large.webp",
    "/img/hotel-5.webp",
    "/img/hotel-6.webp",
  ];

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
    <div className="relative mt-16">
      {" "}
      {/* Added mt-16 to account for navbar height */}
      {/* Header Section - Absolute positioned over carousel */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50"
        style={{ zIndex: 1 }}
      >
        {" "}
        {/* Reduced z-index */}
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lotus Hotel Rooms
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Get the most of our hotel specials. Enjoy the modern comfort and
            panoramic view
          </p>
        </div>
      </div>
      {/* Carousel Section */}
      <div className="h-[600px] overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative h-[600px]">
              <img
                src={image}
                alt={`Hotel Room ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
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

export default Hotelhero;
