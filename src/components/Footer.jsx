import React from 'react';

// Reusable Footer component
const Footer = () => {
  return (
    <footer className="mt-12 text-center text-slate-500 text-sm py-6 border-t border-slate-200">
      <p>© {new Date().getFullYear()} React JS Practical Lab. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
