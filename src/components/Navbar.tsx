"use client";
import React, { useState } from "react";
import { Menu, X, MousePointerClick } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    {title: "About", path: "#about"},
    { title: "Portfolio", path: "#portfolio"},
];  

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const handleScroll = (e: { preventDefault: () => void; currentTarget: { getAttribute: (arg0: string) => any; }; }) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }

        closeNav();
    }

    const linkVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    }
 
    return (
        <nav className="relative w-full bg-black bg-gradient-to-b via-[#2B1942] to-transparent">
            <div className="container mx-auto max-w-[400px] flex justify-center items-center px-4 py-4">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a 
                            key={index}
                            href={link.path} 
                            onClick={handleScroll}
                            className="text-white/70 hover:text-[#E48A57] transition-colors group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link.title}
                            <div className="h-0.5 bg-[#E48A57] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </motion.a>
                    ))}

                    <motion.a 
                        href="#contact" 
                        onClick={handleScroll}
                        className="flex items-center space-x-2 text-white/70 hover:text-[#98B4CE] transition-colors group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MousePointerClick className="w-5 h-5" />
                        <span>Contact</span>
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <motion.button 
                    onClick={toggleNav}
                    className="md:hidden absolute top-4 right-4 text-white/70 z-50"
                    whileTap={{ scale: 0.9 }}
                >
                    {nav ? <X size={30} /> : <Menu size={30} />}
                </motion.button>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {nav && (
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center"
                        >
                            <div className="space-y-8 text-center">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.path}
                                        onClick={handleScroll}
                                        initial="hidden"
                                        animate="visible"
                                        variants={linkVariants}
                                        className="block text-4xl text-white/70 hover:text-[#E48A57] transition-colors"
                                    >
                                        {link.title}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="#contact"
                                    onClick={handleScroll}
                                    initial="hidden"
                                    animate="visible"
                                    variants={linkVariants}
                                    className="block text-4xl text-white/70 hover:text-[#98B4CE] transition-colors"
                                >
                                    Contact
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar