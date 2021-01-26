import React from 'react'

// Custom Components
import TitleComponent from '../../components/TitleComponent'

// Sub Components
import Navbar from '../../components/Navbar'
import OurMissionSection from '../../components/OurMissionSection'
import Footer from '../../components/Footer'

const Mission = () => {
  return (
    <div>
      <TitleComponent title="Mission Vision | Ambition Growth" />
      <Navbar />
      <OurMissionSection />
      <Footer />
    </div>
  )
}

export default Mission
