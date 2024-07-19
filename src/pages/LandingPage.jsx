import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import CarouselComponent from '../components/landingPage/Carousel'
import ImageCarousel from '../components/landingPage/ImageCarousel'
import TestimonialsSection from '../components/landingPage/testimonial'

const LandingPage = () => {
  return (
    <div>
     <CarouselComponent/>
     <ImageCarousel/>
     <TestimonialsSection/>
    </div>
  )
}

export default LandingPage
