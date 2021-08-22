import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 flex flex-col justify-center items-center text-sm text-gray-600 h-24 lg:h-12 2xl:h-24">
      <p className="flex justify-center items-center">
        Made with React &nbsp; <FaReact color="#60DAFB" /> &nbsp; + Tailwind
        &nbsp;
        <SiTailwindcss color="#07B6D4" />
      </p>
      <p className="text-xs pt-1">&copy; Suraj Ramchandran, 2021</p>
    </footer>
  );
};

export default Footer;
