"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';
import Navbar from './components/common/Navbar';
import Stairs from './components/common/Stairs';
import { NavContext } from './components/context/NavContext';
import FullScreenNav from './components/navigation/FullScreenNav';
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Orbitron } from "next/font/google";
gsap.registerPlugin(ScrollTrigger);

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});
import './globals.css';






export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={orbitron.className}>
        <div >
          <div >
            <Link href={"/"} className={" text-[#f3e600] xl:text-6xl text-4xl md:text-4xl  sm:text-4xl font-bold p-1 left-2 text-border fixed z-[1001] "}>
              SED40
            </Link>
            <NavContext>
              <Navbar />
              <FullScreenNav />
              <Stairs>
                {children}
              </Stairs>
            </NavContext>
          </div>

        </div>
      </body>
    </html>
  );
}
