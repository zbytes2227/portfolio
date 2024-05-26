"use client"
import ContactCard from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import SocialsCards from '@/components/SocialsCards'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  function vibrate() {
    // Check if the vibration API is supported
    if ("vibrate" in navigator) {
      // Vibrate for 200ms
      navigator.vibrate(200);
    } else {
      console.log("Vibration API not supported");
    }
  }


  const openModal = () => {
    toast.error(`I social distance from Distractions`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    vibrate()
    setTimeout(() => {
      vibrate()
    }, 200);

  }
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

            <a onClick={openModal} className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 m-1">
              <img src="insta.png" alt="Image 1" className="h-12 w-12 mr-2" />
              Instagram
            </a>

            <a onClick={openModal} className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 m-1">
              <img src="x.png" alt="Image 1" className="h-12 w-12 mr-2" />
              Twitter(x)
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