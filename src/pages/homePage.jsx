import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductsShowCase from '../components/ProductsShowCase'
// import BrandsLove from '../components/BrandsLove'
import WindowPeak from '../components/WindowPeak'
import MobileScroll from '../components/MobileScroll'
import ContactUs from '../components/ContactUs'
import Community from '../components/Community'
import Commitment from '../components/Commitment'
import Mentors from '../components/Mentors'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProductsShowCase />
      <Community />
      {/* <BrandsLove /> */}
      <WindowPeak />
      <MobileScroll />
      <Mentors />
    </>
  )
}

export default HomePage
