import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="10782633_19197803.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Web development is carried out by passionate developers. and I am one of them!!!
                      </h2>
                      <p className="mt-6 text-gray-600">
                          I am a passionate Full-Stack Developer with hands-on experience building modern, scalable, and responsive web applications. Skilled in both frontend
                        (React, Redux, Tailwind CSS) and backend (Node.js, Express.js, MongoDB with Mongoose & Aggregation Pipelines), I can take your idea from concept to deployment.
                      </p>
                      <p className="mt-4 text-gray-600">
                         Currently I am in 2nd year of Btech CSE!, in Siksha 'O' Anusandhan Uniersity.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}