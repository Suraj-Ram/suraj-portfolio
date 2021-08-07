import React from "react";

const TechStackBase = ({ children }) => {
  return (
    <div>
      <h5 className=" text-sm uppercase bg-clip-text text-transparent bg-gradient-to-tr from-cyan-400 to-green-500 font-bold mt-2 mb-1">
        Tech Stack
      </h5>
      <ul>{children}</ul>
    </div>
  );
};

export default TechStackBase;
