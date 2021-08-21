import React from "react";

const Header = () => {
  const links = [
    {
      name: "Home",
      link: "#title",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <div className=" sticky-nav ">
        {/* a little experimental */}
        <nav className="flex mx-auto container justify-between">
          <div>
            <PortfolioIcon></PortfolioIcon>
          </div>
          <div className=" flex justify-end">
            {links.map((link, index) => (
              <NavItem key={index} link={link.link}>
                {link.name}
              </NavItem>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

const NavItem = ({ children, link }) => {
  return (
    <a
      className="text-blue-600 px-5 py-4 hover:text-blue-700 transition"
      href={link}
    >
      {children}
    </a>
  );
};

const PortfolioIcon = () => {
  return (
    <div className="p-4 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
};

export default Header;
