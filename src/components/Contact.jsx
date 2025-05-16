import React from 'react';
import { AiFillHome, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { FaWhatsappSquare } from 'react-icons/fa';

const Contact = () => {

  return (
    <div className="flex-col justify-center items-center min-h-screen md:min-h-[90vh] max-w-[1400px] mx-auto my-auto grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-8 p-4 sm:p-8 md:p-12 mb-10 md:glass" id="home">
      <motion.div 

        className="md:col-span-4 p-4 sm:p-6 md:p-10 glass py-8 sm:py-10 md:my-6 md:ml-16 w-full"
      >
        <div className="flex-col text-gray-200 p-2 sm:p-4">
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold py-2">
            <span>Contact Me</span> 
          </p>
          <p className="text-base sm:text-lg md:text-3xl text-gray-300 pt-2 sm:pt-3">
            Let's Get in Touch! 
          </p>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 pt-2 sm:pt-3">
            I'd love to hear your message
          </p>
          <a href="https://www.linkedin.com/in/sinclair-collins" target="_blank" rel="noopener noreferrer">
            <div className='text-2xl sm:text-3xl md:text-5xl flex pt-3 sm:pt-4 text-white items-center'>
              <AiFillLinkedin className='p-1 sm:p-2 mt-1 md:mt-0 bg-primary-color rounded-md'/>
              <p className="text-base sm:text-lg md:text-2xl text-gray-300 pt-1 sm:pt-2 ml-3 sm:ml-4">
                Sinclair Collins
              </p>
            </div>
          </a>
          <div className='text-2xl sm:text-3xl md:text-5xl flex pt-3 sm:pt-4 text-white items-center'>
            <AiFillMail className='p-1 sm:p-2 mt-1 md:mt-0 bg-primary-color rounded-md'/>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 pt-1 sm:pt-2 ml-3 sm:ml-4">
              sinclaircollins17@gmail.com
            </p>
          </div>
          <div className='text-2xl sm:text-3xl md:text-5xl flex pt-3 sm:pt-4 text-white items-center'>
            <AiFillHome className='p-1 sm:p-2 mt-1 md:mt-0 bg-primary-color rounded-md'/>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 pt-1 sm:pt-2 ml-3 sm:ml-4">
              Singkawang - Indonesia
            </p>
          </div>
          <a href="http://wa.me/+6289637513642" target="_blank" rel="noopener noreferrer">
            <div className='text-2xl sm:text-3xl md:text-5xl flex pt-3 sm:pt-4 text-white items-center'>
              <FaWhatsappSquare className='p-1 sm:p-2 mt-1 md:mt-0 bg-primary-color rounded-md'/>
              <p className="text-base sm:text-lg md:text-2xl text-gray-300 pt-1 sm:pt-2 ml-3 sm:ml-4">
                +62 896 3751 3642
              </p>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="md:col-span-6 p-4 sm:p-6 md:ml-12 flex text-black"
      >
        <form action="https://getform.io/f/bmdkqeqa" method="POST" className='w-full p-2 sm:p-6 md:p-12'>
          <input 
            type="text"
            id="name"
            placeholder='Your name' 
            name='name'
            className='mb-3 sm:mb-4 w-full rounded-lg border-gray-400 bg-gray-100 py-2 sm:py-3 pl-3 pr-5 text-base sm:text-lg'
          />
          <input 
            type="email"
            id="email"
            placeholder='Email address' 
            name='email'
            className='mb-3 sm:mb-4 w-full rounded-lg border-gray-400 bg-gray-100 py-2 sm:py-3 pl-3 pr-5 text-base sm:text-lg'
          />
          <textarea
            id="message"
            cols="40"
            rows="5"
            placeholder='Message' 
            name='message'
            className='mb-3 sm:mb-4 w-full rounded-lg border-gray-400 bg-gray-100 py-2 sm:py-3 pl-3 pr-5 text-base sm:text-lg'
          />
          <div className='flex justify-center md:justify-evenly'>
            <button type='submit' className="w-full md:w-auto px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-bold text-gray-200 bg-primary-color rounded-lg">
              Send message 🚀
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )

}

export default Contact;