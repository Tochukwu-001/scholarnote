"use client";
import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 

const UpdateProfile = ({ session }) => {

    const username = session.user.name
    const authId = session.user.id

    const [currentName, setCurrentName] = useState(username)

const handleUpdate = async () => {
    try {

        const docRef = doc(db, "users", id);
    
// Set the "capital" field of the city 'DC'
await updateDoc(docRef, {
    name: currentName
});
    alert("profile update successful!")
    console.log(currentName, username);
} catch (error) {
    console.error("An error occurred", error);
    alert("An error occurred while updating profile.")
}
}
    return (
        <div className='w-1/2 mx-auto mt-10'>
            <div className='space-y-5'>
                <input onChange={()=> setCurrentName(event.target.value)} type="text" className='w-full outline-none border border-gray-300 rounded-md px-3 py-2' 
                placeholder='Enter your name...' value={currentName} />
                <button className='w-full bg-orange-600 text-white rounded-md p-2 hover:bg-orange-700 transition-all 
                duration-200 cursor-pointer'>Update Profile</button>
            </div>
        </div>
    )
}

export default UpdateProfile
