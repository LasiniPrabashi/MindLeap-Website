import React from 'react'
import { FaUserAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
        <div className='container mx-auto'>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 text-white'>
               <div className='space-y-8'>
                   <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an appointment</h2>
                   <div>
                     <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffffff1a]
                        p-3'>
                        <FaUserAlt className='text-primary' />
                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>24 Hours Services</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                     </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Contact