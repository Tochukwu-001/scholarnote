"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';


const page = () => {
  const [resources,setResources] = useState ([])
  const handleFetch = async ()=>{
    try {

   
    const querySnapshot = await getDocs(collection(db, "researches"))
    querySnapshot.forEach((doc) =>{
      console.log(doc.data());
    })
     } catch (error) {
      console.e
     }
  }
  useEffect(() =>{handleFetch(); }, [])

  return (
    <main className='min-h-dvh max-lg:p-3'>
      <h1 className='capitalize text-center md:mt-10 font-bold text-2xl md:text-3xl lg:w-1/2 mx-auto text-gray-900'>
        A centralized acesss point for research papers, datasets,tools, and references to support discovery
      </h1>
      <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:p-10 p-3'>
        <div className='md:p-6 p-3 rounded-md shadow-md hover:-translate-y-2 transition-all duration-200
        hover:shadow-xl'>
          <div>
            <blockquote className='flex items-center justify-between'>
              <span className='flex items-center gap-1 '>
              <img src="bg.jpg" alt='john doe' className='w-10 h-10 rounded-full'/>
              <p className='text-xl font-semi-bold text-gray-800'>John Doe</p>
              </span>
              <button>
                <IoTrashOutline />
                 </button>
            </blockquote>
            <article className='flex items-center flex-col gap-4 my-4'>
              <h1 className='font-bold text-2xl uppercase text-center '>China Investment in Nigeria</h1>
              <p className='bg-orange-200 px-4 py-1 text-sm rounded-full'>Investment</p>
              <p className='line-clamp-7 font-light text-lg'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus ad eum sapiente a quibusdam inventore exercitationem iusto ea, sit veniam dolor explicabo perferendis nisi non dicta, dignissimos eveniet dolore! 
              </p>
            </article>
            <blockquote className='flex items-center justify-between'>
           <p className='text-xs text-gray-800'>Posted on 12/1/2026</p>
           <Link className='flex items-center hover:underline text-blue-600' href= {"#"}> Read more <GoArrowUpRight />
 </Link>
            </blockquote>
          </div>

        </div>

      </section>
    </main>
  )
}

export default page