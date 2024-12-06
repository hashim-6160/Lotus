import React, { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    arrivalDate: "",
    departureDate: "",
    guests: "",
    children: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/img/Homepage-jumbotron.webp")',
          filter: "brightness(0.7)",
        }}
      />

      {/* Content */}
      <div className="relative h-[calc(100vh-4rem)] flex items-center">
        <div className="container mx-4 px-4 flex justify-between items-center">
          {/* Left side - Text */}
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Discover The Perfect Balance Of Hospitality, Luxury And Comfort.
            </h1>
            <p className="text-lg mb-8">
              We are focused on providing clients with the highest level of
              comfort and excellent affordable rates
            </p>
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-md font-medium hover:bg-yellow-600 transition duration-300">
              BOOK NOW
            </button>
          </div>

          {/* Right side - Booking Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Scared you can't afford it?
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Don't worry, Lotus offers the best affordable rates you can ever
              find.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="From (City or Hotel)"
                  className="w-full p-3 border rounded-md"
                  value={formData.from}
                  onChange={(e) =>
                    setFormData({ ...formData, from: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="To (City or Hotel)"
                  className="w-full p-3 border rounded-md"
                  value={formData.to}
                  onChange={(e) =>
                    setFormData({ ...formData, to: e.target.value })
                  }
                />
                <input
                  type="date"
                  placeholder="Arrival Date"
                  className="w-full p-3 border rounded-md"
                  value={formData.arrivalDate}
                  onChange={(e) =>
                    setFormData({ ...formData, arrivalDate: e.target.value })
                  }
                />
                <input
                  type="date"
                  placeholder="Departure Date"
                  className="w-full p-3 border rounded-md"
                  value={formData.departureDate}
                  onChange={(e) =>
                    setFormData({ ...formData, departureDate: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Guests"
                  className="w-full p-3 border rounded-md"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Children"
                  className="w-full p-3 border rounded-md"
                  value={formData.children}
                  onChange={(e) =>
                    setFormData({ ...formData, children: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 rounded-md font-medium hover:bg-yellow-600 transition duration-300"
                >
                  CHECK RATES
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
