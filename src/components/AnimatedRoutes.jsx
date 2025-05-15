import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Contact from "./Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence >
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={
            <>
              <About />
              <Education />
            </>
          } />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes