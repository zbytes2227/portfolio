import React from 'react'

const SocialsCards = () => {
  return (
    <div class="max-w-md mx-auto border border-white rounded-xl p-5 bg-white bg-opacity-5 backdrop-blur-sm shadow mt-4">

      <div class="border border-gray-300 rounded-lg p-2 flex flex-col items-center">
        <img src="/linkedin.png" alt="Image" class="rounded-full h-24 w-24 flex-shrink-0 mb-2" />
        <p class="text-center text-white">Connect With me on LinkedIn</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-2">Button</button>
      </div>



      <div class="border border-gray-300 rounded-lg p-2 flex flex-col items-center mt-2">
        <img src="/linkedin.png" alt="Image" class="rounded-full h-24 w-24 flex-shrink-0 mb-2" />
        <p class="text-center text-white">Connect With me on Github</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-2">Button</button>
      </div>

    </div>
  )
}

export default SocialsCards