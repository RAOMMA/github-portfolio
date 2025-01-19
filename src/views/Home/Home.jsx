import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Services from '../../components/services/Services'
import Technology from '../../components/technology/Technology'
import Projects from '../../components/projects/Projects'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Projects />
      <Technology />
    </>
  )
}

export default Home
