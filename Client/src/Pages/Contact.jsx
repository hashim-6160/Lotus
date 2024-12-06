import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Interested in striking a partnership or do you have any complaint or feedback? Fill the form below
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="md:w-2/3 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3 bg-[#1a1a1a] text-white p-8">
            <div className="h-full flex flex-col justify-center space-y-8">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                <span>Lotus Address phase 1</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <FaPhone className="text-yellow-500 text-xl" />
                <span>+91 81388 57996</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-yellow-500 text-xl" />
                <span>sales@lotusprivatelimited.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;