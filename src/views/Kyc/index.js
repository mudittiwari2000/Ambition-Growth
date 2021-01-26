import React from 'react'

// Custom Components
import TitleComponent from '../../components/TitleComponent'

// Sub Components
import Navbar from '../../components/Navbar'
import KYCSection from '../../components/KYCSection'
import Footer from '../../components/Footer'

const Kyc = () => {
  return (
    <div>
      <TitleComponent title="KYC | Ambition Growth" />
      <Navbar />
      <KYCSection />
      <Footer />
    </div>
  )
}

export default Kyc
