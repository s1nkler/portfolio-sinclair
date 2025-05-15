import React, { useState, useEffect, useRef } from 'react';
import { AiFillGithub, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { motion } from 'framer-motion';

const projects = [
  {
    img: [
      "/images/lapakLumine1.png", "/images/lapakLumine2.png", "/images/lapakLumine3.png", "/images/lapakLumine4.png",
      "/images/lapakLumine5.png", "/images/lapakLumine6.png", "/images/lapakLumine7.png", "/images/lapakLumine8.png"
    ],
    title: "Lapak Lumine",
    description: 
    "Lapak Lumine is an e-commerce website built with the robust Laravel PHP framework and a responsive Bootstrap interface. This combination delivers a secure, feature-rich online shopping experience with efficient product management and a user-friendly design across all devices.",
    links: {
      github: "https://github.com/s1nkler/Lapak-Lumine",
    },
  },
  {
    img: [
      "/images/cinemaHub1.jpg", "/images/cinemaHub2.jpg", "/images/cinemaHub3.jpg", "/images/cinemaHub4.jpg",
      "/images/cinemaHub5.jpg", "/images/cinemaHub6.png", "/images/cinemaHub7.png", "/images/cinemaHub8.png"
    ],
    title: "CinemaHub",
    description: "Built with Dart and Flutter, this mobile cinema ticketing app provides a secure and user-friendly experience. Users can effortlessly browse movie schedules and select their preferred seats. Completing ticket purchases is quick and convenient across all devices.",
    links: {
      github: "https://github.com/s1nkler/3_D_Bioskop/tree/Sinclair2",
    },
  },
  {
    img: [
      "/images/react1.png", "/images/react2.png", "/images/react3.png",
      "/images/react4.png", "/images/react5.png", "/images/react6.png"
    ],
    title: "Simple React Game",
    description: "A simple Tic Tac Toe game built with React. Players take turns marking 'X' or 'O' on an interactive board. React's core concepts manage the game state and determine the winner. This project demonstrates basic React web development.",
    links: {
      github: "https://github.com/s1nkler/PW10_E_11666",
    },
  },
  {
    img: [
      "/images/P3L-1.png", "/images/P3l-2.png", "/images/P3l-3.png", "/images/P3l-4.png",
      "/images/P3L-5.png", "/images/P3L-6.png", "/images/P3L-7.png"
    ],
    title: "ReUse Mart",
    description: "This project delivers a website (React) and a mobile app (Dart/Flutter) for a second-hand e-commerce marketplace. Both platforms offer easy browsing, secure transactions, and user-friendly interfaces for buying and selling used goods.",
    links: {
      github: "#",
    },
  },
  {
    img: [
      "/images/ml1.png", "/images/ml2.png", "/images/ml3.png",
      "/images/ml4.png", "/images/ml5.png", "/images/ml6.png"
    ],
    title: "Klasifikasi Jenis Telur",
    description: "This project focuses on developing a machine learning model for the classification of egg types. By leveraging various features extracted from egg images or other relevant data, the model aims to accurately categorize different kinds of eggs.",
    links: {
      github: "https://github.com/s1nkler/Projek-UAS-PMDPM_A_StarBoy.git",
    },
  },
];

const Work = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => 
        prev + 1 < projects[currentProject].img.length ? prev + 1 : 0
      );
    }, 3000);
  };

  const handleNextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => 
      prev + 1 < projects[currentProject].img.length ? prev + 1 : 0
    );
    if (projects[currentProject].img.length > 1) {
      startAutoSlide();
    }
  };

  const handlePrevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => 
      prev - 1 >= 0 ? prev - 1 : projects[currentProject].img.length - 1
    );
    if (projects[currentProject].img.length > 1) {
      startAutoSlide();
    }
  };

  useEffect(() => {
    if (projects[currentProject].img.length > 1) {
      startAutoSlide();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentProject]);

  const imageVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    }),
  };

  return (
    <div className='h-[80vh] mt-8 mb-28 md:mb-8 max-w-[1400px] pr-8 md:pr-0 md:mx-auto grid grid-cols-8 gap-8'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: 'easeOut' }}
        exit={{ opacity: 0, x: -50, transition: { duration: 0.5, ease: "easeOut" } }}
        className='z-10 col-span-3 grid place-items-center grid-cols-1 relative'
      >
        <p className='ml-8 text-gray-200 text-xl md:text-3xl'>
          <span className='text-2xl md:text-4xl font-bold'>Latest project that I've built.</span> More on my{' '}
          <a
            href="https://github.com/s1nkler"
            target="_blank"
            rel="noopener noreferrer"
            className='text-xl md:text-3xl text-orange-600 glass py-2 px-3 rounded-none hover:bg-slate-700 transition duration-300 inline-block mt-2'
          >
            Github
          </a>
        </p>

        <p className='text-gray-200 font-bold text-xl mt-4 md:mt-0 mb-4 md:mb-0 md:text-4xl -skew-y-6 ml-8'>
          Select Project :
        </p>

        <ul className='ml-6 flex flex-row text-base md:flex-col md:gap-8 flex-wrap justify-center gap-3 space-y-2 md:space-y-6 md:text-2xl'>
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => {
                setCurrentProject(index);
                setCurrentImageIndex(0);
                setDirection(0);
              }}
              className={`cursor-pointer text-gray-300 rounded-3xl px-4 py-2 hover:bg-slate-600 transition duration-300 ${
                currentProject === index ? 'glass text-orange-500' : ''
              }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        key={currentProject}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='z-5 glass w-full col-span-5 justify-center'
      >
        <div className='w-full h-[450px] md:h-[500px] relative overflow-hidden'>
          <div className='w-full h-full flex justify-center items-center bg-black p-8'>
            <motion.img
              key={currentImageIndex}
              src={projects[currentProject].img[currentImageIndex]}
              alt={projects[currentProject].title}
              className='max-w-full max-h-full object-contain'
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
            />
          </div>
          {projects[currentProject].img.length > 1 && (
            <div className='absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-8'>
              <button
                onClick={handlePrevImage}
                className='glass text-gray-200 p-3 rounded-full hover:bg-slate-700 transition duration-300'
              >
                <AiOutlineLeft size={28} />
              </button>
              <button
                onClick={handleNextImage}
                className='glass text-gray-200 p-3 rounded-full hover:bg-slate-700 transition duration-300'
              >
                <AiOutlineRight size={28} />
              </button>
            </div>
          )}
        </div>
        <br />
        <br />
        <div className='mb-8 mx-8 text-gray-300 flex justify-left font-weight'>
          <p style={{ fontSize: '32px' }}><strong>Description</strong></p>
        </div>
        <div className='mb-8 mx-8 text-gray-300 flex justify-center'>
          <p className='text-lg md:text-2xl'>{projects[currentProject].description}</p>
        </div>
        <br />
        <div className='flex space-x-6 pl-6 justify-center'>
          {projects[currentProject].links.github === "#" ? (
            <p className='text-lg md:text-xl text-gray-200'>Sorry, we can't show you at the moment</p>
          ) : (
            <a
              href={projects[currentProject].links.github}
              className='text-2xl md:text-3xl px-5 py-3 text-gray-200 rounded-lg glass hover:bg-slate-700 transition duration-300'
            >
              <AiFillGithub />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Work;