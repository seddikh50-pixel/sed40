"use client";

import React from 'react'
import Video from './Video'
import HomeHeroText from './HomeHeroText'
import HomeBottomText from './HomeBottomText'
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react";
import HomeParagraph from './HomeParagraph';


const HomePage = () => {
  const [show, setShow] = useState(true);

  return (
    <div >
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.1, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-black z-10"
            onAnimationComplete={() => setShow(false)}
          />
        )}
      </AnimatePresence>
      <div className='h-screen w-screen  fixed  '>
        <Video />
      </div>
      <div className='h-screen w-screen  relative flex flex-col justify-between p-3 '>
        <HomeHeroText />
        <HomeBottomText />
        <HomeParagraph />
      </div>
    </div>
  )
}

export default HomePage