import React from 'react';

// Custom Components
import TitleComponent from '../../components/TitleComponent';

// Sub Components
import Navbar from '../../components/Navbar';
import LongtermInvestmentSection from '../../components/LongtermInvestmentSection';
import Footer from '../../components/Footer';

const LongtermInvestment = () => {
  return (
    <div>
      <TitleComponent title="Longterm Investment | Ambition Growth" />
      <Navbar />
      <LongtermInvestmentSection />
      <Footer />
    </div>
  );
};

export default LongtermInvestment;
