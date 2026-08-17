import React from 'react';

// Reusable Header component
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">React JS Practicals</h1>
          <p className="text-blue-100 text-sm mt-1">Practical 1: Environment Setup & Hello World</p>
        </div>
        <span className="bg-blue-500/30 backdrop-blur-sm border border-blue-300/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
          React 18 + Tailwind
        </span>
      </div>
    </header>
  );
};

export default Header;
