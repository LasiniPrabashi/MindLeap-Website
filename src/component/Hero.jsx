import React from 'react'
import heroImg from '../assets/hero.webp'
import { FaCircleArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8
      overflow-y-hidden gap-12 h-full'>
        <div className='md:w-1/2'>
           <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Start Your Journey to Mental Wellness</h1>
           <p className='text-lg mb-12 md:pr-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aperiam, minus voluptatem minima reprehenderit,
             amet, vero dolore ratione aliquam omnis officia deserunt hic ipsa cupiditate impedit repellendus quos excepturi officiis.</p>
             <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90 '>
              <a href='#contact' className='flex gap-1 items-center'>
                <span>Get Started</span>
                <FaCircleArrowRight/>
              </a>
             </button>
        </div>

        <div className='md:w-1/2 h-full '>
         <img src={heroImg} alt='hero image' className='w-full object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default Hero