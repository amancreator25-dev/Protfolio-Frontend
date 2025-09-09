import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() { 
    return (
        <div className="mx-auto w-full max-w-7xl bg-black-100">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    
                    <div className="mx-[50%] sm:w-1/2 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-6">
                        Hi, I am Aman
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                        I am a passionate <span className="font-semibold">Full Stack Developer</span> skilled in 
                        <span className="font-semibold"> React.js, Redux, Node.js, Express.js, and MongoDB</span>. 
                        I love building dynamic, user-friendly applications and exploring new technologies. 
                        Currently, I am working on exciting projects like <span className="font-semibold">DocYard</span>.
                        </p>
                </div> 

            </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="65dc40fc-e23d-4fe5-9a16-d7a8e4847146.jpg" alt="image1" />
                </div>
            </aside>

     <aside>   
<div className="mx-4 my-[-20px] flex flex-col sm:flex-row items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">

  {/* Tech Stack Section */}
 <section className="text-center justify-items-center sm:text-left mb-10 sm:mb-0 sm:w-1/2">
  <h2 className="text-2xl sm:text-4xl font-bold mb-8">Tech Stack</h2>
  <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 justify-center sm:justify-start items-center">
    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-16 h-16 mx-auto"/>
    </a>

    <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" className="w-16 h-16 mx-auto"/>
    </a>

    <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-16 h-16 mx-auto"/>
    </a>

    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" className="w-16 h-16 mx-auto bg-white rounded-lg p-2"/>
    </a>

    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-16 h-16 mx-auto"/>
    </a>

    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 h-16 mx-auto"/>
    </a>
  </div>
</section>


  {/* Download Section */}
  <div className="text-center place-content-center sm:text-right sm:w-1/2 space-y-6">
    <h2 className="text-4xl font-bold sm:text-5xl">
      Download Now
      <span className="hidden sm:block text-4xl">Get It Right Now!</span>
    </h2>

    <Link
      className="inline-flex text-white items-center px-6 py-3 font-medium bg-purple-700 rounded-lg hover:opacity-75"
      to="/"
    >
      <svg
        fill="white"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
      </svg>
      &nbsp; Download now
    </Link>
  </div>
</div>

        </aside>    

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Aman</h1>
        </div>
    );
}


/*<div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">AMAN`thE`PRO</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-purple-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>
*/ 