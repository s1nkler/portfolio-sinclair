import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  DiHtml5, DiCss3, DiJavascript, DiBootstrap, DiPhp, DiReact, DiMongodb,
  DiJava, DiLaravel, DiMysql, DiDart, DiGit, DiPython, DiVisualstudio
} from "react-icons/di";
import {
  BiLogoTailwindCss, BiLogoFlutter, BiLogoGithub, BiLogoFigma
} from "react-icons/bi";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: -50 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const Skills = () => {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowItems(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      onAnimationComplete={() => setShowItems(true)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: "easeInOut",
        staggerChildren: 0.2,
        duration: 1,
        delay: 1.5,
      }}
      exit={{ opacity: 0, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" }}}
      exitTransition={{ duration: 0.1, ease: "easeOut" }}
      className="flex-col justify-center items-center h-[80vh] max-w-[1400px] pb-10 mx-auto my-auto pt-12 md:p-10 md:pt-12 p-10 mb-48"
      id="home"
    >
      <div className="p-12 text-8xl text-center glass">
        <p className="text-gray-200 text-4xl font-bold mb-12">Things that I've worked with</p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center justify-center gap-5 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={showItems ? "show" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiHtml5 className="flex text-orange-600 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">HTML</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiCss3 className="flex text-blue-600 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">CSS</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiJavascript className="flex text-yellow-600 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">JavaScript</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiBootstrap className="flex text-purple-600 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">Bootstrap</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiPhp className="flex text-indigo-400 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">PHP</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <BiLogoTailwindCss className="flex text-teal-500 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">Tailwind</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiReact className="flex text-cyan-500 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">React</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiMongodb className="flex text-green-500 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">MongoDB</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiJava className="flex text-orange-700 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">Java</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiLaravel className="flex text-red-400 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">Laravel</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiMysql className="flex text-sky-800 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">MySQL</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiDart className="flex text-blue-600 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">Dart</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <BiLogoFlutter className="flex text-sky-400 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">Flutter</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <BiLogoGithub className="flex text-gray-500 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">GitHub</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiGit className="flex text-red-500 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">Git</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiVisualstudio className="flex text-blue-500 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">VS Code</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <BiLogoFigma className="flex text-orange-400 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">Figma</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 glass hover:bg-slate-700 transition duration-300">
            <DiPython className="flex text-blue-400 item-center m-auto text-6xl" />
            <p className="m-auto mt-4 text-gray-300 text-xl">Python</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;