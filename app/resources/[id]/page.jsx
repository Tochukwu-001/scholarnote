import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/config/firebase';


const fetchSinglePost = async (id) => {
    try {
        const docRef = doc(db, "researches", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {id, ...docSnap.data()};
        } else {
            return null;
        }
    } catch (error) {
        console.error("AN ERROR OCCURRED", error);
        throw error;
    }
};

    const page= async (params) => {
    const { id } = params;
    console.log(id);

    const post = await fetchSinglePost(id);
    if (!post) {
        return <p>Post not found</p>;
    }

    fetchSinglePost(id)
    return (
        <main className='min-h-dvh'>
            <Link href={"/resources"} className='absolute top-4 left-4'><FaArrowLeft/></Link>
            <section className='w-1/2 mx-auto my-10 space-y-3'>
                <h1 className='text-center font-bold text-2xl text-gray-900'>{post.title}
                <span className='flex items-center gap-1 justify-center'>
                    <p>by</p>
                    <p className='font-semibold'>{post.author}</p>
                    </span>
                    <p className='bg-yellow-200 inline-block py-4 rounded-full text-gray-800 w-fit mx-auto'>{post.category}</p>
                    <p>{post.note}</p>
                    <span className='flex items-center gap-1 text-xs'>
                        <p>posted on</p>
                        <p>{post.timestamp}</p>
                    </span>
                </h1>
            </section>
        </main>
    )
}

export default page