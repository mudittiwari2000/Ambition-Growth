import React from 'react'

// Custom Components
import TitleComponent from '../../components/TitleComponent'

// Sub Components
import Navbar from '../../components/Navbar'
import AboutUsSection from '../../components/AboutUsSection'
import Footer from '../../components/Footer'

const AboutUs = () => {
  return (
    <div>
      <TitleComponent title="AboutUs | Ambition Growth" />
      <Navbar />
      <AboutUsSection />
      <Footer />
    </div>
  )
}

export default AboutUs
