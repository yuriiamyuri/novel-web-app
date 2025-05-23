// src/components/landing/BenefitsSection.jsx
import React from 'react';

const BenefitItem = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
    {/* Placeholder for icon */}
    <div className="text-3xl text-indigo-600 mb-4">{icon || '🌟'}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">
          Why Join Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <BenefitItem 
            title="For Readers"
            description="Explore a vast library of unique stories, articles, and insights from emerging and established authors. Engage with content that matters to you."
            icon="📖" 
          />
          <BenefitItem 
            title="For Authors"
            description="Publish your work, reach a dedicated readership, and build your personal brand. We provide the tools and audience to help you succeed."
            icon="✍️"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
