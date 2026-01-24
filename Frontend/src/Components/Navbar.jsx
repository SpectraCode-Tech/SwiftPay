import React, { useState } from 'react'
import Logo from '../assets/Logo 2.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white px-2 sm:px-5 py-2">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} className="w-32 sm:w-50" alt="SwiftPay Logo" />

        {/* Hamburger Menu (Mobile) */}
        <button 
          className="sm:hidden text-dark-green focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex text-white items-center space-x-2 sm:space-x-4 font-bold text-sm">
          <a 
            href="login" 
            className="text-dark-green rounded-full hover:bg-dark-green hover:text-white bg-transparent border border-dark-green px-4 py-2 transition-all duration-300 ease-in-out"
          >
            Login
          </a>
          <a 
            href="signup" 
            className="bg-dark-green border border-dark-green rounded-full px-4 py-2 hover:bg-transparent hover:text-dark-green transition-all duration-300 ease-in-out"
          >
            Register
          </a>
        </ul>
      </div>

      {/* Mobile Dropdown Menu with Smooth Transition */}
      <div 
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}
      >
        <ul className="flex flex-col space-y-2 font-bold text-sm">
          <a 
            href="login" 
            className="block text-dark-green border border-dark-green rounded-lg px-4 py-2 hover:bg-dark-green hover:text-white transition-all duration-300 ease-in-out"
          >
            Login
          </a>
          <a 
            href="signup" 
            className="block bg-dark-green border border-dark-green rounded-lg px-4 py-2 hover:bg-transparent hover:text-dark-green transition-all duration-300 ease-in-out"
          >
            Register
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar