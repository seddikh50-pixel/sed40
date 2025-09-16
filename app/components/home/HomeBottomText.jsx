import Link from 'next/link'
import React from 'react'

const HomeBottomText = () => {
  return (
    <div className='flex justify-center items-center gap-5'>
      <Link className='xl:text-[12vh] text-[3vh] font-bold sm:text-[6vh] md:text-[8vh] leading-[1.2] hover:text-yellow-400 hover:border-yellow-400 border-3 rounded-full px-5  text-white' href={"/nightcity"}>Nightcity</Link>
      <Link className='xl:text-[12vh] text-[3vh] font-bold sm:text-[6vh] md:text-[8vh]  transition-all duration-500 leading-[1.2] hover:text-yellow-400 hover:border-yellow-400 border-3 rounded-full px-5  text-white' href={"/characters"}>characters</Link>
    </div>
  )
}

export default HomeBottomText