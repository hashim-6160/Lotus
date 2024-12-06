import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C0D] text-white mt-16">
      <div className="container  mx-auto px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo and Description */}
          <div className="flex flex-col items-start px-16 ">
            <Link to="/" className="mb-6">
              <h2 className="text-3xl font-bold text-yellow-500">
                Lotus Hotels
              </h2>
            </Link>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
              Experience luxury and comfort in every stay. Your home away from
              home.
            </p>
            <p className="text-gray-300 mt-4 text-lg">
              Hospitality and Comfort
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col px-24">
            <h3 className="text-2xl font-semibold mb-8">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1" />
                <span className="text-gray-300 leading-relaxed">
                  23, Fola Osibo,
                  <br />
                  Lekki Phase 1
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-yellow-500 text-xl" />
                <a
                  href="tel:+918138857996"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  +91 81388 57996
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-yellow-500 text-xl" />
                <a
                  href="mailto:sales@lotusprivatelimited.in"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  sales@lotusprivatelimited.in
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col px-16">
            <h3 className="text-2xl font-semibold mb-8">Follow Us</h3>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
            <div className="mt-8">
              <p className="text-gray-300 leading-relaxed">
                Stay connected with us on social media 
              </p>
              <p className="text-gray-300 leading-relaxed">
              for updates, special offers, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Lotus Hotels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

