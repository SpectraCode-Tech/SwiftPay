import React from 'react'
import Logo from '../assets/Logo 2.png'

const Navbar = () => {
  return (
    <div className='flex px-2 sm:px-5 py-2 justify-between items-center'>
      <img src={Logo} className='w-32 sm:w-50' alt="" />
      <ul className='flex text-white items-center space-x-2 sm:space-x-4 *:cursor-pointer *:duration-300 *:font-bold *:py-2 *:px-4 *:rounded-full *:text-xs *:sm:text-sm *:ease-in-out *:transition-all'>
        <li className="text-dark-green rounded-full hover:bg-dark-green hover:text-white bg-transparent border border-dark-green"><a href="">Login</a></li>
        <li className="bg-dark-green hover:bg-transparent border border-dark-green hover:text-dark-green "><a href="" >Register</a></li>
      </ul>
    </div>
  )
}

export default Navbar
