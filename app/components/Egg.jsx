import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Egg = () => {
//       useGSAP(() => {
//     const ellipse = document.querySelector("#myEllipse");
//     if (!ellipse) return;

//     const length = ellipse.getTotalLength();
//     ellipse.style.strokeDasharray = length;
//     ellipse.style.strokeDashoffset = length;

//     gsap.from(ellipse, {
//       strokeDashoffset: 0,
//       duration: 5,
//       ease: "power1.inOut",
//     });
//   }, []);
    return (
        <div>
            <svg viewBox="0 0 300 200" width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="300" cy="100" rx="120" ry="40"
                    fill="none" stroke="#00e6ff" strokeWidth="2" />
            </svg>

        </div>
    )
}

export default Egg