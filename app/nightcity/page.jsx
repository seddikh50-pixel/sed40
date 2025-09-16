"use client"
import React, { useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "motion/react"
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);
const page = () => {
  const [show, setShow] = useState(true);
  const images = [
    { image1: "/images/nightcity1.jpg", title1: "Neon Nights", image2: "/images/nightcity2.jpg", title2: "Neon Shadows" },
    { image1: "/images/nightcity3.jpg", title1: "Cyberpunk Serenity", image2: "/images/nightcity4.jpg", title2: "Neon Lights And Futuristic Aesthetic" },
    { image1: "/images/nightcity5.jpg", title1: "cyberpunk-urban-scenery", image2: "/images/nightcity6.jpg", title2: "Cyberpunk Urban Jungle" },
    { image1: "/images/nightcity7.jpg", title1: "Cyberpunk Futuristic City Streetscape in Action", image2: "/images/nightcity8.jpg", title2: "Cyberpunk City Street Night With Neon Lights Futuristic Aesthetic" }
  ]




  useGSAP(() => {

    gsap.from(".imagesDev", {
      height: "100px",
      stagger: { amount: 0.8 },
      scrollTrigger: {
        trigger: ".lol",
        scrub: true,
        start: "top 80%",
        end: "top -200%",
      }
    }
    )

    gsap.from(".text",{
      y : -200,
      transformOrigin : "top center",
      duration : 2,
      ease : "bounce"
    })

  });
  return (
    <div className='bg-black  p-4 '>
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
      <div className='pt-[50vh]  leading-[0.9]'>
        <h1 className='text xl:text-[22vh] text-[8vh] sm:text-[13vh] md:text-[16vh] pb-2   text-[#f3e600]  uppercase font-bold'>Streets</h1>
        <h1 className='text xl:text-[15vh] text-[5vh] sm:text-[8vh] md:text-[10vh]   text-[#f3e600]  uppercase font-bold'>Of Night City</h1>
      </div>
      <div className='flex flex-col gap-3 lol '>
        {images.map((images, index) => {
          return (
            <div className="imagesDev w-full relative  h-[600px] overflow-hidden grid gap-10 mt-5  sm:grid-cols-2 md:grid-cols-2   xl:grid-cols-2 " key={index}>

              <div className='w-full h-full hover:rounded-4xl group transition-all overflow-hidden relative '>
                <div className=' absolute z-1 opacity-0 group-hover:opacity-100 inset-0 bg-black/40 transition-all flex justify-center items-center '><h1 className='text-yellow-300 text-2xl font-light  opacity-100'>{images.title1}</h1></div>
                <Image loading="lazy" 
                  className='object-cover' src={images.image1} fill alt='' />
              </div>
              <div className='w-full h-full hover:rounded-4xl group transition-all overflow-hidden relative '>
                <div className=' absolute z-1 opacity-0 group-hover:opacity-100 inset-0 bg-black/40 transition-all flex justify-center items-center '><h1 className='text-yellow-300 text-2xl font-light  opacity-100'>{images.title2}</h1></div>
                <Image loading="lazy" 
                  className='object-cover' src={images.image2} fill alt='' />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page