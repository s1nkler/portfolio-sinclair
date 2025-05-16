import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} 
      transition={{
        duration: 0.7,
        delay: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }} 
      exit={{ opacity: 0, x: -50, transition: { delay: 0, duration: 0.5, ease: "easeOut" }}}
      exitTransition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
      className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 md:mt-[120px] md:pt-12"
    >
      <p className="text-3xl sm:text-4xl md:text-6xl font-bold primary-color mb-4 sm:mb-0">
        Education
      </p>
      <div className="hidden md:grid md:col-span-1 gap-8"></div>
      <div className="grid md:col-span-1 gap-6 sm:gap-8">
        <div className="mt-4 sm:mt-6 flex-col">
          <p className="text-base sm:text-lg md:text-3xl text-gray-300 pt-2 text-justify">
            Atma Jaya Yogyakarta University
          </p>
          <div className="grid grid-cols-5 mt-3 sm:mt-4">
            <p className="ml-2 sm:ml-8 my-auto col-span-2 text-base sm:text-lg md:text-xl text-gray-300 p-2 sm:p-3 glass text-center">
              2022 - Present
            </p>
            <p className="my-auto col-span-3 text-base sm:text-lg md:text-2xl text-gray-300 p-2 sm:p-4">
              Yogyakarta, Indonesia.
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 ml-4 sm:ml-12 pt-2 text-justify">
            Bachelor of Informatics
          </p>
          <p className="text-base sm:text-lg md:text-3xl text-gray-300 mt-5 sm:mt-6 text-justify">
            SMKN 2 Singkawang
          </p>
          <div className="grid grid-cols-5 mt-3 sm:mt-4">
            <p className="ml-2 sm:ml-8 my-auto col-span-2 text-base sm:text-lg md:text-xl text-gray-300 p-2 sm:p-3 glass text-center">
              2019 - 2022
            </p>
            <p className="my-auto col-span-3 text-base sm:text-lg md:text-2xl text-gray-300 p-2 sm:p-4">
              Singkawang, Indonesia.
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 ml-4 sm:ml-12 mb-12 sm:mb-24 pt-2 text-justify">
            Multimedia
          </p>
        </div>
      </div>
    </motion.div>
  );

};

export default Education;