import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (

    <header className="w-full bg-purple-700 text-white py-7 px-6 flex justify-between items-center sticky top-0">

      <h1 className="text-xl font-bold">Tehreem</h1>

      <nav className="space-x-6">
        <Link href="#home" className="hover:text-purple-300">Home</Link>
        <Link href="#about" className="hover:text-purple-300">About</Link>
        <Link href="#contact" className="hover:text-purple-300">Contact</Link>
      </nav>

    </header>
  );
};

export default Navbar;
