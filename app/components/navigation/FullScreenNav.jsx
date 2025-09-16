"use client"

import Image from 'next/image'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
import { Black_Ops_One } from 'next/font/google';
import Link from 'next/link';
import { useNavContext } from '../context/NavContext';
import { useMediaQuery } from 'react-responsive';


const BlackOpsOne = Black_Ops_One({ subsets: ['latin'], weight: '400' });


const FullScreenNav = () => {
    const [isOpen, setIsOpen] = useNavContext()

    const fullScreenRef = useRef(null)

    const marqueeRef1 = useRef(null);
    const marqueeRef2 = useRef(null);
    const marqueeRef3 = useRef(null);
    const marqueeRef4 = useRef(null);
    const closeRef = useRef()
    const transDev = useRef()
    const bigWrapper = useRef(null)
    const wrapperRef1 = useRef(null)
    const wrapperRef2 = useRef(null)
    const wrapperRef3 = useRef(null)
    const wrapperRef4 = useRef(null)
    const [counter, setCounter] = useState(0);



    useGSAP(() => {


        gsap.to(marqueeRef1.current, {
            x: "-50%",
            repeat: -1,
            ease: "linear",
            duration: 5, // السرعة
        });
        gsap.to(marqueeRef2.current, {
            x: "-50%",
            repeat: -1,
            ease: "linear",
            duration: 5, // السرعة
        });
        gsap.to(marqueeRef3.current, {
            x: "-50%",
            repeat: -1,
            ease: "linear",
            duration: 5, // السرعة
        });

    })




    useGSAP(() => {
        const boxes = Array.from(transDev.current.children);
        const currents = [wrapperRef1, wrapperRef2, wrapperRef3, wrapperRef4].map((w) => w.current)

        if (isOpen) {
            const tl = gsap.timeline();

            tl.set(fullScreenRef.current, { display: "block", opacity: 0, y: -50 });
            tl.set(transDev.current, { display: "flex" })


            // 2. خليه يبان
            tl.to(fullScreenRef.current, {
                opacity: 1,
                y: 0,
                scaleY: 1,
                duration: 0.6,
                ease: "power2.inOut",
            });

            tl.fromTo(boxes,
                { scaleY: 1, transformOrigin: "bottom center" },
                {
                    scaleY: 0,
                    duration: 0.4,
                    transformOrigin: "top center",
                    stagger: { amount: 0.3, ease: "power2.inOut" },
                    onComplete: () => {
                        transDev.current.style.display = "none";
                    }
                },
                "-=0.3"
            );

            tl.fromTo(currents, { y: -100 }, {
                duration: 0.5,
                y: 0,
                transformOrigin: "bottom center",
                stagger: {
                    amount: -.3
                },
            }, "<")


        } else {
            setCounter(prev => prev + 1)
            if (counter > 0) {

                const tl1 = gsap.timeline()

                // خلي الحاوية تبان قبل الصناديق
                tl1.set(transDev.current, { display: "flex" });

                // الصناديق تتعمر من تحت
                tl1.fromTo(boxes,
                    { scaleY: 0, transformOrigin: "top center" },
                    {
                        scaleY: 1,
                        duration: 0.4,
                        stagger: { amount: 0.3, ease: "power2.inOut" },
                    }
                );

                tl1.to(currents, {
                    duration: 0.5,
                    y: -100,
                    transformOrigin: "bottom center",
                    stagger: {
                        amount: -.3
                    },

                }, "<")




                tl1.to(fullScreenRef.current, {
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.inOut",
                    onComplete: () => {
                        fullScreenRef.current.style.display = "none";
                    }
                });

            }

        }

    }, [isOpen]);


    const [number, setNumber] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: "768px" })
    const isTablet = useMediaQuery({ minWidth: '769px', maxWidth: "1000px" })
    const isWideScreen = useMediaQuery({ minWidth: '1001px' })
    useEffect(() => {
        if (isMobile) {
            setNumber(4)
        }
        if (isTablet) {
            setNumber(5)
        }
        if (isWideScreen) {
            setNumber(6)
        }
    }, []);









    return (
        <div ref={fullScreenRef} id='fullscreennav' className={`${isOpen ? "block" : "hidden"} py-40 w-full h-screen overflow-hidden z-50 fixed bg-black    `}>
            <div ref={transDev} className="transition  h-screen w-screen fixed top-0 z-[1000] flex">
                {Array.from({ length: number }).map((_, i) => (
                    <div
                        key={i}
                        className={`flex-1 h-full border-r border-black bg-[#f3e600]`}
                    ></div>
                ))}

            </div>
            <div ref={bigWrapper} className={` `}>
                <div className='flex justify-between absolute top-0 w-full z-50   '>
                    <div className=''>
                        <h1 className={BlackOpsOne.className + " text-[#f3e600] text-6xl font-bold p-1 text-border "}></h1>
                    </div>
                    <div ref={closeRef} onClick={() => setIsOpen(false)} className=' right-1 group  xl:h-36 lg:w-34 lg:h-34 md:w-30 md:h-30 w-20 h-20 sm:w-25 sm:h-24  xl:w-36 text-white flex justify-center cursor-pointer transition-all items-center flex-col  bg-black z-40 '>
                        <div className='w-full h-[2px] group-hover:bg-[#55ead4] bg-[#f3e600] transition-all rotate-45'></div>
                        <div className='w-full h-[2px] group-hover:bg-[#55ead4] bg-[#f3e600] transition-all  -rotate-45'></div>
                    </div>
                </div>
                <div
                    id='links' className=''   >
                    <Link href={"/"} ref={wrapperRef1} onClick={() => setIsOpen(false)} className=' relative z-10  bg-black'
                        onMouseEnter={(e) => {
                            const rect = wrapperRef1.current.getBoundingClientRect();
                            const height = rect.height / 2
                            const MousePos = e.clientY - rect.top
                            const isFromTop = MousePos > height
                            gsap.to(marqueeRef1.current, { scaleY: 1, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "bottom center" : "top center" });
                        }}
                        onMouseLeave={(e) => {
                            const rect = marqueeRef1.current.getBoundingClientRect();
                            const isFromTop = e.clientY <= rect.top; // خرج من فوق
                            gsap.to(marqueeRef1.current, { scaleY: 0, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "top center" : "bottom center" });
                        }}
                    >
                        <h1 className='uppercase text-[#f3e600] font-bold p-3 xl:pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[6vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] border-t-[#f3e600] border-t'
                        >Home</h1>
                        <div ref={marqueeRef1} className='flex absolute top-0 z-40   bg-[#f3e600] h-full scale-y-0     '>
                            <div className='flex  items-center justify-center overflow-hidden gap-5  '>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>your
                                    Gateway
                                    to
                                    Night City
                                </h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                </div>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>your
                                    Gateway
                                    to
                                    Night City
                                </h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                </div>
                            </div>
                            <div className='flex  items-center justify-center overflow-hidden gap-5  '>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>your
                                    Gateway
                                    to
                                    Night City
                                </h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                </div>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>your
                                    Gateway
                                    to
                                    Night City
                                </h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href={'/characters'} onClick={() => setIsOpen(false)} ref={wrapperRef2} className=' relative  bg-black'
                        onMouseEnter={(e) => {
                            const rect = wrapperRef2.current.getBoundingClientRect();
                            const height = rect.height / 2
                            const MousePos = e.clientY - rect.top
                            const isFromTop = MousePos > height
                            gsap.to(marqueeRef2.current, { scaleY: 1, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "bottom center" : "top center" });
                        }}
                        onMouseLeave={(e) => {
                            const rect = marqueeRef2.current.getBoundingClientRect();
                            const isFromTop = e.clientY <= rect.top; // خرج من فوق
                            gsap.to(marqueeRef2.current, { scaleY: 0, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "top center" : "bottom center" });
                        }}
                    >
                        <h1 className='uppercase text-[#f3e600] font-bold p-3 xl:pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[5.5vh] sm:text-[10vh] md:text-[12vh]  leading-[0.9] border-t-[#f3e600] border-t'
                        >Characters</h1>
                        <div ref={marqueeRef2} className='flex h-full absolute top-0 z-10 bg-[#f3e600] scale-y-0      '>
                            <div className='flex  items-center justify-center overflow-hidden gap-5  '>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>Faces of Night City</h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/characters/cyberpunk1.jpg"} />
                                </div>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>Faces of Night City</h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/characters/cyberpunk2.jpg"} />
                                </div>
                            </div>
                            <div className='flex  items-center justify-center overflow-hidden gap-5  '>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>Faces of Night City</h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/characters/cyberpunk3.jpg"} />
                                </div>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>Faces of Night City</h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/characters/cyberpunk4.jpg"} />
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link href={'/nightcity'} onClick={() => setIsOpen(false)} ref={wrapperRef3} className=' relative  bg-black'
                        onMouseEnter={(e) => {
                            const rect = wrapperRef3.current.getBoundingClientRect();
                            const height = rect.height / 2
                            const MousePos = e.clientY - rect.top
                            const isFromTop = MousePos > height
                            gsap.to(marqueeRef3.current, { scaleY: 1, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "bottom center" : "top center" });
                        }}
                        onMouseLeave={(e) => {
                            const rect = marqueeRef3.current.getBoundingClientRect();
                            const isFromTop = e.clientY <= rect.top; // خرج من فوق
                            gsap.to(marqueeRef3.current, { scaleY: 0, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "top center" : "bottom center" });
                        }}
                    >
                        <h1 className='uppercase text-[#f3e600] font-bold p-3 xl:pt-3  text-center lg:text-[14vh] xl:text-[16vh] text-[6vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] border-t-[#f3e600] border-b  border-t'
                        >Nightcity</h1>
                        <div ref={marqueeRef3} className='flex absolute h-full top-0 z-10 bg-[#f3e600] scale-y-0      '>
                            <div className='flex  items-center justify-center overflow-hidden gap-5  '>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>Streets of Night City</h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/images/nightcity1.jpg"} />
                                </div>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>Streets of Night City</h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/images/nightcity2.jpg"} />
                                </div>
                            </div>
                            <div className='flex  items-center justify-center overflow-hidden gap-5  '>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>Streets of Night City</h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/images/nightcity3.jpg"} />
                                </div>
                                <h2 className='uppercase font-bold pt-3 text-center lg:text-[14vh] xl:text-[16vh] text-[10vh] sm:text-[10vh] md:text-[12vh] leading-[0.9] whitespace-nowrap'>Streets of Night City</h2>
                                <div className='relative xl:w-64 lg:w-64 md:w-54 sm:w-40 w-35 xl:h-25 lg:h-22 md:h-20 sm:h-18 h-15'>
                                    <Image loading="lazy" fill className='object-cover transition-all rounded-full' alt='link1' src={"/images/nightcity4.jpg"} />
                                </div>
                            </div>
                        </div>
                    </Link>



                 






                </div>

            </div>

        </div>
    )
}

export default FullScreenNav