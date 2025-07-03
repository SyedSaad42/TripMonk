import React from 'react';
import Navbar from '../component/Navbar';
import LeftSection from '../component/TripCart/LeftSection';
import '../styles/CartPage.css';

export const TripCart = () => {
  return (
    <>
      <div className="background-animated"></div> {/* Fixed background layer */}
      
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <LeftSection />
      </div>
    </>
  );
};
