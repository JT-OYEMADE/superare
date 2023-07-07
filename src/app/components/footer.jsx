import Link from 'next/link';
import React from 'react'

const footlink = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookies Settings", href: "#" },
];
const Footer = () => {
  return (
    <footer className='mx-auto pt-[58px] pb-[130px] text-white font-thin text-sm xs:px-5 xl:px-[75px] '>
      <div className='border-t border-white pt-8 flex xs:flex-col xl:flex-row justify-between'>
        <p className='xs:order-2 xl:order-1  '>2023 Superare. All right reserved.</p>
        <div className='flex  xs:gap-8 xl:gap-4 xs:flex-col xl:flex-row xs:order-1 xl:order-2 xs:mb-8 xl:mb-0'>
          {footlink.map((item) => (
            <Link className='decoration-[0.5px] underline' key={item.name} href={item.href}>{item.name}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer