import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-white text-lg font-bold mr-4">Home</Link>
        <Link to="/learn" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Learning Page</Link>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  );
}

export default Navbar;
