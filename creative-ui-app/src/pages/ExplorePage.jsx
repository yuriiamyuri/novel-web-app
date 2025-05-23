// src/pages/ExplorePage.jsx
import React from 'react';
import ContentCard from '../components/explore/ContentCard'; // Adjust path if ContentCard is elsewhere

const ExplorePage = () => {
  // Placeholder data - in a real app, this would come from an API
  const articles = [
    { id: '1', title: 'The Future of AI', excerpt: 'Exploring the next wave of artificial intelligence and its impact on society.', authorName: 'Jane Doe', authorId: 'jane-doe', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: '2', title: 'Sustainable Living Tips', excerpt: 'Practical advice for a more environmentally friendly lifestyle.', authorName: 'John Smith', authorId: 'john-smith', imageUrl: 'https://images.unsplash.com/photo-1488388373205-a134c1cc7e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: '3', title: 'Mastering React Hooks', excerpt: 'A deep dive into React Hooks and how to use them effectively.', authorName: 'Alice Brown', authorId: 'alice-brown', imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: '4', title: 'The Art of Storytelling', excerpt: 'Techniques and inspiration for crafting compelling narratives.', authorName: 'David Green', authorId: 'david-green', imageUrl: 'https://images.unsplash.com/photo-1455390587152-4da1c67def48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: '5', title: 'Exploring Ancient Civilizations', excerpt: 'A journey through time to uncover the secrets of past empires.', authorName: 'Maria Garcia', authorId: 'maria-garcia', imageUrl: 'https://images.unsplash.com/photo-1520095972702-9333c5269028?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: '6', title: 'The Psychology of Color', excerpt: 'How colors influence our emotions and perceptions in daily life.', authorName: 'Kenji Tanaka', authorId: 'kenji-tanaka', imageUrl: 'https://images.unsplash.com/photo-1528825830553-eff694490150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Explore Content
      </h1>

      {/* Filter/Sort Section - Non-functional UI */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select id="category" name="category" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>All</option>
              <option>Technology</option>
              <option>Art & Culture</option>
              <option>Science</option>
              <option>Lifestyle</option>
              <option>Writing</option>
            </select>
          </div>
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select id="sort" name="sort" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Latest</option>
              <option>Most Popular</option>
              <option>Trending</option>
            </select>
          </div>
          <div className="md:pt-7">
             <button className="w-full mt-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {articles.map(article => (
          <ContentCard 
            key={article.id}
            id={article.id}
            title={article.title}
            excerpt={article.excerpt}
            authorName={article.authorName}
            authorId={article.authorId}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
