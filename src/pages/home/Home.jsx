import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from './Banner'
import Services from './Services'
import Doctors from './Doctors'
import Partners from './Partners'
import Facilities from './Facilities'
import Testimonials from './Testimonials'
import Footer from '../../components/Footer'
import Contact from './Contact'
import VideoComponent from './VideoComponent'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='py-16' id='home'>
        <Banner/>
        </div>
        <div id='about'>
        <Facilities/>
        </div>
        <div id='service'>
        <Doctors/>
        <Services/>
        </div>
        <Partners/>
        <VideoComponent/>
        <Contact/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home