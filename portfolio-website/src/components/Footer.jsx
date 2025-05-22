import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 text-center text-gray-400 rounded-t-xl mx-auto max-w-7xl mb-4">
      <p>&copy; {new Date().getFullYear()} Rockford Jade Dagohoy. All rights reserved.</p>
      <p>Built with React and Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;