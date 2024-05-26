"use client"
import Link from "next/link";
import Image from "next/image";
import React, { Suspense, useEffect, useRef } from "react";
import { Fade, Flip, Roll, Slide, Zoom } from "react-awesome-reveal";
import Navbar from "@/components/Navbar";
import { Typewriter } from 'react-simple-typewriter'

export default function Home({ searchParams }) {

	return (

		<Suspense fallback={<p className="text-lg text-zinc-100">Loading...</p>}>
			<Fade>
				<div className="flex flex-col items-center justify- w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
					<Zoom>
						<Navbar />
						<h2 className="md:text-lg text-sm font-medium text-zinc-300 mb-4">
							&lt;<span className="text-green-500">div</span>&gt;  I am {" "}
							<span className="text-blue-400">
								<Typewriter
									words={['Mern Developer', 'IoT Enthusiast', 'AI/Ml Learner']}
									loop={false}
									cursor
									cursorStyle='_'
									typeSpeed={70}
									deleteSpeed={40}
									delaySpeed={1100}
								/></span>&lt;<span className="text-green-500">/div</span>&gt;
						</h2>
					</Zoom>
					<div className=" w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<Zoom>
						<h1 className="flex items-center z-10 text-4xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-bold sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white p-5">
							Ujjwal Kushwaha
						</h1>
					</Zoom>
					<div className=" w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<Zoom>
						<div className="my-2 text-center animate-fade-in">
							<h2 className="md:text-lg text-sm px-6 font-medium text-zinc-400 mt-4"> <span className="text-green-400">zbytes@UbuntuVM:~${' '}</span>
								Student 🧑‍💻 pursuing a Diploma in Computer Science & Engineering, <br /> specializing in MERN stack development and learning Data Science & Machine Learning📊.
							</h2>
						</div>
					</Zoom>
					<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-zinc-300 py-2 px-4 rounded-t-lg">
						<div className="flex flex-row space-x-4">
							<Zoom>
								<a href="/projects" className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 border border-white rounded-lg p-2 w-24 h-24 hover:cursor-pointer">
									<div className="flex flex-col items-center">
										<img src="m1.png" alt="Image 1" className="h-16 w-16" />
										<span>M.E.R.N</span>
									</div>
								</a>
							</Zoom>
							<Zoom>
								<a href="projects" className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 border border-white rounded-lg p-3 w-24 h-24 hover:cursor-pointer">
									<div className="flex flex-col items-center">
										<img src="m0.png" alt="Image 1" className="h-16 w-16" />
										<span>AI / ML</span>
									</div>
								</a>
							</Zoom>
							<Zoom>
								<a href="projects" className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 border border-white rounded-lg p-3 w-24 h-24 hover:cursor-pointer">
									<div className="flex flex-col items-center">
										<img src="m2.png" alt="Image 1" className="h-16 w-16" />
										<span>I.O.T</span>
									</div>
								</a>
							</Zoom>
							<Zoom>
								<a href="projects" className="hidden md:flex flex flex-col items-center justify-center transition-transform transform hover:scale-110 border border-white rounded-lg p-3 w-24 h-24 hover:cursor-pointer">
									<div className="flex flex-col items-center">
										<img src="m3.png" alt="Image 1" className="h-16 w-16" />
										<span>Data Sci.</span>
									</div>
								</a>
							</Zoom>
						</div>
					</div>
				</div>

			</Fade>
		</Suspense>




	)
}




