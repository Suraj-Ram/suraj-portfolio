import React from 'react'
import {Link, useLocation} from "react-router-dom"

function NavItem({name, link}) {
  const currLocation = useLocation().pathname
  console.log(currLocation)

  const isActive = (path) => path === currLocation


  let calculatedClass =  "text-gray-600 px-2 py-3 hover:text-blue-600"

  if (isActive(link)) {
    calculatedClass = calculatedClass + " " + "text-blue-600"
  }

  // return <button className={calculatedClass}><Link to={link}>{name}</Link></button>
  return <Link to={link}><button className={calculatedClass}>{name}</button></Link>


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
      {/* <NavItem name={"About Me"} active/>
      <NavItem name={"Projects"}/>
      <NavItem name={"Experience"}/> */}
      {navItems.map(item => <NavItem name={item.name} link={item.link}/>)}
      {/* NavCluster */}
    </div>
  )
}

export default NavCluster