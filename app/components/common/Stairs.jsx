"use client"
import React, { useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { usePathname } from 'next/navigation';




gsap.registerPlugin(ScrollTrigger);
const Stairs = ({ children }) => {


    const pathname = usePathname()
    const pageRef = useRef(null)
    const transDev = useRef()
    useGSAP(() => {

        const boxes = gsap.utils.toArray(transDev.current.children)
        const tl = gsap.timeline()
        tl.set(transDev.current, {
            display: "flex",
        })


        tl.to(boxes, {
            scaleY: 1,
            ease: "power1.in",
            transformOrigin: "top center",
            duration: 0.2,
            stagger: { amount: -0.5 }
        }) 
        
        tl.to(boxes, {
            scaleY: 0,
            ease: "power1",
            transformOrigin: "bottom center",
            duration: 0.3,
            stagger: {
                amount: 0.3
            },
        })





        tl.set(transDev.current, {
            display: "none"
        })








    }, [pathname]);


    return (
        <div className='overflow-hidden '>


            <div ref={transDev} className="transition  h-screen w-screen fixed top-0 z-30 flex">
                <div className={`w-1/5 h-full border-l border-l-black scale-y-0 ${pathname === "/nightcity" ? "bg-[#f3e600]" : ' bg-black'} `}></div>
                <div className={`w-1/5 h-full border-l border-l-black scale-y-0 ${pathname === "/nightcity" ? "bg-[#f3e600]" : ' bg-black'} `}></div>
                <div className={`w-1/5 h-full border-l border-l-black scale-y-0 ${pathname === "/nightcity" ? "bg-[#f3e600]" : ' bg-black'} `}></div>
                <div className={`w-1/5 h-full border-l border-l-black scale-y-0 ${pathname === "/nightcity" ? "bg-[#f3e600]" : ' bg-black'} `}></div>
                <div className={`w-1/5 h-full border-l border-l-black scale-y-0 ${pathname === "/nightcity" ? "bg-[#f3e600]" : ' bg-black'} `}></div>
            </div>
            <div ref={pageRef} className='relative '>

                {children}
            </div>
        </div>
    )
}

export default Stairs

