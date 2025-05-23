// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import BenefitsSection from '../components/landing/BenefitsSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      {/* You can add more sections here later, like featured content or testimonials */}
    </div>
  );
};

export default HomePage;
