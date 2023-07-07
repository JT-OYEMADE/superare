"use client"
import Join1 from 'public/join.png'
import Join2 from 'public/superare.png'
import { monumentExtended } from "@/shared/fontLoader";
import Image from 'next/image'


const navigation = [
  { name: "Roadmap", href: "#" },
  { name: "Team", href: "#" },
  { name: "About", href: "#" },
  { name: "Wallet", href: "#" },
  { name: "Buy", href: "#" },
];
const Join = () => {
  return (
    <section className='mx-auto xs:py-[50px] xl:py-[100px] text-white  xs:text-left xl:text-center xs:px-5'>
      <div>
        <h1 className={`${monumentExtended.className} tracking-[-0.09em] font-extrabold md:text-[40px] xl:text-[48px] xs:text-[24px] md:text-center`}>JOIN THE COMMUNITY</h1>
        <p className='xl:text-lg xs:text-[13px] sm:text-base font-thin md:px-[150px] xl:px-[370px]  md:text-center'>Join our Discord channel or follow us on Twitter keep up to date with our latest work and announcements.</p>
      </div>
      <div className='xl:px-[265px] xs:mb-[40px] xl:mb-[86px]'>
        <Image
          src={Join1}
          alt="Join"
        />
      </div>
      <div className='xl:px-[389px] lg:px-[120px] lg:m-0'>
        <Image
          src={Join2}
          alt="SuperareLogo"
          className='mb-5'
        />
        <div className=' text-base font-thin flex md:flex-row xs:flex-col justify-center xs:gap-4 xl:gap-7'>
          {navigation.map((item) => (
            <a key={item.key} href={item.href}>{item.name}</a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Join