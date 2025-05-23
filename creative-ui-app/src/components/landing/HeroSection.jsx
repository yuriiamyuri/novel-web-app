// src/components/landing/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 md:py-32">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down"> {/* Example Animation */}
          Unlock Your Story. Discover Amazing Content.
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200"> {/* Example Animation */}
          Our platform connects passionate readers with talented authors. Dive into a world of unique narratives or share your own voice with a global audience.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-6">
          <Link 
            to="/signup?type=reader" 
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out text-lg inline-block w-full md:w-auto transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
          >
            Sign Up as a Reader
          </Link>
          <Link 
            to="/signup?type=author" 
            className="bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 ease-in-out text-lg inline-block w-full md:w-auto transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-yellow-500"
          >
            Sign Up as an Author
          </Link>
        </div>
      </div>
    </section>
  );
};

// Basic Keyframes for animations (add to your main CSS if you want to use them)
/*
@keyframes fade-in-down {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
.animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
.delay-200 { animation-delay: 0.2s; }
*/

export default HeroSection;
