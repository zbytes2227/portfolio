import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 md:py-24 md:flex-row flex-col-reverse items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">About Me
          <br className="hidden lg:inline-block"/>
        </h1>
        <p className="mb-8 leading-relaxed text-gray-300 text-lg"><span className='text-green-500 font-semibold'>zbytes@UbuntuVM:~/Introduction${" "}</span>Hey there! I&apos;m Ujjwal Kushwaha, currently studying computer science and engineering. I got into this field after finishing my 10th grade because I&apos;ve always been passionate about computers and technology. </p>

        <p className="mb-8 leading-relaxed text-gray-300 text-lg"><span className='text-green-500 font-semibold'>zbytes@UbuntuVM:~/Overview${" "}</span>As a full stack web developer, I mainly work with the MERN stack to build websites and apps, and I also know my way around CSS frameworks like Tailwind and Bootstrap. Over the past three years, I&apos;ve been honing my skills in web development, focusing on creating websites and applications that are both engaging and easy to use. Besides web dev, I&apos;m also keen on exploring other tech areas like Python, IoT, and robotics. I&apos;ve even dabbled in IoT projects with solid web interactions using MERN tech.</p>
   
        <p className="mb-8 leading-relaxed text-gray-300 text-lg"><span className='text-red-500 font-semibold'>zbytes@UbuntuVM:~/Introduction${" "}</span>Hey there! I&apos;m Ujjwal Kushwaha, currently studying computer science and engineering. I got into this field after finishing my 10th grade because I&apos;ve always been passionate about computers and technology. </p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded mb-5" alt="hero" src="me.png"/>
      </div>
    </div>
  </section>
    </>
  )
}

export default page