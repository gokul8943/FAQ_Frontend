import Feature from '@/components/Feature'
import HeroSection from '@/components/HeroSection'
import FAQ from '@/components/FAQ'
import React from 'react'
import Testimonials from '@/components/Testimonials'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Feature />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default page
