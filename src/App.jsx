import './App.css'
import About from './component/About'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Services from './component/Services'
import Testimonial from './component/Testimonial'
import WorkingStep from './component/WorkingStep'
import Pricing from './component/pricing'

function App() {
  

  return (
    <div className='font-primary overflow-x-hidden '>
     <Navbar/>
     <Hero/>
     <Services/>
     <About/>
     <WorkingStep/>
     <Pricing/>
     <Testimonial/>
    
    {/* <h1 className='text-2xl font-normal'>MindLeap Mentall Wellness React Project Starter Files</h1> */}
   </div>
  )
}

export default App
