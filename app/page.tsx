import React from 'react'
import Hero from './components/home/Hero'
import About from './components/home/About'
import LegalServices from './components/home/LegalServices'
import Attorneys from './components/home/Attorneys'
import Testimonials from './components/home/Testimonials'


const page = () => {
  return (
    <div>
     <Hero />
     <About />
     <LegalServices />
     <Attorneys />
     <Testimonials />

    </div>
  )
}

export default page
