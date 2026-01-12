"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { FiUser } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";




const Navbar = () => {
    const [open, setOpen] = useState(false)


    const navLinks = [
        {
            label: "Home",
            url:"/"
        },
   
        {
            label: "About",
            url:"about"
        },
    
        {
            label: "Contact",
            url:"/contact"
        },
    
        {
            label: "Libary",
            url:"/resources"
        },
    ]  
    
  return (
    <section className='sticky top-0'>
    <nav className='flex items-center justify-between md:px-10 py-2 p-3 shadow-md
    relative bg-white'>
        <Link href={"/"} className='flex items-center gap-1 z-50'>
        <Image src={"/logo.png"} alt='logo' width={500} height={500}
        className='w-10 h-10'/>
        <p className='max-md:hidden'> ScholarNote</p>
        </Link>
        <div className='ml-auto flex items-center gap-10 max-md:hidden '>
            {
                navLinks.map((item, index)=>(
                    <Link key={index} href={item.url} className='hover:text-orange-600
                    transition-all duration-200'>{item.label}</Link>
                ))
            }
        </div>
        <Link href={"#"} className='ml-10 border px-6 py-1 flex items-center gap-1
        hover:text-orange-600 transition-all duration-200 max-md:ml-auto z-50'>
        <FiUser/>
        < p className='max-md:hidden '>Sign in</p></Link>
        {/*Mobile and tablet navbar */}
        <div className={`h-dvh bg-white lg:hidden w-full absolute top-0 left-0
        flex-col items-center gap-10 pt-10 ${open ? "flex" : "hidden"}`}>
            {
                navLinks.map((items, i)=>(
                    <Link key={i} href={items.url}>{items.label}</Link>
                ))
            }

        </div>
        <button onClick={()=>{setOpen(!open)}} className='md:hidden ml:3 text-xl z-50'>
         { open ?  <AiOutlineClose/> :<HiMenuAlt3/> 
            }
        </button>
        </nav>
        </section>
  )
}

export default Navbar