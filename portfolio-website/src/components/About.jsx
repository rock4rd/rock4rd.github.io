import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-800 p-8 rounded-xl shadow-xl mb-12">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 border-b-2 border-blue-600 pb-2">About Me</h2>
      <p className="text-lg leading-relaxed mb-4">
        Hello! I'm <span className="font-semibold text-blue-300">Rockford Jade Dagohoy</span>, an upcoming 4th-year BSIT student based in <span className="font-semibold text-blue-300">Davao City</span>.
      </p>
      <p className="text-lg leading-relaxed">
        Outside of academics, I'm passionate about <span className="font-semibold text-blue-300">playing video games</span> and enjoy the creative process of <span className="font-semibold text-blue-300">vibe coding</span>. I'm always eager to learn new technologies and expand my development toolkit.
      </p>
    </section>
  );
};

export default About;