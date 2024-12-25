import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from './Banner'
import Services from './Services'
import Doctors from './Doctors'
import Partners from './Partners'
import Facilities from './Facilities'
import Testimonials from './Testimonials'
import Footer from '../../components/Footer'
import MapComponent from './MapComponent'
import VideoComponent from './VideoComponent'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Facilities/>
        <Doctors/>
        <Services/>
        <Partners/>
        <MapComponent/>
        <VideoComponent/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home