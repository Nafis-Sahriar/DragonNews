import React from 'react';

export const metadata = {
  title: "Dragon News - About Us",
  description: "Dragon News - About us page shows who are we.",
};

const AboutUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">

      {/* Hero Section */}
      <div className="text-center space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          About 
        </h1>
     
      </div>

      {/* About Content */}
      <div className="bg-white rounded-xl shadow-sm p-5 sm:p-8 md:p-10 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">

        <p>
          This project was developed by <span className="font-semibold text-gray-900">Nafis</span>, a dumb Software Engineering student at DIU, during the Spring 2026 final exam.
        </p>

        <p>
          A stupid who writes code, fixes bugs… and then creates new bugs just to stay employed.
        </p>

        <p>
          Special skills include:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Spending 2 hours fixing a bug caused by a missing semicolon.</li>
          <li>Breaking perfectly working code after saying -  just one small change</li>
        </ul>

        

      </div>

      {/* Fun Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-base sm:text-lg mb-2">Favorite Error</h3>
          <p className="text-sm sm:text-base text-gray-600">
            “It worked yesterday.”
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-base sm:text-lg mb-2">Debugging Style</h3>
          <p className="text-sm sm:text-base text-gray-600">
            Dumb can not debug.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-base sm:text-lg mb-2">Life Motto</h3>
          <p className="text-sm sm:text-base text-gray-600">
            “If it works, don’t touch it.”
          </p>
        </div>

      </div>

      {/* Footer Note */}
      <div className="text-center text-xs sm:text-sm text-gray-500">
        Built for learning.
      </div>

    </div>
  );
};

export default AboutUsPage;