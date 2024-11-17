import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className='header'>
        <NavLink to ="/" 
        className="w-10 h-10 rounded-lg bg-white 
        items-center justify-center flex font-bold shadow-md">
            <p className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                RD
            </p>
            </NavLink>

        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to = "/About" className={({isActive})=> isActive ? 'text-purple-500': 'text-black-500'}>
            About
            </NavLink>

            <NavLink to = "/Project" className={({isActive})=> isActive ? 'text-purple-500': 'text-black-500'}>
            Projects
            </NavLink>

            <NavLink to = "/Contact" className={({isActive})=> isActive ? 'text-purple-500': 'text-black-500'}>
            Contact
            </NavLink>


        </nav>
      </header>
    </div>
  )
}

export default Navbar
