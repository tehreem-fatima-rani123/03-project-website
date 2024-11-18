import React from 'react'


const Contact = () => {
  return (
    <section id='contact' className="text-gray-600 body-font relative bg-red-300" >
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="  sm:text-3xl text-4xl font-medium lg:text-5xl title-font mb-4 text-pink-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-pink-900">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque hic impedit corporis praesentium tempora, doloremque nobis laudantium, 
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-pink-200 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email"  className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email '
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-950 focus:bg-pink-200 focus:ring-2 focus:ring-indigo-300 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-pink-200 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-pink-200 bg-pink-900 border-0 py-2 px-8 focus:outline-none hover:bg-pink-500 rounded text-lg">
           Send Message
          </button>
        </div>
      
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact
