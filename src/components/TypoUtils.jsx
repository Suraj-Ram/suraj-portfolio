import { Link } from "react-router-dom";

function PrimaryHeading({ text }) {
  return (
    <div className="flex">
      <div class="flex items-center w-full mb-6 mt-3 lg:mt-6">
        <span class="flex-shrink mr-4 font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight">
          {text}
        </span>
        <div class="flex-grow border-t border-gray-200"></div>
      </div>
    </div>
  );
}

function SecondaryHeading({ text }) {
  return (
    <div className="flex">
      <div class="flex items-center w-full mt-2 ">
        <span class="flex-shrink mr-4 font-semibold text-xl md:text-2xl lg:text-2xl tracking-tight">
          {text}
        </span>
      </div>
    </div>
  );
}

function UnorderedList({ children }) {
  return (
    <ul className=" space-y-1 md:space-y-2 list-disc list-inside text-gray-700 text-md tracking-wide">
      {children}
    </ul>
  );
}

function ListItem({ children }) {
  return <li className="">{children}</li>;
}

function LinkWrapper({ children, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-blue-600 cursor-pointer"
    >
      {children}
    </a>
  );
}

function InternalLinkWrapper({ children, link }) {
  return (
    <Link to={link}><LinkWrapper>{children}</LinkWrapper></Link>
  );
}


function S({children}) {
    return <span className="font-bold tracking-wide">{children}</span>
}

function Italics({children}) {
    return <span className="italic text-gray-500">{children}</span>
}


export {PrimaryHeading, SecondaryHeading, UnorderedList, ListItem, LinkWrapper, InternalLinkWrapper, S, Italics}
