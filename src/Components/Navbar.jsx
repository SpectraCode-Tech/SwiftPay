import React, { useState } from 'react'
import Logo from '../assets/Logo 2.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#0a2540] text-white px-4 sm:px-6 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} className="w-28 sm:w-36" alt="SwiftPay Logo" />

        {/* Hamburger Menu (Mobile) */}
        <button 
          className="sm:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icon changes when toggled */}
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
        <ul className="hidden sm:flex items-center space-x-4 font-bold text-sm">
          <a 
            href="login" 
            className="text-[#00bfa6] border border-[#00bfa6] rounded-full px-4 py-2 hover:bg-[#00bfa6] hover:text-white transition-all"
          >
            Login
          </a>
          <a 
            href="signup" 
            className="bg-[#00bfa6] border border-[#00bfa6] rounded-full px-4 py-2 hover:bg-transparent hover:text-[#00bfa6] transition-all"
          >
            Register
          </a>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="sm:hidden mt-4 space-y-2 font-bold text-sm">
          <a 
            href="login" 
            className="block text-[#00bfa6] border border-[#00bfa6] rounded-lg px-4 py-2 hover:bg-[#00bfa6] hover:text-white transition-all"
          >
            Login
          </a>
          <a 
            href="signup" 
            className="block bg-[#00bfa6] border border-[#00bfa6] rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#00bfa6] transition-all"
          >
            Register
          </a>
        </ul>
      )}
    </nav>
  )
}

export default Navbar