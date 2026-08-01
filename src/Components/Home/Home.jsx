import React from "react";
import heroImage from "../../assets/65dc40fc-e23d-4fe5-9a16-d7a8e4847146.JPG";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">

      {/* Hero Section */}
      <section className="px-4 sm:px-8 lg:px-16 py-10 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

           {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Hero"
              className="w-64 sm:w-80 md:w-96 rounded-xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I am Aman
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-8">
              I am a passionate{" "}
              <span className="font-semibold">
                Full Stack Developer
              </span>{" "}
              skilled in{" "}
              <span className="font-semibold">
                React.js, Redux, Node.js, Express.js, and MongoDB
              </span>
              . I love building dynamic, user-friendly applications and
              exploring new technologies.
            </p>
          </div>

        </div>
      </section>

      {/* Tech Stack + Resume */}
      <section className="px-4 sm:px-8 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Tech Stack */}
          <div className="w-full lg:w-1/2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Tech Stack
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">

              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  alt="React"
                  className="w-16 h-16"
                />
              </a>

              <a
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="Redux"
                  className="w-16 h-16"
                />
              </a>

              <a
                href="https://nodejs.org/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                  alt="Node"
                  className="w-16 h-16"
                />
              </a>

              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
                  alt="Express"
                  className="w-16 h-16 bg-white rounded-lg p-2"
                />
              </a>

              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="w-16 h-16"
                />
              </a>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-16 h-16"
                />
              </a>

            </div>
          </div>

          {/* Resume */}
          <div className="w-full lg:w-1/2 text-center space-y-8">

            <h2 className="text-3xl md:text-5xl font-bold">
              Download Resume
            </h2>

            <p className="text-lg text-gray-600">
              Get the latest version of my resume.
            </p>

            <a
              href="/Aman_Kumar_Singh_Resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg transition"
            >
              <svg
                fill="white"
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>

              Download Resume
            </a>

          </div>

        </div>
      </section>

      {/* Footer Heading */}
      <section className="py-12">
        <h1 className="text-center text-3xl md:text-5xl font-medium">
          Aman
        </h1>
      </section>

    </div>
  );
}