import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-white shadow-md">
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
          Welcome to <span className="text-blue-600">DataSteward</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Your central hub for documentation, learning resources, and articles.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/learn"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Link>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Read the Docs
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need in One Place
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                {/* SVG Icon */}
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">Comprehensive Guides</h3>
              <p className="mt-4 text-lg text-gray-500">
                Detailed documentation to help you get the most out of our tools and platforms.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                {/* SVG Icon */}
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">Interactive Learning</h3>
              <p className="mt-4 text-lg text-gray-500">
                Engaging tutorials and courses to expand your knowledge and skills.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                {/* SVG Icon */}
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">Latest Articles</h3>
              <p className="mt-4 text-lg text-gray-500">
                Stay up-to-date with the latest news, trends, and insights from our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
