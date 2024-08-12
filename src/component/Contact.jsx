import React, { useState } from 'react'
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt } from "react-icons/fa";

const Contact = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [Country,setCountry] = useState("")
    const [message,setMessage] = useState("")
    const [showModal, setShowModal] = useState(false)

    const handelSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            Country,
            message
        }
        // console.log(data);
        if(!data){
            alert("Please fill all fields")
            return;
        }
        setShowModal(true)
    }

    const closeModel = () => {
        setShowModal(false)
        setName("")
        setEmail("")
        setPhone("")
        setCountry("")
        setMessage("")
    }

  return (
    <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
        <div className='container mx-auto'>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
               <div className='space-y-8'>
                   <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an appointment</h2>
                   <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
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
                     <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffffff1a]
                        p-3'>
                        <FaEnvelope className='text-primary' />
                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>Expert Therapist</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                     </div>
                     <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffffff1a]
                        p-3'>
                        <FaPhoneAlt className='text-primary' />
                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>High Quality Care</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                     </div>
                     <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffffff1a]
                        p-3'>
                        <FaGlobe className='text-primary' />
                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                     </div>
                   </div>
               </div>


               <div className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
                <h3 className='text-2xl font-bold mb-4'>Book an Appointment</h3>
                <form onSubmit={handelSubmit} className='space-y-8'>
                    <div className='flex sm:flex-row flex-col gap-4'>
                        <input
                        onChange={e => setName(e.target.value)}
                        type='text' placeholder='Name' className='w-full p-4 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                          <input
                           onChange={e => setEmail(e.target.value)}
                          type='email' placeholder='Email Address' className='w-full p-4 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                    </div>
                    <div className='flex sm:flex-row flex-col gap-4'>
                        <input
                         onChange={e => setPhone(e.target.value)}
                        type='tel' placeholder='Contact Number' className='w-full p-4 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                          <input
                           onChange={e => setCountry(e.target.value)}
                          type='text' placeholder='Country' className='w-full p-4 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                    </div>
                    <textarea
                     onChange={e => setMessage(e.target.value)}
                    rows="S"
                    placeholder='Write Your message...' className='w-full p-4 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-primary shadow'></textarea>
                         <button
                         type='submit'
                         className='w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80'
                         >Send Message</button>
                </form>
                
               </div>

            </div>
            {
                showModal && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
                    <div className='bg-white p-8 rounded-lg'>
                        <h2 className='text-2xl font-bold mb-4'>Thank you!</h2>
                        <p>Thank you, {name}, for submiting your query.</p>
                        <button
                        onClick={closeModel}
                        className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>Close</button>
                    </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Contact