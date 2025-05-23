// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';
import AuthorProfilePage from './pages/AuthorProfilePage';
import ArticlePage from './pages/ArticlePage';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/author/:authorId" element={<AuthorProfilePage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
