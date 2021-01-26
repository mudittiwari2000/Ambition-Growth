import React from 'react'

// Custom Components
import TitleComponent from '../../components/TitleComponent'

// Sub Components
import Navbar from '../../components/Navbar'
import PrivacyPolicySection from '../../components/PrivacyPolicySection'
import Footer from '../../components/Footer'

const PrivacyPolicy = () => {
  return (
    <div>
      <TitleComponent title="Privacy Policy | Ambition Growth" />
      <Navbar />
      <PrivacyPolicySection />
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
