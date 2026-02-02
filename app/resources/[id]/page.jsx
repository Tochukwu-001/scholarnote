import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/config/firebase';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';


const page = async () => {

    const fetchSinglePost = async (id) => {
        const docRef = doc(db, "researches", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            ret
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }

    }

    fetchSinglePost()
    return (
        <main className='min-h-dvh'>
            <Link href={"/resources"} className=''><FaArrowLeft /></Link>
            <section className='w-1/2 mx-auto my-10'>
                <h1 className='text-center text-2xl font-bold text-gray-900'>{post.title}</h1>
                <span className='flex items-center gap-1 justify-center'>
                    <p>by</p>
                    <p className='font-semibold'>{post.author}</p>
                </span>
                <p className='bg-yellow-200 w-fit mx-auto px-4 py-1 rounded-full text-gray-800'>{post.category}</p>
                <p className='text-lg'>{post.note}</p>
                <span className='flex items-center gap-1 text-xs'>
                    <p>Posted on</p>
                    <p>{post.timestamp}</p>
                </span>
            </section>
        </main>
    )
}

export default page
