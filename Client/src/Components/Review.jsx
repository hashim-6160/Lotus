import React from "react";

const Review = () => {
  const reviews = [
    {
      name: "Thankan",
      location: "Churuli, Idukki.",
      image: "/img/customer1.webp",
      review:
        "Words can't explain the kind of treatment I received from the management of Lotus hotels. They are the best in the country.",
    },
    {
      name: "Myladumkutti Joy",
      location: "Myladumparambil.",
      image: "/img/customer2.webp",
      review:
        "Lotus hotels makes you feel the best room quality that makes you feel the comfort of a home.",
    },
    {
      name: "Shajeevan",
      location: "Koorachhundi.",
      image: "/img/customer3.webp",
      review:
        "My Family and I are very happy when we lodge into Lotus hotels. They are by far the best in the universe.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Client Reviews</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are very proud of the services we offer to our customers. Read
              every word from our happy customers.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Reviewer Image */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Reviewer Name and Location */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <p className="text-gray-600">{review.location}</p>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-center">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
