import { redirect } from 'next/navigation'
import React from 'react'
import { auth } from '@/auth'

const page = async () => {
  const session = await auth()
  if (!session){
    redirect("auth/sigin")
  }
  return (
    <div>
      <Client/>
    </div>
  )
}

export default page