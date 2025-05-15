import React from 'react';
import { AiFillHome, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { FaWhatsappSquare } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex-col justify-center items-center min-h-screen md:min-h-[90vh] max-w-[1400px] mx-auto my-auto grid md:grid-cols-10 gap-8 p-12 mb-10 md:glass" id="home">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: [0, 0.8, 0.8, 1.01]
        }}
        exit={{ opacity: 0, x: -50, transition: { delay: 0, duration: 0.5, ease: "easeOut" }}}
        exitTransition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
        className="md:col-span-4 p-6 md:p-10 glass py-10 md:my-6 md:ml-16 w-full"
      >
        <div className="flex-col text-gray-200 p-4">
          <p className="text-3xl md:text-5xl font-bold py-2">
            <span>Contact Me</span> 
          </p>
          <p className="text-lg md:text-3xl text-gray-300 pt-3">
            Let's Get in Touch! 
          </p>
          <p className="text-lg md:text-2xl text-gray-300 pt-3">
            I'd love to hear your message
          </p>
          <a href="https://www.linkedin.com/in/sinclair-collins" target="_blank" rel="noopener noreferrer">
            <div className='text-3xl md:text-5xl flex pt-4 text-white'>
              <AiFillLinkedin className='p-2 mt-2 md:mt-0 bg-primary-color rounded-md'/>
              <p className="text-lg md:text-2xl text-gray-300 pt-2 ml-4">
                Sinclair Collins
              </p>
            </div>
          </a>
          
          <div className='text-3xl md:text-5xl flex pt-4 text-white'>
            <AiFillMail className='p-2 mt-2 md:mt-0 bg-primary-color rounded-md'/>
            <p className="text-lg md:text-2xl text-gray-300 pt-2 ml-4">
              sinclaircollins17@gmail.com
            </p>
          </div>
          <div className='text-3xl md:text-5xl flex pt-4 text-white'>
            <AiFillHome className='p-2 mt-2 md:mt-0 bg-primary-color rounded-md'/>
            <p className="text-lg md:text-2xl text-gray-300 pt-2 ml-4">
              Singkawang - Indonesia
            </p>
          </div>
          <a href="http://wa.me/+6289637513642" target="_blank" rel="noopener noreferrer">
            <div className='text-3xl md:text-5xl flex pt-4 text-white'>
              <FaWhatsappSquare className='p-2 mt-2 md:mt-0 bg-primary-color rounded-md'/>
              <p className="text-lg md:text-2xl text-gray-300 pt-2 ml-4">
                +62 896 3751 3642
              </p>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.6,
          ease: [0, 1, 0.8, 1.01]
        }}
        exit={{ opacity: 0, x: 50, transition: { delay: 0, duration: 0.5, ease: "easeOut" }}}
        exitTransition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
        className="md:col-span-6 p-6 md:ml-12 flex text-black"
      >
        <form action="https://getform.io/f/bmdkqeqa" method="POST" className='w-full p-6 md:p-12'>
          <input 
            type="text"
            id="name"
            placeholder='Your name' 
            name='name'
            className='mb-4 w-full rounded-lg border-gray-400 bg-gray-100 py-3 pl-3 pr-5 text-lg'
          />
          <input 
            type="email"
            id="email"
            placeholder='Email address' 
            name='email'
            className='mb-4 w-full rounded-lg border-gray-400 bg-gray-100 py-3 pl-3 pr-5 text-lg'
          />
          <textarea
            id="message"
            cols="40"
            rows="6"
            placeholder='Message' 
            name='message'
            className='mb-4 w-full rounded-lg border-gray-400 bg-gray-100 py-3 pl-3 pr-5 text-lg'
          />
          <div className='flex justify-evenly'>
            <button type='submit' className="md:w-full px-6 py-3 text-lg font-bold text-gray-200 bg-primary-color rounded-lg">
              Send message 🚀
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact;