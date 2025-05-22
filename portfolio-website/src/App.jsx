import React from 'react';

// Main App component for the portfolio
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 font-inter antialiased">
      {/* Header Section - Remains at the top */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 shadow-lg rounded-b-xl mx-auto max-w-7xl mt-4 z-10 relative">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-4xl font-extrabold text-blue-400 mb-4 sm:mb-0">
            Rockford Jade Dagohoy
          </h1>
          <nav className="space-x-4">
            <a href="#about" className="text-lg text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out">About</a>
            <a href="#skills" className="text-lg text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out">Skills</a>
            <a href="#projects" className="text-lg text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out">Projects</a>
          </nav>
        </div>
      </header>

      {/* Landing Page Section - New and creative introduction */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a202c, #2d3748)', // Dark gradient background
        }}
      >
        {/* Subtle background pattern/animation for creativity */}
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm18 0V0h-2v4h-4v2h4v4h2V6h4V4h-4zM0 34v-4h-2v4H-4v2h4v4h2v-4h4v-2h-4zM0 0v-4h-2v4H-4v2h4v4h2V6h4V4h-4zM0 30V0h-2v4H-4v2h4v4h2V6h4V4h-4zM18 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm18 0V0h-2v4h-4v2h4v4h2V6h4V4h-4z' fill='%239C92AC'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'move-pattern 60s linear infinite',
          backgroundSize: '30px 30px', // Adjust size for desired density
        }}></div>
        <style>{`
          @keyframes move-pattern {
            0% { background-position: 0 0; }
            100% { background-position: 60px 60px; } /* Move by pattern size */
          }
        `}</style>

        {/* Content for the landing page */}
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
            Hi, I'm <span className="text-blue-400 drop-shadow-lg">Rockford Jade Dagohoy</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-10 animate-fade-in-up animation-delay-300">
            BSIT Student | Vibe Coder | Aspiring Full-Stack Developer
          </p>
          <a
            href="#about"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                       text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg
                       transform transition duration-500 ease-in-out hover:scale-110 hover:shadow-2xl
                       animate-bounce-in animation-delay-600"
          >
            Discover My Journey
          </a>
        </div>
      </section>

      {/* Main Content Area - Remaining sections */}
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* About Me Section */}
        <section id="about" className="bg-gray-800 p-8 rounded-xl shadow-xl mb-12 transform transition duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-blue-400 mb-6 border-b-2 border-blue-600 pb-2">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hello! I'm <span className="font-semibold text-blue-300">Rockford Jade Dagohoy</span>, an upcoming 4th-year BSIT student based in <span className="font-semibold text-blue-300">Davao City</span>.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of academics, I'm passionate about <span className="font-semibold text-blue-300">playing video games</span> and enjoy the creative process of <span className="font-semibold text-blue-300">vibe coding</span>. I'm always eager to learn new technologies and expand my development toolkit.
          </p>
        </section>

        {/* Skills Section */}
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

        {/* Projects Section */}
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
      </main>

      {/* Footer Section */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 text-center text-gray-400 rounded-t-xl mx-auto max-w-7xl mb-4">
        <p>&copy; {new Date().getFullYear()} Rockford Jade Dagohoy. All rights reserved.</p>
        <p>Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
