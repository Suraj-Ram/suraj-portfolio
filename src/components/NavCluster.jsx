import React from 'react'

function NavItem({name, link, active}) {
  let calculatedClass =  "text-gray-600 px-2 py-3 hover:text-blue-600"
  if (active) {
    calculatedClass = calculatedClass + " " + "text-blue-600"
  }

  return <button className={calculatedClass}>{name}</button>




}

function NavCluster() {

  const navItems = [
    {
      id: 0,
      name: "About Me",
      link: "/"
    },
    {
      id: 1,
      name: "Projects",
      link: "/projects"
    },
    {
      id: 2,
      name: "Experience",
      link: "/experience"
    }
  ]

  return (
    <div className='flex justify-center items-center mx-auto md:gap-1 lg:gap-3 border max-w-xs rounded-3xl'>
      <NavItem name={"About Me"} active/>
      <NavItem name={"Projects"}/>
      <NavItem name={"Experience"}/>
      {/* {navItems.map(item => <NavItem name={item.name} link={item.link}/>)} */}
      {/* NavCluster */}
    </div>
  )
}

export default NavCluster