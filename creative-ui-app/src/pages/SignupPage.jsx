// src/pages/SignupPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const SignupPage = () => {
  const [searchParams] = useSearchParams();
  const userType = searchParams.get('type') || 'reader'; // Default to 'reader'

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
  });

  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    // Reset bio if user type changes and it's not author
    if (userType !== 'author') {
      setFormData(fd => ({ ...fd, bio: '' }));
    }
  }, [userType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match!');
      return;
    }
    setPasswordError('');
    // In a real app, you'd send this data to a backend
    console.log('Form data submitted:', { ...formData, userType });
    alert(`Signup successful as ${userType}! (Data in console)`);
    // Reset form (optional)
    setFormData({ username: '', email: '', password: '', confirmPassword: '', bio: '' });
  };

  const inputClasses = "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200 ease-in-out";
  const buttonPrimaryClasses = "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:scale-105";
  const buttonSecondaryClasses = "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-gray-50 ring-1 ring-indigo-600 transition-all duration-200 ease-in-out transform hover:scale-105";
  const linkClasses = "font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200 ease-in-out";


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your <span className="capitalize">{userType}</span> account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          {userType === 'reader' ? (
            <Link to="/signup?type=author" className={linkClasses}>
              sign up as an Author
            </Link>
          ) : (
            <Link to="/signup?type=reader" className={linkClasses}>
              sign up as a Reader
            </Link>
          )}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              {passwordError && <p className="mt-2 text-sm text-red-600">{passwordError}</p>}
            </div>

            {userType === 'author' && (
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                  Bio / Area of Expertise
                </label>
                <div className="mt-1">
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    value={formData.bio}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`} // Added resize-none for consistency
                    placeholder="Tell us a little about yourself and what you write."
                  />
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className={buttonPrimaryClasses}
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/login"
                className={buttonSecondaryClasses}
              >
                Log In
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignupPage;
