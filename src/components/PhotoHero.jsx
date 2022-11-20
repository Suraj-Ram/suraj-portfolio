import React from "react";
import headshotPic from "../images/headshot.jpg";

function Headshot({ picture }) {
  return (
    <img
      src={picture}
      className="rounded-full max-h-40 grayscale hover:grayscale-0 order-1 md:order-2 object-scale-down"
    ></img>
  );
}

function PhotoHero() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:mx-4 mb-12 items-center">

        <div className="flex flex-col max-w-xl gap-2 order-2">
          <span className="text-lg text-gray-400 ">Hi, I'm 👋</span>
          <span className="text-4xl md:text-5xl lg:text-6xl text-blue-600 font-bold tracking-tight">
            Suraj Ramchandran
          </span>

          <span className="text-lg text-gray-700">
            I am a second-year Computer Science (B.S.) student at Northeastern
            University interested in Artificial Intelligence and Full-stack Web
            Development.
          </span>
        </div>

        <Headshot picture={headshotPic} />
      </div>
    </>
  );
}

export default PhotoHero;
