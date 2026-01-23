import React from 'react'
import { BsTwitterX, BsInstagram } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-blue pt-10 px-5'>
        <span className="hidden sm:flex justify-center gap-50 text-white">
            <div className="flex flex-col justify-center">
                <p className="mb-5">Quick Links</p>
                <ul className="">
                    <li className=""><a href="#Home">Home</a></li>
                    <li className=""><a href="login">Login</a></li>
                    <li className=""><a href="#features">Features</a></li>
                    <li className=""><a href="#contact">Contact</a></li>
                </ul>
            </div>
            
            <div className="">
                <p className="mb-5">Contact Us</p>
                <ul className="">
                    <li className="">Email: dimejirsq08gmail.com</li>
                    <li className="">Phone: +234-913-724-3603</li>
                </ul>
                <span className="flex gap-4 mt-5">
              <a href=""><FaFacebook className='size-5 hover:fill-dark-green transition-all duration-300 ease-in-out'/></a>
              <a href=""><FaWhatsapp className='size-5 hover:fill-dark-green transition-all duration-300 ease-in-out'/></a>
              <a href=""><BsTwitterX className='size-5 hover:fill-dark-green transition-all duration-300 ease-in-out'/></a>
              <a href=""><BsInstagram className='size-5 hover:fill-dark-green transition-all duration-300 ease-in-out'/></a>
                </span>
            </div>
        </span>

        <p className='text-center text-white sm:mt-5'>© 2026 SwiftPay. All rights reserved.</p>
    </div>
  )
}

export default Footer
