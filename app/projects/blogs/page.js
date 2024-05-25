"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar';

const Page = () => {
  const searchParams = useSearchParams();
  const [MyProj, setMyProj] = useState([])

  const search = searchParams.get('name')
  const [ProjectID, setProjectID] = useState(search);

  useEffect(() => {
    // Fetch data from the API
    fetch("/api/getProjects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectid: ProjectID }),
    }).then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.card);
          setMyProj(data.Project)
        } else {
          console.error("API request failed");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchParams]);

  return (
    <>
      <Suspense fallback={<div>Loading posts...</div>}>
      <Navbar />

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={`/projects/${MyProj.name}.png`} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">{MyProj.heading}</h1>
            <p class="mb-8 leading-relaxed text-gray-200">{MyProj.content}</p>
            {/* <p class="mb-8 leading-relaxed text-gray-200">{MyProj.links[0].Youtube}</p> */}


            <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
            <div class="flex lg:flex-row md:flex-col">


            {MyProj.links && MyProj.links.map((link, index) => {
        // Extract the key and value from each link object
        const key = Object.keys(link)[0];
        const url = link[key];
        
        return (
          <div key={index}>
            <a href={url} className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">CHECK ON</span>
                <span className="title-font font-medium">{key}</span>
              </span>
            </a>
          </div>
        );
      })}
            
            </div>
          </div>
        </div>
      </section>

      </Suspense>
    </>
  )
}

export default Page