import React from 'react'
// import Navbar from './components/Navbar'
import Home from './components/Hero'
// import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'

const page = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Contact/>
      {/* <Footer /> */}
    </div>
  )
}

export default page


