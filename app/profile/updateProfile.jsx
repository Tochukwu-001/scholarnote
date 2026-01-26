"use client";
import React, {useState} from 'react'

const updateProfile = () => {

    const username = session.user.name

const [currentName, setCurrentName] = useState(username)

  return (
<div className='w-1/2 mx-auto mt-10'>
              <form action="" className='space-y-5'>
                <input type="text" className='w-full outline-none border border-gray-300 rounded-md px-3 py-2' placeholder='Enter your name...'
                />
                <button className='w-full bg-orange-600 text-white rounded-md p-2 hover:bg-orange-700 transition-all duration-200'>Update Profile</button>
              </form>
            </div>  )
}

export default updateProfile