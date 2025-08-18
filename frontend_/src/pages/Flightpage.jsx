import React, { useContext } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Navbar from "../component/Navbar.jsx";
import TopSection from "../component/FlightPage/TopSection.jsx";
import LeftSection from "../component/FlightPage/LeftSection.jsx";
import MidSection from "../component/FlightPage/MidSection.jsx";
import BaseFooter from "../component/BaseFooter.jsx";

import "../styles/FlightPage.css";
import MidSectionReturn from "../component/FlightPage/MidSectionReturn.jsx";
import MidSectionHotel from "../component/FlightPage/MidSectionHotel.jsx";
import { SearchContext } from "../context/SearchContext.jsx";
import { FlightContext } from "../context/FlightContext.jsx";
import { useNavigate } from "react-router-dom";



// CustomTabPanel component to handle tab content display
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Accessibility props for tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const FlightPage = () => {
  const [value, setValue] = React.useState(0);
  const [selectedFlightType, setSelectedFlightType] = React.useState(null);
  const {setTripType, tripType} = useContext(SearchContext);
  const Navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 
console.log("tripType", tripType);
  // Function to move to next tab
  // const moveToNextTab = () => {
  //   setValue(prevValue => {
      // If selected flight is one-way, skip return flight tab (index 1) and go directly to hotel tab (index 2)

      
    
      // if (prevValue === 0 && tripType === 1) {
      //   return 2; // Go directly to hotel tab
      // }
      // else if (prevValue <= 2) { // Max tab index is 2 (0, 1, 2)
      //   return prevValue + 1;
       
      // }else if(prevValue > 2){
      // Navigate("/tripcart"); // Stay on last tab if already there
      // }
      const moveToNextTab = () => {
  setValue((prevValue) => {
    if (prevValue === 0 && tripType === 1) {
      return 2; // Skip return if one-way
    } else if (prevValue === 2) {
      Navigate("/tripcart"); // ✅ Navigate after hotel selection
      return prevValue;
    } else {
      return prevValue + 1;
    }
//   });
// };

    });
  };

  // Function to update flight type when flight is selected
  const updateTripType = (tripType) => {
    setTripType(tripType);
  };

  return (
    <div
      className="background"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <div style={{ marginLeft: "40px" }}>
        <TopSection />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginLeft: "20px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 2, borderColor: "divider" ,marginLeft:"280px", marginTop:"20px" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab style={{color:"black", fontWeight:"bold", fontFamily:"Inter"}} label="Depature Flight" {...a11yProps(0)} />
              {/* Only show return flight tab if selected flight is not one-way */}
              {tripType !== 1 && (
             <Tab style={{color:"black", fontWeight:"bold", fontFamily:"Inter"}} label="Returning Flight" {...a11yProps(1)}/>
              )}
              <Tab style={{color:"black", fontWeight:"bold", fontFamily:"Inter"}} label="Hotel" {...a11yProps(2)} />
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
             <div style={{ display: "flex", flexDirection: "row", gap: "30px", alignItems: "flex-start" ,marginTop:"-30px"}}>
            <LeftSection />
            <MidSection moveToNextTab={moveToNextTab} updateTripType={updateTripType} />
          </div>
          </CustomTabPanel>

          {/* Only render return flight tab if selected flight is not one-way */}
          {tripType !== 1 && (
            <CustomTabPanel value={value} index={1}>
               <div style={{ display: "flex", flexDirection: "row", gap: "30px", alignItems: "flex-start" }}>
              <LeftSection />
              <MidSectionReturn moveToNextTab={moveToNextTab} />
              </div>
            </CustomTabPanel>
          )}

          <CustomTabPanel value={value} index={2}>
             <div style={{ display: "flex", flexDirection: "row", gap: "30px", alignItems: "flex-start" }}>
            <LeftSection />
            <MidSectionHotel moveToNextTab={moveToNextTab} />
            </div>
          </CustomTabPanel>
        </Box>
      </div>

      <BaseFooter />
    </div>
  );
};

export default FlightPage;