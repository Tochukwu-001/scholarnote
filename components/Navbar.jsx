
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
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiUser } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [open, setOpen] = useState(false)

const navLinks = [
  {
    label:"home",
    url:"/"
  },
  {
    label:"About",
    url:"/About"
  },
  {
    label:"contact",
    url:"/contact"
  },
  {
    label:"library",
    url:"/library"
  }
]
  return (
    <nav className='flex items-center justify-between md:px:10 p-3 py-2 shadow-md sticky top-0'>
      <link rel="stylesheet" href={"/"} className='flex items-center gap-1' >
       <Image src = {"/logo.png"} alt= 'logo' width={500} height= {500} className= 'w-10 h-10'/>
        <p className='max-md-hidden'>Scholarnote</p>
        </link>

        <div className='ml-auto flex items-center gap-10 max-md:hidden'>
          {
            navLinks.map((item, index)=> (
              <link key={index} href={item.url} className='hover:text-orange-600 transition-all: duration-200'></link>
            ))
          }
          <link href={"#"} className='text-lg '>home</link>
          <link href={"#"}>about</link>
          <link href={"#"}>contact</link>
          <link href={"#"}>libraray</link>
        </div>
        <Link href={"#"} className='ml-10 border px-4 py-1 flex items-center gap-1 hover:text-orange-600 transition-all: duration-200 max-md:hidden'>< FiUser /><p>sign in</p></Link>
    </nav>
  )
}

<button onClick={() => { setOpen (!open) }} className='md:hidden ml-3 text-xl'>
  open ? <IoMdClose /> : <HiOutlineMenuAlt3 />
</button>

export default Navbar
    const [open, setOpen] = useState(false)

    const navLinks = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "About",
            url: "/about"
        },
        {
            label: "Contact",
            url: "/contact"
        },
        {
            label: "Library",
            url: "/resources"
        },
    ]

    return (
        <nav className='flex items-center justify-between md:px-10 p-3 py-3 shadow-md sticky top-0'>
            <Link href={"/"} className='flex items-center gap-1'>
                <Image src={"/logo.png"} alt='logo' width={500} height={500} className='w-10 h-10' />
                <p className='max-md:hidden'>ScholarNote</p>
            </Link>

            <div className='ml-auto flex items-center gap-10 max-md:hidden'>
                {
                    navLinks.map((item, index) => (
                        <Link key={index} href={item.url} className='hover:text-orange-600 transition-all duration-200'>{item.label}</Link>
                    ))
                }
            </div>
            <Link href={"#"} className='ml-10 border px-4 py-1 flex items-center gap-1 hover:text-orange-600  transition-all duration-200 max-md:ml-auto'><FiUser /> <p className='max-md:hidden'>Sign In</p></Link>

            <button onClick={() => { setOpen(!open) }} className='md:hidden ml-3 text-xl'>
                {
                    open ? <IoMdClose /> : <HiMenuAlt3 />
                }
            </button>
        </nav>
    )
}

export default Navbar
