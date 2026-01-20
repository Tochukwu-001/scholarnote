"use server";
import React from 'react'
import Client from './client';
import { redirect } from 'next/navigation';
import { auth } from '../../auth';

const page = async () => {
  const session = await auth();
  if (!session)
  redirect("/auth/signin")
  return (
    <main>
      <Client session={session}/>
    </main>
  )
}

export default page
