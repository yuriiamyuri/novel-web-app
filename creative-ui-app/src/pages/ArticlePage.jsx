// src/pages/ArticlePage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticlePage = () => {
  const { articleId } = useParams(); // Get articleId from URL

  // Placeholder article data - in a real app, fetch this based on articleId
  const articleData = {
    title: `Understanding Article ${articleId || 'Some ID'}`,
    authorName: 'Jane Doe',
    authorId: 'jane-doe', // Should match an author's ID for linking
    publishDate: 'October 26, 2023',
    featuredImageUrl: `https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`, // Placeholder image
    // Using an array of paragraphs for the body for easier rendering
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.",
      "Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.",
      "Aenean arcu elit, accansan id, consequat id, consequat ut, magna. Sed quis lacus. Donec scelerisque copywriting content marketing. Integer lacinia. Nam sed পরিত্রাণ পেতে পারে না। Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis quam. Praesent placerat. Fusce carport. Nullam figma. Mauris dictum facilisis augue. Fusce mollis. Phasellus ut sprint. Curabitur lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ],
    tags: ['Technology', 'React', 'Web Development', 'JavaScript'],
  };

  return (
    <div className="bg-white max-w-4xl mx-auto p-4 md:p-8 my-6 md:my-10 shadow-xl rounded-lg">
      {/* Article Header */}
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {articleData.title}
        </h1>
        <div className="flex items-center text-sm text-gray-600">
          <img 
            src={`https://ui-avatars.com/api/?name=${articleData.authorName.replace(' ', '+')}&background=random&size=40`} 
            alt={`${articleData.authorName}'s avatar`}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            By{' '}
            <Link to={`/author/${articleData.authorId}`} className="font-semibold text-indigo-600 hover:text-indigo-800">
              {articleData.authorName}
            </Link>
            <span className="mx-2">•</span>
            <span>{articleData.publishDate}</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {articleData.featuredImageUrl && (
        <img 
          src={articleData.featuredImageUrl} 
          alt={articleData.title}
          className="w-full h-auto md:h-[400px] object-cover rounded-lg mb-8 shadow-md" 
        />
      )}

      {/* Article Body */}
      <article className="prose prose-indigo lg:prose-xl max-w-none text-gray-700 leading-relaxed">
        {articleData.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      {/* Tags */}
      {articleData.tags && articleData.tags.length > 0 && (
        <div className="mt-10 pt-6 border-t">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {articleData.tags.map(tag => (
              <span key={tag} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Engagement Section (UI Placeholders) */}
      <div className="mt-10 pt-6 border-t">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Join the Conversation</h3>
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <p className="text-gray-600">Comments section coming soon!</p>
          {/* Placeholder for comment submission form */}
        </div>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Share this article:</h3>
        <div className="flex justify-center space-x-4">
          {/* Basic placeholder icons - would use actual icons in a real app */}
          <span className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer text-sm">Facebook</span>
          <span className="bg-sky-400 text-white px-4 py-2 rounded-md hover:bg-sky-500 cursor-pointer text-sm">Twitter</span>
          <span className="bg-linkedin-500 text-white px-4 py-2 rounded-md hover:bg-linkedin-600 cursor-pointer text-sm">LinkedIn</span>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
