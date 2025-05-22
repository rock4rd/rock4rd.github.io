import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 p-8 rounded-xl shadow-xl mb-12 transform transition duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 border-b-2 border-blue-600 pb-2">My Skills</h2>
      <div className="flex flex-wrap gap-4">
        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-medium shadow-md">Vue.js (Frontend)</span>
        <span className="bg-green-600 text-white px-4 py-2 rounded-full text-lg font-medium shadow-md">Supabase (Backend)</span>
        <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-lg font-medium shadow-md">Eager to Learn New Languages</span>
        <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-lg font-medium shadow-md">HTML & CSS</span>
        <span className="bg-red-600 text-white px-4 py-2 rounded-full text-lg font-medium shadow-md">JavaScript</span>
        <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-lg font-medium shadow-md">React (Learning)</span>
      </div>
    </section>
  );
};

export default Skills;