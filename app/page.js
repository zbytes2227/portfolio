"use client"
import Link from "next/link";
import Image from "next/image";
import React, { Suspense } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Navbar from "@/components/Navbar";
import { Typewriter } from 'react-simple-typewriter'



export default function Home({ searchParams }) {

	return (
		<Suspense fallback={<p className="text-lg text-zinc-500">Loading...</p>}>

			<div className="flex flex-col items-center justify- w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
				<Fade>

					<Navbar />
					<div className=" w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

					<h1 className="flex items-center z-10 text-4xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-bold sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white p-5">
						Ujjwal Kushwaha
					</h1>

					<div className=" w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

					<div className="my-2 text-center animate-fade-in">
						<h2 className="text-lg font-medium text-zinc-300">
						&lt;div&gt;  I am a {" "}
							<Typewriter
								words={['Mern Developer', 'IoT Enthusiast', 'AI/Ml Learner']}
								loop={false}
								cursor
								cursorStyle='_'
								typeSpeed={70}
								deleteSpeed={40}
								delaySpeed={1100}
							/> &lt;/div&gt;
						</h2>
					</div>
				</Fade>
				{/* <Fade direction="bottom">
					<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-zinc-300 border-t border-l border-r border-white py-2 px-4 rounded-t-lg">
						<div className="flex flex-row space-x-4">

							<div className="flex flex-col items-center justify-center transition-transform transform hover:scale-110">
								<img src="p.png" alt="Image 1" className="h-12 w-12 mr-2" />
								Home
							</div>

							<div className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 m-1">
								<img src="x.png" alt="Image 1" className="h-12 w-12 mr-2" />
								Events
							</div>

							<div className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 m-1">
								<img src="g.png" alt="Image 1" className="h-12 w-12 mr-2" />
								Projects
							</div>

							<div className="flex flex-col items-center justify-center transition-transform transform hover:scale-110">
								<img src="g.png" alt="Image 1" className="h-12 w-12 mr-2" />
								Contacts
							</div>


						</div>
					</div>


				</Fade> */}



			</div>


		</Suspense>




	)
}




