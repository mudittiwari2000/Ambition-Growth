import React from 'react'

// Custom Components
import TitleComponent from '../../components/TitleComponent'

// Sub Components
import Navbar from '../../components/Navbar'
import BannerSection from '../../components/BannerSection'
import ContactUsSection from '../../components/ContactUsSection'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <TitleComponent title="Home Page | Ambition Growth" />
      <Navbar />
      <BannerSection />
      <ContactUsSection />
      <Footer />
    </div>
  )
}

export default Home
