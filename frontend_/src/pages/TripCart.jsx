import React,{ useState } from 'react';
import Navbar from '../component/Navbar';
import LeftSection from '../component/TripCart/LeftSection';
import '../styles/CartPage.css';
import RighSection from '../component/TripCart/RighSection';
import BaseFooter from '../component/BaseFooter';

export const TripCart = () => {
 
const [tripData, setTripData] = useState({});

  return (
    <>
      <div className="background-animated"></div> {/* Fixed background layer */}
      
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <div style={{display:"flex", flexDirection:"row"}}>
          <div style={{ marginLeft:"70px"}}>
           <LeftSection onTripDataChange={setTripData} />
          </div>
       <RighSection tripData={tripData} />
        </div>
        <BaseFooter />
      </div>
    </>
  );
};
