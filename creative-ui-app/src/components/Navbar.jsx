// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink for active styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out";
  const activeLinkClasses = "bg-indigo-700 text-white";
  const inactiveLinkClasses = "text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none";
  
  // Helper function to combine classes for NavLink
  const getNavLinkClass = ({ isActive }) => 
    `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`;

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Site Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white hover:text-indigo-300 transition-colors duration-200 ease-in-out">
              MyApp
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/explore" className={getNavLinkClass}>Explore</NavLink>
            <NavLink to="/login" className={getNavLinkClass}>Login</NavLink>
            <NavLink to="/signup" className={getNavLinkClass}>Sign Up</NavLink>
            {/* Example of an external link or different styled button */}
            <Link 
              to="/signup?type=author" 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Become an Author
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed (Hamburger) */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Icon when menu is open (Close)
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      {/* Using Tailwind CSS for transition:
          Entering: "transition ease-out duration-200 transform"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "transition ease-in duration-150 transform"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
      */}
      <div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-out transform origin-top ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/explore" className={({isActive}) => `${getNavLinkClass({isActive})} block w-full text-left`}>Explore</NavLink>
          <NavLink to="/login" className={({isActive}) => `${getNavLinkClass({isActive})} block w-full text-left`}>Login</NavLink>
          <NavLink to="/signup" className={({isActive}) => `${getNavLinkClass({isActive})} block w-full text-left`}>Sign Up</NavLink>
          <Link 
            to="/signup?type=author" 
            className="block w-full text-left mt-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-3 rounded-md shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Become an Author
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
