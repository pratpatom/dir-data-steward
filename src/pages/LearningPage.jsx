import React from 'react';

const LearningPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Learning Page!</h1>
        <p className="text-gray-600 mb-6">This is a basic example of a page styled with Tailwind CSS.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LearningPage;
