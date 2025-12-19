"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [open, setOpen] = useState(false);

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
        <section className='relative'>
            <nav className='flex items-center justify-between md:px-10 p-3 py-3 shadow-md sticky top-0'>
                <Link href={"/"} className='flex items-center gap-1 z-50'>
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
                <Link href={"#"} className='ml-10 border px-4 py-1 flex items-center gap-1 hover:text-orange-600  transition-all duration-200 max-md:ml-auto z-50'><FiUser /> <p className='max-md:hidden'>Sign In</p></Link>

                {/* mobile and tablet navbar */}
                <div className={`h-dvh bg-white lg:hidden w-full absolute top-0 left-0 flex-col items-center gap-10 pt-20 ${open ? "flex" : "hidden"} `}>
                    {
                        navLinks.map((item, i) => (
                            <Link key={i} href={item.url}>{item.label}</Link>
                        ))
                    }
                </div>

                <button onClick={() => { setOpen(!open) }} className='md:hidden ml-3 text-xl z-50'>
                    {
                        open ? <IoMdClose /> : <HiMenuAlt3 />
                    }
                </button>
            </nav>
        </section>
    )
}

export default Navbar
