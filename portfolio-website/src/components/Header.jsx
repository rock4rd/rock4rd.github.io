import React from 'react';

const Header = () => {
  return (
    <header className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 shadow-lg rounded-b-xl">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-4xl font-extrabold text-blue-400">
          Rockford Jade Dagohoy
        </h1>
        <nav className="space-x-4">
          <a href="#about" className="text-lg text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out">About</a>
          <a href="#skills" className="text-lg text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out">Skills</a>
          <a href="#projects" className="text-lg text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;