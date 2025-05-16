import React from 'react'
import profilepic from "../assets/profile 3.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const About = () => {

  return (
    <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 md:p-16 md:mt-[120px]">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{
          duration: 0.6,
          delay: 1.7,
          ease: [0.25, 0.1, 0.25, 1]
        }}  
        exit={{ opacity: 0, x: -50, transition: { delay: 0, duration: 0.5, ease: "easeOut" }}}
        exitTransition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
        className="grid md:col-span-1 gap-6 sm:gap-8" id="skills"
      >
        <div className="my-auto flex-col text-gray-200 p-2 sm:p-4 md:p-8">
          <p className="text-3xl sm:text-4xl md:text-7xl font-bold py-4 sm:py-6">
            <span>About</span> 
            <TypeAnimation sequence={[" Me", 1500, " Sinclair", 1500]} speed={50} repeat={Infinity} className="text-white" />
          </p>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 pt-4 sm:pt-6 text-justify leading-relaxed">
            Hi! My name is Sinclair Collins, though I usually go by Sin. I'm currently studying Informatics at Atmajaya Yogyakarta University. I enjoy building things that live on the internet, and my passion for Web & Software Development sparked back in 2021. 
          </p>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 pt-6 sm:pt-8 text-justify leading-relaxed">
            I'm a driven and ambitious individual who actively seeks out challenges and sets personal goals to maintain forward momentum. I also enjoy connecting with new people and learning from their diverse experiences and backgrounds.
          </p>
          <div className="mt-6 sm:mt-8">
            <a
              href="/Sinclair's CV 2025.pdf"
              download="Sinclair's CV 2025.pdf"
              className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-gray-200 bg-primary-color rounded-lg block w-full sm:w-auto text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 2,
          ease: [0.25, 0.1, 0.25, 1]
        }}  
        exit={{ opacity: 0, x: 50, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" }}}
        exitTransition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
        className="hidden md:p-6 glass md:flex justify-center items-center text-center"
      >
        <img className="w-[220px] sm:w-[320px] md:w-[500px] h-auto rounded-lg" src={profilepic} alt="Profile Pic" />
      </motion.div>
    </div>
  )

}

export default About;