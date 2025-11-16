import React from 'react'
import Navbar from '../components/Navbar'
import About1 from '../components/About1'
import About2 from '../components/About2'
import About3 from '../components/About3'
import About4 from '../components/About4'
import About5 from '../components/About5'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar theme='main'/>
      <About1/>
      <About2/>
      <About3/>
      <About4/>
      <About5/>
      <Footer theme="main"/>
    </div>
  )
}

export default About
