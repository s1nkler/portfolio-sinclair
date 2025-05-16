import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 4,
        delay: 0.8,
        ease: [0, 1, 0.2, 1.01]
      }} 
      className="fixed bottom-2 left-0 w-full flex justify-center items-center text-center px-2 sm:px-4 md:px-0 z-50"
      style={{ backdropFilter: "blur(30px)" }}
    >
      <p className="text-gray-300 text-sm sm:text-base md:text-lg font-semibold glass p-2 sm:p-4 rounded-lg w-full max-w-[600px] mx-auto">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/sinclair-collins"
          className="text-orange-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinclair Collins{" "}
        </a>
        ©️2025
      </p>
    </motion.div>
  );
};

export default Footer;