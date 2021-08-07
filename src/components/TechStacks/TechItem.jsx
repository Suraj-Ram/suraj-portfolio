import React from "react";

const TechItem = ({ logo, color, children }) => {
  return (
    <li className="flex items-center">
      <span style={{ color, margin: "0", padding: "0" }}> {logo} </span>
      <span className="ml-1"> {children} </span>
    </li>
  );
};

export default TechItem;
