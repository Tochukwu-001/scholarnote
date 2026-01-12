import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <main className='border-t border-gray-200 md:px-20 md:py-4 p-3 flex items-center justify-between'>
       <Link href={"/"} className='flex items-center gap-1 z-50'>
            <Image src={"/logo.png"} alt='logo' width={500} height={500} className='w-10 h-10'/>
            <p className=''>Scholarnote</p>
            </Link>
          <div>
            <Link href={'#'}>Terms of Use</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Bug Bounty</Link>
            <Link href={'#'}>FAQ's</Link>
          </div>
          <div>
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaYoutube/>
          </div>
    </main>

  )
}

export default Footer