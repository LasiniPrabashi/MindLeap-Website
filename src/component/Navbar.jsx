import React, { useEffect, useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion"

const Navbar = () => {
const [isOpen,setIsOpen] = useState(false);   
const [activeSection, setActiveSection] = useState('home'); 
const handelToggle = () => {
    setIsOpen(!isOpen);
}

const handelCloseMenu = () => {
    setIsOpen(false)
}
const handleScroll = () => {
    const sections = ['home', 'services', 'about', 'pricing', 'testimonial']
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const element = document.getElementById(section);
        if(element){
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if(scrollPosition >= offsetTop && scrollPosition < offsetTop + height){
                setActiveSection(section)
            }
        }
    })
}

useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
}, []);

const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if(targetElement){
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        })
    }
}

const navLinks = (
    <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
        <li>
            <motion.a
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
             href='#home' 
            onClick={(e) => {
                e.preventDefault();
                handelCloseMenu();
                handleScrollTo('home')
            }}
            className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}
            >Home</motion.a>
        </li>

        <li>
            <motion.a href='#services' 
             whileHover={{scale: 1.1}}
             whileTap={{scale: 0.9}} 
             onClick={(e) => {
                 e.preventDefault();
                 handelCloseMenu();
                 handleScrollTo('services')
             }}
            className={`text-white ${activeSection === 'services' ? 'isActive' : ''}`}
            >Services</motion.a>
        </li>

        <li>
            <motion.a href='#about' 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}} 
            onClick={(e) => {
                e.preventDefault();
                handelCloseMenu();
                handleScrollTo('about')
            }}
            className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}
            >About Us</motion.a>
        </li>

        <li>
            <motion.a href='#pricing' 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}} 
            onClick={(e) => {
                e.preventDefault();
                handelCloseMenu();
                handleScrollTo('pricing')
            }}
            className={`text-white ${activeSection === 'pricing' ? 'isActive' : ''}`}
            >Pricing</motion.a>
        </li>

        <li>
            <motion.a href='#testimonial' 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}} 
            onClick={(e) => {
                e.preventDefault();
                handelCloseMenu();
                handleScrollTo('testimonial')
            }}
            className={`text-white ${activeSection === 'testimonial' ? 'isActive' : ''}`}
            >Testimonial</motion.a>
        </li>
    </ul>
)

  return (
    <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
        <div className='container mx-auto flex justify-between items-center h-full'>

            <div className='text-white text-lg text-semibold'>
                <a href='/'>
                <img src='/logo.svg' alt=''></img>
                </a>
            </div>

            <div className='hidden md:flex flex-grow justify-center'>
                <nav>
                    {navLinks}
                </nav>
            </div>

            <div className='hidden md:block'> 
              <a href='#contact' className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>
                Contact Us
              </a>
            </div>

            <div className='black md:hidden'>
                <button
                onClick={handelToggle}
                 className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}>
                    <HiMenuAlt3 className='size-6'/>
                </button>
            </div>

        </div>

        {
            isOpen && (
                <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md-hidden'>
                    <ul className='flex flex-col p-4 space-y-3'>
                        {navLinks.props.children}
                        <li className='py-2'>
                        <a href='#contact' 
                        className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'
                        onClick={(e) => {e.preventDefault()
                            handelCloseMenu()
                        }
                        }>Contact Us</a>
                    </li>
                    </ul>
                    
                </nav>
            )
        }
    </header>
  )
}

export default Navbar