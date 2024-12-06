import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-yellow-500">
              Lotus
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link to="/hotels" className="text-gray-700 hover:text-gray-900">
                Hotels and Rooms
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-gray-900"
              >
                Our Services
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Book Now Button */}
          <div>
            <Link
              to="/book"
              className="bg-yellow-500 text-white px-6 py-2 rounded-md font-medium hover:bg-yellow-600 transition duration-300"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
