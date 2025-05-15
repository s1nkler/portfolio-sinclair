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
      className="fixed bottom-4 left-0 max-w-[1400px] mx-auto h-16 flex justify-center items-center text-center right-0 px-8 md:px-0"
      style={{ backdropFilter: "blur(30px)" }}
    >
      <p className="text-gray-300 text-lg font-semibold glass p-4 rounded-lg">
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