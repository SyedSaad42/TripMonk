import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Card from "@mui/material/Card";
import PersonIcon from "@mui/icons-material/Person";
import EastIcon from "@mui/icons-material/East";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useNavigate } from "react-router-dom";
import { AirportContext } from "../context/AirportContext.jsx";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { SearchContext } from "../context/SearchContext.jsx";
import Alert from '@mui/material/Alert';
const SearchSection = () => {
  const navigate = useNavigate();
  const { airports } = useContext(AirportContext);
    const [depatureResults, setDepartureResults] = useState([]);
  const [arrivalResults, setArrivalResults] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

const {
  departure,
  setDeparture,
  arrival,
  setArrival,
  departure_date,
  setDeparture_date,
  return_date,
  setReturn_date,
  tripType,
  setTripType,
  today,
  headCount,
  setHeadCount,
  departureDisplay,
  setDepartureDisplay,
  arrivalDisplay,
  setArrivalDisplay
} = useContext(SearchContext);

  
  
  const filterAirports = (value) => {
    const q = value.toLowerCase();
    return airports.filter(({ name, city, id }) =>
      (name && name.toLowerCase().includes(q)) ||
      (city && city.toLowerCase().includes(q)) ||
      (id && id.toLowerCase().includes(q))
    );
  };

  const handleDepatureChange = (value) => {
    setDeparture(value);
  setDepartureDisplay(value);
   setDepartureResults(value.trim() ? filterAirports(value).slice(0, 3) : []);
  };

  const handleArrivalChange = (value) => {
    setArrival(value);
    setArrivalDisplay(value);
    setArrivalResults(value.trim() ? filterAirports(value).slice(0, 8) : []);
  };

  const handleSubmit = () => {
    if(departure!="" && arrival!="" && headCount>0 && tripType>0){
      console.log(tripType);
    navigate("/search");
  

    }else {
    setShowAlert(true); 
  }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "1000px", margin: "0 auto" }}>
      {showAlert && (
  <Stack sx={{ width: '100%', mt: 2 , marginBottom:"30px" }} spacing={2}>
    <Alert  style={{borderRadius:"20px", border:"2px solid red" , fontSize:"17px" , fontFamily:"Inter"}} severity="error">Fill in all required fields...</Alert>
  </Stack>
)}

      <motion.div
              initial={{opacity: 0, y:20}}
              animate={{opacity: 1, y: -20}}
              transition={{duration: 1.0}}>
      
      <Card
        style={{
          padding: "45px",
          paddingLeft: "20px",
          borderRadius: "32px",
          border:"1px solid white",
         backgroundColor: 'rgba(255, 255, 255, 0.45)'
, // light black-blue transparent
  backdropFilter: 'blur(10px)',
  
        }}
      >
        <div>
          {/* Chips: One Way / Round Trip */}
          <Stack direction="row" spacing={3} sx={{ height: "40px", mb: 2 }}>
            <Chip
              label="One Way"
              icon={<EastIcon />}
              clickable
              color={tripType === 1 ? "primary" : "default"}
              onClick={() => setTripType(1)}
              style={{padding: "22px 20px",fontSize:"16px", height: "18px"}}
            />
            <Chip
              label="Round Trip"
              icon={<AutorenewIcon />}
              clickable
              color={tripType === 2 ? "primary" : "default"}
              variant={tripType === 2 ? "filled" : "outlined"}
              onClick={() => setTripType(2)}
              
              style={{padding: "22px 20px",fontSize:"16px", height: "18px"}}
            />
          </Stack>

          {/* Airport Inputs */}
          <div style={{ display: "flex", flexDirection: "row", gap: "38px" }}>
            <div style={{ position: "relative", marginTop: "20px", fontFamily: "Inter" }}>
              <label style={{ fontWeight: "bolder", fontSize: "22px", color: "darkblue" }}>
                From
              </label>
              <br />
              <Input
                type="search"
                value={departureDisplay}
                onChange={(e) => handleDepatureChange(e.target.value)}
                placeholder="Enter your departure Airport"
                sx={{ width: "300px", fontSize: "20px" }}
              />
              <FlightTakeoffIcon />
              {depatureResults.length > 0 && (
                <ul style={suggestionStyles.ul}>
                  {depatureResults.map(({ name, id }) => (
                    <li
                      key={id}
                      style={suggestionStyles.li}
                      onClick={() => {
                        setDeparture(`${id}`);
                        setDepartureResults([]);
                        setDepartureDisplay(`${name}`);
                      }}
                    >
                      {name} ({id})
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div style={{ position: "relative", margin: "25px 0", fontFamily: "Inter" }}>
              <label style={{ fontWeight: "bolder", fontSize: "22px", color: "darkblue" }}>
                Destination
              </label>
              <br />
              <Input
                type="search"
                value={arrivalDisplay}
                onChange={(e) => handleArrivalChange(e.target.value)}
                placeholder="Enter your Arrival Airport"
                sx={{ width: "300px", fontSize: "20px" }}
              />
              <FlightLandIcon />
              {arrivalResults.length > 0 && (
                <ul style={suggestionStyles.ul}>
                  {arrivalResults.map(({ name, id }) => (
                    <li
                      key={id}
                      style={suggestionStyles.li}
                      onClick={() => {
                        setArrival(`${id}`);
                        setArrivalResults([]);
                        setArrivalDisplay(`${name}`);
                      }}
                    >
                      {name} ({id})
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Date & Head Count */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
              gap: "20px",
              fontFamily: "Inter",
            }}
          >
            {/* Start Date */}
            <div>
              <label style={{ fontWeight: "bolder", fontSize: "22px", color: "black" }}>
                Start Date
              </label>
              <br />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
            value={dayjs(departure_date)}
            onChange={(newValue) => {
              if (dayjs.isDayjs(newValue)) {
                setDeparture_date(newValue.format("YYYY-MM-DD"));
              }
            }}
            sx={{ width: "240px" }}
            />
              </LocalizationProvider>
            </div>

            {/* Return Date */}
            <div>
              <label style={{ fontWeight: "bolder", fontSize: "22px", color: "black" }}>
                Return Date
              </label>
              <br />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
          value={dayjs(return_date)}
          onChange={(newValue) => {
            if (dayjs.isDayjs(newValue)) {
              setReturn_date(newValue.format("YYYY-MM-DD"));
            }
          }}
          disabled={tripType === 1}
          sx={{ width: "240px" }}
           />

              </LocalizationProvider>
            </div>

            {/* Head Count */}
            <div>
              <label style={{ fontWeight: "bolder", fontSize: "22px", color: "black", marginLeft: "18px"}}>
                Head Count
              </label>
              <br />
              <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
                <PersonIcon style={{ marginTop: "22px", height: "28px" }} />
                <Input
                  style={{ marginTop: "20px", fontSize: "20px", width:"90px" }}
                  type="number"
                  value={headCount}
                  onChange={(e) => setHeadCount(e.target.value)}
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#f18a53",
                color: "black",
                borderRadius: "20px",
                padding: "8px 48px",
                fontFamily: "Inter",
                fontWeight: "bold",
                fontSize: "20px"
              }}
              onClick={handleSubmit}
            >
              Search packages
            </Button>
          </div>
        </div>
      </Card>
      </motion.div>
    </div>
  );
};

const suggestionStyles = {
  ul: {
    listStyle: "none",
    padding: "8px 0",
    margin: "4px 0 0 0",
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    maxHeight: "200px",
    overflowY: "auto",
    backgroundColor: "#ffffff",
    position: "absolute",
    width: "100%",
    zIndex: 1000,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
  },
  li: {
    padding: "12px 16px",
    cursor: "pointer",
    transition: "background-color 0.2s ease, transform 0.2s ease",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "15px",
    color: "#333",
    fontWeight: 500,
  },
};

export default SearchSection;
