import React from "react";
import profilepic from "../assets/profile 1 grey.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { DiJavascript1, DiReact, DiHtml5, DiCss3, DiBootstrap, DiPhp, DiJava, DiMysql, DiLaravel, DiGit } from "react-icons/di";
import { motion } from "framer-motion";
import { BiLogoFlutter, BiLogoTailwindCss } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <div className="flex-col justify-center max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-8 p-8 mb-8 md:px-8 h-full" id="home">
        <motion.div 
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2, 
            delay: 0.7, 
            ease: [0.25, 0.1, 0.25, 1]
          }}
          exit={{ opacity: 0, x: -100, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" }}}
          exitTransition={{ duration: 0.1, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center md:col-span-5 p-4 sm:p-6 sm:my-4 glass"
        >
          <img
            className="w-full max-w-[350px] h-auto object-contain mb-4 md:mb-0"
            src={profilepic}
            alt="Profile Pic"
          />
          <div className="md:ml-8 flex flex-col text-gray-200 items-center md:items-start text-center md:text-left">
            <p className="text-3xl sm:text-5xl font-bold py-2">
              Hi Everyone!
              <br /> I am Sinclair Collins
              <div className="text-xl sm:text-4xl mt-2">
                a <br className="sm:hidden"/>
                <TypeAnimation sequence={[" Web Developer", 1000, " Software Developer", 1000, " Graphic Designer", 1000]} wrapper="span" speed={50} repeat={Infinity} />  
              </div>
            </p>
            <p className="hidden text-2xl md:text-3xl text-gray-400 font-semibold mt-4">
              with 0 year of experience :D.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full md:w-auto">
              <a
                href="/Sinclair's CV 2025.pdf"
                download="Sinclair's CV 2025.pdf"
                className="px-8 py-4 text-lg font-bold text-gray-200 bg-primary-color rounded-lg text-center"
              >
                Download CV
              </a>
              <a
                href="/about"
                className="px-8 py-4 text-lg font-bold text-gray-200 bg-zinc-800 rounded-lg hover:bg-slate-600 transition duration-300 text-center"
              >
                About Me →
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid md:col-span-3 gap-8 mt-8 md:mt-0" id="skills">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: [0.25, 0.1, 0.25, 1]
            }} 
            exit={{ opacity: 0, y: -100, transition: { delay: 0.5, duration: 0.5, ease: "easeOut" } }}
            exitTransition={{ duration: 0.1, ease: "easeOut" }}
            className="p-10 md:p-14 text-8xl text-center md:mt-4 glass"
          >
            <p className="text-gray-200 text-3xl font-bold mb-6">Some of My Tech Stack</p>
            <div className="grid grid-cols-4 text-center justify-center sm:gap-4 gap-6">
              <DiHtml5 className="text-orange-600" />
              <DiCss3 className="text-blue-600" />
              <DiBootstrap className="text-purple-600" />
              <DiPhp className="text-indigo-500" />
              <DiJavascript1 className="text-yellow-500" />
              <DiReact className="text-cyan-400" />
              <BiLogoTailwindCss className="text-teal-500" />
              <DiJava className="text-orange-700" />
              <DiMysql className="text-blue-400" />
              <BiLogoFlutter className="text-sky-500" />
              <DiLaravel className="text-red-400" />
              <DiGit className="text-red-500" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}  
            exit={{ opacity: 0, y: 100, transition: { delay: 0.7, duration: 0.5, ease: "easeOut" } }}
            exitTransition={{ duration: 0.1, ease: "easeOut" }}
            className="p-10 glass text-gray-400 text-center mb-8 sm:mb-4"
          >
            <p className="text-gray-200 text-3xl font-bold">Find me</p> <br />
            <div className="text-7xl gap-6 flex justify-center items-center">
              <a href="https://www.linkedin.com/in/sinclair-collins" target="_blank" rel="noopener noreferrer" className="hover:text-slate-100 transition duration-300"><AiFillLinkedin /></a>
              <a href="https://github.com/s1nkler" target="_blank" rel="noopener noreferrer" className="hover:text-slate-100 transition duration-300"><AiFillGithub/></a>
              <a href="https://www.instagram.com/collinssinclair" target="_blank" rel="noopener noreferrer" className="hover:text-slate-100 transition duration-300"><AiFillInstagram/></a>  
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;