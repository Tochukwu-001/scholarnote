import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {
  const session = await auth()
  console.log(session);
  if (!session) {
    redirect("/auth/signin")

  }
 
  return (
    <main className='min-h-dvh'>
        <section className='shadow-lg max-w-2xl p-6 mx-auto my-10'>
            <h1>My Account</h1>
            <div>
              <h1>
                {session.user.name}
              </h1>
              <p>
                {session.user.email}

              </p>
              <img src={session.user.image} alt={session.user.name.slice(0,2).toUpperCase}/>
              <form action={async()=>{
                "use server"
                 await signOut()
              }}>
                <button type='submit'>Sign out</button>
              </form>
            </div>
        </section>
        
    </main>
  )
}

export default page