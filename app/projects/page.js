"use client"
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import React, { useEffect, useState, Suspense } from 'react';

const App = () => {
  const [MyProjs, setMyProjs] = useState([{
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
  }]);
  const [loading, setLoading] = useState(false);



  // useEffect(() => {
  //   // Fetch data from the API
  //   fetch("/api/getProjects", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         console.log(data.card);
  //         setMyProjs(data.Projects);
  //       } else {
  //         console.error("API request failed");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     })
  //     .finally(() => {
  //       setLoading(false); // Update loading state when data fetching is complete
  //     });
  // }, []);

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
