"use client"
import React from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);


const HomeHeroText = () => {
  const textRef = useRef()
  useGSAP(() => {
    gsap.from(".text", {
      y: -300,
      delay : 0.4,
      duration : 0.5,
      ease: "power1",
      stagger: {
        amount: 0.3
      }
    })
  })
  return (
    <div ref={textRef} className={'text-center xl:pt-20 lg:pt-20 md:pt-30 pt-40  '}>
      <div className='text xl:text-[20vh] text-[6vh] uppercase font-bold sm:text-[13vh] md:text-[16vh]  leading-[0.9] text-white '>
        Your

      </div>
      <div className='text xl:text-[20vh] text-[5vh] uppercase sm:text-[11vh] font-bold  md:text-[14vh] leading-[0.9] flex justify-center items-center text-white '>
        Gateway
        <div className='xl:w-72 md:w-60 sm:w-30 w-30  rounded-full overflow-hidden xl:h-32 md:h-25 sm:h-20 h-10'>
          <video className='h-full w-full object-cover' autoPlay loop muted src="/cyber4.mp4" />
        </div>
        to
      </div>
      <div className='text xl:text-[20vh] uppercase text-[6vh] font-bold  sm:text-[13vh] md:text-[16vh] leading-[0.9] text-white '>
        Night City
      </div>
    </div>
  )
}


export default HomeHeroText