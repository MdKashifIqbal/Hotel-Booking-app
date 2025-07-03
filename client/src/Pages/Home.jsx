import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOfferes from '../components/ExclusiveOfferes'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOfferes/>
      <Testimonial/>
      <NewsLetter/>
    </>
  )
}

export default Home
