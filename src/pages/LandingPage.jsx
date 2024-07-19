import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import CarouselComponent from '../components/landingPage/Carousel'
import ImageCarousel from '../components/landingPage/ImageCarousel'
import TestimonialsSection from '../components/landingPage/testimonial'
import Numbers from '../components/landingPage/numbers'
import Testimonials from '../components/landingPage/Testimonials'

const LandingPage = () => {
  return (
    <div>
     <CarouselComponent/>
     <Numbers />
     <ImageCarousel/>
     <Testimonials/>
     {/* <LandingPage/> */}
    </div>
  )
}

export default LandingPage
