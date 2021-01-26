import React from 'react';

// Custom Components
import TitleComponent from '../../components/TitleComponent';

// Sub Components
import Navbar from '../../components/Navbar';
import BannerSection from '../../components/BannerSection';
import AboutUsSection from '../../components/AboutUsSection';
import KYCSection from '../../components/KYCSection';
import OurMissionSection from '../../components/OurMissionSection';
import PrivacyPolicySection from '../../components/PrivacyPolicySection';
import ContactUsSection from '../../components/ContactUsSection';

const Home = () => {
  return (
    <div>
      <TitleComponent title="Home Page | Ambition Growth" />
      <Navbar />
      <BannerSection />
      <AboutUsSection />
      <KYCSection />
      <OurMissionSection />
      <PrivacyPolicySection />
      <ContactUsSection />
    </div>
  );
};

export default Home;
