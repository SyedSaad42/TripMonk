import React from 'react'
import { useState } from "react";
import Button  from "@mui/material/Button";
import Input from '@mui/material/Input';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PersonIcon from "@mui/icons-material/Person";
import dayjs from "dayjs";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const TopSection = () => {
  const today = new Date().toISOString().slice(0,10);
  const {
    departure,
    setDeparture,
    arrival,
    setArrival,
    depature_date,
    setDepature_date,
    return_date,
    setReturn_date,
    tripType,
    setTipType,
    headCount,
    setHeadCount,
    departureDisplay,
    arrivalDisplay,
    
  } = useContext(SearchContext);
 


  return (
    <div> 
      <Card style={{ marginLeft: "04px",
    width: "1600px",
    borderRadius: "24px",
    border: "1px solid black", // 'border' needs full value
    boxShadow: "0 18px 24px rgba(0, 0, 0, 0.2)"}}>
        <CardContent>
    <div style={{display: "flex", flexDirection: "row", marginLeft: "20px"}}>
        {/* <div >
       <label>From</label><br />
     <Input type="search" value={depature} onChange={(e)=> setDepature(e.target.value)} placeholder="Enter your departure Airport"></Input>
      </div> */}
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
                   
                    {/* {depatureResults.length > 0 && (
                      <ul style={suggestionStyles.ul}>
                        {depatureResults.map(({ name, iata }) => (
                          <li
                            key={iata}
                            style={suggestionStyles.li}
                            onClick={() => {
                              setDepature(`${name} (${iata})`);
                              setDepartureResults([]);
                            }}
                          >
                            {name} ({iata})
                          </li>
                        ))}
                      </ul>
                    )} */}
                  </div>
     
      {/* <div>
     <label>Destination</label><br />
     <Input type="search" value={arrival} onChange={(e)=> setArrival(e.target.value)} placeholder="Enter your Arrival Airport"></Input> */}
     <div style={{ position: "relative", marginLeft: "80px", marginTop: "20px", fontFamily: "Inter" }}>
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
     </div>
     <div  style={{marginLeft: "12px"}}>
      <label style={{ fontWeight: "bolder", fontSize: "22px", color: "black", fontFamily: "Inter"}}>
                Start Date
              </label><br />
     <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                value={dayjs(depature_date)}
                onChange={(newValue) => {
                  if (dayjs.isDayjs(newValue)) {
                    setDepature_date(newValue.format("YYYY-MM-DD"));
                  }
                }}
                sx={{ width: "190px"}}
                />
                  </LocalizationProvider>
    </div>

    <div style={{marginLeft: "12px"}}>
    <label style={{ fontWeight: "bolder", fontSize: "22px", color: "black" , fontFamily: "Inter"}}>
                Return Date
              </label><br />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
              value={dayjs(return_date)}
              onChange={(newValue) => {
                if (dayjs.isDayjs(newValue)) {
                  setReturn_date(newValue.format("YYYY-MM-DD"));
                }
              }}
              disabled={tripType === 1}
              sx={{ width: "190px"  }}
               />
    
                  </LocalizationProvider>
    </div>
     <div style={{marginLeft: "20px"}}>
     <label style={{ fontWeight: "bolder", fontSize: "22px", color: "black", marginLeft: "18px" , fontFamily: "Inter"}}>
                Head Count
              </label><br/>
       <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
                    <PersonIcon style={{ marginTop: "22px", height: "28px" }} />
                    <Input
                      style={{ marginTop: "20px", fontSize: "20px" }}
                      type="number"
                      value={headCount}
                      onChange={(e) => setHeadCount(e.target.value)}
                      placeholder="0"
                      sx={{ width: "100px", fontSize: "20px" }}
                    />
                  </div>
    
    </div><br />
    <div style={{display:"flex", justifyContent: "center", marginTop: "18px", marginLeft: "22px"}}>
     <Button
                   variant="contained"
                   style={{
                     backgroundColor: "#f18a53",
                     color: "black",
                     borderRadius: "20px",
                     padding: "5px 28px",
                     fontFamily: "Inter",
                     fontWeight: "bold",
                     fontSize: "16px"
                   }}
                  
                 >
                   Search packages
                 </Button>
     </div>
       
    </div>
    </CardContent>
    </Card>
    </div>
  )
}

export default TopSection;
