import { Facebook, LucideFacebook, Mail, Phone, X } from 'lucide-react'
import React from 'react'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='py-5 bg-green rounded-xl w-[97%] justify-self-center my-5 px-10'>
      <h1 className="text-center font-bold text-3xl">Contact Us</h1>
      <p className="text-center text-xl mb-10">We'd love to hear from you!</p>

      <div className="flex flex-col-reverse sm:flex-row justify-center gap-20 sm:gap-50">
        <div className="">
            <span className="flex gap-2 mb-5"><Phone /><a href="" className="">+234-913-724-3603</a></span>
            <span className="flex gap-2"><Mail /><a href="" className="">dimejirsq08gmail.com</a></span>
            <span className="flex gap-4 mt-5 ">
              <a href=""><FaFacebook className='size-10 hover:fill-blue transition-all duration-500 ease-in-out'/></a>
              <a href=""><FaWhatsapp className='size-10 hover:fill-blue transition-all duration-500 ease-in-out'/></a>
              <a href=""><BsTwitterX className='size-10 hover:fill-blue transition-all duration-500 ease-in-out'/></a>
              <a href=""><BsInstagram className='size-10 hover:fill-blue transition-all duration-500 ease-in-out'/></a>
            </span>

        </div>
        <div className="flex flex-col">
            <h3 className="mb-5 font-bold text-lg">Send us a message</h3>

            <form action="" className='flex space-y-3 flex-col *:rounded'>
              <input type="text" name='name' id='name' placeholder='Enter your Name' />
              <input type="email" name='email' id='email' placeholder='Enter your Email' />
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' className='sm:h-40'></textarea>
              <button type='submit' className='bg-blue transition-all duration-500 ease-in-out text-white py-2 px-4 rounded hover:bg-white hover:text-blue'>Send Message</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
