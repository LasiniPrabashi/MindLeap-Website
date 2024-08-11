import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.webp"
import serviceImg2 from "../assets/service2.webp"
import serviceImg3 from "../assets/service3.webp"
import serviceImg4 from "../assets/service4.webp"


const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc]'>
        <div className='pt-28 px-4 container mx-auto'>
            <div className='text-center space-y-5'>
                <h2 className='text-4xl font-bold font-secondary text-heroBg'>What can we Do Together</h2>
                <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi sequi suscipit sint eligendi sit alias,
                     quod expedita inventore, accusamus totam eos nihil in quia nesciunt? Rem fuga ex eius.</p>
            </div>

            <div className='py-12 md:w-4/5 mx-auto'>
            <Tabs>
    <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
      <Tab>Couple Counseling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stuck</Tab>
      <Tab>Self-Confidence</Tab>
    </TabList>

    <TabPanel>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3x1 font-semibold text-primary mb-4'>Couple Counseling</h3>
        <p className='mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, aspernatur nulla iusto, dicta porro fuga ullam 
            explicabo natus molestiae soluta non eius adipisci vero obcaecati laudantium rerum accusamus distinctio nihil?</p>
            <h4 className='text-x1 font-medium text-black mb-4'>Benefits</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
            </ul>
      </div>

      <div className='md:w-1/2'>
        <img src={serviceImg1} alt='' className='w-full h-auto rounded-2x1 object-cover'/>
      </div>
      </div>
    </TabPanel>

    <TabPanel>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3x1 font-semibold text-primary mb-4'>Parenting Skills</h3>
        <p className='mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, aspernatur nulla iusto, dicta porro fuga ullam 
            explicabo natus molestiae soluta non eius adipisci vero obcaecati laudantium rerum accusamus distinctio nihil?</p>
            <h4 className='text-x1 font-medium text-black mb-4'>Benefits</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
            </ul>
      </div>

      <div className='md:w-1/2'>
        <img src={serviceImg2} alt='' className='w-full h-auto rounded-2x1 object-cover'/>
      </div>
      </div>
    </TabPanel>

    <TabPanel>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3x1 font-semibold text-primary mb-4'>Feeling Stuck</h3>
        <p className='mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, aspernatur nulla iusto, dicta porro fuga ullam 
            explicabo natus molestiae soluta non eius adipisci vero obcaecati laudantium rerum accusamus distinctio nihil?</p>
            <h4 className='text-x1 font-medium text-black mb-4'>Benefits</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
            </ul>
      </div>

      <div className='md:w-1/2'>
        <img src={serviceImg3} alt='' className='w-full h-auto rounded-2x1 object-cover'/>
      </div>
      </div>
    </TabPanel>

    
    <TabPanel>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3x1 font-semibold text-primary mb-4'>Self-Confidence</h3>
        <p className='mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, aspernatur nulla iusto, dicta porro fuga ullam 
            explicabo natus molestiae soluta non eius adipisci vero obcaecati laudantium rerum accusamus distinctio nihil?</p>
            <h4 className='text-x1 font-medium text-black mb-4'>Benefits</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
                <li>Understanding Relationship Dynamics</li>
            </ul>
      </div>

      <div className='md:w-1/2'>
        <img src={serviceImg4} alt='' className='w-full h-auto rounded-2x1 object-cover'/>
      </div>
      </div>
    </TabPanel>
    
    
  </Tabs>
            </div>
        </div>
    </div>
  )
}

export default Services