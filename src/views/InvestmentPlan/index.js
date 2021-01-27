import React from 'react';

// Custom Components
import TitleComponent from '../../components/TitleComponent';

// Sub Components
import Navbar from '../../components/Navbar';
import MutualFundSection from '../../components/MutualFundSection';
import LongTermInvestmentSection from '../../components/LongTermInvestmentSection';
import AmbitionGrowthInvestmentSection from '../../components/AmbitionGrowthInvestmentSection';
import Footer from '../../components/Footer';

const InvestmentPlan = () => {
  return (
    <div>
      <TitleComponent title="Investment Plan | Ambition Growth" />
      <Navbar />
      <MutualFundSection />
      <LongTermInvestmentSection />
      <AmbitionGrowthInvestmentSection />
      <Footer />
    </div>
  );
};

export default InvestmentPlan;
