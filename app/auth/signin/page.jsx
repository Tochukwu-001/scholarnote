import React from "react";
import { FcGoogle } from "react-icons/fc";
import { TiVendorApple } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import {auth, signIn } from "@/auth";

const page = async () => {
    const session = await auth();
    console.log(session);
    
  return (
    <main className="min-h-dvh grid lg:grid-cols-2">
      <div className="md:p-10 p-3">
        <h1 className="text-center md:text-2xl text-lg text-gray-800">
          crete an account or sign in with an option below
        </h1>
        <section className="md:w-md mx-auto">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              className="w-full border border-gray-200 rounded-md py-2 px-4 outline-none"
              placeholder="Enter your email...."
            />
            <button className="bg-orange-600 text-white w-full rounded-md p-2">
              sign in
            </button>
          </form>

          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button
              type="submit"
              className="border border-gray-200 flex items-center gap-2 w-full justify-center p-2 rounded-full cursor-pointer"
            >
              <FcGoogle />
              <p>continue with google</p>
            </button>
          </form>

          <button className="border border-gray-200 flex items-center gap-2 w-full justify-center p-2 rounded-full">
            <TiVendorApple />
            <p>continue with Apple</p>
          </button>
          <button className="border border-gray-200 flex items-center gap-2 w-full justify-center p-2 rounded-full">
            <FaGithub />
            <p>continue with Github</p>
          </button>
        </section>
      </div>
      <div className="min-h-dvh bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-cover"></div>
    </main>
  );
};

export default page;
