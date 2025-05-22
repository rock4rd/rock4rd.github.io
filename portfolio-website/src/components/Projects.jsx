import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-800 p-8 rounded-xl shadow-xl transform transition duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 border-b-2 border-blue-600 pb-2">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder Project Card 1 */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-blue-300 mb-3">Project Title 1</h3>
          <p className="text-gray-300 mb-4">
            A brief description of your first project. Mention the technologies used (e.g., Vue, Supabase) and what it achieves.
          </p>
          <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            View Project
          </a>
        </div>

        {/* Placeholder Project Card 2 */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-blue-300 mb-3">Project Title 2</h3>
          <p className="text-gray-300 mb-4">
            Another project description. Highlight your role and any interesting features or challenges you overcame.
          </p>
          <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            View Project
          </a>
        </div>

        {/* Placeholder Project Card 3 */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-blue-300 mb-3">Project Title 3</h3>
          <p className="text-gray-300 mb-4">
            You can add more project cards here as you complete more work. Each card should link to its live demo or GitHub repository.
          </p>
          <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            View Project
          </a>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-8 text-lg">
        More projects coming soon as I continue to learn and build!
      </p>
    </section>
  );
};

export default Projects;