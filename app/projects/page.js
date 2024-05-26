"use client"
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import React, { useEffect, useState, Suspense } from 'react';

const App = () => {
  const [MyProjs, setMyProjs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch("/api/getProjects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.card);
          setMyProjs(data.Projects);
        } else {
          console.error("API request failed");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false); // Update loading state when data fetching is complete
      });
  }, []);

  return (
    <>
      <Navbar />

      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-center md:text-5xl lg:text-6xl dark:text-white">Take a Look at my <span className="text-blue-600 dark:text-blue-500">#Projects</span>.</h1>
      <p className="text-sm md:text-lg font-normal text-center text-gray-500 lg:text-xl dark:text-gray-400 px-3">Here are some of my Projects that I&apos;ve made using my MERN Skills and some of my IoT Projects, Take a look and don&apos;nt forget to give your feedback on the contact form, Thanks.</p>

      <div className="flex flex-wrap justify-center md:mx-14">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-row flex-wrap justify-center mt-10">
            {loading ? (
              <div className='text-gray-200 font-medium'>Hold a Second ⏳...</div>
            ) : (
              MyProjs.map((project, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
                  <ProjectCard 
                    name={project.name} 
                    heading={project.heading} 
                    content={project.content.substring(0, 50)} 
                  />
                </div>
              ))
            )}
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default App;
