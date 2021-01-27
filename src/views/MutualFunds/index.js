import React from 'react';

// Custom Components
import TitleComponent from '../../components/TitleComponent';

// Sub Components
import Navbar from '../../components/Navbar';
import MutualFundSection from '../../components/MutualFundSection';
import Footer from '../../components/Footer';

const MutualFunds = () => {
  return (
    <div>
      <TitleComponent title="Mutual Funds | Ambition Growth" />
      <Navbar />
      <MutualFundSection />
      <Footer />
    </div>
  );
};

export default MutualFunds;
