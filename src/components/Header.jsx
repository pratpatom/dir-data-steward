import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <div className="text-2xl font-bold mr-8">DataSteward</div>
        <nav className="flex gap-6">
          <a href="#" className="text-gray-800 hover:text-blue-500">Reference</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Learning</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Blog</a>
        </nav>
      </div>
      <div className="relative flex items-center">
        <svg
          className="absolute left-3 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          placeholder="Search documentation..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </header>
  );
};

export default Header;
