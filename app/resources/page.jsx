"use client"
import React, { useEffect } from 'react'
import {IoTrashOutline} from 'react-icons/io5'
import {GoArrowUpRight} from 'react/icons/go'
import {collection, getDocs} from 'firebase/firestore'

const page = () => {
  const [resources] = useState

const handleFetch = async () => {
  const querySnapshot = await getDocs(collection(db, "researches"))
  querySnapshot.forEach((doc)=> {
    console.log(doc.dat());
  })catch (error) {
    
  }
}
useEffect(() => {handleFetch();}, [])

  return (
    <main className='min-h-dvh max-lg:p-3'>
        <div className='capitalize text-center md:mt-10 mt-3 font-bold text-2xl md:text-3xl lg:w-1/2 mx-auto text-gray-900'>
      A centralised access point for research papers, date sets, tools and references to support discovery
    </div>
    <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:p-10 p-3'>
    <div className='p-3 md:p-6 rounded-md shadow-md hover:translate-y-2 transition-all duration-200 hover:shadow-xl'>
      <div>
        <blockquote className='flex justify-between items-center'>
        <span className='flex items-center gap-1'>
            <img src="/bg.jpg" alt="john doe" className='w-10 h-10 rounded-full'/>
          <p className='text-xl font-semibold text-gray-800'>john doe</p>
        </span>
        <button>
          <IoTrashOutline />
        </button>
        </blockquote>
        <article className='flex items-center flex-col gap-2 my-4'>
          <h1 className='font-bold text-2xl uppercase text-center'>China investment in Nigeria</h1>
          <p className='bg-orange-200 px-4 py-1 text-sm rounded-full'>Investments</p>
          <p className='line-clamp-7 font-light text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt unde eum tenetur ducimus explicabo vero nihil
            sapiente, esse ratione architecto quia, tempora repellat vel? Id quo reiciendis fugiat minima odio.</p>
        </article>
        <blockquote className='flex items-center justify-between'>
          <p className='text-xs text-gray-800'>Posted on 12/23/2026</p>
          <Link href={"#"} className="flex items-center hover:underline text-blue-600">Read More<GoArrowUpRight /></Link>
        </blockquote>
      </div>
    </div>
    </section>
    </main>
  )
}

export default page
