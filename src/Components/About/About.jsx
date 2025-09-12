import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
      
      {/* Image Section */}
      <div className="md:w-5/12 lg:w-5/12">
        <img
          src="10782633_19197803.jpg"
          alt="About me illustration"
          className="rounded-lg shadow-md"
        />
      </div>
      
      {/* Text Section */}
      <div className="md:w-7/12 lg:w-6/12">
        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl leading-snug">
          Passionate About Building Modern Web Applications!
        </h2>

        <p className="mt-6 text-gray-700 leading-relaxed">
          I am a passionate <span className="font-semibold">Full-Stack Developer</span> 
          with hands-on experience building modern, scalable, and responsive web applications. 
          Skilled in both frontend technologies 
          (<span className="font-medium">React, Redux, Tailwind CSS</span>) and backend 
          technologies (<span className="font-medium">Node.js, Express.js, MongoDB</span> with 
          Mongoose & Aggregation Pipelines), I can take your idea from concept to deployment.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Currently, I am pursuing my <span className="font-medium">2nd year of B.Tech in CSE </span> 
          at <span className="font-medium"> Siksha 'O' Anusandhan University</span>.
        </p>
      </div>
    </div>
  </div>
</div>

  );
}