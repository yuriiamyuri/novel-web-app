// src/pages/AuthorProfilePage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ContentCard from '../components/explore/ContentCard'; // Reuse ContentCard

const AuthorProfilePage = () => {
  const { authorId } = useParams(); // Get authorId from URL

  // Placeholder author data - in a real app, fetch this based on authorId
  const authorData = {
    name: authorId ? authorId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Author Name', // Prettify ID or use placeholder
    bio: 'This is a passionate author who writes about technology, art, and the human condition. With over a decade of experience, their work has touched many readers.',
    avatarUrl: `https://ui-avatars.com/api/?name=${authorId || 'Author+Name'}&background=random&size=128`, // Placeholder avatar
    articles: [
      { id: '101', title: 'My First Masterpiece', excerpt: 'A deep dive into the beginnings of my writing journey.', authorName: authorId, authorId: authorId, imageUrl: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
      { id: '102', title: 'Reflections on Modern Art', excerpt: 'Exploring the trends and tribulations of contemporary art forms.', authorName: authorId, authorId: authorId, imageUrl: 'https://images.unsplash.com/photo-1501004308641-8947890alski?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
      { id: '103', title: 'The Ethics of Code', excerpt: 'Navigating the moral Labyrinth in software development.', authorName: authorId, authorId: authorId, imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    ],
    stats: {
      articles: 15,
      followers: 2300,
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Author Info Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src={authorData.avatarUrl} 
            alt={`${authorData.name}'s avatar`}
            className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-indigo-500 object-cover"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{authorData.name}</h1>
            <p className="text-gray-600 mb-4">{authorData.bio}</p>
            <div className="flex justify-center md:justify-start space-x-6 text-gray-700">
              <span><strong className="text-indigo-600">{authorData.stats.articles}</strong> Articles</span>
              <span><strong className="text-indigo-600">{authorData.stats.followers}</strong> Followers</span>
              {/* Add more stats or a "Follow" button here later */}
            </div>
          </div>
        </div>
      </div>

      {/* Articles by Author Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Articles by {authorData.name}
        </h2>
        {authorData.articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {authorData.articles.map(article => (
              <ContentCard 
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                authorName={article.authorName} // This will be the current author's name
                authorId={article.authorId}     // This will be the current author's ID
                imageUrl={article.imageUrl}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">This author has not published any articles yet.</p>
        )}
      </div>
    </div>
  );
};

export default AuthorProfilePage;
