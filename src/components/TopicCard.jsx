import React from 'react';

// Reusable card component for displaying syllabus topics
const TopicCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-bold text-slate-800 text-lg mb-1">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TopicCard;
