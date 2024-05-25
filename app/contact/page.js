import ContactCard from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import SocialsCards from '@/components/SocialsCards'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const page = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div class="container mx-auto p-4 flex flex-col items-center">
        <ContactCard />
        <div className="text-zinc-300 border rounded-md  border-white py-2 px-4 mt-5 max-w-full">
        <div className="flex flex-row space-x-4">

          <a href='https://www.linkedin.com/in/ujjwal-kushwaha-zbyte/' className="flex flex-col items-center justify-center transition-transform transform hover:scale-110">
            <img src="linkedin.png" alt="Image 1" className="h-12 w-12 mr-2" />
            LinkedIn
          </a>

          <a href='https://github.com/zbytes2227' className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 m-1">
            <img src="github.png" alt="Image 1" className="h-12 w-12 mr-2" />
            Github
          </a>

          <a href='mailto:fgpujjwal@gmail.com' className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 m-1">
            <img src="email.png" alt="Image 1" className="h-12 w-12 mr-2" />
            E-mail
          </a>

      

        </div>
      </div>
        <div class="md:grid grid-cols-1 md:grid-cols-2 gap-4">
        </div>
      </div>



    </>
  )
}

export default page