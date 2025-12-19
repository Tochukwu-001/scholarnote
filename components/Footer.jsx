import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <main className='border-t border-gray-200 md:px-20 md:py-4 p-3'>
       <Link href={"/"} className='flex items-center gap-1'>
            <Image src={"/logo.png"} alt='logo' width={500} height={500} className='w-10 h-10 z-50'/>
            <p>Scholarnote</p>
            </Link>
          <div></div>
    </main>

  )
}

export default Footer