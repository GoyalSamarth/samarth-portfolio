"use client";
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.png"

const projects = [
    {
        title: "PitchHive",
        desc: "A full-stack web application where users can post their startup pitches, and others can view and explore them. Built using modern technologies to create a seamless user experience.",
        devstack: "NestJS, TypeScript, Sanity, Auth, and more",
        link: "https://pitchhive.vercel.app/",
        git: "https://github.com/GoyalSamarth/pitchhive",
        src: project1
    },
    {
        title: "Sprout",
        desc: "A collaborative platform for students to share and learn skills. Built during a hackathon, it allows users to connect, offer, and learn new skills in an interactive and engaging way.",
        devstack: "Next.js, React.js, TypeScript, Firebase",
        link: "https://www.sprount.tech/",
        git: "https://github.com/Rishin05/Hackville-Sprout",
        src: project2
    },
    {
        title: "Apple Clone Webpage",
        desc: "A responsive clone of the Apple website, showcasing products and features with a modern design. Built using ReactJS, Three.js, and Tailwind CSS.",
        devstack: "ReactJS, Three.js, Tailwind CSS",
        link: "https://iphone15-webpage-sable.vercel.app/",
        git: "https://github.com/GoyalSamarth/AppleCloneWebpage",
        src: project3
    }
]

const Portfolio = () => {
    return (
        <div className='bg-black'>
            <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52' id="portfolio">
                <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4"> <span className="text-orange-400"> Projects </span></h1>
                <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className={`mt-12 flex flex-col ${index % 2 === 1 ? " md:flex-row-reverse gap-12" : " md:flex-row"}`}
                        >
                            {/* Project Info */}
                            <div className='space-y-4 max-w-[550px]'>
                                <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                                <h2 className='text-4xl text-white'>{project.title}</h2>
                                <p className='text-lg text-white/70 p-4'>{project.desc}</p>
                                <p className='text-xl text-orange-400 font-semibold'>{project.devstack}</p>

                                <div className="flex justify-around items-center mt-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                        className='text-lg text-orange-400 font-semibold transition-all hover:text-white hover:border-b-2 hover:border-orange-400'>
                                        View Project
                                    </a>
                                    <a href={project.git} target="_blank" rel="noopener noreferrer"
                                        className='text-lg text-orange-400 font-semibold transition-all hover:text-white hover:border-b-2 hover:border-orange-400'>
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            {/* Project Image */}
                            <div className='flex justify-center items-center'>
                                <Image src={project.src} alt={project.title}
                                    className='w-full h-auto object-cover rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl'
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
