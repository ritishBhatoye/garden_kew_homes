import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import CarouselComponent from '../components/landingPage/Carousel'
import ImageCarousel from '../components/landingPage/ImageCarousel'

const LandingPage = () => {
  return (
    <div>
     <CarouselComponent/>
     <ImageCarousel/>
    </div>
  )
}

export default LandingPage
