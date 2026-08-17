import React from 'react';
import Header from './components/Header';
import WelcomeCard from './components/WelcomeCard';
import TopicCard from './components/TopicCard';
import Footer from './components/Footer';

function App() {
  // Static array of covered topics for Practical 1
  const topics = [
    {
      title: 'Node.js & npm',
      description: 'The runtime environment and package manager powering modern React tooling and dependency installation.',
      icon: '🟢',
    },
    {
      title: 'JSX Syntax',
      description: 'JavaScript XML allows writing HTML-like structure directly inside JavaScript files cleanly.',
      icon: '⚡',
    },
    {
      title: 'Functional Components',
      description: 'JavaScript functions that return JSX UI elements, representing modular building blocks.',
      icon: '🧩',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework enabling fast, responsive, and modern user interface styling.',
      icon: '🎨',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
          <WelcomeCard />

          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Topics Covered in Practical 1</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topics.map((topic, index) => (
                <TopicCard
                  key={index}
                  title={topic.title}
                  description={topic.description}
                  icon={topic.icon}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
