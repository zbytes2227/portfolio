"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar';


const Skeleton = () => (
  <div className="container mx-auto flex justify-center px-5 md:py-20 md:flex-row flex-col items-center">
    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
      <div className="flex items-center justify-center w-full h-72 bg-gray-300 rounded-lg sm:w-96 dark:bg-gray-700">
        <svg className="w-16 h-16 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full">
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-64 mb-6"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[520px] mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  </div>

);

const Page = () => {
  const searchParams = useSearchParams();
  const [MyProj, setMyProj] = useState([{
    "name": "fgp-site",
    "heading": "Official College Website",
    "content": "Developed the official website for my college, where I completed my diploma in Computer Science and Engineering. I used MERN and Next.js to create the site, which includes a login/logout system for different admins and allows notices to be uploaded. This website is now officially used by Feroze Gandhi Polytechnic Raebareli. This project is one of my best achievements in my web development journey.",
    "links": [
      {
        "Website": "https://fgp.org.in/"
      }
    ]
  },
  {
    "name": "attendance-machine",
    "heading": "RFID Card Attendance Machine",
    "content": "This is an RFID card-based attendance management system. It includes two components: a physical machine that scans cards and connects to WiFi, and a web-based attendance management system where live, real-time attendance can be monitored. Users can also check the attendance of a particular student or a specific date. We have sold this system to a coaching center, which is using it to manage the attendance of over 100 students. The special feature of this machine is that attendance can be viewed from anywhere in the world using a phone. I have also developed a second version of this device that works offline, saving data directly to an SD card without needing WiFi. I am still working on this project.",
    "links": [
      {
        "Youtube": "https://www.youtube.com/shorts/6FektzHAaq0"
      },
      {
        "Github": "https://github.com/zbytes2227/smart-attendance-iot"
      }
    ]
  },
  {
    "name": "polya2z",
    "heading": "Notes Distribution Site",
    "content": "PolyA2z is a website for distributing practical files, assessments, and notes for diploma students. The website is a single-page application where students can select their branch, year, and semester. Once selected, all relevant subjects are displayed, and students can easily download the files they need. Our website is ad-free and completely free for everyone. We have helped many junior students at our college who had difficulties finding study materials.",
    "links": [
      {
        "Website": "https://polya2z.github.io/"
      },
      {
        "Github": "https://github.com/polya2z"
      }
    ]
  },
  {
    "name": "robox",
    "heading": "RoboX - E-Commerce Website",
    "content": "RoboX is an e-commerce website I developed to sell IoT projects and kits. The website includes features such as a search bar and filter options, as well as a cart facility that allows users to add items and checkout after logging in. Users can also track their orders through the website. Additionally, there is an admin panel where the seller can view all orders and update their status. This project was a fun and engaging experience, and I encourage you to check it out by clicking on the links below.",
    "links": [
      {
        "Website": "https://robox-shop.vercel.app/"
      },
      {
        "Github": "https://github.com/zbytes2227/robox"
      }
    ]
  },
  {
    "name": "scan-mate",
    "heading": "ScanMate - QR Generator",
    "content": "ScanMate is a QR code generator designed to simplify receiving payments via UPI. With ScanMate, you can create a QR code linked to your UPI ID with a specified amount. This ensures that when someone scans the QR code, the payment amount is automatically set and cannot be altered, preventing underpayments. This feature is particularly useful as it guarantees that you receive the full payment without any excuses. This project was especially helpful during my hostel life, making financial transactions smoother and more reliable.",
    "links": [
      {
        "Github": "https://github.com/zbytes2227/scanmate"
      },
      {
        "Website": "https://scanmate.vercel.app/"
      }
    ]
  },
  {
    "name": "zbytes-invoice",
    "heading": "Smart Invoice System",
    "content": "The Zbytes Invoice project is a digital invoicing system designed to streamline order management, customer relations, and inventory tracking. With this system, users can efficiently manage records of customers, products, orders, and invoices. Additionally, it provides features for monitoring total income, expenditures, balances, and payments. This versatile project caters to the needs of shopkeepers, offering a user-friendly interface that simplifies complex functionalities. Don't miss the opportunity to explore this project and its functionalities.",
    "links": [
      {
        "Github": "https://github.com/zbytes2227/zbytes-invoice/tree/main"
      },
      {
        "Website": "https://zbytes-invoice.vercel.app/"
      }
    ]
  },
  {
    "name": "taskmate",
    "heading": "TaskMate - ToDo List",
    "content": "TaskMate is more than just a simple to-do list application. It offers real-time synchronization across different devices, allowing you to access your lists from anywhere as long as you are logged in with the same account. This project includes all the basic features of a typical to-do list app, but the key difference is its ability to keep your tasks updated and consistent on multiple devices. I used the MERN stack to create this project. TaskMate is designed to make task management seamless and efficient.",
    "links": [
      {
        "Github": "https://github.com/zbytes2227/task-mate"
      },
      {
        "Website": "https://task-mate-zbytes.vercel.app/"
      }
    ]
  },
  {
    "name": "stickers-vibe",
    "heading": "Stickers Vibe - Basic E-Store",
    "content": "Stickers Vibe is a basic e-commerce store where users can browse through a wide range of stickers and add their favorites to the cart. The store includes a convenient feature allowing users to enter their pincode to check if the product is available for delivery in their area. This project showcases a simple yet functional online shopping experience, combining essential e-commerce features with an easy-to-use interface. It was a great learning experience in building and managing an online store.",
    "links": [
      {
        "Github": "https://github.com/zbytes2227/stickers-vibe"
      },
      {
        "Website": "https://stickers-vibe.vercel.app/"
      }
    ]
  },
  {
    "name": "gaming-box",
    "heading": "Basics With Arduino UNO",
    "content": "The Gaming Box project served as an introduction to the fundamentals of Arduino IoT and various sensors such as joystick, OLED display, and Arduino programming language. It was designed as a learning experience to understand the basics of hardware integration and programming using Arduino. This project holds a special place as it was one of my initial ventures into the world of IoT, and surprisingly, it was one of the first projects that actually worked successfully! 😂 It marked the beginning of my journey into the exciting realm of Internet of Things.",
    "links": [
      {
        "Youtube": "https://www.youtube.com/watch?v=cW86MmPHRJM&pp=ygUIaW90IG1vbms%3D"
      }
    ]
  },
  {
    "name": "wallet-boss",
    "heading": "WalletBoss - Money Manager",
    "content": "WalletBoss is a simple yet effective money management project created using React.js and hosted on GitHub Pages. It provides a convenient platform for tracking your daily expenses by recording your transactions and calculating your expenditure. With WalletBoss, you can easily monitor where your money goes and gain insights into your spending habits. This project is designed to offer a hassle-free solution for managing your finances, making it easier to stay organized and in control of your budget.",
    "links": [
      {
        "Github": "https://github.com/zbytes2227/thewalletboss"
      },
      {
        "Website": "https://zbytes2227.github.io/thewalletboss/"
      }
    ]
  }])
  const [loading, setLoading] = useState(true);
  const search = searchParams.get('name')
  const [ProjectID, setProjectID] = useState(search);
  const [specBlog, setspecBlog] = useState([])

  useEffect(() => {
    setspecBlog(findProjectByName(MyProj, ProjectID))
    setLoading(false)
  }, [])

  const findProjectByName = (projects, projectName) => {
    return projects.filter(project => project.name === projectName)[0];
  };

  // Usage

  return (
    <>
      <Suspense fallback={<div>Loading posts...</div>}>
        <Navbar />
        {loading ? (
          <Skeleton /> // Show skeleton while loading
        ) : (
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 md:py-20 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src={`/projects/${specBlog.name}.png`} />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">{specBlog.heading}</h1>
                <p className="mb-8 leading-relaxed text-gray-200">{specBlog.content}</p>
                {/* <p className="mb-8 leading-relaxed text-gray-200">{MyProj.links[0].Youtube}</p> */}


                <p className="text-sm mt-2 text-gray-500 mb-8 w-full">- Ujjwal Kushwaha (Zbytes)</p>
                <div className="flex lg:flex-row md:flex-col">


                  {specBlog.links && specBlog.links.map((link, index) => {
                    // Extract the key and value from each link object
                    const key = Object.keys(link)[0];
                    const url = link[key];

                    return (
                      <div key={index}>
                        <a href={url} className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none mr-2 mb-6">
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
          </section>)}

      </Suspense>
    </>
  )
}

export default Page