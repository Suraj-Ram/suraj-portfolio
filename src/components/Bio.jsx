import React from "react";

const Bio = () => {
  return (
    <div className="mb-16">
      <h1
        className="font-bold text-3xl md:text-5xl md:pt-4 tracking-tight mb-4 text-black dark:text-white"
        id="title"
      >
        Hey, I'm Suraj
      </h1>
      <h1 className="prose text-gray-600 max-w-xl dark:text-gray-400 mb-14">
        My interest area is web development, having developed web apps and
        websites using HTML, CSS, Vanilla JS, React, Bootstrap and Tailwind. I
        am fascinated particularly fascinated by AI and machine learning and the
        paradigm shift it brings to problem solving.
      </h1>
    </div>
  );
};

export default Bio;
