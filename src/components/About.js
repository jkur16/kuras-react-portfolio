import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Jamie.
                <br className="hidden lg:inline-block" />I'm a graduate of Michigan State University Coding Bootcamp . 
              </h1>
              <p className="mb-8 leading-relaxed">
              Before transitioning into the wonderful world of web development, I worked for the State of Michigan and in the broadcast industry.

            While working in the broadcast industry I built the foundation for my work ethic and punctuality. I learned to become someone who could take a small amount of information and turn it into a beautiful story that was broadcast to thousands of viewers a night.

            Much like broadcasting, as a developer, I am able to take a small idea of what kind of website you want and turn it into something to be proud of.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
                <a
                  href="https://docs.google.com/document/d/1TZzCXcMCTJVY2BvSyIsgy2kbQqScXDfzxs_D-L7VRRE/edit?usp=sharing"
                  className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  View my resume
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
    );
}
