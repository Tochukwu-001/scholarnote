
"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiUser} from "react-icons/fi" 


const navbar = () => {
  const [open, setOpen] = useState


    const navlinks =[
      {
      label:"Home",
      url:"/"
      },
        {
      label:"About",
      url:"/about"
      },
      {
      label:"Contact",
      url:"/contact"
      }
        {
      label:"Library",
      url:"/resources"
        }
]}
  return {(
    <nav className='flex justify-between md:px-10 p-3 py-2 shadow-md sticky top-0'>
      <Link href={"/"} className='flex items-center gap-1'>
      <image src={"/logo.png"} alt ='logo' width={500} height={500} className='w-10 h-10'/>
      <p>Scholarnote</p>
       </Link>

     <div className='ml-auto flex items-center gap-10'>
      {
        navLinks.map((item, index)=> (
          <Link key={index} href={item.url}   className='hover:text-orange-600 transition-all:duration-200'>{item.label}</Link>      ))
      }
     <Link href={'#'} className='ml-10 border px-4 py-1 flex items-center gap-1 hover:text-orange-600 transition-all duration-200'><FiUser/><p>Sign In</p>
     </Link>
      
     </div>

     <link href={"#"}>Sign in</link>

     <button className = 'md:hidden ml-3'>
      <HiMenuAlt3/>
      <IoMdClose/>
             </button>
    </nav>
  )
  }

     <link href={"#"}>Sign in</link>
export default navbar
