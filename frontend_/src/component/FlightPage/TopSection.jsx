import React from 'react'
import { useState } from "react";
import Button  from "@mui/material/Button";
import Input from '@mui/material/Input';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
const TopSection = () => {
  const today = new Date().toISOString().slice(0,10);
  const {
    depature,
    setDepature,
    arrival,
    setArrival,
    depature_date,
    setDepature_date,
    arrival_date,
    setArrival_date,
    people,
    setPeople
  } = useContext(SearchContext);
  console.log(depature,arrival);


  return (
    <div style={{display: "flex", flexDirection: "row"}}>
        <div >
       <label>From</label><br />
     <Input type="search" value={depature} onChange={(e)=> setDepature(e.target.value)} placeholder="Enter your departure Airport"></Input>
      </div>
      <div>
        {/* image */}
        <Button style={{}}><img src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1750265418/arrows_svxabz.png" style={{height: "6vh"}}></img></Button>
      </div>
      <div>
     <label>Destination</label><br />
     <Input type="search" value={arrival} onChange={(e)=> setArrival(e.target.value)} placeholder="Enter your Arrival Airport"></Input>
     </div>
     <div>
     <label>Start Date</label><br />
    <Input type="date" value={depature_date} onChange={(e)=>setDepature_date(e.target.value)} placeholder={today}></Input>
    </div>

    <div>
    <label>End Date</label><br />
    <Input type="date" value={arrival_date} onChange={(e)=>setArrival_date(e.target.value)} placeholder={today}></Input>
    </div>
     <div>
    <label>Head Count</label><br />
    <Input type="positive number" value={people} onChange={(e)=>setPeople(e.target.value)} placeholder="0"></Input>
    </div><br />
    <div style={{display:"flex", justifyContent: "center", marginTop: "18px", marginLeft: "12px"}}>
     <Button type="submit" style={{ background: "#f18a53", color:"black", borderRadius: "20px", paddingLeft: "20px", paddingRight: "20px" }}>Search packages</Button>
     </div>
       
    </div>
  )
}

export default TopSection;
