import React from "react";

const teamMembers = [
  { name: "Alice Johnson", role: "Hotel Manager", icon: "👩‍💼" },
  { name: "Bob Smith", role: "Head Chef", icon: "👨‍🍳" },
  { name: "Clara Lee", role: "Guest Relations", icon: "🛎️" },
];

const About = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-pink-50 via-white to-pink-100 py-28 px-4 md:px-16 lg:px-24 xl:px-32">
      
      {/* Hero Section */}
      <section className="text-center py-12 bg-pink-50 rounded-xl shadow-lg mb-16">
        <h1 className="text-4xl md:text-5xl font-playfair text-black font-bold mb-4">
          About Our Hotel
        </h1>
        <p className="text-gray-800 max-w-xl mx-auto">
          Welcome to our hotel! We are dedicated to providing a luxurious and unforgettable experience for every guest.
        </p>
      </section>

      

      {/* Values Section */}
      <section className="grid gap-6 md:grid-cols-3 mb-16">
        <div className="bg-pink-50 shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-black mb-2">Luxury 🛏️</h3>
          <p className="text-gray-700">Experience premium comfort and elegance in every room and service.</p>
        </div>
        <div className="bg-pink-50 shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-black mb-2">Service 🤝</h3>
          <p className="text-gray-700">We provide personalized attention to make every guest feel special.</p>
        </div>
        <div className="bg-pink-50 shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-black mb-2">Experience 🌸</h3>
          <p className="text-gray-700">From dining to activities, every moment is crafted for your enjoyment.</p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Meet Our Team 👥</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">{member.icon}</div>
              <h3 className="text-xl font-semibold text-black">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center py-12 text-gray-800 font-medium">
        <p>We look forward to welcoming you and providing an unforgettable stay! 💖</p>
      </section>

    </div>
  );
};

export default About;
