import React from 'react'
import { monumentExtended } from "@/shared/fontLoader";
import Image from 'next/image'
import Home from 'public/Clone-X-1.png'
import Home2 from 'public/Mystery-Item-B.png'
import "../globals.css";




const Hero = () => {
  return (
    <div className=" bg-dark mx-auto md:h-full mt-20 xs:mt-8 sm:mt-8 w-full text-white">
      <h1 className={`pt-20 md:pt-24 ${monumentExtended.className} font-extrabold xl:text-hxl xs:text-4xl xl:px-48 sm:text-5xl md:text-6xl text-center media`}>Discover and Collect Super Rare NFTs</h1>
      <div className='bg-dark flex xs:flex-col justify-center items-center relative'>
        <div className='hidden xl:block glow-h1'></div>
        <div className='hidden xl:block glow-h2'></div>
        <Image
          className="absolute xs:-mt-36 xl:-mt-8 md:-mt-24 md:-ml-24  xs:-ml-6 xl:-ml-20 xs:mx-auto xs:w-72 sm:w-[21rem] md:w-[30rem] lg:w-[30rem] xl:w-[33rem] sm:-ml-10 sm:-mt-36"
          src={Home2}
          alt="homeGraphic2"
        />
        <Image
          className="z-20 md:-mt-32 xs:-mt-20"
          src={Home}
          alt="homeGraphic"
        />
        <div className=' flex items-center xs:flex-col md:flex-row justify-center xs:gap-2 lg:gap-8 xl:absolute z-20 sm:-mt-8  md:-mt-12 md:pb-10 xl:mt-[30rem] '>
          <button type='button' className={`${monumentExtended.className} bg-brightPink rounded-2xl py-4 text-white text-xl md:w-80 sm:w-[25rem] xs:w-80 font-extrabold hover:bg-white hover:text-brightPink tracking-[-.07em]`}> BUY</button>
          <button type='button' className={`${monumentExtended.className} bg-white rounded-2xl py-4 text-brightPink text-xl md:w-80 sm:w-[25rem] xs:w-80 font-extrabold hover:bg-brightPink hover:text-white tracking-[-.07em]`}> CONNECT WALLET</button>
        </div>
      </div>


    </div>

  )
}

export default Hero