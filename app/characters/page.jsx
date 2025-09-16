"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/all';
import { AnimatePresence, motion } from "framer-motion";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useMediaQuery } from 'react-responsive';




gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin);
const page = () => {
  const [show, setShow] = useState(true);
  const videoRef = useRef()
  const videoWrapper = useRef()
  const parRef = useRef()

  const charRef = useRef(null)
  const sectionOne = useRef(null)
  const imageDevRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const [index, setIndex] = useState(0);
  const images = [
    "/images/johnny1.jpg",
    "/images/johnny2.jpg",
    "/images/johnny3.jpg",
    "/images/johnny4.jpg"
  ]

  const characterImages = [
    "/characters/cyberpunk1.jpg",
    "/characters/cyberpunk2.jpg",
    "/characters/cyberpunk3.jpg",
    "/characters/cyberpunk4.jpg",
    "/characters/cyberpunk5.jpg"
  ]

  const isMobile = useMediaQuery({ maxWidth: "768px" })










  useGSAP(() => {

    let split = SplitText.create(textRef.current, {
      type: "chars, lines",
      mask: "chars",
      linesClass: "line++",
    });


    gsap.from(split.chars, {
      y: -200,
      scale: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: 1,
      ease: "power1"
    })

    let split2 = SplitText.create(parRef.current, {
      type: "chars, lines",
      mask: "chars",
      linesClass: "line++",
    });

    //timeline two 
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "top 30%",
        end: "+=360",
        scrub: 2,
        pin: imageDevRef.current,
        onUpdate: (self) => { setIndex(Math.floor(self.progress * (images.length - 1))) }
      }
    })
    tl1.from(split2.chars, {
      display: "none",
      stagger: 0.1,
      duration: 0.5,
      delay: 1,
      ease: "power1"

    })




    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoWrapper.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          pin: true,
          pinSpacing: false
        },
      });

      // تحريك الفيديو
      tl.to(video, {
        currentTime: video.duration,
        ease: "power1",
      });

      // تحريك النص
      tl.to(
        textRef.current,
        {
          scale: 0,
          ease: "power1.inOut",
          motionPath: {
            path: [
              { x: 0, y: 0 },      // البداية
              { x: -1000, y: -200 }, // منحنى للأعلى
              { x: -2000, y: 0 },   // النهاية
            ],
            curviness: 4,
            autoRotate: false,
          },
        },
        "<"
      );
    };
    if (video.readyState >= 1) { // HAVE_METADATA
      handleLoaded();
    } else {
      video.addEventListener("loadedmetadata", handleLoaded);
    }



    const split3 = SplitText.create(charRef.current, {
      type: "chars, lines",
      mask: "chars",
      linesClass: "line++",
    })





    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "top 80%",
        scrub: 3,
        end: '+=600',
      }
    })
    let randomFn = gsap.utils.random(50, 200, true); // مولّد أرقام عشوائية
    tl3.from(split3.chars, {

      y: (i) => {
        let val = randomFn();
        return i % 2 === 0 ? val * 50 : -val * 50;
      },
      duration: 1,
      stagger: 0.05,

    });

    tl3.from('.imageBox', {
      rotateZ: 45,
      y: 500,
      duration: 0.3,
      ease: "power1",
      stagger: {
        amount: 0.4
      }
    })





    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);

    };




  });








  return (
    <div id="smooth-wrapper" className=''>
      <div id="smooth-content">



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
        <div ref={videoWrapper} className='w-screen h-screen flex justify-center items-center   '>
          <div className='absolute'>
            <h1
              style={{
                WebkitTextStroke: "2px black", // سمك وحدود النص
                WebkitTextFillColor: "#f3e600", // لون النص نفسه
              }}
              ref={textRef} className=' text-[#f3e600] font-bold     lg:text-[18vh] xl:text-[23vh] whitespace-nowrap text-[8vh] sm:text-[11vh] md:text-[14vh]   leading-[0.9] uppercase'>
              Night City
            </h1>
          </div>
          <video ref={videoRef} muted
            playsInline
            preload="metadata" 
            className='vid w-full object-cover h-full rounded-xl' src="/output.mp4"></video>
        </div>



        <div className="section2 h-screen w-screen relative bg-black">
          <div ref={imageDevRef} className='imageContainer absolute h-50 w-30 xl:h-120 xl:w-90 lg:h-100 lg:w-80 md:h-90 md:w-60 sm:w-50 sm:h-80   rounded-3xl top-18  overflow-hidden xl:left-40 lg:left-35 md:left-10 sm:left-10  left-3 z-0'>
            <Image loading="lazy" ref={imageRef} src={images[index]} className='img1 object-cover' alt='' fill />
          </div>
          <div className=' z-1  relative'>

            <div className='pl-[35%] pt-20 xl:pt-55 relative '>

              <p ref={parRef} className=' relative p-4 rounded-br-2xl rounded-tl-2xl   text-[#f3e600] max-w-[1000px]  xl:text-4xl text-lg md:text-2xl sm:text-xl lg:text-3xl selection:bg-[#f3e600] selection:text-black   '>
                {/* <span className='absolute w-150 h-5 top-99 left-50 bg-black hidden xl:block '></span> */}
                &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Johnny Silverhand is a legendary "rockerboy" and a central figure in the Cyberpunk franchise, notably serving as a co-protagonist in Cyberpunk 2077. A charismatic but volatile war veteran and musician, he led the rebellious band Samurai, fighting against the mega-corporations like Arasaka. He is known for losing an arm in the Central American Conflict, which becomes embedded in the player's head in Cyberpunk 2077,
              </p>

            </div>
          </div>
        </div>






        <div ref={sectionOne} className='section1 bg-black relative h-screen flex flex-col  justify-start items-center '>
          <h1 ref={charRef} className='text-center  text-[#f3e600] border-t-[#f3e600] border-t  p-5 xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-4xl h-72 bg-black'>CHARACTERS</h1>

          <div className="relative grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-10 mt-10">

            {characterImages.map((img, index) => (
              <div
                key={index}
                className={`imageBox w-[200px] h-[300px]   xl:w-[330px] lg:-translate-y-30 md:-translate-y-20 sm:-translate-y-10 xl:-translate-y-40 xl:h-[500px] bg-[#f3e600] rounded-xl p-1 overflow-hidden`}
                style={{
                  transform: `rotate(${index % 2 === 0 ? "-6deg" : "6deg"}) `,
                }}
              >
                <div className="relative w-[99%] h-[99%] rounded-8xl">
                  <Image
                    loading="lazy"
                    src={img}
                    alt={`character-${index}`}
                    fill
                    className="object-cover rounded-xl"

                  />
                </div>
              </div>
            ))}
          </div>



        </div>


        <section className='section3 xl:hidden w-full sm:h-[400px] md:h-[200px] lg:h-[100px] h-[1100px] bg-black'>

        </section>
      </div>
    </div>

  )
}

export default page