"use client";
import React from 'react'
import Image from 'next/image'
import profile from '@/app/components/naina.jpg'
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-blue-200 ">

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-4">
        <div className="mt-20 max-w-4xl w-full bg-rose-100 shadow-lg rounded-xl overflow-hidden md:flex md:items-center">
          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center p-4">
            <Image
              src={profile}
              alt="Tehreem Fatima"
              className="rounded-full w-48 h-48 md:w-48 md:h-52 lg:w-52 lg:h-56 object-cover shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Hi,</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">I&apos;m Tehreem Fatima</h2>
            <h3 className="text-lg md:text-xl text-gray-700 mb-4">Frontend Developer</h3>
            <p className="text-gray-600 mb-6">
              I am passionate about building responsive, user-friendly websites using modern
              technologies. I focus on writing clean, maintainable code to create seamless user
              experiences.
            </p>
            <Link href="#about">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-700 transition">About Me</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home