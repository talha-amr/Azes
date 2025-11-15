import React from 'react'
import Navbar from '../components/Navbar'
import InterDesign1 from '../components/InterDesign1'
import InterDesign2 from '../components/InterDesign2'
import Footer from '../components/Footer'

const InteriorDesign = () => {
  return (
    <>
    {/* <Navbar theme="theme-blue"/> */}
    <Navbar theme='theme-blue' />
    <InterDesign1/>
    <InterDesign2/>
    <Footer theme='theme-blue'/>
    </>
  )
}

export default InteriorDesign
