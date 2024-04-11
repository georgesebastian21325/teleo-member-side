import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center text-white overflow-hidden relative">
      <style>
        {`
          @keyframes moveForever {
            0% { transform: translate3d(-90px, 0, 0); }
            100% { transform: translate3d(85px, 0, 0); }
          }
          .wave {
            animation: moveForever 25s cubic-bezier(.55,.5,.45,.5) infinite;
          }
        `}
      </style>
      <h1 className="text-9xl md:text-[12rem] lg:text-[15rem] xl:text-[18rem] 2xl:text-[20rem] font-extrabold">
        404
      </h1>
      <p className="mt-2 mx-20 lg:text-xl px-2 text-center md:text-2xl px-6 text-center">
        Oops! The page you are looking for was moved, removed, renamed, or might never have existed.
      </p>
      <Link to="/dash" className="mt-5 px-6 py-3 bg-white text-cyan-500 rounded-full shadow hover:scale-110 transition-transform duration-300 ease-in-out">
        Go Back to Dashboard!
      </Link>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg className="wave-animation h-[150px] w-full" viewBox="0 24 150 28" preserveAspectRatio="none" style={{height: '5vh', minHeight: '150px'}}>
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" className="wave" style={{ animationDelay: '-2s' }} />
            <use href="#gentle-wave" x="48" y="2" fill="rgba(255,255,255,0.5)" className="wave" style={{ animationDelay: '-3s' }} />
            <use href="#gentle-wave" x="48" y="4" fill="rgba(255,255,255,0.3)" className="wave" style={{ animationDelay: '-4s' }} />
            <use href="#gentle-wave" x="48" y="6" fill="rgba(255,255,255,1)" className="wave" style={{ animationDelay: '-5s' }} />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Error404;
