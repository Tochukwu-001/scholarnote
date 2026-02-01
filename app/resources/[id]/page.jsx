import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/config/firebase';


const fetchSinglePost = async (id) => {

  try {
    const docRef = doc(db, "researches", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id, ...docSnap.data() };
    } else {
      return null;
    }

  } catch (error) {
console.error("AN ERROE OCCURED", error)
    throw error;
  }

}
const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const post = await fetchSinglePost(id);

  if (!post) {
    return <p>Post not found.</p>;
  } 

  return (
    <div></div>
  )
}

export default page