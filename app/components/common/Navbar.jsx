"use client"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import Link from 'next/link';
import { useNavContext } from '../context/NavContext';
import { usePathname } from 'next/navigation';
import { Orbitron } from 'next/font/google';

const Cyberpunk = Orbitron({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  const [isOpen, setIsOpen] = useNavContext()
  const pathname = usePathname()


  const blackLeft = useRef()
  const yellowLeft = useRef()


  return (
    <div className='fixed top-0 left-0 z-10 w-screen flex justify-between  '>
      <Link href={"/"} className={Cyberpunk.className + " text-[#f3e600] text-6xl font-bold p-1 text-border"}>
        {/* SED40 */}
      </Link>
      <div onClick={() => setIsOpen(true)} onMouseEnter={() => {
        yellowLeft.current.style.height = '100%'
        yellowLeft.current.style.zIndex = '102'
        
      }}
        onMouseLeave={() => {
          yellowLeft.current.style.height = '0'
           yellowLeft.current.style.zIndex = '100'
          
        }}
        ref={blackLeft} className={`xl:w-75 md:w-60 sm:w-40  w-30  xl:h-13 lg:h-12 md:h-10 sm:h-8 h-10  text-white relative ${pathname === "/projects" ? "bg-[#f3e600]" : ' bg-black'}`}>
        <div className=' w-20 h-5 absolute right-5 xl:right-8 sm:right-5 md:right-7 group   top-4 flex flex-col justify-center items-end gap-1 z-[101] '>
          <div className={`w-13 h-[2px]  ${pathname === "/projects" ? "bg-black" : ' bg-[#f3e600]'}`}></div>
          <div className={`w-8 h-[2px] ${pathname === "/projects" ? "bg-black" : ' bg-[#f3e600]'}`}></div>
        </div>
        <div ref={yellowLeft} className={`w-full h-0 transition-all   ${pathname === "/projects" ? "bg-black" : ' bg-[#f3e600]'} absolute top-0 left-0`}>
          <div className=' w-20 h-5 absolute right-5 xl:right-8 sm:right-5 md:right-7 group   top-4 flex flex-col justify-center items-end gap-1 z-[100] '>
            <div className={`w-13 h-[2px]  ${pathname === "/projects" ? "bg-[#f3e600]" : ' bg-black'}`}></div>
            <div className={`w-8 h-[2px] ${pathname === "/projects" ? "bg-[#f3e600]" : ' bg-black'}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar