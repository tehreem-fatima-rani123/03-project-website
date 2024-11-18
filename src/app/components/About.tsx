import React from 'react'
import Image from 'next/image'
import profile from '@/app/components/mano.jpg'

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-12 rounded-lg shadow-lg">
    <div className="w-64  md:w-80 md:h-80 mb-14 md:mb-0 md:mr-10 flex-shrink-0 lg:mb-24">
      <Image
        className=" mt-14 h-64 w-64 rounded-full object-cover"
        src={profile}
        alt="Tehreem Fatima"
        width={300}
        height={300}
      />
    </div>
    <div className="text-center md:text-left">
      <h2 className="text-4xl font-bold mb-2 text-gray-800">About <span className="text-indigo-600">Me</span></h2>
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">Frontend <span className="text-indigo-600">Developer</span></h3>
      <p className="text-gray-600 leading-relaxed">
        Hi! I’m Tehreem Fatima, a passionate front-end developer with skills in HTML, CSS, JavaScript, and React. I love creating beautiful, responsive, and user-friendly websites. I’m always learning new technologies to improve my work and stay current in the fast-evolving tech world. Let’s work together to build something amazing!
      </p>
    </div>
  </section>
);
};

export default About
