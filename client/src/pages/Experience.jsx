import React from "react";

const experiences = [
  { title: "Spa & Wellness", description: "Relax and rejuvenate with our premium spa services.", icon: "💆‍♀️" },
  { title: "Fine Dining", description: "Enjoy exquisite meals prepared by our top chefs.", icon: "🍽️" },
  { title: "City Tours", description: "Explore the city with guided tours and experiences.", icon: "🚌" },
  { title: "Pool & Recreation", description: "Have fun and unwind at our pool and recreational areas.", icon: "🏊‍♂️" },
  { title: "Cultural Events", description: "Participate in curated events showcasing local culture.", icon: "🎭" },
   { title: "Rooftop Lounge", description: "Relax at our rooftop lounge with panoramic city views.", icon: "🌆" },
];

const Experience = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-pink-50 via-white to-pink-100 py-28 px-4 md:px-16 lg:px-24 xl:px-32">
      
      {/* Hero Section */}
      <section className="text-center py-12 bg-pink-50 rounded-xl shadow-lg mb-16">
        <h1 className="text-4xl md:text-5xl font-playfair text-black font-bold mb-4">
          Hotel Experiences
        </h1>
        <p className="text-gray-800 max-w-xl mx-auto">
          Discover a variety of activities and services designed to make your stay unforgettable.
        </p>
      </section>

      {/* Experiences Grid */}
      <section className="grid gap-6 md:grid-cols-3 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 text-center hover:shadow-pink-300 transition-all"
          >
            <div className="text-5xl mb-4">{exp.icon}</div>
            <h3 className="text-xl font-semibold text-black mb-2">{exp.title}</h3>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Footer Note */}
      <section className="text-center py-12 text-gray-800 font-medium">
        <p>Experience luxury, comfort, and unique moments during your stay! 💖</p>
      </section>

    </div>
  );
};

export default Experience;
