import React from 'react';

// Welcome card displaying static message and introductory content
const WelcomeCard = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
        <span className="text-3xl font-bold">⚛️</span>
      </div>
      <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2">
        Hello, React World!
      </h2>
      <p className="text-slate-600 max-w-xl mx-auto text-base leading-relaxed mb-6">
        Welcome to your first React application. This practical demonstrates how to configure the React environment, structure functional components, and render static content seamlessly using JSX.
      </p>
      <div className="inline-block bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-500 font-mono">
        Status: Environment Configured & Running Successfully
      </div>
    </div>
  );
};

export default WelcomeCard;
