import React from 'react';

// Custom Components
import TitleComponent from '../../components/TitleComponent';

// Sub Components
import Navbar from '../../components/Navbar';
import AmbitionGrowthInvestmentSection from '../../components/AmbitionGrowthInvestmentSection';
import Footer from '../../components/Footer';

const AmbitionGrowthInvestment = () => {
  return (
    <div>
      <TitleComponent title="Ambition Growth Investment | Ambition Growth" />
      <Navbar />
      <AmbitionGrowthInvestmentSection />
      <Footer />
    </div>
  );
};

export default AmbitionGrowthInvestment;
