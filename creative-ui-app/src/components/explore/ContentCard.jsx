// src/components/explore/ContentCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ContentCard = ({ id, title, excerpt, authorName, imageUrl, authorId }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          <Link to={`/article/${id || 'some-article-id'}`} className="hover:text-indigo-600 transition-colors duration-200 ease-in-out">
            {title || 'Sample Article Title'}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {excerpt || 'This is a short description of the article. It gives a glimpse into the content.'}
        </p>
        <div className="text-sm text-gray-500">
          By{' '}
          <Link to={`/author/${authorId || 'some-author-id'}`} className="font-medium text-indigo-500 hover:text-indigo-700 transition-colors duration-200 ease-in-out">
            {authorName || 'Author Name'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
