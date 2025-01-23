"use client"

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";


// Import your existing images
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
  const name = "Samarth Goyal";

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent via-[#2B1942] to-black">
      <div className="absolute rounded-full w-[3000px] h-[1300px] top-[850px] left-1/2 -translate-x-1/2 
        bg-[radial-gradient(closest-side,#000_80%,#2B1942)] blur-3xl opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-[#98B4CE] block text-4xl">Hi, I am</span>
            <motion.span 
              className="text-[#E48A57] flex justify-center"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              {name.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl max-w-2xl mx-auto mb-12 text-white/80"
          >
            Transforming complex challenges into elegant solutions through innovative software development.
          </motion.p>
        </motion.div>

        {/* Rest of the previous code remains the same */}
        {/* 3D Profile Visualization */}
        <div className="flex justify-center mb-12">
          <motion.div 
            className="relative w-64 h-64"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-[#E48A57]/30 rounded-full blur-xl"></div>
            <div className="relative z-10 w-full h-full bg-[#2B1942] rounded-full overflow-hidden border-4 border-[#8F5C55] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E48A57]/30 to-[#98B4CE]/30 opacity-50"></div>
              <Image
                src={profilepic}
                alt="profile picture"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Interactive Elements */}
        <motion.div 
          className="hidden md:block absolute left-[5%] top-[20%] z-20"
          drag 
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            drag
          >
            <Image
              src={cursor}
              height="170"
              width="170"
              alt="cursor"
              draggable="false"
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="hidden md:block absolute right-[5%] top-[10%] z-20"
          drag 
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            drag
          >
            <Image
              src={lightning}
              height="120"
              width="120"
              alt="lightning"
              draggable="false"
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;