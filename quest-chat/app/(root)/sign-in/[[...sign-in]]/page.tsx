import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center"
    style={{
      backgroundImage: `url('/15253.jpg')`, // Update this path to your actual image file
      backgroundSize: 'cover', // This ensures the image covers the entire div
      backgroundPosition: 'center', // Centers the image
    }}
    >
      <div className="absolute top-8 right-14 flex items-center gap-4">
  <p className="text-xl font-serif text-black">
    Dont have an account?
  </p>
  <a href="/sign-up">
    <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded shadow-md transition duration-300 ease-in-out">
      Sign Up
    </button>
  </a>
</div>
      <div className='w-full h-full flex justify-center items-center'>
        <SignIn/>
      </div>
    </div>
  )
}
